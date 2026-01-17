# 🚀 VERCEL DEPLOYMENT CHECKLIST

**Pour** : TechFlow Solutions  
**Stack** : React 19 + Vite + TypeScript  

---

## 📋 Pre-Deployment

### Local Testing

- [ ] `pnpm install` complète sans erreur
- [ ] `pnpm build` réussit (41s typical)
- [ ] `pnpm preview` accessible sur http://localhost:4173
- [ ] Aucune erreur dans browser console
- [ ] Tester toutes routes : /, /portfolio, /contact, /privacy, /inexistant
- [ ] Tester formulaire complet
- [ ] Test mobile (DevTools responsive, ou vrai device)

### Code Quality

- [ ] `pnpm check` passe sans erreur TypeScript
- [ ] Pas de TODO/FIXME critiques
- [ ] .env.example prêt (sans secrets)

### Git Status

```bash
git status
# Tout committée ?
git log --oneline | head -1
# Dernier commit description OK ?
```

---

## 🔧 Vercel Setup

### 1. Connecter Repository

1. Aller sur [vercel.com](https://vercel.com)
2. **Importer un projet** → GitHub
3. Sélectionner `peupleaelionor/techflow-agency`
4. Framework : **Vite** (détecté automatique)
5. Root directory : `./` (défaut)

### 2. Build Settings

**Build Command**:
```
pnpm build
```

**Output Directory**:
```
dist
```

**Install Command**:
```
pnpm install
```

### 3. Environment Variables

Ajouter les variables **avant** deploy preview :

| Variable | Value | Secret |
|----------|-------|--------|
| `RESEND_API_KEY` | `re_xxxxxxxxxxxx` | ✅ Yes |
| `TO_EMAIL` | `contact@techflowsolutions.space` | ❌ No |
| `FROM_EMAIL` | `TechFlow <onboarding@resend.dev>` | ❌ No |

**Étapes** :
1. Settings → Environment Variables
2. Ajouter 3 variables
3. RESEND_API_KEY → marquer secret ✅
4. Sauver

### 4. Domains

1. Settings → Domains
2. Ajouter `techflowsolutions.space`
3. Suivre les instructions DNS Vercel
4. Attendre propagation (quelques minutes)

---

## 🧪 Preview Deployment

```bash
# Push vers GitHub
git add .
git commit -m "feat: production ready v1.0.0"
git push origin master
```

**Vercel auto-build** :
1. Visitez https://vercel.com/dashboard
2. Vercel builds automatiquement
3. Preview URL généré

**Test Preview** :
- [ ] Preview URL accessible
- [ ] Toutes routes fonctionnent
- [ ] Formulaire envoie email (test avec vraie clé)
- [ ] Email reçu dans `TO_EMAIL`
- [ ] Mobile responsive (DevTools)
- [ ] Pas d'erreur console

---

## 🚀 Production Deployment

### Conditions

- [ ] Preview test complet ✅
- [ ] QA checklist 100% ✅
- [ ] Email Resend testé ✅
- [ ] Domain DNS configuré ✅

### Promotion

1. Vercel Dashboard → Project
2. Trouver le preview déploiement
3. Bouton **"Promote to Production"**

OU :

1. **Settings → Git**
2. Production branch : `master` ✅
3. Auto-deploy on commits : enabled

### Vérification Production

```bash
# Immédiatement après deploy
# 1. Attendre 1-2 minutes propagation DNS
# 2. Visiter https://techflowsolutions.space

# Checklist
- [ ] Page charge sans erreur
- [ ] Header nav OK
- [ ] Images chargent
- [ ] Formulaire fonctionne
- [ ] Email test reçu
- [ ] HTTPS actif (cadenas vert)
- [ ] No console errors (DevTools)
```

---

## 🔍 Post-Deployment Checks

### Lighthouse (DevTools)

```bash
# Dans Chrome DevTools → Lighthouse
# Target : 
# - Performance : > 85
# - Accessibility : > 90
# - Best Practices : > 85
# - SEO : > 90
```

### Uptime Monitoring

Optionnel (recommandé) :
1. [UptimeRobot](https://uptimerobot.com)
2. Ajouter monitor : https://techflowsolutions.space/
3. Check toutes les 5 minutes

### Analytics

1. Plausible / Postahog / GA : connecter si présent
2. Vérifier events arrivent
3. Test 1 formulaire complet → event dans dashboard

### Email Verification

1. Visiter production site
2. Remplir formulaire complet
3. Vérifier email reçu dans `TO_EMAIL`
4. Vérifier sujet, corps, reply-to

---

## ⚙️ Maintenance Post-Deploy

### Monitoring

- [ ] Email delivery rate : monitor inbox
- [ ] Error rate : check Vercel logs
- [ ] Performance : watch Lighthouse trends

### Ongoing Tasks

1. **Weekly** : Check email queue (Resend dashboard)
2. **Monthly** : Lighthouse audit
3. **As-needed** : Bug fixes → push master → auto-redeploy

### Rollback Plan

Si problème critique en prod :

```bash
# Option 1 : Revert commit
git revert HEAD
git push origin master
# Vercel auto-redeploy (v0 → v-1)

# Option 2 : Vercel UI
# Deployments → Chercher dernier bon deploy → "Promote to Production"
```

---

## 📊 Vercel Billing

- **Free tier** : 100 GB bandwidth/mo + 12 deployments/mo ✅ Suffisant
- **Pro** : $20/mo si besoin + storage/bandwidth
- **Enterprise** : Custom

Pour TechFlow v1.0.0 : **Free tier OK**

---

## 🔐 Security Checklist

- [ ] HTTPS enabled ✅ (auto Vercel)
- [ ] RESEND_API_KEY marked secret in Vercel ✅
- [ ] No secrets in code (.env.example has no real values) ✅
- [ ] .gitignore includes `.env.local` ✅
- [ ] CORS configured if needed (optionnel)

---

## 📝 Troubleshooting

### Build Fails in Vercel

**Issue** : Build error after push

**Solution** :
1. Check Vercel logs (Deployments tab)
2. Verify env vars set correctly
3. Try rebuild : Vercel UI → Deployments → Three dots → Redeploy

### Email Not Sending in Prod

**Issue** : Form success message but no email received

**Solution** :
1. Check Resend dashboard : [resend.com/dashboard](https://resend.com/dashboard)
2. Verify API key in Vercel env
3. Check `TO_EMAIL` correct
4. Check email not in spam

### Routes Return 404

**Issue** : /portfolio or /contact show 404

**Solution** :
1. Vercel Dashboard → Function Logs
2. Check if routes defined in App.tsx
3. Rebuild with `git push origin master`

### Mobile Menu Not Working

**Issue** : Hamburger visible but doesn't work

**Solution** :
1. Check browser cache : DevTools → Ctrl+Shift+R (hard refresh)
2. Check Console for JS errors
3. Try incognito mode (no extensions)

---

## 📞 Support Links

- **Vercel Docs** : https://vercel.com/docs
- **Resend Docs** : https://resend.com/docs
- **Vercel Support** : support@vercel.com
- **Resend Support** : help@resend.com

---

## ✅ Deployment Sign-Off

**Deployment Date** : _______________

**Deployed By** : _______________

**Preview URL** : https://techflow-agency-xxx.vercel.app

**Production URL** : https://techflowsolutions.space

**All Checks Passed** : ☐ Yes ☐ No

**Notes** :
```
_____________________________________
_____________________________________
_____________________________________
```

---

**TechFlow Solutions — Vercel Deployment Ready**  
*v1.0.0 — January 2026*
