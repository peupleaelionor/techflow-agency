# 📊 Guide de Configuration - Campagnes Publicitaires TechFlow

## 🎯 Vue d'ensemble

Ce guide vous aide à configurer votre site TechFlow pour les campagnes publicitaires (Google Ads, Facebook Ads, LinkedIn Ads, etc.). Tous les éléments SEO et de tracking sont prêts, il suffit de les activer.

---

## 1️⃣ Google Analytics 4 (GA4)

### Configuration

1. **Créer un compte Google Analytics** : https://analytics.google.com
2. **Créer une propriété GA4** pour votre domaine
3. **Copier votre ID de suivi** (format : `G-XXXXXXXXXX`)
4. **Remplacer dans le code** :

```html
<!-- Dans client/index.html, ligne 65 -->
gtag('config', 'G-XXXXXXXXXX'); // Remplacez par votre ID
```

### Événements à Tracker

- **Page Views** : Automatique
- **Contact Form Submissions** : Déjà configuré
- **Service Selection** : Déjà configuré
- **Newsletter Signup** : Déjà configuré
- **CTA Clicks** : Déjà configuré

---

## 2️⃣ Facebook Pixel

### Configuration

1. **Créer un compte Facebook Business** : https://business.facebook.com
2. **Créer un Pixel Facebook**
3. **Copier votre ID de Pixel** (format : `123456789`)
4. **Remplacer dans le code** :

```html
<!-- Dans client/index.html, ligne 77 -->
fbq('init', '123456789'); // Remplacez par votre Pixel ID
fbq('track', 'PageView');
```

### Événements à Tracker

- **PageView** : Automatique
- **Lead** : Formulaire de contact
- **Contact** : Appel WhatsApp
- **Purchase** : Sélection de service

---

## 3️⃣ Google Ads Conversion Tracking

### Configuration

1. **Créer un compte Google Ads** : https://ads.google.com
2. **Aller dans Outils > Conversions**
3. **Créer une conversion "Site web"**
4. **Copier le code de suivi**
5. **Ajouter dans le formulaire de contact** (Contact.tsx)

### Conversions Recommandées

- **Form Submission** : Contact form
- **Service Selection** : Quand un utilisateur choisit un pack
- **Newsletter Signup** : Inscription à la newsletter

---

## 4️⃣ LinkedIn Insight Tag

### Configuration

1. **Créer un compte LinkedIn Campaign Manager** : https://business.linkedin.com
2. **Aller dans Account Assets > Insight Tag**
3. **Copier votre Insight Tag ID**
4. **Ajouter dans le head du index.html** :

```html
<script type="text/javascript">
  _linkedin_partner_id = "123456789";
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(_linkedin_partner_id);
</script>
<script type="text/javascript">
  (function(){var s = document.getElementsByTagName("script")[0];
  var b = document.createElement("script");
  b.type = "text/javascript";b.async = true;
  b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
  s.parentNode.insertBefore(b, s);})();
</script>
```

---

## 5️⃣ Sitemap et Robots.txt

✅ **Déjà configurés** :
- `/public/sitemap.xml` : Sitemap multilingue pour Google
- `/public/robots.txt` : Optimisé pour tous les moteurs de recherche

### Soumettre à Google Search Console

1. **Aller sur** : https://search.google.com/search-console
2. **Ajouter votre domaine**
3. **Soumettre le sitemap** : `https://techflow-agency.vercel.app/sitemap.xml`
4. **Vérifier les erreurs d'indexation**

---

## 6️⃣ Structured Data (Schema.org)

✅ **Déjà configuré** dans `client/index.html` :
- LocalBusiness Schema
- Aggregate Rating
- Service Offers
- Geographic Areas

### Vérifier avec Google Rich Results Test

1. **Aller sur** : https://search.google.com/test/rich-results
2. **Coller votre URL** : `https://techflow-agency.vercel.app`
3. **Vérifier que tous les éléments sont détectés**

---

## 7️⃣ Hreflang Tags (Multilingue)

✅ **Déjà configurés** pour les 5 langues :
- 🇫🇷 Français (FR)
- 🇬🇧 Anglais (EN)
- 🇪🇸 Espagnol (ES)
- 🇵🇹 Portugais (PT)
- 🇨🇩 Lingala (LN)

### Vérifier avec Google Search Console

1. **Aller dans** : Coverage > Alternate Pages
2. **Vérifier que Google détecte les versions multilingues**

---

## 8️⃣ Open Graph Tags (Réseaux Sociaux)

✅ **Déjà configurés** dans `client/index.html` :
- `og:title`
- `og:description`
- `og:image`
- `og:url`
- `twitter:card`

### Tester avec les Outils de Débogage

- **Facebook** : https://developers.facebook.com/tools/debug/
- **Twitter** : https://cards-dev.twitter.com/validator
- **LinkedIn** : https://www.linkedin.com/post-inspector/

---

## 9️⃣ Configuration des Conversions par Plateforme

### Google Ads

```javascript
// Ajouter dans Contact.tsx après soumission du formulaire
gtag('event', 'conversion', {
  'send_to': 'AW-XXXXXXXXXX/XXXXXXXXXXXXXX'
});
```

### Facebook Ads

```javascript
// Ajouter après soumission du formulaire
fbq('track', 'Lead', {
  value: '3500.00',
  currency: 'EUR'
});
```

### LinkedIn Ads

```javascript
// Ajouter après soumission du formulaire
window.lintrk('track', { conversion_id: 123456 });
```

---

## 🔟 Checklist de Lancement

- [ ] Google Analytics 4 configuré et testé
- [ ] Facebook Pixel activé et testé
- [ ] Google Ads Conversion Tracking en place
- [ ] LinkedIn Insight Tag installé
- [ ] Sitemap soumis à Google Search Console
- [ ] Structured Data validé avec Rich Results Test
- [ ] Hreflang Tags vérifiés pour toutes les langues
- [ ] Open Graph Tags testés sur les réseaux sociaux
- [ ] Conversions configurées sur toutes les plateformes
- [ ] Campagnes de test lancées (petit budget)

---

## 📈 Optimisations Recommandées

### A/B Testing
- Testez différents CTA (Call-To-Action)
- Testez différentes images de héros
- Testez différents prix/offres

### Remarketing
- Configurez des audiences de remarketing pour les visiteurs
- Créez des campagnes de suivi pour les utilisateurs qui ont vu vos services

### Audience Targeting
- Ciblez par région (France, Espagne, Amérique Latine, Afrique, Asie)
- Ciblez par industrie (E-commerce, SaaS, Agences, etc.)
- Ciblez par intérêt (Digital Marketing, Web Development, Growth Hacking)

---

## 🆘 Dépannage

### Google Analytics ne montre pas de données
- Vérifier que le GA ID est correct
- Vérifier que le script est chargé (F12 > Network)
- Attendre 24-48h pour les premières données

### Facebook Pixel ne track pas
- Vérifier que le Pixel ID est correct
- Utiliser Facebook Pixel Helper (extension Chrome)
- Vérifier que fbq('track', 'PageView') est appelé

### Structured Data non détecté
- Vérifier avec Google Rich Results Test
- Vérifier la syntaxe JSON
- Attendre 24-48h pour Google d'indexer les changements

---

## 📞 Support

Pour toute question sur la configuration :
- **Email** : Techflow@outlook.fr
- **WhatsApp** : [Lien WhatsApp]
- **Site** : https://techflow-agency.vercel.app

---

**Dernière mise à jour** : 16 janvier 2026
**Version** : 1.0
