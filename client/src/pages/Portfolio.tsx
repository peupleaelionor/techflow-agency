import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { caseStudies } from "@/data/portfolioData";
import { Link } from "wouter";

export default function Portfolio() {
  const [selectedCase, setSelectedCase] = useState(caseStudies[0]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black dark:text-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-[#F0F0F0] dark:bg-gray-900 border-b-4 border-black dark:border-[#CCFF00]">
          <div className="container mx-auto px-4">
            <Reveal>
              <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 text-black dark:text-white">
                Portfolio
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-xl font-mono max-w-2xl text-gray-700 dark:text-gray-300">
                Découvrez comment nous avons transformé les businesses de nos clients. Résultats mesurables, stratégies éprouvées, exécution impeccable.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Case Study List */}
            <div className="lg:col-span-1">
              <Reveal>
                <h2 className="text-2xl font-black uppercase mb-8 border-b-4 border-[#CCFF00] pb-4">
                  Nos Projets
                </h2>
              </Reveal>
              <div className="space-y-4">
                {caseStudies.map((caseStudy) => (
                  <Reveal key={caseStudy.id} delay={0.1}>
                    <button
                      onClick={() => setSelectedCase(caseStudy)}
                      className={`w-full text-left p-4 border-4 transition-all ${
                        selectedCase.id === caseStudy.id
                          ? "border-[#CCFF00] bg-[#CCFF00] text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]"
                          : "border-black dark:border-gray-700 hover:border-[#CCFF00]"
                      }`}
                    >
                      <h3 className="font-black uppercase text-sm mb-1">{caseStudy.client}</h3>
                      <p className="font-mono text-xs opacity-75">{caseStudy.industry}</p>
                    </button>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Case Study Detail */}
            <div className="lg:col-span-2">
              <Reveal width="100%">
                <div className="border-4 border-black dark:border-[#CCFF00] p-8 bg-gray-50 dark:bg-gray-900">
                  {/* Header */}
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-black uppercase mb-4 text-black dark:text-white">
                      {selectedCase.title}
                    </h2>
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="bg-[#CCFF00] text-black px-4 py-2 font-bold uppercase text-sm border-2 border-black">
                        {selectedCase.client}
                      </div>
                      <div className="bg-black text-[#CCFF00] dark:bg-[#CCFF00] dark:text-black px-4 py-2 font-bold uppercase text-sm border-2 border-black">
                        {selectedCase.industry}
                      </div>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="font-black uppercase mb-3 border-b-2 border-black dark:border-[#CCFF00] pb-2">
                        Le Défi
                      </h3>
                      <p className="font-mono text-sm text-gray-700 dark:text-gray-300">
                        {selectedCase.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-black uppercase mb-3 border-b-2 border-black dark:border-[#CCFF00] pb-2">
                        Notre Solution
                      </h3>
                      <p className="font-mono text-sm text-gray-700 dark:text-gray-300">
                        {selectedCase.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h3 className="font-black uppercase mb-4 border-b-2 border-black dark:border-[#CCFF00] pb-2">
                      Résultats Mesurables
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {selectedCase.results.map((result, idx) => (
                        <div key={idx} className="border-4 border-black dark:border-[#CCFF00] p-4 bg-white dark:bg-gray-800">
                          <div className="text-3xl font-black text-[#CCFF00] mb-2">
                            {result.metric}
                          </div>
                          <div className="font-bold uppercase text-sm mb-1">{result.value}</div>
                          <p className="font-mono text-xs text-gray-600 dark:text-gray-400">
                            {result.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="border-l-4 border-[#CCFF00] pl-6 py-4 bg-gray-100 dark:bg-gray-800 mb-8">
                    <p className="font-mono italic text-gray-700 dark:text-gray-300 mb-3">
                      "{selectedCase.testimonial}"
                    </p>
                    <div>
                      <p className="font-bold uppercase text-sm">{selectedCase.testimonialAuthor}</p>
                      <p className="font-mono text-xs text-gray-600 dark:text-gray-400">
                        {selectedCase.testimonialRole}
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <Link href="/contact">
                    <button className="w-full bg-[#CCFF00] text-black px-8 py-4 font-bold uppercase border-4 border-[#CCFF00] hover:bg-white transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] hover:translate-x-[2px] hover:translate-y-[2px]">
                      Discuter de votre projet →
                    </button>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black text-white border-t-4 border-[#CCFF00]">
          <div className="container mx-auto px-4">
            <Reveal>
              <h2 className="text-4xl font-black uppercase mb-12 text-center">
                Notre Impact
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { label: "Projets Réussis", value: "50+" },
                { label: "Croissance Moyenne", value: "+156%" },
                { label: "Clients Satisfaits", value: "98%" },
                { label: "Secteurs Couverts", value: "15+" }
              ].map((stat, idx) => (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="border-4 border-[#CCFF00] p-6 text-center">
                    <div className="text-4xl font-black text-[#CCFF00] mb-2">{stat.value}</div>
                    <p className="font-mono text-sm text-gray-300">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
