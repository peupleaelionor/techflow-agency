# 🚀 Guide Déploiement Vercel — IMMÉDIAT

**Durée : 30 minutes max**

Vous avez un codebase production-ready. Voici comment le déployer sur Vercel en 5 étapes simples.

---

## 📋 PRÉ-REQUIS

- ✅ Compte GitHub (avec accès à votre repo)
- ✅ Clé API Resend (voir étape 1)
- ✅ Email pour recevoir les leads (ex: contact@techflowsolutions.space)
- ⏱️ Temps : 30 minutes

---

## 🔑 ÉTAPE 1 : Obtenir Clé API Resend (2 min)

### 1.1 Créer compte Resend

1. Allez sur **https://resend.com**
2. Cliquez "Sign up" (gratuit)
3. Entrez votre email TechFlow
4. Vérifiez votre email (lien)

### 1.2 Générer API Key

1. Une fois connecté, allez sur **Tokens** (menu gauche)
2. Cliquez **"Create token"**
3. Nommez-le : `"TechFlow Production"`
4. **Copiez la clé** (format: `re_xxxxxxxxx...`)
5. **Conservez-la précieusement** 🔐

📌 **Cette clé ne doit JAMAIS être commit sur GitHub**

---

## 🚀 ÉTAPE 2 : Lier Vercel à GitHub (3 min)

### 2.1 Créer compte Vercel

1. Allez sur **https://vercel.com**
2. Cliquez "Sign up" → sélectionnez "GitHub"
3. Autorisez Vercel à accéder à vos repos
4. Vous êtes connecté !

### 2.2 Importer votre projet

1. Dans Vercel, cliquez **"New Project"**
2. Sous "Import Git Repository", trouvez **`techflow-agency`**
3. Cliquez dessus
4. Laissez les paramètres par défaut (framework: Vite, root: `.`)

---

## 🔐 ÉTAPE 3 : Ajouter Variables d'Environnement (5 min)

### 3.1 Dans Vercel

1. Avant de déployer, cliquez sur **"Environment Variables"**
2. Ajouter **3 variables** :

| Nom | Valeur | Type |
|-----|--------|------|
| `RESEND_API_KEY` | `re_xxxxx...` (votre clé) | Secret |
| `TO_EMAIL` | `contact@techflowsolutions.space` | Secret |
| `FROM_EMAIL` | `TechFlow <onboarding@resend.dev>` | Text |

### 3.2 Format des valeurs

```
RESEND_API_KEY: re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TO_EMAIL: contact@techflowsolutions.space
FROM_EMAIL: TechFlow <onboarding@resend.dev>
```

💡 **Note**: `FROM_EMAIL` doit rester `onboarding@resend.dev` jusqu'à ce que vous vérifiez un domaine personnalisé chez Resend (optionnel).

---

## ⚡ ÉTAPE 4 : Déployer (1 min)

### 4.1 Lancer le déploiement

1. Une fois les variables env ajoutées, cliquez **"Deploy"**
2. Attendre ~ 1-2 minutes
3. Vercel montrera une URL : `https://techflow-agency.vercel.app` (ou similaire)

✅ **Bravo ! Votre site est en ligne !**

### 4.2 Vérifier le déploiement

- Allez sur l'URL donnée par Vercel
- Testez les routes : `/portfolio`, `/contact`, `/privacy`
- Vérifiez qu'aucune ne donne 404

---

## 📧 ÉTAPE 5 : Tester Formulaire Email (3 min)

### 5.1 Sur le site déployé

1. Allez sur votre domaine Vercel
2. Cliquez **"Contact"**
3. Remplissez le formulaire avec vos données réelles (email personnel)
4. Cliquez **"Envoyer"**
5. Vous devriez voir : **✅ "Envoyé. Réponse sous 24h"**

### 5.2 Vérifier réception email

1. Vérifiez votre boîte `contact@techflowsolutions.space`
2. Vous devriez recevoir un email avec le format :

```
[TechFlow Lead] Audit Express Réseaux (99€) - Budget: 100-300€

Nom: Votre Nom
Email: votre-email@example.com
...
```

❓ **Si pas d'email après 5 min** :
- Vérifiez le dossier "Spam"
- Allez sur Vercel Dashboard → Logs (voir erreurs)
- Vérifiez que `RESEND_API_KEY` est correct

