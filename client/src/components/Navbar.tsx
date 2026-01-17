import { useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Container from "./Container";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Close menu when route changes
    setIsOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest('nav')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);

  const navItems = [
    { name: "Accueil", path: "/" },
    { name: "Notre Méthode", path: "/method" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Insights", path: "/insights" },
    { name: "Contact", path: "/contact" },
  ];

  if (!mounted) return null;

  return (
    <>
      <nav className="border-b-4 border-black dark:border-[#CCFF00] bg-white dark:bg-black dark:text-white sticky top-0 z-40">
        <Container className="h-16 sm:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group flex-shrink-0">
              <img 
                src="/logo.svg" 
                alt="TechFlow Logo" 
                className="h-8 sm:h-10 w-auto transition-transform group-hover:scale-105" 
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={cn(
                    "text-sm xl:text-base font-bold uppercase cursor-pointer hover:bg-[#CCFF00] dark:hover:text-black px-2 py-1 transition-colors border-2 border-transparent hover:border-black dark:hover:border-[#CCFF00]",
                    location === item.path && "bg-[#CCFF00] border-black dark:text-black"
                  )}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Right Section: CTA + Theme + Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Desktop CTA */}
            <Link href="/contact" className="hidden lg:block">
              <button className="bg-black text-[#CCFF00] dark:bg-[#CCFF00] dark:text-black px-4 xl:px-6 py-2 font-bold uppercase text-sm xl:text-base border-2 border-black dark:border-[#CCFF00] hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-[#CCFF00] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none h-10 sm:h-12 flex items-center justify-center">
                Consultation
              </button>
            </Link>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 border-2 border-black dark:border-[#CCFF00] hover:bg-[#CCFF00] dark:hover:bg-[#CCFF00] dark:hover:text-black transition-colors flex-shrink-0"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu Panel */}
          <div className="fixed top-20 sm:top-24 left-0 right-0 bg-white dark:bg-black border-b-4 border-black dark:border-[#CCFF00] z-40 lg:hidden max-h-[calc(100vh-80px)] sm:max-h-[calc(100vh-96px)] overflow-y-auto">
            <Container className="flex flex-col gap-2 py-4">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span
                    className={cn(
                      "block text-base sm:text-lg font-bold uppercase cursor-pointer hover:bg-[#CCFF00] dark:hover:text-black p-3 border-2 border-transparent hover:border-black dark:hover:border-[#CCFF00] transition-all",
                      location === item.path && "bg-[#CCFF00] border-black dark:text-black"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}

              {/* Mobile CTA */}
              <Link href="/contact" className="lg:hidden mt-4">
                <button 
                  className="w-full bg-black text-[#CCFF00] dark:bg-[#CCFF00] dark:text-black px-4 py-3 font-bold uppercase border-2 border-black dark:border-[#CCFF00] hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-[#CCFF00] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none text-sm sm:text-base"
                  onClick={() => setIsOpen(false)}
                >
                  Consultation Gratuite
                </button>
              </Link>
            </Container>
          </div>
        </>
      )}
    </>
  );
}
