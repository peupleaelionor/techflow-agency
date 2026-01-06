import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black dark:text-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-black uppercase mb-12 border-b-8 border-[#CCFF00] inline-block">À Propos</h1>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="font-mono text-lg space-y-6">
              <Reveal delay={0.2}>
                <p className="border-l-4 border-black pl-4">
                  TechFlow Solutions n'est pas une agence comme les autres. Nous sommes des ingénieurs du digital, obsédés par la performance et l'efficacité.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <p>
                  Fondée en 2023, notre mission est simple : éliminer le superflu pour ne garder que ce qui fonctionne. Pas de jargon, pas de promesses vides. Juste du code propre et des designs qui marquent.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.6}>
              <div className="relative">
                <div className="absolute inset-0 bg-[#CCFF00] translate-x-4 translate-y-4 border-4 border-black"></div>
                <img src="/images/insta-post-4.jpg" alt="Team" className="relative z-10 border-4 border-black w-full h-auto grayscale hover:grayscale-0 transition-all" />
              </div>
            </Reveal>
          </div>

          <Reveal>
            <h2 className="text-3xl font-black uppercase mb-8">Notre Philosophie</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <Reveal delay={0.2}>
              <div className="border-4 border-black p-6 shadow-[8px_8px_0px_0px_#CCFF00] h-full">
                <h3 className="text-xl font-bold uppercase mb-2">Transparence Totale</h3>
                <p className="font-mono">Vous savez ce que vous payez. Pas de coûts cachés.</p>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="border-4 border-black p-6 shadow-[8px_8px_0px_0px_#CCFF00] h-full">
                <h3 className="text-xl font-bold uppercase mb-2">Design Utile</h3>
                <p className="font-mono">Le beau doit servir le fonctionnel. Toujours.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
