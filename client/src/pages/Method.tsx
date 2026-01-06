import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Globe, Building2, Landmark, MapPin } from "lucide-react";

export default function Method() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black dark:text-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-[#F0F0F0] dark:bg-gray-900 border-b-4 border-black dark:border-[#CCFF00]">
          <div className="container mx-auto px-4 text-center">
            <Reveal>
              <h1 className="text-4xl md:text-6xl font-black uppercase mb-6">Une agence au rayonnement mondial</h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xl font-mono max-w-4xl mx-auto leading-relaxed">
                TechFlow opère là où se trouve l'excellence. En nous appuyant sur un réseau flexible d'experts indépendants de premier plan dans les plus grands hubs digitaux, nous vous offrons l'agilité et le talent d'une agence locale avec la vision et la capacité d'exécution d'un acteur global. Notre modèle unique nous permet d'intervenir sur vos projets avec une efficacité maximale, où que vous soyez.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="py-20 container mx-auto px-4">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-16 text-center flex items-center justify-center gap-4">
              <Globe className="w-10 h-10 md:w-16 md:h-16 text-[#CCFF00]" /> Nos Implantations
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Paris */}
            <Reveal delay={0.1}>
              <div className="bg-white dark:bg-gray-900 border-4 border-black dark:border-gray-700 p-8 h-full hover:border-[#CCFF00] transition-colors group">
                <div className="mb-6 text-black dark:text-white group-hover:text-[#CCFF00] transition-colors">
                  <Building2 size={64} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-black uppercase mb-4 border-b-4 border-[#CCFF00] inline-block pb-1">Paris</h3>
                <p className="font-bold text-sm uppercase mb-4 text-gray-500">La Défense</p>
                <p className="font-mono text-lg leading-relaxed">
                  Notre pôle stratégique pour l'Europe francophone, au cœur du quartier d'affaires de La Défense.
                </p>
              </div>
            </Reveal>

            {/* Londres */}
            <Reveal delay={0.2}>
              <div className="bg-white dark:bg-gray-900 border-4 border-black dark:border-gray-700 p-8 h-full hover:border-[#CCFF00] transition-colors group">
                <div className="mb-6 text-black dark:text-white group-hover:text-[#CCFF00] transition-colors">
                  <Landmark size={64} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-black uppercase mb-4 border-b-4 border-[#CCFF00] inline-block pb-1">Londres</h3>
                <p className="font-bold text-sm uppercase mb-4 text-gray-500">City of London</p>
                <p className="font-mono text-lg leading-relaxed">
                  Notre base pour le marché britannique et européen, connectée aux dynamiques tech et financières.
                </p>
              </div>
            </Reveal>

            {/* New York */}
            <Reveal delay={0.3}>
              <div className="bg-white dark:bg-gray-900 border-4 border-black dark:border-gray-700 p-8 h-full hover:border-[#CCFF00] transition-colors group">
                <div className="mb-6 text-black dark:text-white group-hover:text-[#CCFF00] transition-colors">
                  <MapPin size={64} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-black uppercase mb-4 border-b-4 border-[#CCFF00] inline-block pb-1">New York</h3>
                <p className="font-bold text-sm uppercase mb-4 text-gray-500">Manhattan</p>
                <p className="font-mono text-lg leading-relaxed">
                  Notre antenne pour les Amériques, au plus près des tendances innovation et du marché nord-américain.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 bg-black text-white border-y-4 border-[#CCFF00]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-black uppercase mb-6 text-[#CCFF00]">L'Expertise TechFlow</h2>
                <p className="text-lg font-mono mb-6">
                  Dans un monde où la technologie évolue chaque semaine, vous avez besoin d'un partenaire qui anticipe les changements. Notre équipe combine une expertise technique pointue avec une vision stratégique business.
                </p>
                <p className="text-lg font-mono">
                  Nous auditons vos processus actuels pour identifier les goulots d'étranglement que la technologie peut éliminer. Notre objectif n'est pas de tout automatiser, mais d'automatiser ce qui doit l'être pour libérer votre potentiel humain.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="bg-[#1a1a1a] p-8 border-4 border-white shadow-[12px_12px_0px_0px_#CCFF00]">
                  <ul className="space-y-4 text-white font-mono text-lg">
                    <li className="flex items-center gap-4">
                      <span className="text-[#CCFF00] text-2xl">✓</span> Audit Stratégique Personnalisé
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="text-[#CCFF00] text-2xl">✓</span> Solutions Sur-Mesure
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="text-[#CCFF00] text-2xl">✓</span> Focus ROI Immédiat
                    </li>
                    <li className="flex items-center gap-4">
                      <span className="text-[#CCFF00] text-2xl">✓</span> Accompagnement Long Terme
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 container mx-auto px-4">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black uppercase mb-16 text-center">Comment nous travaillons</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Audit", desc: "Analyse profonde de vos besoins et opportunités." },
              { step: "02", title: "Stratégie", desc: "Plan d'action détaillé et validation des KPIs." },
              { step: "03", title: "Déploiement", desc: "Développement agile et intégration transparente." },
              { step: "04", title: "Optimisation", desc: "Suivi des performances et ajustements continus." }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.2}>
                <div className="relative p-6 border-4 border-black bg-white hover:bg-[#CCFF00] transition-colors h-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <span className="absolute -top-6 left-4 bg-black px-2 text-4xl font-black text-[#CCFF00] border-2 border-black">{item.step}</span>
                  <h3 className="text-2xl font-bold uppercase mb-4 mt-4">{item.title}</h3>
                  <p className="font-mono text-gray-800">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-[#F0F0F0] dark:bg-gray-900 border-t-4 border-black dark:border-[#CCFF00]">
          <div className="container mx-auto px-4">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-black uppercase mb-16 text-center">Ils nous font confiance</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Sophie M.", role: "CEO, StartUp FinTech", text: "TechFlow a automatisé 80% de notre support client. Nous avons économisé 20h par semaine dès le premier mois." },
                { name: "Thomas L.", role: "Directeur Marketing", text: "Leur approche data-driven a transformé notre acquisition. Le ROI est indiscutable." },
                { name: "Marc D.", role: "Fondateur E-commerce", text: "Plus qu'une agence, un véritable partenaire stratégique qui comprend les enjeux du scale." }
              ].map((testimonial, i) => (
                <Reveal key={i} delay={i * 0.2}>
                  <div className="bg-white dark:bg-black p-8 border-4 border-black dark:border-gray-700 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_#CCFF00]">
                    <p className="font-mono text-lg mb-6 italic">"{testimonial.text}"</p>
                    <div>
                      <p className="font-bold uppercase">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#CCFF00] border-t-4 border-black text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 text-black">Convaincu ?</h2>
            <Link href="/contact">
              <button className="bg-black text-white px-12 py-6 font-bold uppercase text-2xl border-4 border-black hover:bg-white hover:text-black transition-all shadow-[12px_12px_0px_0px_rgba(0,0,0,0.2)] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none">
                Discuter de mon projet
              </button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
