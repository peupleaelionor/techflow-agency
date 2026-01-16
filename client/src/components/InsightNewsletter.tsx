import { useState } from "react";
import { Mail, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function InsightNewsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setEmail("");
    setLoading(false);

    // Reset after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="py-16 bg-black text-white border-t-4 border-[#CCFF00] border-b-4">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-black uppercase mb-3">Recevez les Prochains Insights</h3>
          <p className="font-mono text-gray-300">
            Une newsletter sans spam. Juste des stratégies éprouvées et des principes qui fonctionnent.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <div className="flex-grow relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
              <input
                type="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-4 bg-white text-black font-mono placeholder-gray-400 border-2 border-white focus:outline-none focus:border-[#CCFF00]"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#CCFF00] text-black px-8 py-4 font-bold uppercase border-2 border-[#CCFF00] hover:bg-white transition-all disabled:opacity-50"
            >
              {loading ? "..." : "S'abonner"}
            </button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8 bg-[#CCFF00] text-black p-6 border-2 border-[#CCFF00]"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <Check size={24} />
              <p className="font-bold uppercase">Merci pour votre inscription !</p>
            </div>
            <p className="font-mono text-sm">Vérifiez votre email pour confirmer.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
