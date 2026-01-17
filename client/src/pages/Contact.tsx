/**
 * Page Contact - Formulaire optimisé
 */

import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-16 px-4 md:px-8 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Colonne gauche : intro */}
            <div>
              <h1 className="text-4xl md:text-5xl font-black uppercase mb-6">
                Contactez-nous
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 border-l-4 border-[#CCFF00] pl-4">
                Vous avez un projet ? Des questions ? Remplissez le formulaire et
                notre équipe vous répondra en 24h maximum.
              </p>

              <div className="space-y-8">
                {/* Email */}
                <div>
                  <p className="font-bold mb-2">Email</p>
                  <a
                    href="mailto:contact@techflowsolutions.space"
                    className="text-[#CCFF00] hover:underline font-mono text-lg"
                  >
                    contact@techflowsolutions.space
                  </a>
                </div>

                {/* Disponibilité */}
                <div>
                  <p className="font-bold mb-2">Disponibilité</p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Lundi - Vendredi : 9h - 18h (heure de Paris)
                  </p>
                </div>

                {/* Promo Mini-Missions */}
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded border-l-4 border-[#CCFF00]">
                  <p className="font-bold mb-3">🚀 Besoin d'une réponse rapide ?</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Nos Mini-Missions démarrent en 48h. Aucun délai d'attente.
                  </p>
                </div>

                {/* Trust badge */}
                <div className="pt-4 border-t border-gray-300 dark:border-gray-700">
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-mono space-y-2">
                    ✓ Données sécurisées<br/>
                    ✓ Pas de spam<br/>
                    ✓ Réponse 24h
                  </p>
                </div>
              </div>
            </div>

            {/* Colonne droite : formulaire */}
            <div className="bg-gray-50 dark:bg-gray-900 border-4 border-black dark:border-[#CCFF00] p-8">
              <h2 className="text-2xl font-bold uppercase mb-6">Votre Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
