export interface CaseStudy {
  id: string;
  title: string;
  company: string;
  industry: string;
  icon: string;
  challenge: string;
  solution: string;
  process: string[];
  results: {
    metric: string;
    before: string;
    after: string;
    improvement: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  duration: string;
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "case-1",
    title: "CloudSync SaaS: De 0 à 50 leads/mois",
    company: "CloudSync",
    industry: "SaaS",
    icon: "☁️",
    challenge: "CloudSync était une excellente solution technique, mais personne ne la connaissait. Zéro leads, zéro traction malgré un produit solide.",
    solution: "Nous avons construit une stratégie digitale complète : refonte du site, création d'une communauté, content marketing stratégique, et optimisation des conversions.",
    process: [
      "Audit complet du site et des processus de conversion",
      "Refonte du site avec focus sur la clarté du message",
      "Création d'une stratégie de contenu B2B",
      "Mise en place de campagnes de lead generation",
      "Optimisation continue basée sur les données"
    ],
    results: [
      {
        metric: "Leads générés",
        before: "0/mois",
        after: "50/mois",
        improvement: "+∞"
      },
      {
        metric: "Taux de conversion",
        before: "0.5%",
        after: "3.2%",
        improvement: "+540%"
      },
      {
        metric: "Trafic mensuel",
        before: "500 visites",
        after: "8,500 visites",
        improvement: "+1,600%"
      },
      {
        metric: "Coût par lead",
        before: "N/A",
        after: "€45",
        improvement: "Rentable"
      }
    ],
    testimonial: {
      quote: "TechFlow a transformé notre business. En 3 mois, nous avons des leads qualifiés qui se convertissent en clients. C'est exactement ce qu'il nous fallait.",
      author: "Sophie Martin",
      role: "Fondatrice & CEO"
    },
    duration: "3 mois",
    featured: true
  },
  {
    id: "case-2",
    title: "E-commerce Fashion: +240% de chiffre d'affaires",
    company: "Fashion Forward",
    industry: "E-commerce",
    icon: "👗",
    challenge: "Le site existant avait une mauvaise UX, des performances lentes, et un taux de conversion de 2%. Les clients abandonnaient leur panier à cause des frictions.",
    solution: "Refonte complète du site avec focus sur l'expérience utilisateur, optimisation des performances, et stratégie de conversion multi-canale.",
    process: [
      "Analyse comportementale des utilisateurs",
      "Refonte du design avec UX premium",
      "Optimisation des performances (PageSpeed +85%)",
      "Mise en place d'un système de recommandations IA",
      "Campagnes de retargeting et email marketing"
    ],
    results: [
      {
        metric: "Chiffre d'affaires",
        before: "€50k/mois",
        after: "€170k/mois",
        improvement: "+240%"
      },
      {
        metric: "Taux de conversion",
        before: "2.0%",
        after: "4.8%",
        improvement: "+140%"
      },
      {
        metric: "Panier moyen",
        before: "€85",
        after: "€145",
        improvement: "+71%"
      },
      {
        metric: "Taux de rebond",
        before: "65%",
        after: "32%",
        improvement: "-51%"
      }
    ],
    testimonial: {
      quote: "Les résultats parlent d'eux-mêmes. Notre chiffre d'affaires a triplé en 6 mois. L'équipe TechFlow comprend vraiment l'e-commerce.",
      author: "Émilie Rousseau",
      role: "Responsable Marketing"
    },
    duration: "6 mois",
    featured: true
  },
  {
    id: "case-3",
    title: "Cabinet de Conseil: +156% de clients acquis",
    company: "Strategic Partners",
    industry: "Conseil",
    icon: "💼",
    challenge: "Cabinet traditionnel avec une présence digitale faible. Pas de stratégie de contenu, pas de visibilité en ligne, croissance limitée à 5-10 clients/an.",
    solution: "Positionnement comme thought leader via content marketing, création d'une communauté, et stratégie de lead generation B2B.",
    process: [
      "Audit de positionnement et d'expertise",
      "Création d'une stratégie de content marketing",
      "Publication d'articles et de cas études",
      "Mise en place d'une newsletter stratégique",
      "Participation aux événements et webinaires"
    ],
    results: [
      {
        metric: "Clients acquis/an",
        before: "15 clients",
        after: "38 clients",
        improvement: "+156%"
      },
      {
        metric: "Valeur contrats",
        before: "€50k/client",
        after: "€75k/client",
        improvement: "+50%"
      },
      {
        metric: "Leads qualifiés",
        before: "2/mois",
        after: "8/mois",
        improvement: "+300%"
      },
      {
        metric: "Coût d'acquisition",
        before: "€3,000",
        after: "€1,200",
        improvement: "-60%"
      }
    ],
    testimonial: {
      quote: "TechFlow nous a positionnés comme leaders du marché. Notre croissance a décuplé. C'est un investissement qui a payé au-delà de nos attentes.",
      author: "Thomas Bernard",
      role: "Associé"
    },
    duration: "9 mois",
    featured: true
  },
  {
    id: "case-4",
    title: "Startup HealthTech: +450% d'utilisateurs",
    company: "HealthHub",
    industry: "HealthTech",
    icon: "🏥",
    challenge: "Startup avec un produit innovant mais une acquisition utilisateurs très lente. Besoin d'accélérer la croissance pour lever des fonds.",
    solution: "Stratégie de growth hacking complète : optimisation du funnel, viral loops, partenariats, et campagnes de contenu ciblées.",
    process: [
      "Audit du funnel d'acquisition",
      "Optimisation du onboarding utilisateur",
      "Création de viral loops et referral program",
      "Partenariats stratégiques avec influenceurs santé",
      "Campagnes de contenu éducatif"
    ],
    results: [
      {
        metric: "Utilisateurs actifs",
        before: "500 users",
        after: "2,750 users",
        improvement: "+450%"
      },
      {
        metric: "Taux de rétention",
        before: "35%",
        after: "72%",
        improvement: "+106%"
      },
      {
        metric: "Coût d'acquisition",
        before: "€25",
        after: "€8",
        improvement: "-68%"
      },
      {
        metric: "Lifetime value",
        before: "€150",
        after: "€450",
        improvement: "+200%"
      }
    ],
    testimonial: {
      quote: "Avec TechFlow, nous avons accéléré notre croissance de 18 mois. Nous avons pu lever notre Série A grâce à ces résultats.",
      author: "Laure Petit",
      role: "Co-fondatrice"
    },
    duration: "12 mois"
  }
];

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((cs) => cs.featured).slice(0, 3);
}
