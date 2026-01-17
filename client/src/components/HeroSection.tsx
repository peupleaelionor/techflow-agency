import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import Container from "./Container";

export default function HeroSection() {
  return (
    <section className="relative border-b-4 border-black dark:border-[#CCFF00]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:min-h-[85vh]">
        {/* Left Column - Content */}
        <div className="flex flex-col justify-center py-12 sm:py-16 md:py-20 lg:py-0 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 bg-[#F0F0F0] dark:bg-gray-900">
          <Container className="flex flex-col justify-center h-full">
            <Reveal>
              <div className="inline-block bg-black text-[#CCFF00] px-3 sm:px-4 py-1 font-mono text-xs sm:text-sm font-bold mb-4 sm:mb-6 w-fit border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                AGENCE DIGITALE V2.0
              </div>
            </Reveal>

            <Reveal>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black uppercase leading-tight mb-4 sm:mb-6 text-black">
                Des services digitaux <span className="bg-[#CCFF00] px-2">sur-mesure</span> pour les projets ambitieux.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-mono mb-6 sm:mb-8 max-w-lg border-l-4 border-black pl-3 sm:pl-4 text-gray-800 dark:text-gray-300 leading-relaxed">
                Notre réseau d'experts à Paris, Londres, New York, Madrid, Mexico, Buenos Aires, Kinshasa, Tokyo, Séoul, Shanghai et Singapour transforme vos idées en réalité avec une exigence absolue.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
                <Link href="/contact">
                  <button className="w-full sm:w-auto bg-[#CCFF00] text-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 font-bold uppercase text-sm sm:text-base md:text-lg border-4 border-[#CCFF00] hover:bg-white hover:text-black transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[8px] active:translate-y-[8px] active:shadow-none flex items-center justify-center gap-2 min-h-[44px] sm:min-h-[48px]">
                    Commencer maintenant →
                  </button>
                </Link>
                <a 
                  href="https://wa.me/33123456789?text=Bonjour,%20je%20viens%20de%20voir%20TechFlow%20et%20je%20suis%20intéressé%20par%20un%20projet.%20Pouvez-vous%20m'en%20dire%20plus%20?" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-black dark:text-white font-bold uppercase text-sm sm:text-base hover:text-[#CCFF00] transition-colors border-b-2 border-transparent hover:border-[#CCFF00] pb-1"
                >
                  <MessageCircle size={20} className="sm:size-24" />
                  Discuter avec nous
                </a>
              </div>
            </Reveal>
          </Container>
        </div>

        {/* Right Column - Visual CTA */}
        <div className="relative border-t-4 lg:border-t-0 lg:border-l-4 border-black dark:border-[#CCFF00] overflow-hidden bg-black flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-0 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 min-h-[400px] sm:min-h-[500px] lg:min-h-auto">
          <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] opacity-20 bg-cover bg-center grayscale"></div>

          {/* CTA Content */}
          <div className="relative z-10 w-full max-w-md text-center">
            <Reveal>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black uppercase leading-tight mb-4 sm:mb-6 text-white">
                Développement Web & Stratégie qui transforment vos visiteurs en clients
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-sm sm:text-base md:text-lg font-mono text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Découvrez comment optimiser votre présence digitale avec un audit personnalisé.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <Link href="/contact">
                <button className="w-full bg-[#CCFF00] text-black px-6 sm:px-8 py-3 sm:py-4 font-bold uppercase text-sm sm:text-base md:text-lg border-4 border-[#CCFF00] hover:bg-white transition-all shadow-[8px_8px_0px_0px_rgba(204,255,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_rgba(204,255,0,0.3)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none min-h-[44px] sm:min-h-[48px] flex items-center justify-center">
                  📋 Obtenir mon audit gratuit
                </button>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
