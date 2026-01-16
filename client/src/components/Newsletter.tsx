import { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";
import { Reveal } from "./Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <Reveal width="100%">
      <section className="border-4 border-black bg-black text-white p-8 md:p-12 my-16">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Mail className="w-8 h-8 text-[#CCFF00]" />
            <h3 className="text-2xl md:text-3xl font-black uppercase">Restez Informé</h3>
          </div>
          
          <p className="font-mono text-gray-300 mb-8">
            Recevez nos derniers articles, analyses et insights directement dans votre boîte mail. Pas de spam, que du contenu de qualité.
          </p>

          {submitted ? (
            <div className="flex items-center gap-3 bg-[#CCFF00] text-black p-4 border-2 border-white">
              <CheckCircle className="w-6 h-6" />
              <p className="font-bold">Merci ! Vérifiez votre email pour confirmer.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow px-4 py-3 bg-white text-black border-2 border-[#CCFF00] font-mono placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#CCFF00]"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[#CCFF00] text-black font-bold uppercase border-2 border-[#CCFF00] hover:bg-white transition-colors shadow-[4px_4px_0px_0px_rgba(204,255,0,0.3)]"
              >
                S'abonner
              </button>
            </form>
          )}

          <p className="text-xs font-mono text-gray-400 mt-4">
            Nous respectons votre vie privée. Désinscription en un clic.
          </p>
        </div>
      </section>
    </Reveal>
  );
}
