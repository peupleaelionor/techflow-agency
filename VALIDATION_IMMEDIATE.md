# ✅ CHECKLIST VALIDATION IMMÉDIATE — À FAIRE MAINTENANT

**Date**: 17 Jan 2026 | **Durée**: 15-20 min | **Criticité**: MAXIMALE

Avant de déployer sur Vercel, validez vous-même ces 20 points. C'est votre dernière chance de catch des bugs avant la prod.

---

## 🎯 SECTION 1 : Routes & Navigation (5 min)

- [ ] **Lancer le dev server** : `pnpm dev` → go to http://localhost:5173
- [ ] **Page d'accueil (/)** : Charge ? Logo ? Texte complet ?
- [ ] **Navigation header** : Tous les liens cliquables ? Pas d'erreurs console ?
- [ ] **Route Portfolio (/portfolio)** : Affiche les case studies ?
- [ ] **Route Contact (/contact)** : Affiche le formulaire ?
- [ ] **Route Privacy (/privacy)** : Affiche la politique RGPD ?
- [ ] **404 custom** : Allez sur `/nonexistent` → affiche page custom (pas blanc) ?
- [ ] **Menu mobile** : Sur mobile, hamburger works ? Drawer s'ouvre/ferme ?
- [ ] **Anchor scroll** : Cliquez "Services" en header → scroll vers section ?
- [ ] **Console** : F12 → Console → Pas d'erreurs rouges ?

---

## 📧 SECTION 2 : Formulaire Contact (5 min)

- [ ] **Page Contact** : Formulaire visible ? 7 champs visibles (nom, email, phone, type projet, budget, message) ?
- [ ] **Honeypot invisible** : Inspectez le formulaire (F12) → trouvez champ `company_website` → display:none ?
- [ ] **Dropdown projet** : Cliquez sur "Sélectionner un type de projet" → 7 options ?
- [ ] **Dropdown budget** : Cliquez sur budget → 4 options visibles ?
- [ ] **Validation: Nom vide** : Cliquez envoyer sans nom → erreur "Minimum 2 caractères" ?
- [ ] **Validation: Email invalide** : Entrez "test" → erreur "Email invalide" ?
- [ ] **Validation: Message court** : Entrez 5 mots → erreur "Minimum 10 caractères" ?
- [ ] **RGPD checkbox** : Voir texte "J'accepte..." avec lien `/privacy` ?
- [ ] **Envoi réussi** : Remplissez correctement → cliquez envoyer → message ✅ vert (pas redirect) ?
- [ ] **Network tab** : Ouvrez Dev Tools → Network → voir POST `/api/lead` → status 200 ?

---

## 🎨 SECTION 3 : Mini-Missions & Segmentation (3 min)

- [ ] **Section Mini-Missions** : 4 cartes visibles (Audit 99€, Link in Bio 249€, Logo 199€, Landing 349€) ?
- [ ] **Click mini-mission** : Cliquez sur "Choisir" sous "Audit Express" → redirect `/contact?project=...` ?
- [ ] **Pré-remplissage** : Le dropdown projet pré-remplit ? Montre "Audit Express..." sélectionné ?
- [ ] **Boutons CTA** : Chaque carte a un bouton ? Hover effect fonctionne ?
- [ ] **Responsive mobile** : Sur téléphone, cartes en 1 colonne ? Buttons de 44px+ ?

---

## 🎬 SECTION 4 : Content & Textes (3 min)

- [ ] **Homepage** : Relisez l'intro, CTA principale, testimonials → coquilles ? Tonalité cohérente ?
- [ ] **Portfolio** : 3 case studies visibles ? Chacun a un titre, client, challenge, solution, résultat ?
- [ ] **Contact** : Formulaire clair ? Instructions visibles ? Contact direct (email) affiché ?
- [ ] **Privacy** : 8 sections visibles ? Email `privacy@techflowsolutions.space` correct ?
- [ ] **Footer** : Visible en bas ? Liens sociaux marchent ? Contact info présente ?

---

## 📱 SECTION 5 : Mobile & Accessibility (2 min)

