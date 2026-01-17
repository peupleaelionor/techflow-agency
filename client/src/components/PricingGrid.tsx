import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import Container from "./Container";
import { Reveal } from "./Reveal";

export default function PricingGrid() {
  const [activeTab, setActiveTab] = useState<'projects' | 'partnerships'>('projects');

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-black" id="packs">
      <Container>
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <Reveal width="100%">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-6 sm:mb-8">
              Nos Offres
            </h2>
          </Reveal>

          {/* Toggle Switch */}
          <Reveal width="100%">
            <div className="inline-flex flex-col sm:flex-row bg-gray-100 dark:bg-gray-900 p-2 border-4 border-black dark:border-gray-700 gap-2 sm:gap-0">
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-4 sm:px-8 py-2 sm:py-3 font-bold uppercase text-xs sm:text-sm transition-all ${
                  activeTab === 'projects'
                    ? 'bg-[#CCFF00] text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                    : 'text-gray-500 hover:text-black dark:hover:text-white'
                }`}
              >
                Projets (One-Shot)
              </button>
              <button
                onClick={() => setActiveTab('partnerships')}
                className={`px-4 sm:px-8 py-2 sm:py-3 font-bold uppercase text-xs sm:text-sm transition-all ${
                  activeTab === 'partnerships'
                    ? 'bg-[#CCFF00] text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                    : 'text-gray-500 hover:text-black dark:hover:text-white'
                }`}
              >
                Partenariats (Long Terme)
              </button>
            </div>
          </Reveal>
        </div>

        {/* Projects Grid */}
        {activeTab === 'projects' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          >
            {/* Pack Essential */}
            <Reveal delay={0} width="100%">
              <div className="border-4 border-black dark:border-gray-700 p-6 sm:p-8 bg-white dark:bg-gray-900 flex flex-col relative group hover:border-[#CCFF00] hover:shadow-[12px_12px_0px_0px_rgba(204,255,0,0.5)] transition-all h-full">
                <h3 className="text-xl sm:text-2xl font-black uppercase mb-2">Essential</h3>
                <p className="font-mono text-gray-500 mb-4 sm:mb-6 text-xs sm:text-sm">Lancement rapide & efficace</p>
                <div className="text-3xl sm:text-4xl font-black mb-6 sm:mb-8">
                  3 500€ <span className="text-xs sm:text-sm font-normal text-gray-500">HT</span>
                </div>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow font-mono text-xs sm:text-sm">
                  <li className="flex items-start gap-2 sm:gap-3"><Check className="text-[#CCFF00] flex-shrink-0 mt-0.5" size={16} /> Site Vitrine (1-5 pages)</li>
                  <li className="flex items-start gap-2 sm:gap-3"><Check className="text-[#CCFF00] flex-shrink-0 mt-0.5" size={16} /> Design Premium & Responsive</li>
                  <li className="flex items-start gap-2 sm:gap-3"><Check className="text-[#CCFF00] flex-shrink-0 mt-0.5" size={16} /> Optimisation SEO de base</li>
                  <li className="flex items-start gap-2 sm:gap-3"><Check className="text-[#CCFF00] flex-shrink-0 mt-0.5" size={16} /> Formulaire de contact</li>
                  <li className="flex items-start gap-2 sm:gap-3"><Check className="text-[#CCFF00] flex-shrink-0 mt-0.5" size={16} /> Livraison sous 2 semaines</li>
                </ul>
                <Link href="/contact">
                  <button className="w-full text-center bg-black text-white py-3 sm:py-4 font-bold uppercase text-sm sm:text-base border-2 border-transparent hover:bg-[#CCFF00] hover:text-black hover:border-black transition-all min-h-[44px] sm:min-h-[48px] flex items-center justify-center">
                    Choisir ce pack
                  </button>
                </Link>
              </div>
            </Reveal>

            {/* Pack Scale - POPULAR */}
            <Reveal delay={0.15} width="100%">
              <div className="border-4 border-black dark:border-[#CCFF00] p-6 sm:p-8 bg-[#F0F0F0] dark:bg-gray-800 flex flex-col relative transform md:md:-translate-y-4 shadow-[12px_12px_0px_0px_rgba(204,255,0,0.5)] h-full">
                <div className="absolute top-0 right-0 bg-[#CCFF00] text-black text-xs font-bold px-2 sm:px-3 py-1 border-l-4 border-b-4 border-black">
                  POPULAIRE
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase mb-2">Scale</h3>
                <p className="font-mono text-gray-500 mb-4 sm:mb-6 text-xs sm:text-sm">Croissance & E-commerce</p>
                <div className="text-3xl sm:text-4xl font-black mb-6 sm:mb-8">
                  7 500€ <span className="text-xs sm:text-sm font-normal text-gray-500">HT</span>
                </div>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow font-mono text-xs sm:text-sm">
                  <li className="flex items-start gap-2 sm:gap-3"><Check className="text-[#CCFF00] flex-shrink-0 mt-0.5" size={16} /> Site E-commerce / App Web</li>
                  <li className="flex items-start gap-2 sm:gap-3"><Check className="text-[#CCFF00] flex-shrink-0 mt-0.5" size={16} /> CMS sur-mesure</li>
                  <li className="flex items-start gap-2 sm:gap-3"><Check className="text-[#CCFF00] flex-shrink-0 mt-0.5" size={16} /> Automatisations Marketing</li>
                  <li className="flex items-start gap-2 sm:gap-3"><Check className="text-[#CCFF00] flex-shrink-0 mt-0.5" size={16} /> SEO Avancé & Analytics</li>
                  <li className="flex items-start gap-2 sm:gap-3"><Check className="text-[#CCFF00] flex-shrink-0 mt-0.5" size={16} /> Formation équipe incluse</li>
                </ul>
                <Link href="/contact">
                  <button className="w-full text-center bg-[#CCFF00] text-black py-3 sm:py-4 font-bold uppercase text-sm sm:text-base border-2 border-black hover:bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all min-h-[44px] sm:min-h-[48px] flex items-center justify-center">
                    Choisir ce pack
                  </button>
                </Link>
              </div>
            </Reveal>

            {/* Pack Custom */}
            <Reveal delay={0.3} width="100%">
              <div className="border-4 border-black dark:border-gray-700 p-6 sm:p-8 bg-white dark:bg-gray-900 flex flex-col relative group hover:border-[#CCFF00] hover:shadow-[12px_12px_0px_0px_rgba(204,255,0,0.5)] transition-all h-full">
                <h3 className="text-xl sm:text-2xl font-black uppercase mb-2">Custom</h3>
                <p className="font-mono text-gray-500 mb-4 sm:mb-6 text-xs sm:text-sm">Innovation & Sur-mesure</p>
                <div className="text-3xl sm:text-4xl font-black mb-6 sm:mb-8">
                  Sur Devis
                </div>
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow font-mono text-xs sm:text-sm">
                  <li className="flex items-start gap-2 sm:gap-3"><Check className="text-[#CCFF00] flex-shrink-0 mt-0.5" size={16} /> Architecture complexe</li>
                  <li className="flex items-start gap-2 sm:gap-3"><Check className="text-[#CCFF00] flex-shrink-0 mt-0.5" size={16} /> Intégrations API spécifiques</li>
                  <li className="flex items-start gap-2 sm:gap-3"><Check className="text-[#CCFF00] flex-shrink-0 mt-0.5" size={16} /> Design System complet</li>
                  <li className="flex items-start gap-2 sm:gap-3"><Check className="text-[#CCFF00] flex-shrink-0 mt-0.5" size={16} /> Audit de sécurité</li>
                  <li className="flex items-start gap-2 sm:gap-3"><Check className="text-[#CCFF00] flex-shrink-0 mt-0.5" size={16} /> Accompagnement stratégique</li>
                </ul>
                <Link href="/contact">
                  <button className="w-full text-center bg-black text-white py-3 sm:py-4 font-bold uppercase text-sm sm:text-base border-2 border-transparent hover:bg-[#CCFF00] hover:text-black hover:border-black transition-all min-h-[44px] sm:min-h-[48px] flex items-center justify-center">
                    Nous contacter
                  </button>
                </Link>
              </div>
            </Reveal>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
