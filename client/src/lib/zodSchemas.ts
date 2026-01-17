import { z } from "zod";

/**
 * Schema de validation pour les leads
 * Utilisé côté client ET serveur
 */
export const LeadSchema = z.object({
  name: z.string().min(2, "Nom requis (min 2 caractères)"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional().or(z.literal("")),
  projectType: z.string().min(2, "Type de projet requis"),
  budget: z.enum(["<300", "300-1000", "1000-3000", "3000+"], {
    message: "Budget requis",
  }),
  message: z.string().min(10, "Message trop court (min 10 caractères)"),
  // Anti-spam honeypot
  company_website: z.string().optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof LeadSchema>;

/**
 * Options de projets (utilisées dans le dropdown Contact + mini-missions)
 */
export const PROJECT_OPTIONS = [
  "Audit Express Réseaux (99€)",
  'Page "Link in Bio" Pro (249€)',
  "Logo & Identité Flash (199€)",
  "Landing Page d'Événement (349€)",
  "Projet B2B / Site complet",
  "Branding / Identité",
  "Autre",
] as const;

export type ProjectOption = (typeof PROJECT_OPTIONS)[number];

/**
 * Options budgets
 */
export const BUDGET_OPTIONS = [
  { value: "<300", label: "< 300€" },
  { value: "300-1000", label: "300€ - 1 000€" },
  { value: "1000-3000", label: "1 000€ - 3 000€" },
  { value: "3000+", label: "3 000€+" },
] as const;
