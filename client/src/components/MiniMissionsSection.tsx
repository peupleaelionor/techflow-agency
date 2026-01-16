import { miniMissions } from "@/data/miniMissionsData";
import { Reveal } from "@/components/Reveal";
import { Link } from "wouter";
import { Check } from "lucide-react";

export default function MiniMissionsSection() {
  return (
    <section className="py-20 bg-white dark:bg-black border-t-4 border-black dark:border-[#CCFF00]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <Reveal>
          <div className="mb-4 inline-block bg-black text-[#CCFF00] px-4 py-1 font-mono font-bold border-2 border-black">
            POUR LES CRÉATEURS
          </div>
        </Reveal>
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 text-black dark:text-white">
            Mini-Missions Éclair
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg font-mono max-w-2xl text-gray-700 dark:text-gray-300 mb-16">
            Créateur, entrepreneur ou en plein lancement ? Nos Mini-Missions sont conçues pour un coup de boost rapide et efficace.
          </p>
        </Reveal>

        {/* Mini-Missions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {miniMissions.map((mission, idx) => (
            <Reveal key={mission.id} delay={idx * 0.1} width="100%">
              <div className="border-4 border-black dark:border-[#CCFF00] p-6 bg-gray-50 dark:bg-gray-900 hover:shadow-[8px_8px_0px_0px_rgba(204,255,0,0.5)] dark:hover:shadow-[8px_8px_0px_0px_rgba(204,255,0,0.3)] transition-all duration-300 h-full flex flex-col">
                {/* Icon & Title */}
                <div className="mb-4">
                  <div className="text-4xl mb-3">{mission.icon}</div>
                  <h3 className="text-xl font-black uppercase mb-2 text-black dark:text-white">
                    {mission.title}
                  </h3>
                  <p className="font-mono text-xs text-gray-600 dark:text-gray-400 mb-4">
                    Pour les {mission.targetAudience}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6 pb-6 border-b-2 border-black dark:border-[#CCFF00]">
                  <span className="text-3xl font-black text-[#CCFF00]">{mission.price}€</span>
                  <span className="font-mono text-xs text-gray-600 dark:text-gray-400 ml-2">HT</span>
                </div>

                {/* Deliverables */}
                <div className="mb-6 flex-grow">
                  <p className="font-bold uppercase text-xs mb-3 text-black dark:text-white">Inclus :</p>
                  <ul className="space-y-2">
                    {mission.deliverables.map((deliverable, i) => (
                      <li key={i} className="flex items-start gap-2 font-mono text-sm text-gray-700 dark:text-gray-300">
                        <Check size={16} className="text-[#CCFF00] flex-shrink-0 mt-0.5" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline */}
                <div className="mb-6 pb-6 border-b-2 border-black dark:border-[#CCFF00]">
                  <p className="font-bold uppercase text-xs mb-1 text-black dark:text-white">Délai</p>
                  <p className="font-mono text-sm text-gray-700 dark:text-gray-300">{mission.timeline}</p>
                </div>

                {/* CTA Button */}
                <Link href="/contact">
                  <button className="w-full bg-[#CCFF00] text-black px-4 py-3 font-bold uppercase text-sm border-2 border-[#CCFF00] hover:bg-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:translate-x-[2px] hover:translate-y-[2px]">
                    Choisir cette mission →
                  </button>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.5} width="100%">
          <div className="mt-16 text-center">
            <p className="font-mono text-gray-700 dark:text-gray-300 mb-6">
              Vous avez une autre idée ? Parlons-en.
            </p>
            <Link href="/contact">
              <button className="bg-black text-[#CCFF00] dark:bg-[#CCFF00] dark:text-black px-8 py-4 font-bold uppercase border-4 border-black dark:border-[#CCFF00] hover:bg-[#CCFF00] hover:text-black dark:hover:bg-black dark:hover:text-[#CCFF00] transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] hover:translate-x-[2px] hover:translate-y-[2px]">
                Discuter de votre projet
              </button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
