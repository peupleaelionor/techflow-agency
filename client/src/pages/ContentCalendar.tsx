import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { contentCalendar, pillars } from "@/data/contentCalendar";
import { Download, Copy, Check, FileText } from "lucide-react";
import { generateCalendarPDF, generateCalendarCSV } from "@/lib/generateCalendarPDF";

export default function ContentCalendar() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

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
                  Content Hub
                </div>
                <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight mb-6">
                  Calendrier Éditorial Hebdomadaire
                </h1>
                <p className="text-lg font-mono text-gray-600 dark:text-gray-400 max-w-2xl">
                  7 jours de contenu stratégique aligné sur nos 3 piliers : Preuve, Bénéfice Émotionnel et Insight Actionnable.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Pillars Overview */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900 border-b-4 border-black dark:border-gray-700">
          <div className="container mx-auto px-4">
            <Reveal>
              <h2 className="text-3xl font-black uppercase mb-12">Les 3 Piliers de Contenu</h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((pillar, idx) => (
                <Reveal key={pillar.name} delay={idx * 0.1}>
                  <div
                    className="border-4 border-black dark:border-gray-700 p-8 bg-white dark:bg-gray-800"
                    style={{ borderLeftWidth: "12px", borderLeftColor: pillar.color }}
                  >
                    <div className="text-4xl mb-3">{pillar.icon}</div>
                    <h3 className="text-xl font-black uppercase mb-2">{pillar.name}</h3>
                    <p className="text-sm font-mono text-gray-600 dark:text-gray-400 mb-3">
                      {pillar.description}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {pillar.message}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Weekly Calendar */}
        <section className="py-20 bg-white dark:bg-black">
          <div className="container mx-auto px-4">
            <Reveal>
              <h2 className="text-3xl font-black uppercase mb-12">Semaine Type</h2>
            </Reveal>

            <div className="space-y-6">
              {contentCalendar.map((day, idx) => (
                <Reveal key={day.day} delay={idx * 0.05}>
                  <div className="border-4 border-black dark:border-gray-700 overflow-hidden hover:shadow-[12px_12px_0px_0px_rgba(204,255,0,0.3)] transition-all">
                    {/* Header */}
                    <div
                      className="p-6 text-white"
                      style={{ backgroundColor: day.pillarColor }}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-2xl font-black uppercase">{day.dayFr}</h3>
                          <p className="text-sm font-mono opacity-90">{day.title}</p>
                        </div>
                        <div className="text-4xl">{day.icon}</div>
                      </div>
                      <div className="inline-block bg-white bg-opacity-20 px-3 py-1 rounded text-xs font-bold uppercase">
                        {day.pillar}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 bg-white dark:bg-gray-900">
                      {/* Main Message */}
                      <div className="mb-6 pb-6 border-b-2 border-gray-200 dark:border-gray-800">
                        <p className="font-mono text-gray-800 dark:text-gray-200 leading-relaxed">
                          {day.mainMessage}
                        </p>
                      </div>

                      {/* Story Text */}
                      <div className="mb-6 pb-6 border-b-2 border-gray-200 dark:border-gray-800">
                        <p className="text-sm font-mono text-gray-600 dark:text-gray-400 italic">
                          <strong>Story Text:</strong> {day.storyText}
                        </p>
                      </div>

                      {/* Key Benefit */}
                      <div className="mb-6 pb-6 border-b-2 border-gray-200 dark:border-gray-800">
                        <p className="text-sm font-bold uppercase text-gray-700 dark:text-gray-300">
                          Bénéfice clé: <span style={{ color: day.pillarColor }}>{day.keyBenefit}</span>
                        </p>
                      </div>

                      {/* Hashtags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {day.hashtags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 text-xs font-mono border border-gray-300 dark:border-gray-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Copy Button */}
                      <button
                        onClick={() => handleCopy(day.mainMessage, day.day)}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-bold uppercase text-xs border-2 border-gray-300 dark:border-gray-700 hover:bg-[#CCFF00] hover:text-black hover:border-black transition-all"
                      >
                        {copied === day.day ? (
                          <>
                            <Check size={14} />
                            Copié !
                          </>
                        ) : (
                          <>
                            <Copy size={14} />
                            Copier le texte
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="py-16 bg-black text-white border-t-4 border-[#CCFF00]">
          <div className="container mx-auto px-4">
            <Reveal>
              <h2 className="text-3xl font-black uppercase mb-6 text-center">Télécharger le Calendrier</h2>
              <p className="font-mono text-gray-300 mb-12 max-w-2xl mx-auto text-center">
                Exportez ce calendrier dans votre format préféré pour l'utiliser dans votre stratégie de contenu social media.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <button
                  onClick={generateCalendarPDF}
                  className="inline-flex items-center gap-3 bg-[#CCFF00] text-black px-8 py-4 font-bold uppercase border-2 border-[#CCFF00] hover:bg-white hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] transition-all"
                >
                  <Download size={20} />
                  Télécharger en HTML
                </button>
                <button
                  onClick={generateCalendarCSV}
                  className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 font-bold uppercase border-2 border-white hover:bg-[#CCFF00] hover:border-[#CCFF00] hover:shadow-[8px_8px_0px_0px_rgba(204,255,0,0.3)] transition-all"
                >
                  <FileText size={20} />
                  Télécharger en CSV
                </button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white dark:bg-black border-t-4 border-black dark:border-gray-700">
          <div className="container mx-auto px-4 text-center">
            <Reveal>
              <h2 className="text-4xl font-black uppercase mb-6">Besoin d'aide pour votre stratégie ?</h2>
              <p className="font-mono text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Notre équipe peut vous aider à adapter ce calendrier à votre audience et à maximiser votre engagement.
              </p>
              <a
                href="/contact"
                className="inline-block bg-black dark:bg-[#CCFF00] text-[#CCFF00] dark:text-black px-8 py-4 font-bold uppercase border-2 border-black dark:border-[#CCFF00] hover:shadow-[8px_8px_0px_0px_rgba(204,255,0,0.3)] transition-all"
              >
                Planifier une consultation
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
