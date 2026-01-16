export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 2500,
    description: "Parfait pour les petites entreprises qui commencent leur transformation digitale.",
    features: [
      "Site vitrine statique (5-10 pages)",
      "Design Néo-Brutaliste personnalisé",
      "Optimisation SEO de base",
      "Formulaire de contact",
      "Support email (30 jours)",
      "Déploiement inclus"
    ],
    cta: "Démarrer"
  },
  {
    id: "growth",
    name: "Growth",
    price: 7500,
    description: "Pour les entreprises qui veulent une présence digitale complète et performante.",
    features: [
      "Site vitrine avancé (20+ pages)",
      "Design System personnalisé",
      "Blog intégré avec SEO avancé",
      "Formulaires multi-étapes",
      "Intégration CRM (HubSpot, Salesforce)",
      "Analytics avancés",
      "Support prioritaire (3 mois)",
      "Maintenance incluse (3 mois)"
    ],
    cta: "Démarrer",
    highlighted: true
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 15000,
    description: "Solution complète pour les grandes entreprises avec besoins complexes.",
    features: [
      "Plateforme SaaS ou e-commerce personnalisée",
      "Architecture Jamstack optimisée",
      "Design System complet + composants custom",
      "Blog + CMS intégré",
      "Intégrations multi-API",
      "Dashboard analytics personnalisé",
      "Support 24/7 (6 mois)",
      "Maintenance + optimisations (6 mois)",
      "Formation équipe interne",
      "Audit de performance trimestriel"
    ],
    cta: "Discuter du projet"
  }
];

export interface ROICalculatorInput {
  currentRevenue: number;
  conversionRate: number;
  avgOrderValue: number;
  trafficIncrease: number;
}

export function calculateROI(input: ROICalculatorInput) {
  const currentMonthlyRevenue = (input.currentRevenue * input.conversionRate) / 100;
  const projectedMonthlyRevenue = currentMonthlyRevenue * (1 + input.trafficIncrease / 100);
  const additionalMonthlyRevenue = projectedMonthlyRevenue - currentMonthlyRevenue;
  const annualAdditionalRevenue = additionalMonthlyRevenue * 12;
  const roi = ((annualAdditionalRevenue - 7500) / 7500) * 100; // Assuming Growth plan cost

  return {
    currentMonthlyRevenue: Math.round(currentMonthlyRevenue),
    projectedMonthlyRevenue: Math.round(projectedMonthlyRevenue),
    additionalMonthlyRevenue: Math.round(additionalMonthlyRevenue),
    annualAdditionalRevenue: Math.round(annualAdditionalRevenue),
    roi: Math.round(roi),
    paybackMonths: Math.ceil(7500 / additionalMonthlyRevenue)
  };
}
