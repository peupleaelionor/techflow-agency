/**
 * Formulaire Contact
 * Validation Zod complète, anti-spam honeypot, envoi Resend, feedback UX
 * Supporte source tracking (UTM params)
 */

import { useEffect, useMemo, useState } from "react";
import { LeadSchema, BUDGET_OPTIONS, PROJECT_OPTIONS, LEAD_SOURCES } from "@/lib/zodSchemas";
import { track } from "@/lib/analytics";
import { AlertCircle, CheckCircle } from "lucide-react";

interface FormErrors {
  [key: string]: string | undefined;
}

export default function ContactForm() {
  // Récupérer les query params (project, source, utm_*, etc)
  const { prefillProject, prefillSource } = useMemo(() => {
    if (typeof window === "undefined") return { prefillProject: null, prefillSource: null };
    const params = new URLSearchParams(window.location.search);
    
    const p = params.get("project");
    const project = p && PROJECT_OPTIONS.includes(decodeURIComponent(p) as any) 
      ? decodeURIComponent(p) 
      : null;
    
    const source = params.get("source") || params.get("utm_source") || null;
    
    return { prefillProject: project, prefillSource: source };
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: prefillProject || "",
    budget: "<300" as const,
    message: "",
    source: prefillSource || "",
    company_website: "", // honeypot
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Si le projet change (ex. depuis MiniMissions), re-mettre à jour
  useEffect(() => {
    if (prefillProject && form.projectType !== prefillProject) {
      setForm((prev) => ({ ...prev, projectType: prefillProject }));
    }
  }, [prefillProject]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Effacer l'erreur du champ une fois que l'utilisateur commence à taper
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setErrorMessage(null);

    // Valider avec Zod
    const parsed = LeadSchema.safeParse(form);
    if (!parsed.success) {
      const newErrors: FormErrors = {};
      parsed.error.issues.forEach((issue) => {
        const key = String(issue.path[0]);
        newErrors[key] = issue.message;
      });
      setErrors(newErrors);
      return;
    }

    track("contact_form_submit", {
      projectType: form.projectType,
      budget: form.budget,
    });

    setLoading(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        track("contact_form_error", { code: data.error || res.status });
        setErrorMessage(
          "Impossible d'envoyer pour le moment. Contacte-nous directement à contact@techflowsolutions.space"
        );
        return;
      }

      track("contact_form_success", {});
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "<300",
        message: "",
        source: prefillSource || "",
        company_website: "",
      });

      // Auto-reset succès après 5s
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      track("contact_form_error", { code: "NETWORK" });
      setErrorMessage(
        "Erreur réseau. Réessaie ou contacte-nous à contact@techflowsolutions.space"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {/* Messages de succès / erreur */}
      {success && (
        <div
          className="bg-green-100 dark:bg-green-900 border-l-4 border-green-500 p-4 flex gap-3"
          role="alert"
        >
          <CheckCircle className="text-green-600 dark:text-green-300 flex-shrink-0" />
          <div>
            <p className="font-bold text-green-800 dark:text-green-200">
              Message envoyé !
            </p>
            <p className="text-sm text-green-700 dark:text-green-300">
              Réponse sous 24h. Merci !
            </p>
          </div>
        </div>
      )}

      {errorMessage && (
        <div
          className="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 p-4 flex gap-3"
          role="alert"
        >
          <AlertCircle className="text-red-600 dark:text-red-300 flex-shrink-0" />
          <p className="text-red-800 dark:text-red-200">{errorMessage}</p>
        </div>
      )}

      {/* Nom */}
      <div>
        <label htmlFor="name" className="block font-semibold mb-2">
          Nom *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border-2 ${
            errors.name
              ? "border-red-500 bg-red-50 dark:bg-red-900"
              : "border-gray-300 dark:border-gray-700"
          } dark:bg-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-[#CCFF00]`}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "error-name" : undefined}
        />
        {errors.name && (
          <p id="error-name" className="text-red-600 text-sm mt-1">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block font-semibold mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border-2 ${
            errors.email
              ? "border-red-500 bg-red-50 dark:bg-red-900"
              : "border-gray-300 dark:border-gray-700"
          } dark:bg-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-[#CCFF00]`}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "error-email" : undefined}
        />
        {errors.email && (
          <p id="error-email" className="text-red-600 text-sm mt-1">
            {errors.email}
          </p>
        )}
      </div>

      {/* Téléphone */}
      <div>
        <label htmlFor="phone" className="block font-semibold mb-2">
          Téléphone (optionnel)
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border-2 border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
        />
      </div>

      {/* Type de Projet */}
      <div>
        <label htmlFor="projectType" className="block font-semibold mb-2">
          Type de Projet *
        </label>
        <select
          id="projectType"
          name="projectType"
          value={form.projectType}
          onChange={handleChange}
          className={`w-full px-4 py-2 border-2 ${
            errors.projectType
              ? "border-red-500 bg-red-50 dark:bg-red-900"
              : "border-gray-300 dark:border-gray-700"
          } dark:bg-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-[#CCFF00]`}
          aria-invalid={!!errors.projectType}
          aria-describedby={errors.projectType ? "error-projectType" : undefined}
        >
          <option value="">-- Sélectionne un type --</option>
          {PROJECT_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.projectType && (
          <p id="error-projectType" className="text-red-600 text-sm mt-1">
            {errors.projectType}
          </p>
        )}
      </div>

      {/* Budget */}
      <div>
        <label htmlFor="budget" className="block font-semibold mb-2">
          Budget Estimé *
        </label>
        <select
          id="budget"
          name="budget"
          value={form.budget}
          onChange={handleChange}
          className={`w-full px-4 py-2 border-2 ${
            errors.budget
              ? "border-red-500 bg-red-50 dark:bg-red-900"
              : "border-gray-300 dark:border-gray-700"
          } dark:bg-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-[#CCFF00]`}
          aria-invalid={!!errors.budget}
          aria-describedby={errors.budget ? "error-budget" : undefined}
        >
          {BUDGET_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.budget && (
          <p id="error-budget" className="text-red-600 text-sm mt-1">
            {errors.budget}
          </p>
        )}
      </div>

      {/* Source (hidden field) */}
      <input
        type="hidden"
        name="source"
        value={form.source}
      />

      {/* Message */}
      <div>
        <label htmlFor="message" className="block font-semibold mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-2 border-2 ${
            errors.message
              ? "border-red-500 bg-red-50 dark:bg-red-900"
              : "border-gray-300 dark:border-gray-700"
          } dark:bg-gray-900 dark:text-white rounded focus:outline-none focus:ring-2 focus:ring-[#CCFF00]`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "error-message" : undefined}
          placeholder="Décris-moi ton projet en détail..."
        />
        {errors.message && (
          <p id="error-message" className="text-red-600 text-sm mt-1">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot (invisible) */}
      <input
        type="text"
        name="company_website"
        value={form.company_website}
        onChange={handleChange}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {/* Consentement RGPD */}
      <div className="text-sm text-gray-600 dark:text-gray-400 py-4 border-t border-gray-300 dark:border-gray-700">
        En envoyant ce formulaire, tu acceptes notre{" "}
        <a href="/privacy" className="text-[#CCFF00] font-bold hover:underline">
          politique de confidentialité
        </a>
        . Nous ne partagerons jamais tes données.
      </div>

      {/* Bouton Submit */}
      <button
        type="submit"
        disabled={loading || success}
        className="w-full bg-black dark:bg-[#CCFF00] text-white dark:text-black py-4 font-bold uppercase text-lg border-2 border-black dark:border-[#CCFF00] hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Envoi en cours..." : success ? "Envoyé !" : "Envoyer"}
      </button>
    </form>
  );
}
