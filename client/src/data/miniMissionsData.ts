export interface MiniMission {
  id: string;
  title: string;
  price: number;
  targetAudience: string;
  description: string;
  deliverables: string[];
  timeline: string;
  icon: string;
}

export const miniMissions: MiniMission[] = [
  {
    id: "mini-1",
    title: "Audit Express Réseaux",
    price: 99,
    targetAudience: "Créateurs de contenu, petites marques",
    description: "Optimisez votre présence sur les réseaux en 48h avec un audit détaillé et des recommandations actionnables.",
    deliverables: [
      "Audit de 3 posts Instagram/TikTok",
      "PDF de 5 recommandations actionnables",
      "1 idée de contenu viral"
    ],
    timeline: "48h",
    icon: "📱"
  },
  {
    id: "mini-2",
    title: "Page 'Link in Bio' Pro",
    price: 249,
    targetAudience: "Musiciens, influenceurs, vendeurs",
    description: "Une page web élégante et performante pour centraliser tous vos liens et convertir vos followers en clients.",
    deliverables: [
      "Page web 1 section design moderne",
      "Intégration de 5 liens max",
      "Formulaire de contact basique"
    ],
    timeline: "3 jours",
    icon: "🔗"
  },
  {
    id: "mini-3",
    title: "Logo & Identité Flash",
    price: 199,
    targetAudience: "Jeunes entrepreneurs lançant leur activité",
    description: "Lancez votre marque avec une identité visuelle cohérente et professionnelle en 1 semaine.",
    deliverables: [
      "3 propositions de logo",
      "Charte graphique simple (couleurs, police)",
      "Fichiers pour réseaux sociaux"
    ],
    timeline: "1 semaine",
    icon: "🎨"
  },
  {
    id: "mini-4",
    title: "Landing Page d'Événement",
    price: 349,
    targetAudience: "Organisateurs d'événements, associations",
    description: "Une page de vente/inscription optimisée pour maximiser vos inscriptions et gérer les paiements automatiquement.",
    deliverables: [
      "Page de vente/inscription unique",
      "Intégration formulaire + paiement Stripe basique",
      "Optimisation mobile"
    ],
    timeline: "5 jours",
    icon: "🎟️"
  }
];
