export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  avatar: string;
  quote: string;
  metric: string;
  metricLabel: string;
  result: string;
  industry: string;
}

export interface TestimonialStat {
  label: string;
  value: string;
  icon: 'clients' | 'growth' | 'retention';
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Sophie Martin",
    company: "CloudSync SaaS",
    role: "Fondatrice & CEO",
    avatar: "/images/testimonial-2.jpg",
    quote: "TechFlow a transformé notre présence digitale. En 3 mois, nous avons multiplié nos leads par 5. L'équipe comprend vraiment nos enjeux et livre des résultats mesurables.",
    metric: "+127%",
    metricLabel: "Leads générés",
    result: "De 10 à 50 leads/mois",
    industry: "SaaS"
  },
  {
    id: "testimonial-2",
    name: "Marc Dupont",
    company: "Agence Créative Lyon",
    role: "Directeur Général",
    avatar: "/images/testimonial-1.jpg",
    quote: "Nous avons enfin une agence qui écoute vraiment. Le ROI est clair, les délais sont respectés, et l'expertise est indéniable. TechFlow est devenu notre partenaire stratégique.",
    metric: "+89%",
    metricLabel: "Taux de conversion",
    result: "De 2% à 3.8%",
    industry: "Agence"
  },
  {
    id: "testimonial-3",
    name: "Émilie Rousseau",
    company: "E-commerce Fashion",
    role: "Responsable Marketing",
    avatar: "/images/testimonial-4.jpg",
    quote: "Le site qu'ils ont créé génère 3x plus de ventes que l'ancien. L'UX est impeccable, les performances sont excellentes, et le support est réactif.",
    metric: "+240%",
    metricLabel: "Chiffre d'affaires",
    result: "De 50k à 170k €/mois",
    industry: "E-commerce"
  },
  {
    id: "testimonial-4",
    name: "Thomas Bernard",
    company: "Cabinet de Conseil",
    role: "Associé",
    avatar: "/images/testimonial-1.jpg",
    quote: "TechFlow a dépassé nos attentes. Leur approche stratégique, combinée à une exécution impeccable, nous a permis de nous positionner comme leaders du marché.",
    metric: "+156%",
    metricLabel: "Clients acquis",
    result: "De 15 à 38 clients",
    industry: "Conseil"
  },
  {
    id: "testimonial-5",
    name: "Laure Petit",
    company: "Startup HealthTech",
    role: "Co-fondatrice",
    avatar: "/images/testimonial-2.jpg",
    quote: "Avec TechFlow, nous avons eu accès à une expertise que nous n'aurions jamais pu nous offrir en interne. Ils ont accéléré notre croissance de 18 mois.",
    metric: "+450%",
    metricLabel: "Utilisateurs actifs",
    result: "De 500 à 2,750 users",
    industry: "HealthTech"
  },
  {
    id: "testimonial-6",
    name: "Jean Moreau",
    company: "Restaurant Group",
    role: "Directeur Digital",
    avatar: "/images/testimonial-5.jpg",
    quote: "Leur compréhension du secteur restauration est impressionnante. Les résultats parlent d'eux-mêmes : plus de réservations, meilleure visibilité, clients plus satisfaits.",
    metric: "+78%",
    metricLabel: "Réservations en ligne",
    result: "De 200 à 356 réservations/mois",
    industry: "Restauration"
  }
];

export const testimonialStats: TestimonialStat[] = [
  { label: "Clients satisfaits", value: "200+", icon: "clients" },
  { label: "Croissance moyenne", value: "+127%", icon: "growth" },
  { label: "Taux de rétention", value: "98%", icon: "retention" },
  { label: "Projets livrés", value: "500+", icon: "retention" }
];
