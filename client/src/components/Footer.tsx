import Link from "next/link";
import { Mail, Twitter, Instagram, Music } from "lucide-react";
import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Notre Méthode", href: "/method" },
    { name: "Services", href: "/services" },
    { name: "Ressources", href: "/blog" }
  ];

  const contactLinks = [
    { name: "Nous contacter", href: "/contact" },
    { name: "Techflow@outlook.fr", href: "mailto:Techflow@outlook.fr" }
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://x.com/techflow201?s=21", label: "X (Twitter)", size: 20 },
    { icon: Instagram, href: "https://www.instagram.com/tech.flowsolutions?igsh=MWRhMHZ0Y2g5NTZ5ZA%3D%3D&utm_source=qr", label: "Instagram", size: 20 },
    { icon: Music, href: "https://www.tiktok.com/@tech.flowsolutions?_r=1&_t=ZN-92hH9VBHEO6", label: "TikTok", size: 20 },
    { icon: Mail, href: "mailto:Techflow@outlook.fr", label: "Email", size: 20 }
  ];

  return (
    <footer className="bg-black text-white border-t-4 border-[#CCFF00] py-12 sm:py-16 md:py-20">
      <Container>
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link href="/">
              <h2 className="text-3xl sm:text-4xl font-black uppercase mb-3 sm:mb-4 cursor-pointer hover:text-[#CCFF00] transition-colors">
                TechFlow
              </h2>
            </Link>
            <p className="font-mono text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 leading-relaxed">
              Paris | London | New York | Madrid | Mexico | Buenos Aires | Kinshasa | Tokyo | Seoul | Shanghai | Singapore
            </p>
            <p className="font-mono text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6 leading-relaxed max-w-sm">
              L'agence digitale nouvelle génération. Nous transformons vos idées en produits d'exception grâce à des technologies de pointe et un réseau mondial d'experts.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.label}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[#CCFF00] transition-colors p-2 border-2 border-transparent hover:border-[#CCFF00] rounded" 
                    title={social.label}
                    aria-label={social.label}
                  >
                    <Icon size={social.size} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-span-1">
            <h3 className="font-bold uppercase text-[#CCFF00] mb-4 sm:mb-6 text-sm sm:text-base">
              Navigation
            </h3>
            <ul className="space-y-2 sm:space-y-3 font-mono text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="hover:text-[#CCFF00] cursor-pointer transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div className="col-span-1">
            <h3 className="font-bold uppercase text-[#CCFF00] mb-4 sm:mb-6 text-sm sm:text-base">
              Contact
            </h3>
            <ul className="space-y-2 sm:space-y-3 font-mono text-xs sm:text-sm">
              {contactLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="hover:text-[#CCFF00] cursor-pointer transition-colors">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="text-gray-500 text-xs mt-3 sm:mt-4">
                Réponse sous 24h ouvrables.
              </li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div className="col-span-1">
            <h3 className="font-bold uppercase text-[#CCFF00] mb-4 sm:mb-6 text-sm sm:text-base">
              Légal
            </h3>
            <ul className="space-y-2 sm:space-y-3 font-mono text-xs sm:text-sm">
              <li>
                <Link href="/legal">
                  <span className="hover:text-[#CCFF00] cursor-pointer transition-colors">
                    Mentions Légales
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/legal">
                  <span className="hover:text-[#CCFF00] cursor-pointer transition-colors">
                    Confidentialité
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 font-mono text-xs sm:text-sm text-gray-500">
          <p>© {currentYear} TechFlow Solutions. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6 flex-wrap justify-center">
            <Link href="/legal">
              <span className="hover:text-[#CCFF00] cursor-pointer transition-colors">
                Mentions Légales
              </span>
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link href="/legal">
              <span className="hover:text-[#CCFF00] cursor-pointer transition-colors">
                Confidentialité
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
