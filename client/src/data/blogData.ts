export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  readTime: number;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "Pourquoi 70% des projets digitaux échouent",
    slug: "pourquoi-70-pourcent-projets-digitaux-echouent",
    excerpt: "Les erreurs les plus courantes et comment les éviter. Une analyse profonde des blocages qui empêchent les entrepreneurs de réussir leurs projets digitaux.",
    content: `
# Pourquoi 70% des projets digitaux échouent

Les chiffres sont clairs : 7 projets digitaux sur 10 ne livrent pas les résultats attendus. Mais pourquoi?

## Les 3 erreurs fondamentales

### 1. Pas de stratégie claire

La plupart des entrepreneurs lancent des projets sans vision claire. Ils commencent par la technologie au lieu de commencer par le problème.

### 2. Mauvaise exécution

Même avec une bonne stratégie, l'exécution est souvent bâclée. Des délais qui s'éternisent, des équipes désorganisées, des outils inadaptés.

### 3. Pas de mesure

Sans KPIs clairs, impossible de savoir si le projet fonctionne. Les entrepreneurs font du travail pour faire du travail, sans lien avec les résultats.

## Comment TechFlow évite ces pièges

Nous commençons toujours par une stratégie solide, exécutée par une équipe expérimentée, avec des métriques claires.

**Résultat:** 98% de nos projets dépassent les attentes de nos clients.
    `,
    category: "Stratégie",
    date: "2025-01-15",
    author: "TechFlow Team",
    readTime: 5,
    featured: true
  },
  {
    id: "blog-2",
    title: "Les 3 erreurs coûteuses que font les startups",
    slug: "3-erreurs-couteuses-startups",
    excerpt: "Des erreurs qui coûtent des millions. Découvrez comment les éviter et accélérer votre croissance de 18 mois.",
    content: `
# Les 3 erreurs coûteuses que font les startups

Les startups font souvent les mêmes erreurs. Voici les 3 plus coûteuses.

## Erreur 1: Mauvaise acquisition utilisateurs

Les startups dépensent trop en marketing sans optimiser le funnel. Résultat: un coût d'acquisition 5x plus élevé que nécessaire.

## Erreur 2: Pas de PMF (Product-Market Fit)

En lancant trop tôt, sans valider le marché, les startups gaspillent des ressources sur un produit que personne ne veut.

## Erreur 3: Équipe mal alignée

Sans vision claire, l'équipe travaille en silos. Les développeurs ne comprennent pas les clients, les commerciaux ne comprennent pas le produit.

## La solution

Une stratégie claire, une équipe alignée, et une mesure constante.
    `,
    category: "Croissance",
    date: "2025-01-14",
    author: "TechFlow Team",
    readTime: 4,
    featured: true
  },
  {
    id: "blog-3",
    title: "Croissance durable: au-delà de la vanité",
    slug: "croissance-durable-au-dela-vanite",
    excerpt: "Les vraies métriques de croissance. Comment mesurer ce qui compte vraiment et éviter les pièges des vanity metrics.",
    content: `
# Croissance durable: au-delà de la vanité

Beaucoup d'entrepreneurs se focalisent sur les mauvaises métriques. Voici comment identifier les vraies métriques de croissance.

## Les vanity metrics à éviter

- Nombre total de visiteurs
- Nombre total de followers
- Nombre total de leads

Ces métriques ne disent rien sur la qualité ou la rentabilité.

## Les vraies métriques

- Coût d'acquisition (CAC)
- Lifetime value (LTV)
- Taux de rétention
- Taux de conversion

## Comment les optimiser

Chaque métrique a des leviers spécifiques. Nous les optimisons systématiquement pour nos clients.
    `,
    category: "Métriques",
    date: "2025-01-13",
    author: "TechFlow Team",
    readTime: 4
  }
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured).slice(0, 3);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
