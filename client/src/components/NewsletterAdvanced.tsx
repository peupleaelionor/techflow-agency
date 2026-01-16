import { useState } from "react";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";
import { Reveal } from "./Reveal";

type SubscriptionStep = "form" | "confirmation" | "success";
type Interest = "blog" | "case-studies" | "pricing" | "updates";

export default function NewsletterAdvanced() {
  const [step, setStep] = useState<SubscriptionStep>("form");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState<Interest[]>([]);
  const [error, setError] = useState("");

  const interestOptions: { id: Interest; label: string; description: string }[] = [
    {
      id: "blog",
      label: "Articles & Insights",
      description: "Les derniers articles techniques et analyses"
    },
    {
      id: "case-studies",
      label: "Cas d'Études",
      description: "Résultats concrets et retours d'expérience"
    },
    {
      id: "pricing",
      label: "Offres Spéciales",
      description: "Promotions et réductions exclusives"
    },
    {
      id: "updates",
      label: "Mises à Jour Produit",
      description: "Nouvelles fonctionnalités et améliorations"
    }
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!email || !email.includes("@")) {
      setError("Veuillez entrer une adresse email valide");
      return;
    }

    if (interests.length === 0) {
      setError("Sélectionnez au moins un centre d'intérêt");
      return;
    }

    // Simuler l'envoi du confirmation email
    setStep("confirmation");
  };

  const handleConfirmation = () => {
    // Simuler la confirmation
    setStep("success");
    setTimeout(() => {
      setStep("form");
      setEmail("");
      setInterests([]);
    }, 5000);
  };

  const toggleInterest = (interest: Interest) => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  return (
    <Reveal width="100%">
      <section className="border-4 border-black dark:border-[#CCFF00] bg-gradient-to-br from-[#F0F0F0] to-white dark:from-gray-900 dark:to-black p-8 md:p-12 my-16">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Mail className="w-8 h-8 text-[#CCFF00]" />
            <h3 className="text-2xl md:text-3xl font-black uppercase">
              {step === "form" && "Restez Informé"}
              {step === "confirmation" && "Confirmez votre Email"}
              {step === "success" && "Bienvenue !"}
            </h3>
          </div>

          {/* Form Step */}
          {step === "form" && (
            <div>
              <p className="font-mono text-gray-700 dark:text-gray-300 mb-8">
                Recevez du contenu de qualité adapté à vos intérêts. Pas de spam, que du contenu pertinent.
              </p>

              {/* Email Input */}
              <form onSubmit={handleEmailSubmit} className="mb-8">
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow px-4 py-3 bg-white dark:bg-black border-2 border-black dark:border-[#CCFF00] font-mono placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#CCFF00] dark:text-white"
                  />
                </div>

                {/* Interests Grid */}
                <div className="mb-8">
                  <p className="font-bold uppercase mb-4 text-sm">Vos centres d'intérêt :</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {interestOptions.map((option) => (
                      <label
                        key={option.id}
                        className="flex items-start gap-3 p-4 border-2 border-black dark:border-[#CCFF00] cursor-pointer hover:bg-[#CCFF00] dark:hover:bg-[#CCFF00] dark:hover:text-black transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={interests.includes(option.id)}
                          onChange={() => toggleInterest(option.id)}
                          className="mt-1 w-5 h-5 cursor-pointer"
                        />
                        <div>
                          <p className="font-bold text-sm">{option.label}</p>
                          <p className="font-mono text-xs text-gray-600 dark:text-gray-400">
                            {option.description}
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="flex items-center gap-2 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 p-4 mb-6 border-2 border-red-500">
                    <AlertCircle size={20} />
                    <p className="font-mono text-sm">{error}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-black dark:bg-[#CCFF00] text-[#CCFF00] dark:text-black font-bold uppercase border-2 border-black dark:border-[#CCFF00] hover:bg-[#CCFF00] dark:hover:bg-black hover:text-black dark:hover:text-[#CCFF00] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  S'abonner
                </button>
              </form>

              <p className="text-xs font-mono text-gray-600 dark:text-gray-400">
                Nous respectons votre vie privée. Désinscription en un clic.
              </p>
            </div>
          )}

          {/* Confirmation Step */}
          {step === "confirmation" && (
            <div className="text-center">
              <div className="mb-6">
                <Mail className="w-16 h-16 text-[#CCFF00] mx-auto mb-4" />
              </div>
              <p className="font-mono text-gray-700 dark:text-gray-300 mb-8">
                Un email de confirmation a été envoyé à <strong>{email}</strong>
              </p>
              <p className="font-mono text-sm text-gray-600 dark:text-gray-400 mb-8">
                Cliquez sur le lien dans l'email pour confirmer votre abonnement.
              </p>
              <button
                onClick={handleConfirmation}
                className="px-8 py-3 bg-[#CCFF00] text-black font-bold uppercase border-2 border-black hover:bg-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                J'ai confirmé mon email
              </button>
              <p className="text-xs font-mono text-gray-600 dark:text-gray-400 mt-6">
                Vous n'avez pas reçu l'email ? Vérifiez votre dossier spam.
              </p>
            </div>
          )}

          {/* Success Step */}
          {step === "success" && (
            <div className="text-center">
              <div className="mb-6">
                <CheckCircle className="w-16 h-16 text-[#CCFF00] mx-auto" />
              </div>
              <h4 className="text-2xl font-black uppercase mb-4">Merci !</h4>
              <p className="font-mono text-gray-700 dark:text-gray-300 mb-2">
                Vous êtes maintenant abonné à notre newsletter.
              </p>
              <p className="font-mono text-sm text-gray-600 dark:text-gray-400">
                Vous recevrez bientôt du contenu adapté à vos intérêts.
              </p>
            </div>
          )}
        </div>
      </section>
    </Reveal>
  );
}
