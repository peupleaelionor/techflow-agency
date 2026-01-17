/**
 * API endpoint: POST /api/lead
 * 
 * Reçoit un formulaire de lead, valide via Zod, envoie email via Resend
 * Compatible Vercel Serverless ou Node.js classique
 * 
 * Env vars requises:
 * - RESEND_API_KEY
 * - TO_EMAIL (destination des mails - défaut: contact@techflowsolutions.space)
 * - FROM_EMAIL (expéditeur - défaut: TechFlow <onboarding@resend.dev>)
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";

// Import dynamic pour éviter erreurs build (Resend peut ne pas être installé en dev)
let Resend: any;
try {
  const resendModule = await import("resend");
  Resend = resendModule.Resend;
} catch {
  console.warn("[API] Resend pas installé (OK en dev)");
  Resend = null;
}

// Import du schema Zod partagé
// NOTE: À adapter selon votre structure (import depuis client/src ou shared/)
import { LeadSchema } from "../client/src/lib/zodSchemas";

const TO_EMAIL = process.env.TO_EMAIL || "contact@techflowsolutions.space";
const FROM_EMAIL = process.env.FROM_EMAIL || "TechFlow <onboarding@resend.dev>";
const RESEND_API_KEY = process.env.RESEND_API_KEY;

interface ResponseData {
  ok: boolean;
  error?: string;
  requestId?: string;
}

/**
 * Handler principal
 */
export default async function handler(
  req: VercelRequest,
  res: VercelResponse<ResponseData>
) {
  // Générer un ID de requête pour le debug
  const requestId = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

  // Logging serveur (sans données sensibles)
  console.log(`[${requestId}] Lead API - method: ${req.method}`);

  // Valider méthode
  if (req.method !== "POST") {
    console.warn(`[${requestId}] Invalid method: ${req.method}`);
    return res.status(405).json({
      ok: false,
      error: "METHOD_NOT_ALLOWED",
      requestId,
    });
  }

  // Valider payload
  const parsed = LeadSchema.safeParse(req.body);
  if (!parsed.success) {
    const issues = parsed.error.issues.map((i) => i.message).join(", ");
    console.warn(`[${requestId}] Validation failed: ${issues}`);
    return res.status(400).json({
      ok: false,
      error: "VALIDATION",
      requestId,
    });
  }

  const lead = parsed.data;

  // Anti-spam honeypot
  if (lead.company_website && lead.company_website.trim().length > 0) {
    console.log(`[${requestId}] Honeypot triggered - dropping request`);
    // Ne pas révéler au client qu'on a rejeté
    return res.status(200).json({ ok: true, requestId });
  }

  // Vérifier Resend disponible
  if (!Resend || !RESEND_API_KEY) {
    console.error(`[${requestId}] Resend not configured`);
    return res.status(500).json({
      ok: false,
      error: "SEND_FAILED",
      requestId,
    });
  }

  try {
    const resend = new Resend(RESEND_API_KEY);

    // Construire le sujet structuré
    const subject = `[TechFlow Lead] ${lead.projectType} - Budget: ${lead.budget}`;

    // Construire le corps (texte brut)
    const text = [
      "=== NOUVEAU LEAD ===",
      "",
      `Nom: ${lead.name}`,
      `Email: ${lead.email}`,
      `Téléphone: ${lead.phone || "(non fourni)"}`,
      ``,
      `Projet: ${lead.projectType}`,
      `Budget: ${lead.budget}`,
      ``,
      `--- Message ---`,
      lead.message,
      ``,
      `--- Info Technique ---`,
      `Request ID: ${requestId}`,
      `Timestamp: ${new Date().toISOString()}`,
    ].join("\n");

    // Envoyer l'email
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: lead.email, // Permettre réponse directe au client
      subject,
      text,
    });

    if (!result || result.error) {
      console.error(`[${requestId}] Resend error:`, result?.error);
      return res.status(500).json({
        ok: false,
        error: "SEND_FAILED",
        requestId,
      });
    }

    console.log(`[${requestId}] Email sent successfully - ID: ${result.id}`);
    return res.status(200).json({
      ok: true,
      requestId,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error(`[${requestId}] Exception:`, errorMsg);

    return res.status(500).json({
      ok: false,
      error: "SEND_FAILED",
      requestId,
    });
  }
}