---

## 🌍 ÉTAPE 6 : Config Domaine Personnalisé (10 min) — OPTIONNEL

Si vous avez `techflowsolutions.space` :

### 6.1 Dans Vercel

1. Allez sur **Settings** → **Domains**
2. Entrez : `techflowsolutions.space`
3. Cliquez "Add"
4. Vercel affiche les **nameservers à configurer** ↓

### 6.2 Chez votre registraire DNS

1. Accédez à votre registraire (OVH, Namecheap, etc.)
2. Modifiez les **Nameservers** pour pointer vers Vercel
3. Attendez 5-10 min (propagation DNS)
4. Vercel confirmera : ✅ **Domain Connected**

### 6.3 Vérifier

```bash
ping techflowsolutions.space
# Devrait résoudre vers Vercel
```

---

## 🛠️ TROUBLESHOOTING RAPIDE

### ❌ Erreur : "Build failed"

**Solution** : 
- Allez sur Vercel → Logs
- Cherchez le message d'erreur
- 90% des cas : variables env manquantes

### ❌ Erreur : "Email not sending"

**Solution** :
- Vérifiez `RESEND_API_KEY` (format: `re_...`)
- Vérifiez `TO_EMAIL` (pas d'espaces)
- Testez dans console Resend dashboard

### ❌ Route affiche 404

**Solution** :
- Vérifiez que vous êtes sur le bon domaine
- Hard refresh (Ctrl+Shift+R)
- Vérifiez les routes dans App.tsx

---

## 📊 MONITORING APRÈS DÉPLOIEMENT

### Vérifier que tout marche

1. **Vercel Analytics** : Dashboard Vercel → Analytics (voir traffic)
2. **Events de tracking** : Ouvrez console navigateur (F12) → voir logs `[ANALYTICS]`
3. **Emails reçus** : Vérifiez dossier `contact@techflowsolutions.space`

### Métriques clés

| Métrique | Cible | Où voir |
|----------|-------|---------|
| Page load | < 3s | Vercel Analytics |
| 404 errors | 0 | Vercel Logs |
| Form success rate | > 95% | Email reçus |
| Mobile responsive | ✅ | Browser DevTools |

---

## 🎯 PROCHAINES ACTIONS APRÈS DÉPLOIEMENT

### Immédiatement après (1h)

1. ✅ Testez le formulaire 5x depuis différents apparareils
2. ✅ Vérifiez les 5 emails reçus dans boîte
3. ✅ Testez sur mobile (appels, geoloc, touch)

### Avant première campagne pub (2h)

1. ✅ Relisez tous les textes (coquilles, tonalité)
2. ✅ Vérifiez les images chargent bien
3. ✅ Testez toutes les 6 routes
4. ✅ Demandez à un ami de tester les formulaires (avis externe)

### Campagne pub Google Ads (4h)

1. ✅ Budget: 10-20€
2. ✅ Créatif: Screenshot homepage + CTA "🚀 Demander un devis"
3. ✅ Cible Audience A: "Entrepreneur", "Web dev", "Startup" en France
4. ✅ Cible Audience B: "PME", "Marketing digital", Paris/Bordeaux
5. ✅ Lancer et monitorer en direct

---

## 📞 SUPPORT

Si vous êtes bloqué :

1. **Vercel Docs** : https://vercel.com/docs
2. **Resend Docs** : https://resend.com/docs
3. **Ce repo README** : Voir `README_PRODUCTION.md`

---

## ✨ CHECKLIST FINAL

- [ ] Clé Resend générée et copiée
- [ ] Compte Vercel créé
- [ ] Repo importé dans Vercel
- [ ] 3 variables env ajoutées
- [ ] Déploiement lancé
- [ ] URL Vercel notée
- [ ] Formulaire testé (email reçu)
- [ ] Domaine perso configuré (optionnel)
- [ ] Tous les textes relus
- [ ] Prêt pour campagne pub

---

**Status**: 🚀 **VOUS ÊTES PRÊT POUR LA PRODUCTION**

Estimé de temps total: **30 minutes**

Durée avant premiers leads: **Immédiat après déploiement + campagne pub lancée**

