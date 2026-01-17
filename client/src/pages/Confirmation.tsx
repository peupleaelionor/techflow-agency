import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { CheckCircle, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

export default function Confirmation() {
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChat(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black dark:text-white relative overflow-hidden">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20 relative z-10">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Reveal>
            <div className="flex justify-center mb-8">
              <CheckCircle className="w-24 h-24 text-[#CCFF00] bg-black rounded-full p-2 border-4 border-black dark:border-[#CCFF00]" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase mb-6">Merci !</h1>
            <p className="text-xl md:text-2xl font-mono mb-12 border-l-4 border-[#CCFF00] pl-4 inline-block text-left">
              Votre demande d'audit a bien été reçue. <br/>
              Nous préparons votre plan d'attaque.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-[#F0F0F0] dark:bg-gray-900 p-8 border-4 border-black dark:border-[#CCFF00] shadow-[12px_12px_0px_0px_#CCFF00] mb-12 text-left">
              <h3 className="text-2xl font-bold uppercase mb-6 border-b-4 border-black dark:border-[#CCFF00] pb-2">Prochaines étapes :</h3>
              <ul className="space-y-6 font-mono text-lg">
                <li className="flex items-start gap-4">
                  <span className="bg-black text-[#CCFF00] w-8 h-8 flex items-center justify-center font-bold rounded-full flex-shrink-0">1</span>
                  <p>Vous allez recevoir un email de confirmation automatique dans quelques minutes.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="bg-black text-[#CCFF00] w-8 h-8 flex items-center justify-center font-bold rounded-full flex-shrink-0">2</span>
                  <p>Un de nos experts analysera votre demande et vous contactera sous 24h ouvrables.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="bg-black text-[#CCFF00] w-8 h-8 flex items-center justify-center font-bold rounded-full flex-shrink-0">3</span>
                  <p>En attendant, découvrez comment nous avons aidé d'autres entreprises à scaler.</p>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link href="/method">
                <button className="bg-[#CCFF00] text-black px-8 py-4 font-bold uppercase text-xl border-4 border-black hover:bg-white transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  Découvrir notre méthode
                </button>
              </Link>
              <Link href="/blog">
                <button className="bg-white text-black px-8 py-4 font-bold uppercase text-xl border-4 border-black hover:bg-gray-100 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  Lire nos ressources
                </button>
              </Link>
            </div>
          </Reveal>
        </div>
      </main>

      {/* Widget Chat Simulé */}
      <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${showChat ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#CCFF00] w-80 md:w-96 overflow-hidden">
          <div className="bg-black text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-bold uppercase">TechFlow Support</span>
            </div>
            <button onClick={() => setShowChat(false)} className="text-white hover:text-[#CCFF00]">✕</button>
          </div>
          <div className="p-4 bg-gray-50 h-64 overflow-y-auto flex flex-col gap-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-[#CCFF00] font-bold text-xs flex-shrink-0">TF</div>
              <div className="bg-white border-2 border-gray-200 p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl text-sm shadow-sm">
                Bonjour ! 👋 Nous venons de recevoir votre demande.
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-[#CCFF00] font-bold text-xs flex-shrink-0">TF</div>
              <div className="bg-white border-2 border-gray-200 p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl text-sm shadow-sm">
                Pendant que nous préparons votre audit, dites-nous : <span className="font-bold">qu'est-ce qui est le plus urgent pour vous aujourd'hui ?</span>
              </div>
            </div>
          </div>
          <div className="p-3 border-t-2 border-gray-200 bg-white">
            <a 
              href="mailto:contact@techflowsolutions.space?subject=Réponse à votre audit TechFlow" 
              className="block w-full bg-[#CCFF00] text-black text-center py-2 font-bold uppercase text-sm border-2 border-black hover:bg-black hover:text-[#CCFF00] transition-colors"
            >
              Répondre par email →
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
