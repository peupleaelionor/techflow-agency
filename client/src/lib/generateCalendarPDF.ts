import { contentCalendar } from "@/data/contentCalendar";

export const generateCalendarPDF = () => {
  // Créer le contenu HTML du PDF
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>Calendrier Éditorial TechFlow - 7 Jours</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #000;
          background: #fff;
        }
        
        .page {
          page-break-after: always;
          padding: 40px;
          min-height: 100vh;
        }
        
        .header {
          text-align: center;
          margin-bottom: 40px;
          border-bottom: 4px solid #000;
          padding-bottom: 20px;
        }
        
        .logo {
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 10px;
          color: #000;
        }
        
        .title {
          font-size: 24px;
          font-weight: bold;
          color: #000;
          margin-bottom: 10px;
        }
        
        .subtitle {
          font-size: 14px;
          color: #666;
          font-family: monospace;
        }
        
        .day-card {
          margin-bottom: 30px;
          border: 3px solid #000;
          padding: 20px;
          page-break-inside: avoid;
        }
        
        .day-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
          padding-bottom: 10px;
          border-bottom: 2px solid #000;
        }
        
        .day-name {
          font-size: 20px;
          font-weight: bold;
          color: #000;
        }
        
        .day-type {
          font-size: 12px;
          font-weight: bold;
          padding: 5px 10px;
          background: #CCFF00;
          color: #000;
          border: 1px solid #000;
        }
        
        .day-icon {
          font-size: 24px;
        }
        
        .day-content {
          margin-bottom: 15px;
        }
        
        .content-label {
          font-weight: bold;
          font-size: 12px;
          color: #666;
          margin-bottom: 5px;
          text-transform: uppercase;
        }
        
        .content-text {
          font-size: 13px;
          line-height: 1.5;
          margin-bottom: 10px;
          font-family: monospace;
        }
        
        .hashtags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 10px;
        }
        
        .hashtag {
          font-size: 11px;
          background: #f0f0f0;
          padding: 3px 8px;
          border: 1px solid #ccc;
          font-family: monospace;
        }
        
        .pillar-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: bold;
          padding: 5px 10px;
          border: 1px solid #000;
          margin-top: 10px;
        }
        
        .footer {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 2px solid #000;
          text-align: center;
          font-size: 12px;
          color: #666;
          font-family: monospace;
        }
        
        @media print {
          body {
            margin: 0;
            padding: 0;
          }
          .page {
            margin: 0;
            padding: 20px;
            min-height: auto;
          }
        }
      </style>
    </head>
    <body>
      <div class="page">
        <div class="header">
          <div class="logo">TechFlow</div>
          <div class="title">Calendrier Éditorial Hebdomadaire</div>
          <div class="subtitle">7 jours de contenu stratégique pour vos réseaux sociaux</div>
        </div>
        
        ${contentCalendar.map((day) => `
          <div class="day-card">
            <div class="day-header">
              <div>
                <div class="day-name">${day.dayFr}</div>
                <div class="subtitle">${day.title}</div>
              </div>
              <div style="text-align: right;">
                <div class="day-type">${day.pillar}</div>
                <div class="day-icon">${day.icon}</div>
              </div>
            </div>
            
            <div class="day-content">
              <div class="content-label">Message Principal</div>
              <div class="content-text">${day.mainMessage}</div>
            </div>
            
            <div class="day-content">
              <div class="content-label">Story Text</div>
              <div class="content-text">${day.storyText}</div>
            </div>
            
            <div class="day-content">
              <div class="content-label">Bénéfice Clé</div>
              <div class="content-text" style="color: ${day.pillarColor}; font-weight: bold;">${day.keyBenefit}</div>
            </div>
            
            <div class="day-content">
              <div class="content-label">Hashtags</div>
              <div class="hashtags">
                ${day.hashtags.map((tag) => `<div class="hashtag">${tag}</div>`).join('')}
              </div>
            </div>
            
            <div class="pillar-badge" style="background-color: ${day.pillarColor}; color: #fff;">
              ${day.pillar}
            </div>
          </div>
        `).join('')}
        
        <div class="footer">
          <p>© ${new Date().getFullYear()} TechFlow Solutions. Tous droits réservés.</p>
          <p>Paris • Londres • New York</p>
          <p>Calendrier généré le ${new Date().toLocaleDateString('fr-FR')}</p>
        </div>
      </div>
    </body>
    </html>
  `;

  // Créer un blob et télécharger
  const element = document.createElement('a');
  const file = new Blob([htmlContent], { type: 'text/html' });
  element.href = URL.createObjectURL(file);
  element.download = `TechFlow-Calendrier-Editorial-${new Date().toISOString().split('T')[0]}.html`;
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

// Alternative: Générer un CSV pour Excel
export const generateCalendarCSV = () => {
  let csv = 'Jour,Type,Titre,Message Principal,Story Text,Bénéfice,Hashtags\n';
  
  contentCalendar.forEach((day) => {
    const row = [
      day.dayFr,
      day.pillar,
      day.title,
      `"${day.mainMessage.replace(/"/g, '""')}"`,
      `"${day.storyText.replace(/"/g, '""')}"`,
      day.keyBenefit,
      day.hashtags.join(' ')
    ].join(',');
    csv += row + '\n';
  });

  const element = document.createElement('a');
  const file = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  element.href = URL.createObjectURL(file);
  element.download = `TechFlow-Calendrier-Editorial-${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};
