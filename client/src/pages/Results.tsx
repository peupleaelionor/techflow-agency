import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Download, Eye, Share2, TrendingUp, Layout, FileText } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export default function Results() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black dark:text-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <Reveal>
              <div className="inline-block bg-[#CCFF00] px-4 py-1 font-mono font-bold mb-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                LIVRABLE FINAL
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-black uppercase mb-6">Package TechFlow</h1>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-xl font-mono max-w-2xl mx-auto text-gray-600">
                Voici l'ensemble des éléments créés pour votre transformation digitale.
                Explorez, téléchargez et partagez.
              </p>
            </Reveal>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <Reveal delay={0.2}>
              <div className="border-4 border-black p-8 bg-[#F0F0F0] shadow-[8px_8px_0px_0px_#CCFF00] hover:translate-y-[-4px] transition-transform h-full">
                <Layout className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold uppercase mb-2">Exploration Intuitive</h3>
                <p className="font-mono text-sm">Naviguez à travers tous les composants de votre nouvelle identité visuelle en un seul endroit.</p>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="border-4 border-black p-8 bg-[#F0F0F0] shadow-[8px_8px_0px_0px_#CCFF00] hover:translate-y-[-4px] transition-transform h-full">
                <TrendingUp className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold uppercase mb-2">Compréhension des Tendances</h3>
                <p className="font-mono text-sm">Visualisez comment le style Néo-Brutaliste positionne votre marque comme leader innovant.</p>
              </div>
            </Reveal>
            <Reveal delay={0.6}>
              <div className="border-4 border-black p-8 bg-[#F0F0F0] shadow-[8px_8px_0px_0px_#CCFF00] hover:translate-y-[-4px] transition-transform h-full">
                <Share2 className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold uppercase mb-2">Sauvegarde Facile</h3>
                <p className="font-mono text-sm">Téléchargez le package complet ou partagez cette page avec vos collaborateurs instantanément.</p>
              </div>
            </Reveal>
          </div>

          {/* Deliverables Showcase */}
          <div className="space-y-16">
            {/* Website Section */}
            <Reveal width="100%">
              <section className="border-4 border-black p-8 relative">
                <div className="absolute -top-5 left-8 bg-black text-white px-4 py-1 font-bold uppercase">01. Site Web</div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-4">
                  <div>
                    <h2 className="text-3xl font-black uppercase mb-4">Site Vitrine Complet</h2>
                    <ul className="space-y-2 font-mono mb-6">
                      <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#CCFF00] border border-black"></span>4 Pages (Accueil, À propos, Services, Contact)</li>
                      <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#CCFF00] border border-black"></span>Design Néo-Brutaliste Responsive</li>
                      <li className="flex items-center gap-2"><span className="w-2 h-2 bg-[#CCFF00] border border-black"></span>Formulaire de contact fonctionnel (UI)</li>
                    </ul>
                    <Link href="/">
                      <button className="flex items-center gap-2 bg-black text-white px-6 py-3 font-bold uppercase border-2 border-black hover:bg-[#CCFF00] hover:text-black transition-colors">
                        <Eye size={20} /> Voir le site en live
                      </button>
                    </Link>
                  </div>
                  <div className="border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
                    <img src="/images/hero-bg.jpg" alt="Website Preview" className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all" />
                  </div>
                </div>
              </section>
            </Reveal>

            {/* Social Media Section */}
            <Reveal width="100%">
              <section className="border-4 border-black p-8 relative">
                <div className="absolute -top-5 left-8 bg-black text-white px-4 py-1 font-bold uppercase">02. Réseaux Sociaux</div>
                <div className="mt-4">
                  <h2 className="text-3xl font-black uppercase mb-6">Kit de Lancement Instagram</h2>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="aspect-square border-2 border-black relative group cursor-pointer">
                        <img src={`/images/insta-post-${i}.jpg`} alt={`Post ${i}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold">
                          POST #{i}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-[#F0F0F0] p-6 border-2 border-black font-mono text-sm">
                    <div className="flex items-center gap-2 mb-2 font-bold">
                      <FileText size={16} /> Stratégie de contenu incluse
                    </div>
                    <p>5 posts rédigés avec accroches, légendes et hashtags pertinents pour maximiser l'engagement dès le lancement.</p>
                  </div>
                </div>
              </section>
            </Reveal>

            {/* Documentation Section */}
            <Reveal width="100%">
              <section className="border-4 border-black p-8 relative">
                <div className="absolute -top-5 left-8 bg-black text-white px-4 py-1 font-bold uppercase">03. Documentation</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                  <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h3 className="text-xl font-bold uppercase mb-2">Guide Client</h3>
                    <p className="font-mono text-sm mb-4 text-gray-600">Tutoriel complet pour gérer votre site, modifier les textes et images en toute autonomie.</p>
                    <button className="text-sm font-bold underline decoration-2 underline-offset-4 hover:text-[#CCFF00] hover:bg-black px-1">Voir le guide</button>
                  </div>
                  <div className="bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <h3 className="text-xl font-bold uppercase mb-2">Identité Visuelle</h3>
                    <p className="font-mono text-sm mb-4 text-gray-600">Logo SVG vectoriel et palette de couleurs Néo-Brutaliste prêtes à l'emploi.</p>
                    <button className="text-sm font-bold underline decoration-2 underline-offset-4 hover:text-[#CCFF00] hover:bg-black px-1">Voir les assets</button>
                  </div>
                </div>
              </section>
            </Reveal>
          </div>

          {/* Final CTA */}
          <div className="mt-20 text-center">
            <Reveal width="100%">
              <button className="bg-[#CCFF00] text-black px-12 py-6 font-bold uppercase text-2xl border-4 border-black hover:bg-black hover:text-[#CCFF00] transition-all shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center gap-4 mx-auto">
                <Download size={32} /> Télécharger le Package Complet
              </button>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 font-mono text-sm text-gray-500">Format .ZIP • 15 Mo • Tout inclus</p>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
