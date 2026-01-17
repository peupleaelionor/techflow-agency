# 🧪 QA CHECKLIST — TechFlow Production Release

**Date** : Janvier 2026  
**Version** : 1.0.0  
**Status** : ⏳ À valider

---

## ✅ CHECKLIST DE QUALITÉ

### 1️⃣ ROUTES & NAVIGATION

- [ ] Route `/` charge sans erreur
- [ ] Route `/portfolio` accessible et contenu visible
- [ ] Route `/contact` affiche formulaire complet
- [ ] Route `/privacy` accessible et contenu lisible
- [ ] Route inconnue (`/xxx-inexistant`) → Page 404 custom avec CTAs
- [ ] Header visible sur TOUTES les pages
- [ ] Header nav : liens "Accueil", "Services", "Mini-Missions", "Portfolio", "Contact"

**Navigation Anchors (Home)** :
- [ ] Depuis `/portfolio`, clic "Services" → redirect `/` + scroll vers `#services` OK
- [ ] Depuis `/portfolio`, clic "Mini-Missions" → redirect `/` + scroll vers `#mini-missions` OK
- [ ] Depuis `/contact`, clic "Services" → redirect `/` + scroll vers `#services` OK
- [ ] Depuis `/contact`, clic "Mini-Missions" → redirect `/` + scroll vers `#mini-missions` OK
- [ ] Scroll smooth visible (comportement fluide)

**Mobile (Header)** :
- [ ] Hamburger menu visible (<md)
- [ ] Clic hamburger ouvre/ferme drawer
- [ ] Clic sur lien ferme drawer automatiquement
- [ ] Tous les liens sont accessibles

---

### 2️⃣ FORMULAIRE CONTACT

**Champs & Validation** :
- [ ] Champ "Nom" visible + label
- [ ] Champ "Email" visible + label
- [ ] Champ "Téléphone" visible + label (optionnel)
- [ ] Champ "Type de projet" (dropdown) visible + label
- [ ] Champ "Budget" (dropdown) visible + label
- [ ] Champ "Message" (textarea) visible + label

**Validation** :
- [ ] Soumettre vide → Erreurs inline sur tous les champs requis
- [ ] Email invalide (ex: "abc") → Erreur "Email invalide"
- [ ] Nom trop court (ex: "A") → Erreur "Nom requis..."
- [ ] Message < 10 caractères → Erreur "Message trop court"
- [ ] Budget non sélectionné → Erreur "Budget requis"
- [ ] Type de projet non sélectionné → Erreur "Type de projet requis"
- [ ] Erreurs disparaissent quand utilisateur tape

**Pré-remplissage Query Param** :
- [ ] Lien `/contact?project=Audit%20Express%20R%C3%A9seaux%20(99%E2%82%AC)` pré-remplit dropdown
- [ ] Accents codés correctement (pas de caractères cassés)
- [ ] Fallback si `project` invalide (dropdown reste vide)
- [ ] Fallback si URL sans `project` (fonctionne normalement)

**Anti-spam** :
- [ ] Honeypot field `company_website` inexistant en Dev Tools (display:none)
- [ ] Remplir honeypot → requête semble passer mais pas d'email envoyé

**UX Envoi** :
- [ ] Bouton submit est enabled par défaut
- [ ] Avant envoi : loader visible ("Envoi en cours...")
- [ ] Bouton disabled pendant envoi
- [ ] Pas de navigation/redirect vers page inexistante

**Succès** :
- [ ] Message "Envoyé. Réponse sous 24h" visible (vert ou toast)
- [ ] Rester sur la même page (pas de redirect)
- [ ] Formulaire reste visible pour contexte
- [ ] Message disparaît après ~5s (optionnel)

**Erreur Réseau/API** :
- [ ] Message humain visible ("Impossible d'envoyer pour le moment...")
- [ ] Fallback email proposé ("contacte-nous à contact@techflowsolutions.space")
- [ ] Pas de redirection vers page inexistante
- [ ] Bouton submit reste cliquable pour retry

**RGPD** :
- [ ] Lien "politique de confidentialité" présent sous le bouton
- [ ] Lien point vers `/privacy`
- [ ] Texte "En envoyant ce formulaire, vous acceptez..."

