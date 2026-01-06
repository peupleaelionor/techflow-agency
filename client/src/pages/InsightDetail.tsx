import { useRoute } from "wouter";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { insights } from "@/data/insightsData";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import TestimonialBlock from "@/components/TestimonialBlock";
import InsightNewsletter from "@/components/InsightNewsletter";

export default function InsightDetail() {
  const [match, params] = useRoute("/insights/:id");

  if (!match) return null;

  const insight = insights.find((i) => i.id === params?.id);

  if (!insight) {
    return (
      <div className="min-h-screen flex flex-col bg-white dark:bg-black dark:text-white">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-black uppercase mb-4">Article non trouvé</h1>
          <Link href="/insights">
            <a className="text-[#CCFF00] font-bold hover:underline">
              ← Retour aux articles
            </a>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedInsights = insights
    .filter((i) => i.id !== insight.id && i.category === insight.category)
    .slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black dark:text-white">
      <Navbar />

      <main className="flex-1">
        {/* Back Button */}
        <div className="border-b-4 border-black dark:border-gray-700 bg-white dark:bg-black">
          <div className="container mx-auto px-4 py-6">
            <Link href="/insights">
              <a className="inline-flex items-center gap-2 font-bold uppercase text-sm hover:text-[#CCFF00] transition-colors">
                <ArrowLeft size={16} />
                Retour aux articles
              </a>
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <section className="py-16 bg-white dark:bg-black border-b-4 border-black dark:border-gray-700">
          <div className="container mx-auto px-4 max-w-3xl">
            <Reveal>
              <div className="mb-6">
                <span className="inline-block bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-3 py-1 text-xs font-bold uppercase border border-gray-300 dark:border-gray-700">
                  {insight.category}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black uppercase leading-tight mb-8">
                {insight.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-sm font-mono text-gray-600 dark:text-gray-400 pb-8 border-b-2 border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {insight.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  {insight.readTime}
                </div>
                <button className="flex items-center gap-2 hover:text-[#CCFF00] transition-colors ml-auto">
                  <Share2 size={16} />
                  Partager
                </button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-white dark:bg-black">
          <div className="container mx-auto px-4 max-w-3xl">
            <Reveal>
              <div
                className="prose dark:prose-invert max-w-none font-mono text-gray-800 dark:text-gray-200 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: insight.content }}
              />
              {insight.testimonial && (
                <TestimonialBlock testimonial={insight.testimonial} />
              )}
            </Reveal>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t-2 border-gray-200 dark:border-gray-800">
              <div className="flex flex-wrap gap-2">
                {insight.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-3 py-1 text-xs font-bold uppercase border border-gray-300 dark:border-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedInsights.length > 0 && (
          <section className="py-16 bg-gray-50 dark:bg-gray-900 border-t-4 border-black dark:border-gray-700">
            <div className="container mx-auto px-4">
              <Reveal>
                <h2 className="text-3xl font-black uppercase mb-12">Articles similaires</h2>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedInsights.map((related, idx) => (
                  <Reveal key={related.id} delay={idx * 0.1}>
                    <Link href={`/insights/${related.id}`}>
                      <a className="group block">
                        <article className="border-4 border-black dark:border-gray-700 p-8 bg-white dark:bg-gray-800 h-full flex flex-col hover:shadow-[8px_8px_0px_0px_#CCFF00] transition-all hover:border-[#CCFF00]">
                          <h3 className="text-xl font-black uppercase mb-3 group-hover:text-[#CCFF00] transition-colors">
                            {related.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-400 font-mono text-sm mb-4 flex-grow">
                            {related.excerpt}
                          </p>
                          <div className="flex items-center gap-2 font-bold uppercase text-sm group-hover:gap-4 transition-all">
                            Lire
                            <ArrowLeft size={16} className="rotate-180" />
                          </div>
                        </article>
                      </a>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Newsletter Section */}
        <InsightNewsletter />

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
                Appliquer ces principes à votre entreprise
              </h2>
              <p className="font-mono text-gray-300 mb-8 max-w-2xl mx-auto">
                Les insights sans action ne valent rien. Parlons de comment transformer ces idées en résultats concrets.
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
