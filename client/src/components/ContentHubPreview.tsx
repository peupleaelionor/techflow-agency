import { Link } from "wouter";
import { Reveal } from "@/components/Reveal";
import { contentCalendar, pillars } from "@/data/contentCalendar";
import { ArrowRight } from "lucide-react";

export default function ContentHubPreview() {
  // Afficher les 3 premiers jours de la semaine
  const featuredDays = contentCalendar.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 border-t-4 border-black dark:border-gray-700">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="mb-12">
            <div className="inline-block bg-[#CCFF00] text-black px-4 py-2 font-bold uppercase text-xs mb-4 border-2 border-black">
              Content Hub
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-4">
              Stratégie de Contenu Hebdomadaire
            </h2>
            <p className="font-mono text-gray-600 dark:text-gray-400 max-w-2xl">
              7 jours de contenu aligné sur nos 3 piliers : Preuve, Bénéfice Émotionnel et Insight Actionnable.
            </p>
          </div>
        </Reveal>

        {/* Pillars Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar, idx) => (
            <Reveal key={pillar.name} delay={idx * 0.1}>
              <div
                className="border-4 border-black dark:border-gray-700 p-6 bg-white dark:bg-gray-800"
                style={{ borderTopWidth: "8px", borderTopColor: pillar.color }}
              >
                <div className="text-3xl mb-2">{pillar.icon}</div>
                <h3 className="font-black uppercase text-sm mb-1">{pillar.name}</h3>
                <p className="text-xs font-mono text-gray-600 dark:text-gray-400">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Featured Days */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featuredDays.map((day, idx) => (
            <Reveal key={day.day} delay={idx * 0.1}>
              <div
                className="border-4 border-black dark:border-gray-700 overflow-hidden hover:shadow-[8px_8px_0px_0px_#CCFF00] transition-all"
                style={{ borderTopWidth: "6px", borderTopColor: day.pillarColor }}
              >
                <div className="p-4 bg-white dark:bg-gray-800">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-black uppercase text-sm">{day.dayFr}</h3>
                      <p className="text-xs font-mono text-gray-600 dark:text-gray-400">
                        {day.title}
                      </p>
                    </div>
                    <div className="text-2xl">{day.icon}</div>
                  </div>
                  <p className="text-xs font-mono text-gray-700 dark:text-gray-300 line-clamp-3 mb-3">
                    {day.mainMessage}
                  </p>
                  <div className="inline-block text-xs font-bold uppercase px-2 py-1 border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400">
                    {day.pillar}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal>
          <div className="text-center">
            <Link href="/content-calendar">
              <a className="inline-flex items-center gap-3 bg-black dark:bg-[#CCFF00] text-[#CCFF00] dark:text-black px-8 py-4 font-bold uppercase border-2 border-black dark:border-[#CCFF00] hover:shadow-[8px_8px_0px_0px_rgba(204,255,0,0.3)] transition-all">
                Voir le Calendrier Complet
                <ArrowRight size={18} />
              </a>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
