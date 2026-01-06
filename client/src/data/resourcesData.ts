export interface Resource {
  id: string;
  title: string;
  description: string;
  category: "template" | "guide" | "checklist";
  icon: string;
  content: string;
  downloadFormat: "pdf" | "docx" | "csv";
  date: string;
  featured?: boolean;
}

export const resources: Resource[] = [
  {
    id: "template-instagram-post",
    title: "Template - Post Instagram Optimisé",
    description: "Modèle prêt à l'emploi pour créer des posts Instagram engageants avec les bonnes proportions et CTA.",
    category: "template",
    icon: "📱",
    content: `STRUCTURE TEMPLATE INSTAGRAM POST:

[HEADLINE - 5-7 mots max]
Accroche percutante qui arrête le scroll

[VISUAL DESCRIPTION]
- Dimensions: 1080x1350px (Portrait)
- Couleurs: Noir, Blanc, #CCFF00
- Texte sur image: Max 20% de la surface

[BODY TEXT - 3 paragraphes]
Paragraphe 1: Le problème (2-3 lignes)
Paragraphe 2: La solution (2-3 lignes)
Paragraphe 3: L'appel à l'action (1-2 lignes)

[HASHTAGS - 15-30 max]
#TechFlow #DigitalStrategy #Croissance...

[CTA - Call To Action]
"Lien en bio" ou "Swipe up" ou "Répondez en commentaire"`,
    downloadFormat: "pdf",
    date: "15 Janvier 2025",
    featured: true
  },
  {
    id: "template-linkedin-article",
    title: "Template - Article LinkedIn Premium",
    description: "Structure complète pour rédiger des articles LinkedIn qui génèrent de l'engagement et de l'autorité.",
    category: "template",
    icon: "💼",
    content: `STRUCTURE ARTICLE LINKEDIN:

[HOOK - 1-2 lignes]
Accroche qui pose une question ou un problème

[CONTEXT - 2-3 paragraphes]
Contexte du problème / Statistique / Observation

[INSIGHT - 3-4 paragraphes]
Votre perspective unique / Conseil actionnable

[PROOF - 1-2 paragraphes]
Exemple concret / Cas client / Résultat mesurable

[CALL TO ACTION - 1-2 lignes]
Invitation à commenter / Partager / Visiter`,
    downloadFormat: "pdf",
    date: "14 Janvier 2025",
    featured: true
  },
  {
    id: "guide-content-strategy",
    title: "Guide - Stratégie de Contenu 30 Jours",
    description: "Guide complet pour construire une stratégie de contenu cohérente et mesurable sur 30 jours.",
    category: "guide",
    icon: "📚",
    content: `GUIDE: STRATÉGIE DE CONTENU 30 JOURS

SEMAINE 1: FONDATIONS
Jour 1-2: Définir votre audience (Persona)
Jour 3-4: Identifier les 3 piliers de contenu
Jour 5-7: Créer 7 posts (1 par jour)

SEMAINE 2: AMPLIFICATION
Jour 8-10: Analyser les performances
Jour 11-14: Adapter et itérer

SEMAINE 3: EXPERTISE
Jour 15-21: Publier des contenus longs (articles, vidéos)
Jour 22-24: Engager avec votre communauté

SEMAINE 4: CONVERSION
Jour 25-28: Ajouter des CTA stratégiques
Jour 29-30: Mesurer et planifier le mois suivant

MÉTRIQUES À TRACKER:
- Reach (portée)
- Engagement (likes, commentaires, partages)
- Clicks (vers votre site)
- Conversions (leads, ventes)`,
    downloadFormat: "pdf",
    date: "13 Janvier 2025",
    featured: true
  },
  {
    id: "checklist-launch-campaign",
    title: "Checklist - Lancer une Campagne Social Media",
    description: "Checklist complète pour ne rien oublier avant de lancer une campagne social media.",
    category: "checklist",
    icon: "✅",
    content: `CHECKLIST: LANCER UNE CAMPAGNE SOCIAL MEDIA

AVANT LE LANCEMENT:
☐ Définir l'objectif (Awareness, Engagement, Conversion)
☐ Identifier l'audience cible
☐ Créer 7-14 jours de contenu
☐ Préparer les visuels (images, vidéos)
☐ Rédiger les textes et CTA
☐ Tester les liens (pas de 404)
☐ Planifier les posts (Buffer, Later)
☐ Définir les horaires de publication
☐ Préparer les hashtags
☐ Créer un document de suivi

JOUR DU LANCEMENT:
☐ Vérifier que tous les posts sont programmés
☐ Tester les liens une dernière fois
☐ Préparer une réponse aux commentaires
☐ Alerter votre équipe
☐ Préparer les statistiques de base

PENDANT LA CAMPAGNE:
☐ Répondre aux commentaires dans les 24h
☐ Tracker les métriques clés
☐ Ajuster si nécessaire
☐ Engager avec les commentaires positifs
☐ Documenter les insights

APRÈS LA CAMPAGNE:
☐ Analyser les résultats
☐ Identifier ce qui a marché
☐ Identifier ce qui n'a pas marché
☐ Documenter les learnings
☐ Planifier la prochaine campagne`,
    downloadFormat: "pdf",
    date: "12 Janvier 2025"
  },
  {
    id: "template-email-sequence",
    title: "Template - Séquence Email de Bienvenue",
    description: "Séquence email automatisée pour convertir vos nouveaux abonnés en clients.",
    category: "template",
    icon: "📧",
    content: `SÉQUENCE EMAIL DE BIENVENUE (5 EMAILS)

EMAIL 1 - BIENVENUE (Envoyé immédiatement)
Sujet: Bienvenue chez TechFlow! 🎉
- Remercier l'abonné
- Présenter qui vous êtes
- Donner une ressource gratuite
- Lien vers le site

EMAIL 2 - HISTOIRE (Jour 1)
Sujet: Comment TechFlow a aidé [Cas Client]
- Raconter une histoire de succès
- Montrer les résultats
- Créer une connexion émotionnelle

EMAIL 3 - ÉDUCATION (Jour 3)
Sujet: 3 erreurs qui coûtent cher aux entrepreneurs
- Fournir de la valeur
- Éduquer sans vendre
- Créer de la confiance

EMAIL 4 - SOCIAL PROOF (Jour 5)
Sujet: Ce que nos clients disent de nous
- Partager des témoignages
- Montrer les résultats mesurables
- Renforcer la crédibilité

EMAIL 5 - APPEL À L'ACTION (Jour 7)
Sujet: Prêt à transformer votre business?
- Proposer une consultation gratuite
- Créer une urgence (limité dans le temps)
- Lien vers le formulaire de contact`,
    downloadFormat: "docx",
    date: "11 Janvier 2025",
    featured: true
  },
  {
    id: "guide-seo-basics",
    title: "Guide - SEO Basics pour Entrepreneurs",
    description: "Guide simplifié pour optimiser votre site pour les moteurs de recherche sans être un expert.",
    category: "guide",
    icon: "🔍",
    content: `GUIDE: SEO BASICS POUR ENTREPRENEURS

NIVEAU 1: FONDATIONS (Semaine 1)
1. Keyword Research
   - Identifier 5-10 mots-clés cibles
   - Utiliser Google Trends, Semrush, Ahrefs
   - Choisir des mots-clés avec volume + faible concurrence

2. On-Page SEO
   - Titre: 50-60 caractères, incluant le mot-clé
   - Meta Description: 150-160 caractères
   - H1, H2, H3: Structure hiérarchique
   - Contenu: 300+ mots, naturel, pertinent

NIVEAU 2: TECHNIQUE (Semaine 2-3)
1. Site Speed
   - Compresser les images
   - Minimifier CSS/JS
   - Utiliser un CDN

2. Mobile Friendly
   - Responsive design
   - Temps de chargement < 3s
   - Boutons cliquables

3. SSL Certificate
   - HTTPS obligatoire
   - Certificat valide

NIVEAU 3: AUTORITÉ (Semaine 4+)
1. Backlinks
   - Créer du contenu digne de partage
   - Demander des liens à des sites pertinents
   - Utiliser les ressources gratuites

2. Contenu Régulier
   - Blog: 1 article/semaine
   - Optimisé pour SEO
   - Lié à votre site principal

RÉSULTATS ATTENDUS:
- Mois 1-2: Pas de changement
- Mois 3-4: Premières améliorations
- Mois 6+: Résultats significatifs`,
    downloadFormat: "pdf",
    date: "10 Janvier 2025"
  }
];

export const resourceCategories = [
  { id: "template", label: "Templates", icon: "📋", count: 3 },
  { id: "guide", label: "Guides", icon: "📚", count: 2 },
  { id: "checklist", label: "Checklists", icon: "✅", count: 1 }
];

export function getResourcesByCategory(category: string): Resource[] {
  return resources.filter((r) => r.category === category);
}

export function getFeaturedResources(): Resource[] {
  return resources.filter((r) => r.featured).slice(0, 6);
}
