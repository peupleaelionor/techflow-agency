import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRoute, Link } from "wouter";
import { blogPosts } from "@/data/blogData";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { Streamdown } from "streamdown";
import { Reveal } from "@/components/Reveal";
import Newsletter from "@/components/Newsletter";
import SocialShare from "@/components/SocialShare";
import Comments from "@/components/Comments";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:id");
  const post = blogPosts.find((p) => p.id === params?.id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-black uppercase mb-4">Article non trouvé</h1>
          <Link href="/blog">
            <button className="bg-black text-white px-6 py-3 font-bold uppercase border-2 border-black hover:bg-[#CCFF00] hover:text-black transition-colors">
              Retour au blog
            </button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black dark:text-white">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-[#F0F0F0] border-b-4 border-black py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <Reveal>
              <Link href="/blog">
                <button className="flex items-center gap-2 font-mono font-bold text-sm mb-8 hover:text-[#CCFF00] bg-black text-white px-3 py-1 w-fit">
                  <ArrowLeft size={14} /> RETOUR AU JOURNAL
                </button>
              </Link>
            </Reveal>
            <Reveal delay={0.2}>
              <h1 className="text-4xl md:text-6xl font-black uppercase mb-8 leading-tight">
                {post.title}
              </h1>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="flex flex-wrap gap-6 font-mono text-sm border-t-2 border-black pt-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} /> {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} /> {post.readTime}
                </div>
                <div className="flex items-center gap-2 bg-[#CCFF00] dark:bg-[#CCFF00] dark:text-black px-2 border border-black dark:border-[#CCFF00]">
                  <Tag size={14} /> {post.category}
                </div>

              </div>
            </Reveal>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <Reveal width="100%">
            <div className="border-4 border-black p-2 mb-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-gradient-to-br from-[#CCFF00] to-black h-64 flex items-center justify-center">
              <div className="text-6xl">📰</div>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <div className="prose prose-lg max-w-none font-mono prose-headings:font-heading prose-headings:uppercase prose-headings:font-black prose-p:text-gray-800 prose-strong:bg-[#CCFF00] prose-strong:px-1 prose-strong:text-black prose-blockquote:border-l-4 prose-blockquote:border-black prose-blockquote:bg-[#F0F0F0] prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic">
              <Streamdown>{post.content}</Streamdown>
            </div>
          </Reveal>

          {/* Social Share */}
          <SocialShare title={post.title} url={`${window.location.origin}/blog/${post.id}`} />

          {/* Share / CTA */}
          <Reveal delay={0.4} width="100%">
            <div className="mt-16 pt-8 border-t-4 border-black dark:border-[#CCFF00] flex flex-col md:flex-row justify-between items-center gap-8">
              <p className="font-bold uppercase text-xl">Vous avez un projet similaire ?</p>
              <Link href="/contact">
                <button className="bg-[#CCFF00] text-black dark:text-black px-8 py-4 font-bold uppercase text-lg border-4 border-black dark:border-[#CCFF00] hover:bg-black dark:hover:bg-black hover:text-white dark:hover:text-[#CCFF00] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  Discutons-en
                </button>
              </Link>
            </div>
          </Reveal>

          {/* Newsletter */}
          <Newsletter />

          {/* Comments */}
          <Comments postId={post.id} postTitle={post.title} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
