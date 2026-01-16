import { Link } from "wouter";
import SocialProof from "@/components/SocialProof";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b-4 border-border bg-background">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 font-heading text-2xl font-bold uppercase tracking-tighter hover:text-primary transition-colors">
              <div className="h-8 w-8 bg-primary border-2 border-border neo-shadow"></div>
              TechFlow
            </a>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 font-bold uppercase text-sm tracking-wide">
            <a href="#services" className="hover:underline decoration-4 decoration-primary underline-offset-4">Services</a>
            <a href="#packs" className="hover:underline decoration-4 decoration-primary underline-offset-4">Packs</a>
            <a href="#why-us" className="hover:underline decoration-4 decoration-primary underline-offset-4">Pourquoi Nous</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="#contact">
              <Button className="hidden md:inline-flex font-bold uppercase border-2 border-border neo-shadow hover:neo-shadow-hover transition-all bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-12 px-6">
                Lancer mon projet
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
      <SocialProof />

      {/* Footer */}
      <footer className="border-t-4 border-border bg-black text-white py-12">
        <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold text-primary">TechFlow</h3>
            <p className="text-sm font-mono text-gray-400 max-w-xs">
              Solutions digitales prêtes à l'emploi pour propulser votre business dans le futur.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold uppercase mb-4 border-b-2 border-primary inline-block">Services</h4>
            <ul className="space-y-2 text-sm font-mono text-gray-300">
              <li><a href="#" className="hover:text-primary">Sites Web Next-Gen</a></li>
              <li><a href="#" className="hover:text-primary">Automatisations</a></li>
              <li><a href="#" className="hover:text-primary">Templates</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase mb-4 border-b-2 border-primary inline-block">Légal</h4>
            <ul className="space-y-2 text-sm font-mono text-gray-300">
              <li><a href="#" className="hover:text-primary">Mentions Légales</a></li>
              <li><a href="#" className="hover:text-primary">CGV</a></li>
              <li><a href="#" className="hover:text-primary">Confidentialité</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase mb-4 border-b-2 border-primary inline-block">Contact</h4>
            <p className="text-sm font-mono text-gray-300 mb-4">
              Prêt à démarrer ?
            </p>
            <a href="mailto:contact@techflow.ai" className="inline-block bg-primary text-black font-bold px-4 py-2 border-2 border-white hover:bg-white hover:text-black transition-colors">
              contact@techflow.ai
            </a>
          </div>
        </div>
        <div className="container mt-12 pt-8 border-t border-gray-800 text-center text-xs font-mono text-gray-500">
          © 2024 TechFlow. All rights reserved. 
        </div>
      </footer>
    </div>
  );
}
