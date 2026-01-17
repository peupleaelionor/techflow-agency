/**
 * Routes centralisées et constantes de routing
 * Assure une navigation cohérente sans liens morts
 */

export const ROUTES = {
  home: "/",
  portfolio: "/portfolio",
  contact: "/contact",
  privacy: "/privacy",
} as const;

export const ANCHORS = {
  services: "services",
  miniMissions: "mini-missions",
} as const;

// Types pour typage strict
export type RouteKey = keyof typeof ROUTES;
export type AnchorKey = keyof typeof ANCHORS;
