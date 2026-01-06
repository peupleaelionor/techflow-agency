import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { caseStudies } from "@/data/caseStudiesData";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState(caseStudies[0]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black dark:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="py-20 bg-[#F0F0F0] dark:bg-gray-900 border-b-4 border-black dark:border-[#CCFF00]">
          <div className="container mx-auto px-4">
            <Reveal>
              <h1 className="text-5xl md:text-6xl font-black uppercase mb-6">
                Nos <span className="bg-[#CCFF00] px-2">cas études</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-mono text-gray-600 dark:text-gray-400 max-w-3xl text-lg">
                Découvrez comment nous avons transformé les businesses de nos clients. Résultats mesurables, processus transparent, impact réel.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-white dark:bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left: List */}
              <div className="lg:col-span-1">
                <Reveal width="100%">
                  <div className="space-y-4">
                    {caseStudies.map((study) => (
                      <button
                        key={study.id}
                        onClick={() => setSelectedStudy(study)}
                        className={`w-full text-left p-6 border-4 transition-all ${
                          selectedStudy.id === study.id
                            ? "border-[#CCFF00] bg-[#CCFF00] text-black"
                            : "border-black dark:border-gray-700 bg-white dark:bg-gray-900 hover:border-[#CCFF00]"
                        }`}
                      >
                        <div className="text-3xl mb-2">{study.icon}</div>
                        <h3 className="font-black uppercase text-sm mb-2">
                          {study.company}
                        </h3>
                        <p className="font-mono text-xs opacity-70">
                          {study.industry}
                        </p>
                      </button>
                    ))}
                  </div>
                </Reveal>
              </div>

              {/* Right: Details */}
              <div className="lg:col-span-2">
                <Reveal width="100%" delay={0.1}>
                  <div className="border-4 border-black dark:border-[#CCFF00] p-8 bg-[#F0F0F0] dark:bg-gray-900">
                    {/* Header */}
                    <div className="mb-8">
                      <div className="text-5xl mb-4">{selectedStudy.icon}</div>
                      <h2 className="text-3xl font-black uppercase mb-2">
                        {selectedStudy.title}
                      </h2>
                      <p className="font-mono text-gray-600 dark:text-gray-400">
                        {selectedStudy.duration}
                      </p>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 pb-8 border-b-2 border-black dark:border-gray-700">
                      <div>
                        <h3 className="font-black uppercase mb-3 text-sm">
                          Le défi
                        </h3>
                        <p className="font-mono text-sm leading-relaxed">
                          {selectedStudy.challenge}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-black uppercase mb-3 text-sm">
                          Notre approche
                        </h3>
                        <p className="font-mono text-sm leading-relaxed">
                          {selectedStudy.solution}
                        </p>
                      </div>
                    </div>

                    {/* Process */}
                    <div className="mb-8 pb-8 border-b-2 border-black dark:border-gray-700">
                      <h3 className="font-black uppercase mb-4 text-sm">
                        Notre processus
                      </h3>
                      <ol className="space-y-2">
                        {selectedStudy.process.map((step, idx) => (
                          <li key={idx} className="font-mono text-sm flex gap-3">
                            <span className="font-bold text-[#CCFF00]">
                              {idx + 1}.
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Results */}
                    <div className="mb-8">
                      <h3 className="font-black uppercase mb-4 text-sm flex items-center gap-2">
                        <TrendingUp size={16} />
                        Résultats
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {selectedStudy.results.map((result, idx) => (
                          <div
                            key={idx}
                            className="border-2 border-black dark:border-gray-700 p-4 bg-white dark:bg-black"
                          >
                            <div className="text-2xl font-black text-[#CCFF00] mb-2">
                              {result.improvement}
                            </div>
                            <div className="font-mono text-xs mb-2">
                              {result.metric}
                            </div>
                            <div className="font-mono text-xs text-gray-600 dark:text-gray-400">
                              {result.before} → {result.after}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-black dark:bg-gray-900 border-2 border-[#CCFF00] p-6">
                      <blockquote className="font-light italic text-white mb-4">
                        "{selectedStudy.testimonial.quote}"
                      </blockquote>
                      <div>
                        <p className="font-black text-[#CCFF00]">
                          {selectedStudy.testimonial.author}
                        </p>
                        <p className="font-mono text-xs text-gray-400">
                          {selectedStudy.testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-black text-white border-t-4 border-[#CCFF00]">
          <div className="container mx-auto px-4 text-center">
            <Reveal>
              <h2 className="text-4xl font-black uppercase mb-6">
                Prêt à votre propre success story?
              </h2>
              <p className="font-mono text-gray-400 mb-8 max-w-2xl mx-auto">
                Rejoignez nos 200+ clients satisfaits et transformez votre business.
              </p>
              <Link href="/contact">
                <button className="inline-flex items-center gap-3 bg-[#CCFF00] text-black px-8 py-4 font-bold uppercase border-2 border-[#CCFF00] hover:bg-white transition-all">
                  Commencer maintenant
                  <ArrowRight size={20} />
                </button>
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