---

### 3️⃣ MINI-MISSIONS

**Contenu** :
- [ ] 4 cartes visibles (Audit, Link in Bio, Logo, Landing Page)
- [ ] Chaque carte affiche : Nom + Prix
- [ ] Chaque carte affiche : "Pour qui"
- [ ] Chaque carte affiche : Livrables (avec ✓)
- [ ] Chaque carte affiche : Délai
- [ ] Chaque carte affiche : Note d'upsell ("Inclut une recommandation...")

**Boutons** :
- [ ] 4 boutons "Choisir cette mission"
- [ ] Clic sur bouton → `/contact?project=<nom_encodé>`
- [ ] URL encodée correctement (pas de caractères cassés)
- [ ] Test avec accents (É, è, ç, œ, etc.)

**Grid Responsif** :
- [ ] Desktop (≥768px) : 2 colonnes
- [ ] Mobile (<768px) : 1 colonne
- [ ] Cartes lisibles sur tous les écrans

---

### 4️⃣ PORTFOLIO

**Contenu** :
- [ ] Page titre "Nos Réalisations"
- [ ] Intro visible
- [ ] 2-3 case studies visibles
- [ ] Chaque case study : Défi / Solution / Résultat
- [ ] Métriques visibles (chiffres)

**CTA Portfolio** :
- [ ] Bouton "Demander un devis" en bas
- [ ] Bouton → `/contact`

---

### 5️⃣ PRIVACY

- [ ] Page accessible via `/privacy`
- [ ] Contenu lisible
- [ ] Lien email fourni (pour demandes RGPD)
- [ ] Lien correctement cliquable

---

### 6️⃣ EMAIL (RESEND)

**Configuration** :
- [ ] `.env.local` contient `RESEND_API_KEY`
- [ ] Clé API valide (testée sur Resend dashboard)
- [ ] `TO_EMAIL` défini (ex: contact@techflowsolutions.space)

**Envoi Email** :
- [ ] Remplir et soumettre formulaire
- [ ] Email arrive dans `TO_EMAIL` inbox
- [ ] Sujet formaté : `[TechFlow Lead] <Type> - <Budget>`
- [ ] Exemple : `[TechFlow Lead] Audit Express Réseaux (99€) - 300-1000`
- [ ] Corp email contient : Nom, Email, Téléphone, Type, Budget, Message
- [ ] Reply-to = email utilisateur (permettre réponse directe)

**Logs Serveur** :
- [ ] Vérifier `console.log` dans endpoint `/api/lead`
- [ ] Format : `[requestId] Lead API - method: POST`
- [ ] Format succès : `[requestId] Email sent successfully - ID: <resend_id>`
- [ ] Pas de données sensibles exposées dans les logs (emails partiels OK)

---

### 7️⃣ MOBILE & RESPONSIVE

**Header** :
- [ ] Hamburger visible <768px
- [ ] Drawer s'ouvre/ferme
- [ ] Tous liens cliquables au doigt
- [ ] Pas de scroll horizontal

**Formulaire** :
- [ ] Inputs 100% largeur
- [ ] Labels au-dessus inputs
- [ ] Textarea utilisable au doigt
- [ ] Bouton submit ≥44px hauteur

**Cartes** :
- [ ] Mini-Missions : 1 colonne mobile, 2 desktop
- [ ] Case studies : empilées mobile
- [ ] Pas de débordement texte

**Touch** :
- [ ] Boutons ≥44x44px minimum (WCAG AA)
- [ ] Pas de hover-only interactions
- [ ] Pas de triple-click requis

---

### 8️⃣ ACCESSIBILITÉ

**Couleurs** :
- [ ] Contraste noir/blanc : WCAG AA minimum
- [ ] Contraste texte/fond : lisible sans zoom
- [ ] Pas de couleur seule pour transmettre info

**Navigation Clavier** :
- [ ] Tab traverse tous les éléments interactifs
- [ ] Tab order logique (gauche→droite, haut→bas)
- [ ] Focus visible (outline/border)
- [ ] Échap ferme menu mobile

