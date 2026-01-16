import { Check } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function PricingGrid() {
  const [activeTab, setActiveTab] = useState<'projects' | 'partnerships'>('projects');

  return (
    <section className="py-20 bg-white dark:bg-black" id="packs">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">Nos Offres</h2>
          
          {/* Toggle Switch */}
          <div className="inline-flex bg-gray-100 dark:bg-gray-900 p-2 border-4 border-black dark:border-gray-700">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-8 py-3 font-bold uppercase transition-all ${
                activeTab === 'projects'
                  ? 'bg-[#CCFF00] text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                  : 'text-gray-500 hover:text-black dark:hover:text-white'
              }`}
            >
              Projets (One-Shot)
            </button>
            <button
              onClick={() => setActiveTab('partnerships')}
              className={`px-8 py-3 font-bold uppercase transition-all ${
                activeTab === 'partnerships'
                  ? 'bg-[#CCFF00] text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                  : 'text-gray-500 hover:text-black dark:hover:text-white'
              }`}
            >
              Partenariats (Long Terme)
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        {activeTab === 'projects' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Pack Essential */}
            <div className="border-4 border-black dark:border-gray-700 p-8 bg-white dark:bg-gray-900 flex flex-col relative group hover:border-[#CCFF00] transition-colors">
              <h3 className="text-2xl font-black uppercase mb-2">Essential</h3>
              <p className="font-mono text-gray-500 mb-6 text-sm">Lancement rapide & efficace</p>
              <div className="text-4xl font-black mb-8">
                3 500€ <span className="text-sm font-normal text-gray-500">HT</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow font-mono text-sm">
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> Site Vitrine (1-5 pages)</li>
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> Design Premium & Responsive</li>
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> Optimisation SEO de base</li>
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> Formulaire de contact</li>
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> Livraison sous 2 semaines</li>
              </ul>
              <a href="/contact" className="block text-center bg-black text-white py-4 font-bold uppercase border-2 border-transparent hover:bg-[#CCFF00] hover:text-black hover:border-black transition-all">
                Choisir ce pack
              </a>
            </div>

            {/* Pack Scale */}
            <div className="border-4 border-black dark:border-[#CCFF00] p-8 bg-[#F0F0F0] dark:bg-gray-800 flex flex-col relative transform md:-translate-y-4 shadow-[12px_12px_0px_0px_#CCFF00]">
              <div className="absolute top-0 right-0 bg-[#CCFF00] text-black text-xs font-bold px-3 py-1 border-l-4 border-b-4 border-black">POPULAIRE</div>
              <h3 className="text-2xl font-black uppercase mb-2">Scale</h3>
              <p className="font-mono text-gray-500 mb-6 text-sm">Croissance & E-commerce</p>
              <div className="text-4xl font-black mb-8">
                7 500€ <span className="text-sm font-normal text-gray-500">HT</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow font-mono text-sm">
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> Site E-commerce / App Web</li>
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> CMS sur-mesure</li>
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> Automatisations Marketing</li>
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> SEO Avancé & Analytics</li>
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> Formation équipe incluse</li>
              </ul>
              <a href="/contact" className="block text-center bg-[#CCFF00] text-black py-4 font-bold uppercase border-2 border-black hover:bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                Choisir ce pack
              </a>
            </div>

            {/* Pack Custom */}
            <div className="border-4 border-black dark:border-gray-700 p-8 bg-white dark:bg-gray-900 flex flex-col relative group hover:border-[#CCFF00] transition-colors">
              <h3 className="text-2xl font-black uppercase mb-2">Custom</h3>
              <p className="font-mono text-gray-500 mb-6 text-sm">Innovation & Sur-mesure</p>
              <div className="text-4xl font-black mb-8">
                Sur Devis
              </div>
              <ul className="space-y-4 mb-8 flex-grow font-mono text-sm">
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> Architecture complexe</li>
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> Intégrations API spécifiques</li>
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> Design System complet</li>
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> Audit de sécurité</li>
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> Accompagnement stratégique</li>
              </ul>
              <a href="/contact" className="block text-center bg-black text-white py-4 font-bold uppercase border-2 border-transparent hover:bg-[#CCFF00] hover:text-black hover:border-black transition-all">
                Nous contacter
              </a>
            </div>
          </motion.div>
        )}

        {/* Partnerships Grid */}
        {activeTab === 'partnerships' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Maintenance */}
            <div className="border-4 border-black dark:border-gray-700 p-8 bg-white dark:bg-gray-900 flex flex-col relative group hover:border-[#CCFF00] transition-colors">
              <h3 className="text-2xl font-black uppercase mb-2">Maintenance</h3>
              <p className="font-mono text-gray-500 mb-6 text-sm">Sérénité & Sécurité</p>
              <div className="text-4xl font-black mb-8">
                450€ <span className="text-sm font-normal text-gray-500">/mois</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow font-mono text-sm">
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> Mises à jour techniques</li>
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> Sauvegardes quotidiennes</li>
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> Monitoring 24/7</li>
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> Support prioritaire (Email)</li>
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> 1h d'intervention /mois</li>
              </ul>
              <a href="/contact" className="block text-center bg-black text-white py-4 font-bold uppercase border-2 border-transparent hover:bg-[#CCFF00] hover:text-black hover:border-black transition-all">
                S'abonner
              </a>
            </div>

            {/* Performance */}
            <div className="border-4 border-black dark:border-[#CCFF00] p-8 bg-[#F0F0F0] dark:bg-gray-800 flex flex-col relative transform md:-translate-y-4 shadow-[12px_12px_0px_0px_#CCFF00]">
              <div className="absolute top-0 right-0 bg-[#CCFF00] text-black text-xs font-bold px-3 py-1 border-l-4 border-b-4 border-black">RECOMMANDÉ</div>
              <h3 className="text-2xl font-black uppercase mb-2">Performance</h3>
              <p className="font-mono text-gray-500 mb-6 text-sm">Optimisation continue</p>
              <div className="text-4xl font-black mb-8">
                950€ <span className="text-sm font-normal text-gray-500">/mois</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow font-mono text-sm">
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> Tout du pack Maintenance</li>
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> Optimisation SEO mensuelle</li>
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> Création de contenu (2 articles)</li>
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> Rapport de performance</li>
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> 3h d'intervention /mois</li>
              </ul>
              <a href="/contact" className="block text-center bg-[#CCFF00] text-black py-4 font-bold uppercase border-2 border-black hover:bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                S'abonner
              </a>
            </div>

            {/* Innovation */}
            <div className="border-4 border-black dark:border-gray-700 p-8 bg-white dark:bg-gray-900 flex flex-col relative group hover:border-[#CCFF00] transition-colors">
              <h3 className="text-2xl font-black uppercase mb-2">Innovation</h3>
              <p className="font-mono text-gray-500 mb-6 text-sm">Partenaire de croissance</p>
              <div className="text-4xl font-black mb-8">
                2 500€ <span className="text-sm font-normal text-gray-500">/mois</span>
              </div>
              <ul className="space-y-4 mb-8 flex-grow font-mono text-sm">
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> Tout du pack Performance</li>
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> Consulting stratégique hebdo</li>
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> A/B Testing continu</li>
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> Accès Slack dédié</li>
                <li className="flex items-start gap-3"><Check className="text-[#CCFF00] flex-shrink-0" size={18} /> 10h d'intervention /mois</li>
              </ul>
              <a href="/contact" className="block text-center bg-black text-white py-4 font-bold uppercase border-2 border-transparent hover:bg-[#CCFF00] hover:text-black hover:border-black transition-all">
                S'abonner
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
