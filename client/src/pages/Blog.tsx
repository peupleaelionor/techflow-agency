import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { blogPosts } from "@/data/blogData";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useState, useMemo } from "react";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = useMemo(() => {
    const cats = Array.from(new Set(blogPosts.map(p => p.category)));
    return cats.sort();
  }, []);
  
  const filteredPosts = useMemo(() => {
    if (!selectedCategory) return blogPosts;
    return blogPosts.filter(post => post.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black dark:text-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <Reveal width="100%">
            <h1 className="text-5xl md:text-7xl font-black uppercase mb-6">Journal & Études</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl font-mono text-gray-600 border-l-4 border-[#CCFF00] pl-4 inline-block text-left">
              Retours d'expérience, analyses techniques et visions du futur.<br/>
              Pas de remplissage, que du concret.
            </p>
          </Reveal>
        </div>

        {/* Category Filter */}
        <Reveal width="100%" delay={0.3}>
          <div className="max-w-5xl mx-auto mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-6 py-2 font-bold uppercase border-2 transition-all ${
                  selectedCategory === null
                    ? 'bg-[#CCFF00] text-black border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                    : 'bg-white text-black border-black hover:bg-[#F0F0F0]'
                }`}
              >
                Tous les articles
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 font-bold uppercase border-2 transition-all ${
                    selectedCategory === category
                      ? 'bg-[#CCFF00] text-black border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                      : 'bg-white text-black border-black hover:bg-[#F0F0F0]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
            <Reveal key={post.id} delay={index * 0.2} width="100%">
              <article className="group border-4 border-black bg-white hover:bg-[#F0F0F0] transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none flex flex-col md:flex-row overflow-hidden">
                <div className="md:w-1/3 h-64 md:h-auto border-b-4 md:border-b-0 md:border-r-4 border-black relative overflow-hidden bg-gradient-to-br from-[#CCFF00] to-black">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl">📰</div>
                  </div>
                  <div className="absolute top-0 left-0 bg-[#CCFF00] text-black font-bold px-3 py-1 border-b-4 border-r-4 border-black text-sm uppercase">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 md:w-2/3 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-sm font-mono text-gray-500 mb-4">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime} de lecture</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 leading-tight group-hover:text-black transition-colors">
                      <Link href={`/blog/${post.id}`} className="hover:underline decoration-4 underline-offset-4 decoration-[#CCFF00]">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="font-mono text-gray-700 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <button className="self-start flex items-center gap-2 font-bold uppercase border-b-2 border-black hover:bg-black hover:text-[#CCFF00] px-2 py-1 transition-all">
                      Lire l'article <ArrowRight size={16} />
                    </button>
                  </Link>
                </div>
              </article>
              </Reveal>
            ))
          ) : (
            <Reveal width="100%">
              <div className="text-center py-16 border-4 border-black p-8 bg-[#F0F0F0]">
                <p className="text-2xl font-black uppercase mb-4">Aucun article dans cette catégorie</p>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="bg-black text-white px-6 py-3 font-bold uppercase border-2 border-black hover:bg-[#CCFF00] hover:text-black transition-colors"
                >
                  Voir tous les articles
                </button>
              </div>
            </Reveal>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
