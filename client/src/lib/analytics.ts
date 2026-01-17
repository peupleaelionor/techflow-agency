/**
 * Analytics client
 * À brancher à Plausible/PostHog/GA une fois l'infrastructure prête
 * Pour l'instant, logs console uniquement
 */

type AnalyticsEvent =
  | "hero_select_creator"
  | "hero_select_business"
  | "mini_mission_click"
  | "contact_form_submit"
  | "contact_form_success"
  | "contact_form_error"
  | "scroll_50"
  | "scroll_90"
  | "lead_source_detected";

type Props = Record<string, unknown>;

/**
 * Détecter la source du lead depuis les query params
 */
export function detectLeadSource(): string | null {
  if (typeof window === "undefined") return null;
  
  const params = new URLSearchParams(window.location.search);
  
  // Check pour source directe
  const source = params.get("source") 
    || params.get("utm_source") 
    || params.get("utm_medium")
    || null;
  
  if (source) {
    track("lead_source_detected", { source });
  }
  
  return source;
}

/**
 * Track un événement
 * @param event - Nom de l'événement
 * @param props - Propriétés optionnelles (ne pas inclure données sensibles)
 */
export function track(event: AnalyticsEvent, props: Props = {}) {
  // En dev/test: log console
  if (process.env.NODE_ENV !== "production") {
    console.log("[ANALYTICS]", event, props);
  }

  // TODO: Brancher à Plausible/PostHog
  // const analytics = window.plausible || window.postHog;
  // if (analytics) {
  //   analytics(event, { props });
  // }
}

/**
 * Initialiser le tracking de scroll depth
 * À appeler une fois au montage de l'app (dans App ou Home)
 */
export function initScrollDepthTracking() {
  let sent50 = false;
  let sent90 = false;

  const handleScroll = () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop + window.innerHeight) / h.scrollHeight;

    if (!sent50 && scrolled >= 0.5) {
      sent50 = true;
      track("scroll_50");
    }
    if (!sent90 && scrolled >= 0.9) {
      sent90 = true;
      track("scroll_90");
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  // Cleanup
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}
