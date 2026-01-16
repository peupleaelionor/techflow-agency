export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  image: string;
  testimonial: string;
  testimonialAuthor: string;
  testimonialRole: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "case-1",
    title: "Transformation E-commerce: +240% de Chiffre d'Affaires",
    client: "LuxeStyle Fashion",
    industry: "E-commerce & Fashion",
    challenge: "Site e-commerce obsolète avec une expérience utilisateur confuse. Taux de conversion de 1.2%, panier moyen faible, et aucune stratégie de rétention client.",
    solution: "Refonte complète du site avec UX optimisée, intégration d'un système de recommandation personnalisé, et mise en place d'une stratégie de marketing automation pour la rétention.",
    results: [
      {
        metric: "+240%",
        value: "Chiffre d'affaires",
        description: "De 50k à 170k €/mois en 6 mois"
      },
      {
        metric: "+89%",
        value: "Taux de conversion",
        description: "De 1.2% à 2.3%"
      },
      {
        metric: "+156%",
        value: "Panier moyen",
        description: "De 45€ à 115€"
      }
    ],
    image: "/images/case-study-1.jpg",
    testimonial: "TechFlow a complètement transformé notre business. Le site génère 3x plus de ventes que l'ancien. L'UX est impeccable et le support est réactif.",
    testimonialAuthor: "Émilie Rousseau",
    testimonialRole: "Responsable Marketing"
  },
  {
    id: "case-2",
    title: "SaaS B2B: Acquisition de 127% de Leads Qualifiés",
    client: "CloudSync Solutions",
    industry: "SaaS & Technologie",
    challenge: "Plateforme SaaS avec une présence digitale faible. Peu de leads, mauvais positionnement face aux concurrents, et aucune stratégie de contenu.",
    solution: "Création d'un site corporate premium, mise en place d'une stratégie SEO avancée, et création d'un content hub pour établir l'expertise.",
    results: [
      {
        metric: "+127%",
        value: "Leads générés",
        description: "De 10 à 50 leads/mois"
      },
      {
        metric: "+89%",
        value: "Taux de qualification",
        description: "Amélioration de la qualité des leads"
      },
      {
        metric: "+45%",
        value: "Taux de fermeture",
        description: "Meilleure conversion des leads en clients"
      }
    ],
    image: "/images/case-study-2.jpg",
    testimonial: "TechFlow a dépassé nos attentes. Leur approche stratégique, combinée à une exécution impeccable, nous a permis de nous positionner comme leaders du marché.",
    testimonialAuthor: "Thomas Bernard",
    testimonialRole: "Associé, Cabinet de Conseil"
  },
  {
    id: "case-3",
    title: "Startup HealthTech: Croissance de 450% d'Utilisateurs",
    client: "MediFlow",
    industry: "HealthTech & Innovation",
    challenge: "Jeune startup avec un MVP fonctionnel mais aucune stratégie de croissance. Peu de visibilité, pas de stratégie marketing, et une expérience utilisateur à améliorer.",
    solution: "Refonte UX/UI complète, mise en place d'une stratégie de growth hacking, et création d'une campagne de marketing digital intégrée.",
    results: [
      {
        metric: "+450%",
        value: "Utilisateurs actifs",
        description: "De 500 à 2,750 utilisateurs"
      },
      {
        metric: "+380%",
        value: "Taux de rétention",
        description: "Amélioration significative de l'engagement"
      },
      {
        metric: "+18 mois",
        value: "Accélération",
        description: "De croissance anticipée"
      }
    ],
    image: "/images/case-study-3.jpg",
    testimonial: "Avec TechFlow, nous avons eu accès à une expertise que nous n'aurions jamais pu nous offrir en interne. Ils ont accéléré notre croissance de 18 mois.",
    testimonialAuthor: "Laure Petit",
    testimonialRole: "Co-fondatrice"
  }
];
