import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const navItems = [
    { name: t('nav.home'), path: "/" },
    { name: t('nav.method'), path: "/method" },
    { name: t('nav.services'), path: "/services" },
    { name: t('nav.portfolio'), path: "/portfolio" },
    { name: t('nav.insights'), path: "/insights" },
    { name: t('nav.contact'), path: "/contact" },
  ];

  return (
    <nav className="border-b-4 border-black dark:border-[#CCFF00] bg-white dark:bg-black dark:text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer group">
            <img src="/logo.svg" alt="TechFlow Logo" className="h-10 w-auto transition-transform group-hover:scale-105" />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <span
                className={cn(
                  "text-base font-bold uppercase cursor-pointer hover:bg-[#CCFF00] dark:hover:text-black px-2 py-1 transition-colors border-2 border-transparent hover:border-black dark:hover:border-[#CCFF00]",
                  location === item.path && "bg-[#CCFF00] border-black dark:text-black"
                )}
              >
                {item.name}
              </span>
            </Link>
          ))}
          <Link href="/contact">
            <button className="bg-black text-[#CCFF00] dark:bg-[#CCFF00] dark:text-black px-4 py-2 font-bold uppercase text-sm border-2 border-black dark:border-[#CCFF00] hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-[#CCFF00] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none">
              {t('nav.consultation')}
            </button>
          </Link>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
          <button
            className="md:hidden p-2 border-2 border-black dark:border-[#CCFF00] hover:bg-[#CCFF00] dark:hover:bg-[#CCFF00] dark:hover:text-black transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t-4 border-black dark:border-[#CCFF00] bg-white dark:bg-black absolute w-full left-0 shadow-lg">
          <div className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={cn(
                    "block text-lg font-bold uppercase cursor-pointer hover:bg-[#CCFF00] dark:hover:text-black p-3 border-2 border-transparent hover:border-black dark:hover:border-[#CCFF00] transition-all",
                    location === item.path && "bg-[#CCFF00] border-black dark:text-black"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <button 
                className="w-full bg-black text-[#CCFF00] dark:bg-[#CCFF00] dark:text-black px-6 py-3 font-bold uppercase border-2 border-black dark:border-[#CCFF00] hover:bg-[#CCFF00] hover:text-black transition-all mt-2"
                onClick={() => setIsOpen(false)}
              >
                {t('nav.consultation')}
              </button>
            </Link>
            <div className="mt-2 flex justify-center gap-4 sm:hidden">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