- [ ] **Responsive**: Ouvrir site sur **mobile** (iPhone/Android) via dev tools
- [ ] **No horizontal scroll** : Pas de scrollbar horizontal ?
- [ ] **Touch buttons** : Boutons > 44px ? Espacés correctement ?
- [ ] **Menu mobile** : Hamburger visible < 768px ? Menu s'ouvre/ferme sans problème ?
- [ ] **Images load** : Toutes les images chargent rapidement ?
- [ ] **Dark mode toggle** : Thème switch en header works ? Texte lisible en dark ?
- [ ] **Keyboard nav** : Tab through formulaire → ordre logique ?
- [ ] **ARIA labels** : Inspectez mobile menu → role="navigation" présent ?

---

## 🔧 SECTION 6 : Code & Build (2 min)

- [ ] **Build local** : `pnpm build` → succès ? Pas d'erreurs ?
- [ ] **Build time** : Complété en < 1 min ? (sinon: dépendances trop lourdes)
- [ ] **dist/ folder** : Existe ? Contient index.html et assets ?
- [ ] **TypeScript** : `pnpm check` → 0 erreurs ?
- [ ] **No console errors** : F12 Console → cherchez rouge → ZÉRO ?

---

## 🚀 SECTION 7 : Readiness Deployment (1 min)

- [ ] **API endpoint** : `api/lead.ts` existe ? Importe Zod schema ?
- [ ] **Env vars template** : `.env.example` existe avec 3 vars ?
- [ ] **.gitignore** : `.env.local` ignoriée ? (sécurité)
- [ ] **Resend** : Dans `package.json` ? Version ^3.2.0 ?
- [ ] **Wouter** : Pas de `next/link` imports ? Tous remplacés par wouter ?

---

## 📊 SCORING FINAL

**Comptez vos ✅** :

- **0-25** ❌ STOP : Déployer pas encore. Corriger erreurs.
- **25-35** ⚠️ ATTENTION : Risqué. Relancer validations critiques.
- **35-42** ✅ BON : Allez-y, déployer sur Vercel.
- **42/42** 🚀 PARFAIT : Vous êtes prêt(e) pour la prod !

---

## 🔴 CRITICAL ISSUES À FIX AVANT VERCEL

Si vous voyez UN SEUL de ces problèmes, ARRÊTEZ et contactez :

- [ ] ❌ Route donne 404 → Vérifier routes.ts et App.tsx
- [ ] ❌ Formulaire ne POST pas → Vérifier `/api/lead` endpoint
- [ ] ❌ Email ne s'envoie pas → Vérifier Resend import, Zod schema
- [ ] ❌ Build échoue → Lancer `pnpm install` puis rebuild
- [ ] ❌ Console errors rouges → Ouvrir DevTools, noter erreur exacte, fixer dans code
- [ ] ❌ Honeypot visible → Inspectez HTML du form, vérifiez `display: none !important`
- [ ] ❌ Mobile pas responsive → Vérifier TailwindCSS breakpoints dans CSS

---

## ✨ TOUT EST OK ? PROCHAINES ÉTAPES

1. **Fermer dev server** : `Ctrl+C`
2. **Aller lire** : `VERCEL_SETUP_IMMEDIATE.md` (guide déploiement)
3. **Créer compte Resend** : https://resend.com
4. **Créer compte Vercel** : https://vercel.com
5. **Déployer** : 30 minutes (suivre le guide)
6. **Tester sur prod** : Formulaire email depuis le vrai domaine
7. **Lancer campagne pub** : Google Ads / Facebook / TikTok avec 10-20€

---

## 📞 SI VOUS ÊTES BLOQUÉ

Checklist "Déboguer rapidement" :

1. **"Site ne load pas"**
   - `pnpm dev` → regarde erreur console
   - Vercel Logs → cherche erreur build

2. **"Formulaire ne s'envoie pas"**
   - Ouvrir DevTools Network tab
   - Regarder réponse `/api/lead` POST
   - Si status 400 → Zod validation error
   - Si status 500 → Erreur serveur (Resend key ?)

3. **"404 sur une route"**
   - Vérifier chemin exact (typo ?)
   - Vérifier route définie dans Router de App.tsx
   - Vérifier `ROUTES` constant a le bon chemin

4. **"Build ne compile pas"**
   - `pnpm install` (réinstaller deps)
   - `pnpm check` (vérifier TypeScript)
   - Relancer `pnpm build`

---

**Rappel**: Vous avez un codebase production-ready. Vous pouvez cliquer "Deploy" en confiance une fois ces ✅ complétées.

**Estimé temps**: 30 min de validation + 30 min de déploiement Vercel = **1h total avant être en prod.**

Bon courage ! 🚀

