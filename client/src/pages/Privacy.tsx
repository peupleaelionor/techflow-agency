/**
 * Page Privacy / Politique de Confidentialité
 */

import Header from "@/components/Header";

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-16 px-4 md:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black uppercase mb-8">
          Politique de Confidentialité
        </h1>

        <div className="prose dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-700 dark:text-gray-300">
              TechFlow Solutions ("nous", "notre", "nos") s'engage à protéger votre
              vie privée. Cette politique explique comment nous collectons, utilisons
              et protégeons vos données personnelles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Données Collectées</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Via notre formulaire de contact :
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Nom</li>
              <li>Email</li>
              <li>Téléphone (optionnel)</li>
              <li>Type de projet</li>
              <li>Budget estimé</li>
              <li>Message</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Utilisation des Données</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Vos données sont utilisées pour :
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Traiter votre demande de contact</li>
              <li>Vous envoyer une réponse</li>
              <li>Améliorer nos services</li>
              <li>Conformité légale</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Protection des Données</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Nous utilisons des protocoles de sécurité standards (HTTPS, chiffrement)
              pour protéger vos données contre l'accès non autorisé, l'altération ou
              la divulgation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Partage des Données</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Nous ne partagerons jamais vos données avec des tiers sans votre
              consentement explicite, sauf si requis par la loi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Vos Droits</h2>
            <p className="text-gray-700 dark:text-gray-300">
              En vertu du RGPD, vous avez le droit d'accéder, corriger ou supprimer
              vos données. Contactez-nous à{" "}
              <a
                href="mailto:privacy@techflowsolutions.space"
                className="text-[#CCFF00] font-bold hover:underline"
              >
                privacy@techflowsolutions.space
              </a>{" "}
              pour exercer ces droits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Nous pouvons mettre à jour cette politique. Vous serez notifié des
              changements majeurs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Contact</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Pour toute question concernant cette politique:{" "}
              <a
                href="mailto:contact@techflowsolutions.space"
                className="text-[#CCFF00] font-bold hover:underline"
              >
                contact@techflowsolutions.space
              </a>
            </p>
          </section>

          <p className="text-sm text-gray-600 dark:text-gray-400 pt-8 border-t border-gray-300 dark:border-gray-700">
            Dernière mise à jour : janvier 2026
          </p>
        </div>
      </main>
    </>
  );
}