**Forms** :
- [ ] Labels associés `<label for="...">`
- [ ] Placeholder ≠ Label (labels vrais présents)
- [ ] Erreurs listées avec IDs (`aria-describedby`)

**Screen Reader** :
- [ ] Headings hiérarchy OK (h1, h2, h3...)
- [ ] Alt text sur images (non-décoratives)
- [ ] ARIA labels sur buttons sans texte
- [ ] Erreurs "role=alert" ou "role=status"

---

### 9️⃣ PERFORMANCE

**Build** :
- [ ] `pnpm build` complète sans erreur
- [ ] Taille bundle : < 500KB gzip (objectif)

**Dev** :
- [ ] Aucun erreur console (sauf warnings optionnels)
- [ ] Lint : `pnpm check` passe ✓

**Lighthouse** (dans DevTools) :
- [ ] Performance > 85
- [ ] Accessibility > 90
- [ ] Best Practices > 90
- [ ] SEO > 90

---

### 🔟 TRACKING EVENTS

**Configuration** :
- [ ] Analytics SDK branché (ou console.log en dev)
- [ ] Pas d'erreur console liée au tracking

**Events Testables** :
- [ ] Clic Hero "Créateur" → `hero_select_creator` (console)
- [ ] Clic Hero "Entreprise" → `hero_select_business` (console)
- [ ] Clic Mini-Mission → `mini_mission_click` avec `mission_name` (console)
- [ ] Submit formulaire → `contact_form_submit` avec `projectType, budget` (console)
- [ ] Succès formulaire → `contact_form_success` (console)
- [ ] Erreur formulaire → `contact_form_error` avec code (console)
- [ ] Scroll 50% → `scroll_50` (console une seule fois)
- [ ] Scroll 90% → `scroll_90` (console une seule fois)

**Dev Check** :
```bash
# Ouvrir DevTools Console
# Remplir formulaire et observer [ANALYTICS] logs
```

---

### 1️⃣1️⃣ DÉPLOIEMENT

**Local** :
- [ ] `pnpm build` passe ✓
- [ ] `pnpm preview` affiche site prod ✓
- [ ] Tester `/contact` form en preview

**Vercel (ou host)** :
- [ ] Pousser vers GitHub (master)
- [ ] Vercel build automatique
- [ ] Preview URL accessible
- [ ] Tester `/portfolio`, `/contact`, `/privacy`
- [ ] Tester formulaire (avec vrai clé Resend)
- [ ] Email reçu dans inbox

**Production** :
- [ ] Domain techflowsolutions.space pointe vers prod
- [ ] HTTPS actif
- [ ] Certificat valide
- [ ] Test 1 formulaire complet (email reçu)

---

## 📊 RÉSULTATS FINAUX

| Catégorie | Status | Notes |
|-----------|--------|-------|
| Routes | ✅ / ⏳ | - |
| Formulaire | ✅ / ⏳ | - |
| Mini-Missions | ✅ / ⏳ | - |
| Portfolio | ✅ / ⏳ | - |
| Privacy | ✅ / ⏳ | - |
| Email | ✅ / ⏳ | - |
| Mobile | ✅ / ⏳ | - |
| Accessibilité | ✅ / ⏳ | - |
| Performance | ✅ / ⏳ | - |
| Tracking | ✅ / ⏳ | - |
| Déploiement | ✅ / ⏳ | - |

**Signature QA** : ______________________ Date : __________

---

## 🚨 BLOCKERS CRITIQUES (Must Fix Avant Prod)

- [ ] **Aucun 404** sur parcours critiques (Home, Contact, Portfolio)
- [ ] **Email envoyé** vers adresse destinataire
- [ ] **Formulaire ne redirige** pas vers page inexistante après succès
- [ ] **Header nav** fonctionne sur toutes pages
- [ ] **No console errors** au chargement
- [ ] **Build** passe sans erreur

---

## 📝 NOTES

```
- Dates de test : _______________
- Testeur(s) : _______________
- Issues trouvées : 
  1. 
  2. 
  3. 

- Actions prises :
  1. 
  2. 
  3. 
```

---

**Template créé le** : Janvier 2026  
**Pour** : TechFlow Solutions Production Release 1.0.0
