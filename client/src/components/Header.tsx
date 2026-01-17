/**
 * Header sticky avec navigation
 * Accessible, responsive, mobile menu
 */

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ROUTES, ANCHORS } from "@/app/routes";
import { scrollToId } from "@/lib/scroll";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Construire les URLs pour les anchors
  const servicesHref = `${ROUTES.home}#${ANCHORS.services}`;
  const miniHref = `${ROUTES.home}#${ANCHORS.miniMissions}`;

  const handleAnchorClick = (href: string, anchorId: string) => {
    if (location === ROUTES.home) {
      // On est déjà à l'accueil, juste scroll
      scrollToId(anchorId);
    } else {
      // On est sur une autre page, naviguer puis scroll
      window.location.href = href;
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Accueil", href: ROUTES.home, isAnchor: false },
    { label: "Services", href: servicesHref, anchorId: ANCHORS.services, isAnchor: true },
    { label: "Mini-Missions", href: miniHref, anchorId: ANCHORS.miniMissions, isAnchor: true },
    { label: "Portfolio", href: ROUTES.portfolio, isAnchor: false },
    { label: "Contact", href: ROUTES.contact, isAnchor: false },
  ];

  return (
    <header
      className="sticky top-0 z-50 bg-white dark:bg-black border-b-2 border-black dark:border-[#CCFF00]"
      role="banner"
    >
      <nav className="flex items-center justify-between px-4 md:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo/Home link */}
        <Link href={ROUTES.home}>
          <a className="font-bold text-xl uppercase tracking-widest">TechFlow</a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) =>
            link.isAnchor ? (
              <button
                key={link.label}
                onClick={() => handleAnchorClick(link.href, link.anchorId!)}
                className="font-semibold hover:text-[#CCFF00] transition"
                aria-label={link.label}
              >
                {link.label}
              </button>
            ) : (
              <Link key={link.label} href={link.href}>
                <a className="font-semibold hover:text-[#CCFF00] transition">
                  {link.label}
                </a>
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-gray-100 dark:bg-gray-900 border-t border-black dark:border-[#CCFF00]"
          role="navigation"
        >
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) =>
              link.isAnchor ? (
                <button
                  key={link.label}
                  onClick={() => handleAnchorClick(link.href, link.anchorId!)}
                  className="text-left font-semibold py-2 hover:text-[#CCFF00] transition"
                >
                  {link.label}
                </button>
              ) : (
                <Link key={link.label} href={link.href}>
                  <a className="font-semibold py-2 hover:text-[#CCFF00] transition">
                    {link.label}
                  </a>
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
