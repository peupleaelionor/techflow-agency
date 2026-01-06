import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { resources } from "@/data/resourcesData";
import { Download, ExternalLink, Search } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";

type CategoryFilter = "all" | "guide" | "webinar" | "tool" | "template";

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResources = resources.filter((resource) => {
    const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory;
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoryLabels: Record<CategoryFilter, string> = {
    all: "Toutes les ressources",
    guide: "Guides",
    webinar: "Webinaires",
    tool: "Outils",
    template: "Templates"
  };

  const categoryIcons: Record<string, string> = {
    guide: "📖",
    webinar: "🎥",
    tool: "🔧",
    template: "📋"
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black dark:text-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <Reveal width="100%">
              <h1 className="text-5xl md:text-7xl font-black uppercase mb-6">Ressources</h1>
            </Reveal>
            <Reveal delay={0.2} width="100%">
              <p className="text-xl font-mono text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Guides, webinaires, outils et templates pour accélérer votre transformation digitale.
              </p>
            </Reveal>
          </div>

          {/* Search and Filter */}
          <Reveal width="100%" delay={0.3}>
            <div className="mb-12 space-y-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-4 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher une ressource..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-black dark:border-[#CCFF00] bg-white dark:bg-black dark:text-white font-mono focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-3">
                {(["all", "guide", "webinar", "tool", "template"] as const).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-2 font-bold uppercase border-2 transition-all ${
                      selectedCategory === category
                        ? "bg-[#CCFF00] text-black border-[#CCFF00]"
                        : "bg-white dark:bg-black text-black dark:text-white border-black dark:border-[#CCFF00] hover:bg-[#CCFF00] dark:hover:bg-[#CCFF00] dark:hover:text-black hover:text-black"
                    }`}
                  >
                    {categoryLabels[category]}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredResources.map((resource, index) => (
              <Reveal key={resource.id} delay={index * 0.1} width="100%">
                <div className="border-4 border-black dark:border-[#CCFF00] overflow-hidden flex flex-col h-full bg-white dark:bg-gray-900 hover:shadow-[8px_8px_0px_0px_rgba(204,255,0,0.3)] dark:hover:shadow-[8px_8px_0px_0px_rgba(204,255,0,0.3)] transition-all">
                  {/* Image */}
                  <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center border-b-4 border-black dark:border-[#CCFF00] overflow-hidden">
                    <span className="text-6xl">{resource.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <span className="inline-block bg-[#CCFF00] dark:bg-[#CCFF00] text-black px-3 py-1 font-bold uppercase text-xs border-2 border-black dark:border-[#CCFF00] mb-3">
                        {categoryIcons[resource.category]} {resource.category}
                      </span>
                      <h3 className="text-xl font-black uppercase mb-2">{resource.title}</h3>
                      <p className="font-mono text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {resource.description}
                      </p>
                    </div>

                    {/* Meta Info */}
                    <div className="mb-6 space-y-2 flex-grow">
                      <p className="font-mono text-xs text-gray-600 dark:text-gray-400">
                        📅 {resource.date}
                      </p>
                      <p className="font-mono text-xs text-gray-600 dark:text-gray-400">
                        📄 Format: {resource.downloadFormat.toUpperCase()}
                      </p>
                    </div>

                    {/* CTA */}
                    <button
                      onClick={() => {
                        const element = document.createElement('a');
                        const file = new Blob([resource.content], { type: 'text/plain' });
                        element.href = URL.createObjectURL(file);
                        element.download = `${resource.title}.${resource.downloadFormat}`;
                        document.body.appendChild(element);
                        element.click();
                        document.body.removeChild(element);
                      }}
                      className="w-full py-3 px-4 bg-black dark:bg-[#CCFF00] text-[#CCFF00] dark:text-black font-bold uppercase border-2 border-black dark:border-[#CCFF00] hover:bg-[#CCFF00] dark:hover:bg-black hover:text-black dark:hover:text-[#CCFF00] transition-all flex items-center justify-center gap-2"
                    >
                      <Download size={18} />
                      Télécharger
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* No Results */}
          {filteredResources.length === 0 && (
            <Reveal width="100%">
              <div className="text-center py-16 border-4 border-black dark:border-[#CCFF00] p-12 bg-[#F0F0F0] dark:bg-gray-900">
                <p className="text-2xl font-black uppercase mb-4">Aucune ressource trouvée</p>
                <p className="font-mono text-gray-600 dark:text-gray-400">
                  Essayez de modifier vos critères de recherche ou de filtrage.
                </p>
              </div>
            </Reveal>
          )}

          {/* Stats */}
          <Reveal width="100%" delay={0.6}>
            <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: "Ressources", value: resources.length },
                { label: "Guides", value: resources.filter((r) => r.category === "guide").length },
                { label: "Templates", value: resources.filter((r) => r.category === "template").length }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="border-4 border-black dark:border-[#CCFF00] bg-white dark:bg-gray-900 p-8 text-center"
                >
                  <p className="text-4xl font-black text-[#CCFF00] mb-2">{stat.value}</p>
                  <p className="font-bold uppercase">{stat.label}</p>
                </div>
              ))}
            </section>
          </Reveal>

          {/* CTA */}
          <Reveal width="100%" delay={0.8}>
            <section className="mt-20 border-4 border-black dark:border-[#CCFF00] bg-black text-white p-12 text-center">
              <h2 className="text-3xl font-black uppercase mb-6">Besoin d'une ressource personnalisée ?</h2>
              <p className="font-mono text-gray-300 mb-8 max-w-2xl mx-auto">
                Nous créons des guides, templates et outils sur mesure pour vos besoins spécifiques.
              </p>
              <a
                href="/contact"
                className="inline-block bg-[#CCFF00] text-black px-12 py-4 font-bold uppercase text-lg border-4 border-[#CCFF00] hover:bg-white transition-all shadow-[8px_8px_0px_0px_rgba(204,255,0,0.5)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(204,255,0,0.3)]"
              >
                Nous contacter
              </a>
            </section>
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
