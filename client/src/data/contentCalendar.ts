export interface ContentDay {
  day: string;
  dayFr: string;
  pillar: "PREUVE" | "BÉNÉFICE" | "INSIGHT";
  pillarColor: string;
  title: string;
  mainMessage: string;
  storyText: string;
  hashtags: string[];
  icon: string;
  keyBenefit: string;
}

export const contentCalendar: ContentDay[] = [
  {
    day: "Monday",
    dayFr: "Lundi",
    pillar: "PREUVE",
    pillarColor: "#10B981",
    title: "Résultat (Success Story)",
    mainMessage: "Le temps est votre ressource la plus précieuse. Chez TechFlow, notre mission n'est pas seulement de livrer des projets digitaux d'excellence, mais de vous offrir la sérénité de savoir que votre croissance est entre des mains expertes.",
    storyText: "Stop aux projets qui s'éternisent. Découvrez comment TechFlow vous rend votre temps. Swipe up pour notre approche axée sur la performance.",
    hashtags: ["#GainDeTemps", "#TechFlow", "#CroissanceSereine", "#AgenceDigitale", "#Performance"],
    icon: "🎯",
    keyBenefit: "Gain de temps"
  },
  {
    day: "Tuesday",
    dayFr: "Mardi",
    pillar: "INSIGHT",
    pillarColor: "#F59E0B",
    title: "Conseil (Tip actionnable)",
    mainMessage: "Conseil du Mardi : L'agilité commence par la clarté. Avant de vous lancer dans un nouveau développement, définissez une seule métrique de succès (KPI) et alignez toutes vos équipes dessus.",
    storyText: "Un seul KPI peut transformer votre semaine. 💡 Le tip du jour pour une exécution digitale sans faille. À voir absolument !",
    hashtags: ["#ConseilPro", "#Agilité", "#Productivité", "#TechFlow", "#DigitalStrategy"],
    icon: "💡",
    keyBenefit: "Clarté opérationnelle"
  },
  {
    day: "Wednesday",
    dayFr: "Mercredi",
    pillar: "PREUVE",
    pillarColor: "#10B981",
    title: "Preuve (Résultat)",
    mainMessage: "Plus de 200 projets livrés avec succès. Ce chiffre n'est pas une simple statistique, c'est la preuve de notre engagement indéfectible envers le résultat et la fiabilité.",
    storyText: "200 raisons de nous faire confiance. 🚀 Notre expérience est votre plus grand atout. Lien en bio pour découvrir nos études de cas.",
    hashtags: ["#PreuveDeRésultat", "#ExpertiseDigitale", "#TechFlow", "#Fiabilité", "#Croissance"],
    icon: "✅",
    keyBenefit: "Expertise prouvée"
  },
  {
    day: "Thursday",
    dayFr: "Jeudi",
    pillar: "BÉNÉFICE",
    pillarColor: "#8B5CF6",
    title: "Présentation (Image de marque)",
    mainMessage: "De Paris à Londres, en passant par New York, notre vision est globale, notre exécution est locale. TechFlow est votre partenaire digital premium.",
    storyText: "Un réseau d'experts à travers le monde pour votre croissance. 🌍 Découvrez l'avantage TechFlow.",
    hashtags: ["#InternationalAgency", "#TechFlow", "#GlobalVision", "#PremiumDigital", "#NewYork"],
    icon: "🌍",
    keyBenefit: "Présence mondiale"
  },
  {
    day: "Friday",
    dayFr: "Vendredi",
    pillar: "BÉNÉFICE",
    pillarColor: "#8B5CF6",
    title: "Engagement (Sérénité)",
    mainMessage: "La sérénité de l'entrepreneur vient de la certitude que les fondations sont solides. Si vous pouviez externaliser une seule tâche digitale pour gagner en tranquillité, quelle serait-elle ?",
    storyText: "Quel est votre plus grand défi digital cette semaine ? Répondez à notre sondage et découvrez comment nous pouvons vous aider.",
    hashtags: ["#Sérénité", "#Engagement", "#TechFlow", "#GainDeTemps", "#Entrepreneur"],
    icon: "🧘",
    keyBenefit: "Tranquillité d'esprit"
  },
  {
    day: "Saturday",
    dayFr: "Samedi",
    pillar: "BÉNÉFICE",
    pillarColor: "#8B5CF6",
    title: "Culture (Lifestyle détendu)",
    mainMessage: "Le digital ne doit pas être une source de stress, mais un levier de liberté. Chez TechFlow, nous croyons que la meilleure performance naît d'un esprit reposé.",
    storyText: "Pause café bien méritée. ☕️ L'équipe TechFlow vous souhaite un excellent week-end. On se retrouve lundi pour de nouveaux insights !",
    hashtags: ["#CultureTechFlow", "#WorkLifeBalance", "#Sérénité", "#AgenceDigitale", "#Weekend"],
    icon: "☕",
    keyBenefit: "Équilibre de vie"
  },
  {
    day: "Sunday",
    dayFr: "Dimanche",
    pillar: "INSIGHT",
    pillarColor: "#F59E0B",
    title: "Préparation (Anticipation)",
    mainMessage: "Anticiper, c'est déjà gagner. Prenez 15 minutes aujourd'hui pour planifier les trois objectifs digitaux qui feront la différence cette semaine.",
    storyText: "Préparez-vous à l'excellence. 🚀 Nos 3 questions clés pour dominer votre semaine digitale.",
    hashtags: ["#Préparation", "#Innovation", "#TechFlow", "#StratégieDigitale", "#Croissance"],
    icon: "📋",
    keyBenefit: "Anticipation stratégique"
  }
];

export const pillars = [
  {
    name: "PREUVE",
    description: "Expertise & Résultats",
    color: "#10B981",
    icon: "✓",
    message: "Démontrer la crédibilité à travers des résultats concrets"
  },
  {
    name: "BÉNÉFICE",
    description: "Sérénité & Croissance",
    color: "#8B5CF6",
    icon: "♥",
    message: "Créer une connexion émotionnelle avec nos clients"
  },
  {
    name: "INSIGHT",
    description: "Conseil Micro",
    color: "#F59E0B",
    icon: "💡",
    message: "Apporter de la valeur immédiate et actionnable"
  }
];
