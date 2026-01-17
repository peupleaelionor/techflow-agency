# TechFlow Solutions — Production Ready

## 📋 Vue d'ensemble

Site de génération de leads optimisé pour la conversion. Stack : **React 19 + Vite + TypeScript + Wouter + Zod + Resend**.

**Garanties** :
- ✅ Zéro 404 sur parcours normaux
- ✅ Formulaire fiable (Resend)
- ✅ Navigation robuste avec anchors
- ✅ UX erreurs humaines
- ✅ Tracking events complet
- ✅ Accessible + mobile-first

---

## 🚀 Démarrage rapide

### 1. Installation

```bash
pnpm install
```

### 2. Configuration environnement

Créer `.env.local` à la racine :

```env
# Resend (email)
RESEND_API_KEY=your_resend_key_here

# Destination email (où les leads arrivent)
TO_EMAIL=contact@techflowsolutions.space

# Expéditeur (domaine Resend vérifié, ou onboarding@resend.dev en test)
FROM_EMAIL=TechFlow <onboarding@resend.dev>

# Voir ci-dessous pour configurer un domaine personnalisé
```

### 3. Obtenir une clé Resend

1. Aller sur [resend.com](https://resend.com)
2. Créer un compte (gratuit jusqu'à 100 emails/jour)
3. Copier la clé API
4. **Important** : Pour utiliser `contact@techflowsolutions.space`, vérifier le domaine dans Resend (DNSRecords)

### 4. Démarrage dev

```bash
pnpm dev
```

Visiter http://localhost:5173

---

## 🧪 Tests email en dev

### Option 1 : Resend + clé réelle

Si `RESEND_API_KEY` est présent dans `.env.local`, les emails seront réellement envoyés à l'adresse en `TO_EMAIL`.

**Vérifier les emails reçus** :

```bash
# Tester l'API directement
curl -X POST http://localhost:5173/api/lead \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "you@example.com",
    "phone": "",
    "projectType": "Audit Express Réseaux (99€)",
    "budget": "300-1000",
    "message": "This is a test message for testing email delivery"
  }'
```

### Option 2 : Simulation (sans Resend)

Sans `RESEND_API_KEY`, l'endpoint retourne succès simulé (utile en dev local).

**Vérifier les logs serveur** :

```
[timestamp] Lead API - method: POST
[timestamp] Email sent successfully - ID: simulated_id
```

### Déboguer

En cas d'erreur :

1. **Clé API invalide** → Vérifier `RESEND_API_KEY` dans `.env.local`
2. **Domaine non vérifié** → Vérifier les DNS records dans Resend
3. **Timeouts** → Vérifier la connectivité réseau

---

## 📁 Architecture

```
client/src/
  ├── app/
  │   └── routes.ts          # Routes centralisées + constantes
  ├── components/
  │   ├── Header.tsx         # Nav sticky + mobile menu
  │   ├── ContactForm.tsx    # Formulaire Zod + anti-spam
  │   ├── MiniMissions.tsx   # Offres 4 cartes
  │   ├── SocialProof.tsx    # Témoignages + "Pourquoi nous"
  │   ├── ErrorBoundary.tsx  # Fallback UI crash
  │   └── ... (autres)
  ├── lib/
  │   ├── zodSchemas.ts      # Schémas de validation partagés
  │   ├── analytics.ts       # Tracking events
  │   ├── scroll.ts          # Scroll vers anchors
  │   └── ... (autres)
  ├── pages/
  │   ├── Home.tsx           # Accueil (Hero + sections)
  │   ├── Contact.tsx        # Formulaire
  │   ├── Portfolio.tsx      # Nos réalisations
  │   ├── Privacy.tsx        # Politique de confidentialité
  │   ├── NotFound.tsx       # 404 custom
  │   └── ... (autres existantes)
  └── App.tsx                # Router + ErrorBoundary

api/
  └── lead.ts               # Endpoint POST /api/lead (Vercel)
```

---

## 🔗 Routes garanties

| Route | Statut | Composant |
|-------|--------|-----------|
| `/` | ✅ OK | Home |
| `/portfolio` | ✅ OK | Portfolio |
| `/contact` | ✅ OK | Contact (form) |
| `/privacy` | ✅ OK | Privacy |
| `/route-inexistante` | ✅ 404 custom | NotFound |

### Navigation depuis Header

- **Accueil** → `/`
- **Services** → `/` + scroll `#services`
- **Mini-Missions** → `/` + scroll `#mini-missions`
- **Portfolio** → `/portfolio`
- **Contact** → `/contact`

**Règle anti-bug** : Depuis `/portfolio` ou `/contact`, cliquer "Services/Mini-Missions" navigue vers `/` ET scroll automatiquement.

---

## 📋 Formulaire Contact

### Champs

| Champ | Type | Requis | Validation |
|-------|------|--------|-----------|
| Nom | Text | ✅ | Min 2 caractères |
| Email | Email | ✅ | Email valide |
| Téléphone | Tel | ❌ | - |
| Type de projet | Select | ✅ | Liste prédéfinie |
| Budget | Select | ✅ | Énumération |
| Message | Textarea | ✅ | Min 10 caractères |
| company_website | Text (hidden) | - | Honeypot anti-spam |

### Pré-remplissage depuis Mini-Missions

Bouton "Choisir cette mission" → `/contact?project=<nom_encodé>`

```tsx
// Exemple
/contact?project=Audit%20Express%20R%C3%A9seaux%20(99%E2%82%AC)
```

Le dropdown "Type de projet" se pré-remplit automatiquement.

### Envoi

```
POST /api/lead
Content-Type: application/json

{
  "name": "Marie Dupont",
  "email": "marie@example.com",
  "phone": "06 12 34 56 78",
  "projectType": "Audit Express Réseaux (99€)",
  "budget": "300-1000",
  "message": "Je veux booster mon Instagram...",
  "company_website": ""  // Empty (honeypot)
}
```

### Réponses

**Succès (200)** :
```json
{ "ok": true, "requestId": "1234567-abcdef" }
```

**Erreur (400/500)** :
```json
{ "ok": false, "error": "VALIDATION|SEND_FAILED|...", "requestId": "..." }
```

---

## 🎯 Tracking Events

Events envoyés au client analytics (Plausible/PostHog/GA) :

| Événement | Propriétés | Moment |
|-----------|-----------|--------|
| `hero_select_creator` | - | Clic bouton créateur |
| `hero_select_business` | - | Clic bouton entreprise |
| `mini_mission_click` | `mission_name` | Clic sur une mission |
| `contact_form_submit` | `projectType, budget` | Soumission form |
| `contact_form_success` | - | Email envoyé ✅ |
| `contact_form_error` | `code` | Erreur envoi |
| `scroll_50` | - | 50% scroll page |
| `scroll_90` | - | 90% scroll page |

### Brancher à Plausible / PostHog

Dans `client/src/lib/analytics.ts`, décommenter et configurer :

```typescript
// Exemple Plausible
if (window.plausible) {
  window.plausible(event, { props });
}
```

---

## 🛡️ Sécurité

### Anti-spam

1. **Honeypot** : Champ invisible `company_website` — rejet silencieux si rempli
2. **Rate limiting serveur** : À implémenter si volumes élevés (Upstash/etc)
3. **Validation Zod** : Côté client ET serveur

### RGPD

- Formulaire contient lien `/privacy`
- Pas de cookies tiers (sauf si GA — banneau recommandé)
- Emails = stockés localement selon `TO_EMAIL`

---

## 📱 Mobile

- Header hamburger automatique (<md breakpoint)
- Formulaire 100% mobile-friendly
- Grid cartes responsive
- Touch-friendly boutons

Tester :
```bash
pnpm dev
# Ouvrir DevTools > Responsive Design Mode
```

---

## 🔍 SEO / Meta

- Titles uniques + metas descriptions dans chaque page
- OG tags (prêts pour Facebook/LinkedIn)
- Canonical URLs
- Sitemap (public/sitemap.xml)

---

## 🚀 Déploiement

### Vercel (recommandé)

```bash
# 1. Push vers GitHub
git add . && git commit -m "feat: production ready"
git push origin master

# 2. Vercel import automatique
# → Créer .env.production avec les vars
```

**Variables Vercel** :
```
RESEND_API_KEY=xxx
TO_EMAIL=contact@techflowsolutions.space
FROM_EMAIL=TechFlow <contact@techflowsolutions.space>
```

### Build local

```bash
pnpm build
pnpm preview  # Test prod
```

---

## 🧪 QA Checklist

À valider avant livraison :

### Routes & Navigation
- [ ] `/` charge sans 404
- [ ] `/portfolio` accessible + contenu OK
- [ ] `/contact` charge formulaire
- [ ] `/privacy` accessible
- [ ] `/route-inexistante` → 404 custom avec CTAs
- [ ] Header nav sur toutes pages
- [ ] Depuis `/portfolio`, clic "Services" → `/#services` + scroll OK
- [ ] Depuis `/contact`, clic "Mini-Missions" → `/#mini-missions` + scroll OK

### Formulaire Contact
- [ ] Tous les champs visible
- [ ] Validation en temps réel (erreurs inline)
- [ ] Pré-remplissage `?project=...` OK
- [ ] Honeypot field invisible (dev tools)
- [ ] Submit disabled pendant envoi
- [ ] Succès : message "Envoyé" visible, pas de redirection
- [ ] Erreur : message humain + fallback email visible
- [ ] RGPD : lien `/privacy` présent

### Mini-Missions
- [ ] 4 cartes visibles
- [ ] Boutons "Choisir" → `/contact?project=...` corrects
- [ ] Accents encodés OK (test avec caractères spéciaux)

### Email (Resend)
- [ ] Cle API valide dans `.env`
- [ ] Test envoi → email reçu dans `TO_EMAIL`
- [ ] Sujet formaté : `[TechFlow Lead] <Project> - <Budget>`
- [ ] Reply-to = email utilisateur
- [ ] Pas de données sensibles en logs

### Mobile
- [ ] Header hamburger fonctionne
- [ ] Formulaire utilisable au doigt
- [ ] Cartes lisibles (pas de scroll horizontal)
- [ ] Boutons tap-friendly (>44px)

### Accessibilité
- [ ] Tab navigation header OK
- [ ] Contraste texte OK (WCAG AA min)
- [ ] Labels associés inputs
- [ ] Messages erreur lisibles screen reader
- [ ] ARIA labels sur menu mobile

### Performance
- [ ] Lighthouse Perf > 85
- [ ] Lighthouse Accessibility > 90
- [ ] Pas d'erreurs console

### Tracking
- [ ] Events console.log visible (dev)
- [ ] hero_select_creator/business testable
- [ ] mini_mission_click testable
- [ ] contact_form_submit/success/error testable

---

## 🐛 Troubleshooting

| Problème | Solution |
|----------|----------|
| `404` sur `/contact` | Vérifier import `Contact` dans `App.tsx` |
| Formulaire ne s'envoie pas | Vérifier `RESEND_API_KEY` + endpoint accessible |
| "Email invalide" toujours | Tester email valide (ex: test@test.com) |
| Mini-missions pré-remplissage ne marche pas | Vérifier encodage `encodeURIComponent()` |
| Header menu mobile fermé au clic lien | Logique OK, test sur device réel |

---

## 📞 Support / Questions

- **Email** : contact@techflowsolutions.space
- **Issues** : GitHub repo

---

## 📄 Licence

MIT

---

**Dernière mise à jour** : Janvier 2026  
**Version** : 1.0.0 Production
