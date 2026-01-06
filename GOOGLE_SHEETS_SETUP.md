# 🚀 Mode Scale : Configuration Google Sheets

Ce guide vous permet de connecter votre formulaire TechFlow directement à un Google Sheet pour centraliser et trier vos leads automatiquement.

## Étape 1 : Créer le Google Sheet

1.  Allez sur [Google Sheets](https://sheets.new) et créez une nouvelle feuille.
2.  Nommez-la **"TechFlow Leads"**.
3.  Renommez l'onglet en bas (Feuille 1) en **"Leads"**.
4.  Ajoutez les en-têtes suivants sur la première ligne (A1 à H1) :
    *   **A1** : Date
    *   **B1** : Prénom Nom
    *   **C1** : Email
    *   **D1** : Téléphone
    *   **E1** : Projet
    *   **F1** : Budget
    *   **G1** : Délai
    *   **H1** : Message

## Étape 2 : Ajouter le Script d'Automatisation

1.  Dans votre Google Sheet, cliquez sur **Extensions** > **Apps Script**.
2.  Supprimez tout le code présent dans l'éditeur (`function myFunction() {...}`).
3.  Copiez et collez le code ci-dessous :

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Leads');
    var data = JSON.parse(e.postData.contents);
    
    var timestamp = new Date();
    
    // Calcul de priorité simple (Optionnel)
    var priority = "Normale";
    if (data.budget === ">15k" || data.timeline === "<2weeks") {
      priority = "🔥 URGENT";
    }
    
    sheet.appendRow([
      timestamp,
      data.firstName + " " + data.lastName,
      data.email,
      data.phone,
      data.projectType,
      data.budget,
      data.timeline,
      data.message,
      priority // Colonne I (ajoutée auto)
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({"result":"success", "priority": priority}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({"result":"error", "error": error}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4.  Cliquez sur l'icône **Disquette** (Enregistrer) et nommez le projet "TechFlow API".

## Étape 3 : Déployer le Webhook

1.  Cliquez sur le bouton bleu **Déployer** (en haut à droite) > **Nouveau déploiement**.
2.  Cliquez sur la roue dentée à côté de "Sélectionner le type" > choisissez **Application Web**.
3.  Configurez comme suit :
    *   **Description** : v1
    *   **Exécuter en tant que** : Moi (votre adresse email)
    *   **Qui peut accéder** : **Tout le monde** (C'est CRUCIAL pour que le formulaire fonctionne).
4.  Cliquez sur **Déployer**.
5.  Google va vous demander d'autoriser l'accès. Cliquez sur **Autoriser l'accès**, choisissez votre compte, puis cliquez sur **Advanced** (Avancé) > **Go to TechFlow API (unsafe)** (Accéder à TechFlow API non sécurisé) > **Allow** (Autoriser).
6.  Copiez l'URL générée (elle ressemble à `https://script.google.com/macros/s/.../exec`).

## Étape 4 : Connecter au Site

1.  Dans l'interface Manus, allez dans **Settings** > **Secrets**.
2.  Ajoutez une nouvelle clé :
    *   **Key** : `VITE_GOOGLE_SHEET_URL`
    *   **Value** : Collez l'URL que vous venez de copier.
3.  C'est tout ! Vos leads arriveront désormais directement dans votre tableau.
