import { useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { insights } from "@/data/insightsData";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(insights.map((i) => i.category)));
  const filteredInsights = selectedCategory
    ? insights.filter((i) => i.category === selectedCategory)
    : insights;

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black dark:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-white dark:bg-black border-b-4 border-black dark:border-gray-700">
          <div className="container mx-auto px-4">
            <Reveal>
              <div className="max-w-3xl">
                <div className="inline-block bg-[#CCFF00] text-black px-4 py-2 font-bold uppercase text-xs mb-6 border-2 border-black">
                  Business Insights
                </div>
                <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight mb-6">
                  Réflexions sur la croissance
                </h1>
                <p className="text-lg font-mono text-gray-600 dark:text-gray-400 max-w-2xl">
                  Des stratégies éprouvées, des principes intemporels, et des leçons apprises sur le terrain. Pas de jargon, juste des résultats.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 font-bold uppercase text-sm border-2 transition-all ${
                  selectedCategory === null
                    ? "bg-[#CCFF00] text-black border-black"
                    : "bg-white dark:bg-gray-900 text-black dark:text-white border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-gray-500"
                }`}
              >
                Tous
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 font-bold uppercase text-sm border-2 transition-all ${
                    selectedCategory === cat
                      ? "bg-[#CCFF00] text-black border-black"
                      : "bg-white dark:bg-gray-900 text-black dark:text-white border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-gray-500"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20 bg-white dark:bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {filteredInsights.map((insight, idx) => (
                <Reveal key={insight.id} delay={idx * 0.1}>
                  <Link href={`/insights/${insight.id}`}>
                    <a className="group block h-full">
                      <article className="border-4 border-black dark:border-gray-700 p-8 bg-white dark:bg-gray-900 h-full flex flex-col hover:shadow-[12px_12px_0px_0px_#CCFF00] transition-all duration-300 hover:border-[#CCFF00]">
                        {/* Category Tag */}
                        <div className="mb-4">
                          <span className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 text-xs font-bold uppercase border border-gray-300 dark:border-gray-700">
                            {insight.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 leading-tight group-hover:text-[#CCFF00] transition-colors">
                          {insight.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-gray-700 dark:text-gray-300 font-mono text-sm mb-6 flex-grow">
                          {insight.excerpt}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center gap-6 text-xs font-mono text-gray-500 dark:text-gray-400 mb-6 pb-6 border-b border-gray-200 dark:border-gray-800">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            {insight.date}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={14} />
                            {insight.readTime}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-2 font-bold uppercase text-sm group-hover:gap-4 transition-all">
                          Lire l'article
                          <ArrowRight size={16} />
                        </div>
                      </article>
                    </a>
                  </Link>
                </Reveal>
              ))}
            </div>

            {/* Empty State */}
            {filteredInsights.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400 font-mono">
                  Aucun article dans cette catégorie pour le moment.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white border-t-4 border-[#CCFF00]">
          <div className="container mx-auto px-4 text-center">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
                Prêt à transformer votre stratégie ?
              </h2>
              <p className="font-mono text-gray-300 mb-8 max-w-2xl mx-auto">
                Ces principes ne valent que s'ils sont appliqués. Parlons de comment les mettre en œuvre dans votre entreprise.
              </p>
              <Link href="/contact">
                <a className="inline-block bg-[#CCFF00] text-black px-8 py-4 font-bold uppercase border-2 border-black hover:shadow-[8px_8px_0px_0px_rgba(204,255,0,0.3)] transition-all">
                  Prendre rendez-vous
                </a>
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
