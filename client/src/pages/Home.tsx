import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import PricingGrid from "@/components/PricingGrid";
import NewsletterAdvanced from "@/components/NewsletterAdvanced";
import ContentHubPreview from "@/components/ContentHubPreview";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import MiniMissionsSection from "@/components/MiniMissionsSection";
import { MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black dark:text-white">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section Ultime */}
        <section className="relative border-b-4 border-black dark:border-[#CCFF00]">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
            <div className="flex flex-col justify-center p-6 md:p-8 lg:p-16 bg-[#F0F0F0] dark:bg-gray-900">
              <Reveal>
                <div className="inline-block bg-black text-[#CCFF00] px-4 py-1 font-mono font-bold mb-6 w-fit border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                  {t('hero.badge')}
                </div>
              </Reveal>
              <Reveal>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mb-6 text-black">
                  {t('hero.title')} <span className="bg-[#CCFF00] px-2">{t('hero.titleHighlight')}</span> {t('hero.titleEnd')}
                </h1>
              </Reveal>
              <Reveal delay={0.4}>
                <p className="text-base md:text-xl font-mono mb-8 max-w-lg border-l-4 border-black pl-4 text-gray-800 dark:text-gray-300">
                  {t('hero.description')}
                </p>
              </Reveal>
              <Reveal delay={0.6}>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <Link href="/contact">
                    <button className="bg-[#CCFF00] text-black dark:text-black px-8 md:px-10 py-4 font-bold uppercase text-lg border-4 border-[#CCFF00] hover:bg-white hover:text-black transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2">
                      {t('hero.cta')}
                    </button>
                  </Link>
                  <a 
                    href="https://wa.me/33123456789?text=Bonjour,%20je%20viens%20de%20voir%20TechFlow%20et%20je%20suis%20intéressé%20par%20un%20projet.%20Pouvez-vous%20m'en%20dire%20plus%20?" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-black dark:text-white font-bold uppercase hover:text-[#CCFF00] transition-colors border-b-2 border-transparent hover:border-[#CCFF00] pb-1"
                  >
                    <MessageCircle size={24} />
                    {t('hero.chat')}
                  </a>
                </div>
              </Reveal>
            </div>
            
            {/* Visuel CTA Audit Gratuit */}
            <div className="relative border-t-4 lg:border-t-0 lg:border-l-4 border-black dark:border-[#CCFF00] overflow-hidden bg-black flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] opacity-20 bg-cover bg-center grayscale"></div>
              
              {/* CTA Section */}
              <div className="relative z-10 w-full max-w-md text-center">
                <Reveal>
                  <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight mb-6 text-white">
                    Développement Web & Stratégie qui transforment vos visiteurs en clients
                  </h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="text-lg font-mono text-gray-300 mb-8">
                    Découvrez comment optimiser votre présence digitale avec un audit personnalisé.
                  </p>
                </Reveal>
                <Reveal delay={0.4}>
                  <Link href="/contact">
                    <button className="bg-[#CCFF00] text-black px-8 py-4 font-bold uppercase text-lg border-4 border-[#CCFF00] hover:bg-white transition-all shadow-[8px_8px_0px_0px_rgba(204,255,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] w-full md:w-auto">
                      {t('hero.audit')}
                    </button>
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="bg-[#CCFF00] border-b-4 border-black py-3 md:py-4 overflow-hidden whitespace-nowrap">
          <div className="animate-marquee inline-block">
            <span className="text-lg md:text-2xl font-bold uppercase mx-4 md:mx-8">{t('marquee.webDev')}</span>
            <span className="text-lg md:text-2xl font-bold uppercase mx-4 md:mx-8">•</span>
            <span className="text-lg md:text-2xl font-bold uppercase mx-4 md:mx-8">{t('marquee.design')}</span>
            <span className="text-lg md:text-2xl font-bold uppercase mx-4 md:mx-8">•</span>
            <span className="text-lg md:text-2xl font-bold uppercase mx-4 md:mx-8">{t('marquee.strategy')}</span>
            <span className="text-lg md:text-2xl font-bold uppercase mx-4 md:mx-8">•</span>
            <span className="text-lg md:text-2xl font-bold uppercase mx-4 md:mx-8">{t('marquee.seo')}</span>
            <span className="text-lg md:text-2xl font-bold uppercase mx-4 md:mx-8">•</span>
             <span className="text-lg md:text-2xl font-bold uppercase mx-4 md:mx-8">{t('marquee.webDev')}</span>
            <span className="text-lg md:text-2xl font-bold uppercase mx-4 md:mx-8">•</span>
            <span className="text-lg md:text-2xl font-bold uppercase mx-4 md:mx-8">{t('marquee.design')}</span>
            <span className="text-lg md:text-2xl font-bold uppercase mx-4 md:mx-8">•</span>
            <span className="text-lg md:text-2xl font-bold uppercase mx-4 md:mx-8">{t('marquee.strategy')}</span>
            <span className="text-lg md:text-2xl font-bold uppercase mx-4 md:mx-8">•</span>
            <span className="text-lg md:text-2xl font-bold uppercase mx-4 md:mx-8">{t('marquee.seo')}</span>
            <span className="text-lg md:text-2xl font-bold uppercase mx-4 md:mx-8">•</span>
          </div>
        </div>

        {/* Pricing Grid */}
        <PricingGrid />

        {/* Content Hub Preview */}
        <ContentHubPreview />

        {/* Services Detailed Grid */}
        <section className="py-20 container mx-auto px-4 dark:bg-gray-900">
          <Reveal width="100%">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-16 text-center">{t('services.title')}</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: t('services.webDev.title'), 
                desc: t('services.webDev.description'), 
                icon: "💻" 
              },
              { 
                title: t('services.design.title'), 
                desc: t('services.design.description'), 
                icon: "🎨" 
              },
              { 
                title: t('services.strategy.title'), 
                desc: t('services.strategy.description'), 
                icon: "🚀" 
              },
              { 
                title: t('services.seo.title'), 
                desc: t('services.seo.description'), 
                icon: "📈" 
              }
            ].map((service, i) => (
              <Reveal key={i} delay={i * 0.2}>
                <div className="border-4 border-black p-8 bg-white hover:bg-[#CCFF00] transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group h-full">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-2xl font-bold uppercase mb-4 border-b-4 border-black pb-2 inline-block">{service.title}</h3>
                  <p className="font-mono text-lg">{service.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialsCarousel />

        {/* Mini-Missions Section */}
        <MiniMissionsSection />

        {/* CTA Section */}
        <section className="bg-black text-white py-24 border-t-4 border-black dark:border-[#CCFF00]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">{t('cta.title')}</h2>
            <p className="text-xl font-mono mb-12 max-w-2xl mx-auto text-gray-300">
              {t('cta.subtitle')}
            </p>
            <Link href="/contact">
              <button className="bg-[#CCFF00] text-black px-12 py-6 font-bold uppercase text-2xl border-4 border-white hover:bg-white hover:border-[#CCFF00] transition-all shadow-[12px_12px_0px_0px_rgba(255,255,255,0.2)] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none">
                {t('cta.button')}
              </button>
            </Link>
           </div>
        </section>

        {/* Newsletter Advanced */}
        <section className="container mx-auto px-4 py-16">
          <NewsletterAdvanced />
        </section>
      </main>
      <Footer />
    </div>
  );
}
