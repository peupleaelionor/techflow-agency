import { Link } from "wouter";
import { Mail, Twitter, Instagram, Music } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t-4 border-[#CCFF00] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <h2 className="text-4xl font-black uppercase mb-4 cursor-pointer hover:text-[#CCFF00] transition-colors">TechFlow</h2>
            </Link>
            <p className="font-mono text-gray-400 mb-6 max-w-md">
              Paris | London | New York
            </p>
            <p className="font-mono text-gray-400 mb-6 max-w-md">
              L'agence digitale nouvelle génération. Nous transformons vos idées en produits d'exception grâce à des technologies de pointe et un réseau mondial d'experts.
            </p>
            <div className="flex gap-4">
              <a href="https://x.com/techflow201?s=21" target="_blank" rel="noopener noreferrer" className="hover:text-[#CCFF00] transition-colors" title="X (Twitter)"><Twitter size={20} /></a>
              <a href="https://www.instagram.com/tech.flowsolutions?igsh=MWRhMHZ0Y2g5NTZ5ZA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-[#CCFF00] transition-colors" title="Instagram"><Instagram size={20} /></a>
              <a href="https://www.tiktok.com/@tech.flowsolutions?_r=1&_t=ZN-92hH9VBHEO6" target="_blank" rel="noopener noreferrer" className="hover:text-[#CCFF00] transition-colors" title="TikTok"><Music size={20} /></a>
              <a href="mailto:Techflow@outlook.fr" className="hover:text-[#CCFF00] transition-colors" title="Email"><Mail size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold uppercase text-[#CCFF00] mb-6">Navigation</h3>
            <ul className="space-y-4 font-mono">
              <li><Link href="/"><span className="hover:text-[#CCFF00] cursor-pointer">Accueil</span></Link></li>
              <li><Link href="/method"><span className="hover:text-[#CCFF00] cursor-pointer">Notre Méthode</span></Link></li>
              <li><Link href="/services"><span className="hover:text-[#CCFF00] cursor-pointer">Services</span></Link></li>
              <li><Link href="/blog"><span className="hover:text-[#CCFF00] cursor-pointer">Ressources</span></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold uppercase text-[#CCFF00] mb-6">Contact</h3>
            <ul className="space-y-4 font-mono">
              <li><Link href="/contact"><span className="hover:text-[#CCFF00] cursor-pointer">Nous contacter</span></Link></li>
              <li><a href="mailto:Techflow@outlook.fr" className="hover:text-[#CCFF00]">Techflow@outlook.fr</a></li>
              <li className="text-gray-500 text-sm mt-4">
                Réponse sous 24h ouvrables.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-sm text-gray-500">
          <p>© {new Date().getFullYear()} TechFlow Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/legal"><span className="hover:text-[#CCFF00] cursor-pointer">Mentions Légales</span></Link>
            <a href="#" className="hover:text-[#CCFF00]">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
