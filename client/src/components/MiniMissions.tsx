/**
 * Section Mini-Missions Éclair
 * 4 offres prédéfinies avec boutons vers /contact?project=...
 */

import { Link } from "wouter";
import { ROUTES } from "@/app/routes";
import { track } from "@/lib/analytics";

export const MINI_MISSIONS = [
  {
    id: "audit-express",
    name: "Audit Express Réseaux (99€)",
    price: "99€",
    forWho: "Créateurs de contenu, petites marques",
    deliverables: [
      "Audit 3 posts Instagram/TikTok",
      "PDF 5 recommandations",
      "1 idée de contenu viral",
    ],
    delay: "48h",
    note: "Inclut une recommandation pour scaler ensuite",
  },
  {
    id: "link-in-bio",
    name: 'Page "Link in Bio" Pro (249€)',
    price: "249€",
    forWho: "Musiciens, influenceurs, vendeurs",
    deliverables: [
      "Page web 1 section (design moderne)",
      "5 liens max",
      "Formulaire basique",
    ],
    delay: "3 jours",
    note: "Inclut une recommandation pour scaler ensuite",
  },
  {
    id: "logo-identite",
    name: "Logo & Identité Flash (199€)",
    price: "199€",
    forWho: "Jeunes entrepreneurs lançant leur activité",
    deliverables: [
      "3 propositions de logo",
      "Charte simple (couleurs/polices)",
      "Fichiers réseaux sociaux",
    ],
    delay: "1 semaine",
    note: "Inclut une recommandation pour scaler ensuite",
  },
  {
    id: "landing-page-event",
    name: "Landing Page d'Événement (349€)",
    price: "349€",
    forWho: "Organisateurs d'événements, associations",
    deliverables: [
      "Page unique vente/inscription",
      "Formulaire + paiement Stripe basique",
      "Optimisation mobile",
    ],
    delay: "5 jours",
    note: "Inclut une recommandation pour scaler ensuite",
  },
] as const;

export default function MiniMissions() {
  const handleMissionClick = (missionName: string) => {
    track("mini_mission_click", { mission_name: missionName });
  };

  return (
    <section
      id="mini-missions"
      className="py-16 md:py-24 px-4 md:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">
            Mini-Missions Éclair
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Des missions courtes et ciblées, pour des budgets serrés. Idéal pour
            tester avant de scaler.
          </p>
        </div>

        {/* Grid de missions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {MINI_MISSIONS.map((mission) => {
            const projectParam = encodeURIComponent(mission.name);
            const contactHref = `${ROUTES.contact}?project=${projectParam}`;

            return (
              <article
                key={mission.id}
                className="bg-white dark:bg-black border-4 border-black dark:border-[#CCFF00] p-8 hover:shadow-xl transition"
              >
                {/* Titre + Prix */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{mission.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Pour les : {mission.forWho}
                  </p>
                </div>

                {/* Livrables */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Livrables :</h4>
                  <ul className="space-y-2">
                    {mission.deliverables.map((d) => (
                      <li key={d} className="flex gap-2">
                        <span className="text-[#CCFF00] font-bold">✓</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Délai */}
                <p className="text-sm font-semibold mb-4">
                  ⏱ Délai : <span className="text-[#CCFF00]">{mission.delay}</span>
                </p>

                {/* Note upsell */}
                <p className="text-xs text-gray-500 dark:text-gray-400 italic mb-6 pb-6 border-b-2 border-gray-300 dark:border-gray-700">
                  {mission.note}
                </p>

                {/* Bouton CTA */}
                <Link href={contactHref}>
                  <a
                    className="block w-full bg-black dark:bg-[#CCFF00] text-white dark:text-black font-bold py-3 text-center hover:opacity-80 transition border-2 border-black dark:border-[#CCFF00]"
                    onClick={() => handleMissionClick(mission.name)}
                  >
                    Choisir cette mission
                  </a>
                </Link>
              </article>
            );
          })}
        </div>

        {/* CTA secondaire */}
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Vous avez un projet plus spécifique ?
          </p>
          <Link href={ROUTES.contact}>
            <a className="inline-block bg-[#CCFF00] text-black px-8 py-3 font-bold border-2 border-black hover:shadow-lg transition">
              Proposer votre projet
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
