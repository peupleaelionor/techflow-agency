/**
 * Utilitaires de scroll et navigation avec anchors
 * Gère le scroll lisse vers les sections #id
 */

/**
 * Scroll lisse vers un élément identifié par son ID
 * Prend en compte le header sticky
 * @param id - L'ID de l'élément
 * @param offset - Offset en pixels (par défaut 80 pour le header)
 */
export function scrollToId(id: string, offset = 80) {
  const el = document.getElementById(id);
  if (!el) {
    console.warn(`[scroll] Élément avec ID "${id}" introuvable`);
    return;
  }

  const y = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: "smooth" });
}

/**
 * Déterminer si on est sur la page Home
 * (utile pour les liens anchors)
 */
export function isHomePath(pathname: string): boolean {
  return pathname === "/" || pathname.startsWith("/#");
}

/**
 * Exécuter scroll après un délai (pour attendre le montage des sections)
 */
export function deferScroll(id: string, offset = 80, delay = 50) {
  setTimeout(() => scrollToId(id, offset), delay);
}
