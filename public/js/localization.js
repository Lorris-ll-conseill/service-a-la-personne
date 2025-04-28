/**
 * Gestion de la localisation du site
 * Script qui détecte la langue du navigateur et propose
 * la version appropriée du site
 */

document.addEventListener("DOMContentLoaded", () => {
  // Vérifier si la bannière a déjà été affichée
  if (sessionStorage.getItem("languageBannerShown")) {
    return;
  }

  // Détecter la langue du navigateur
  const userLang = navigator.language || navigator.userLanguage;
  const primaryLang = userLang.split("-")[0].toLowerCase();

  // Pour l'instant, le site n'est qu'en français
  // À l'avenir, on pourrait rediriger vers d'autres versions du site
  const supportedLanguages = ["fr"];
  const siteLanguage = "fr";

  // Si la langue du navigateur n'est pas le français, montrer une bannière
  if (
    !supportedLanguages.includes(primaryLang) &&
    primaryLang !== siteLanguage
  ) {
    showLanguageBanner(primaryLang);
  }

  // Fonction pour afficher la bannière de langue
  function showLanguageBanner(detectedLang) {
    // Créer la bannière
    const banner = document.createElement("div");
    banner.className = "language-banner";

    // Déterminer le message en fonction de la langue détectée
    let message = "";
    let languageName = "";

    switch (detectedLang) {
      case "en":
        languageName = "English";
        message =
          "This website is currently only available in French. An English version will be available soon.";
        break;
      case "es":
        languageName = "Español";
        message =
          "Este sitio web actualmente solo está disponible en francés. Una versión en español estará disponible pronto.";
        break;
      case "de":
        languageName = "Deutsch";
        message =
          "Diese Website ist derzeit nur auf Französisch verfügbar. Eine deutsche Version wird in Kürze verfügbar sein.";
        break;
      case "it":
        languageName = "Italiano";
        message =
          "Questo sito web è attualmente disponibile solo in francese. Una versione italiana sarà disponibile a breve.";
        break;
      default:
        languageName = detectedLang.toUpperCase();
        message = "This website is currently only available in French.";
    }

    // Contenu de la bannière
    banner.innerHTML = `
      <div class="language-banner-content">
        <div class="language-info">
          <span class="language-icon"><i class="fas fa-globe"></i></span>
          <span class="language-message">${message}</span>
        </div>
        <div class="language-actions">
          <button class="btn-translate">Translate <i class="fas fa-language"></i></button>
          <button class="btn-close"><i class="fas fa-times"></i></button>
        </div>
      </div>
    `;

    // Styles de la bannière
    const style = document.createElement("style");
    style.textContent = `
      .language-banner {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background-color: rgba(var(--color-primary-rgb), 0.9);
        color: white;
        z-index: 10000;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        transform: translateY(-100%);
        transition: transform 0.3s ease;
      }
      
      .language-banner.show {
        transform: translateY(0);
      }
      
      .language-banner-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        max-width: 1200px;
        margin: 0 auto;
      }
      
      .language-info {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .language-icon {
        font-size: 20px;
      }
      
      .language-actions {
        display: flex;
        gap: 10px;
      }
      
      .btn-translate {
        background-color: white;
        color: var(--color-primary);
        border: none;
        padding: 6px 12px;
        border-radius: 4px;
        cursor: pointer;
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 5px;
      }
      
      .btn-close {
        background: transparent;
        border: 1px solid rgba(255, 255, 255, 0.5);
        color: white;
        padding: 6px 10px;
        border-radius: 4px;
        cursor: pointer;
      }
      
      @media (max-width: 768px) {
        .language-banner-content {
          flex-direction: column;
          gap: 10px;
          text-align: center;
        }
        
        .language-actions {
          width: 100%;
          justify-content: center;
        }
      }
    `;

    // Ajouter la bannière et les styles au document
    document.head.appendChild(style);
    document.body.appendChild(banner);

    // Afficher la bannière avec une légère animation
    setTimeout(() => {
      banner.classList.add("show");
    }, 1000);

    // Gérer les interactions avec la bannière
    const closeBtn = banner.querySelector(".btn-close");
    closeBtn.addEventListener("click", () => {
      banner.classList.remove("show");
      // Enregistrer que la bannière a été fermée pour cette session
      sessionStorage.setItem("languageBannerShown", "true");

      // Supprimer la bannière après l'animation
      setTimeout(() => {
        banner.remove();
      }, 300);
    });

    // Gérer le bouton de traduction (pour l'instant, juste rediriger vers Google Translate)
    const translateBtn = banner.querySelector(".btn-translate");
    translateBtn.addEventListener("click", () => {
      const currentUrl = encodeURIComponent(window.location.href);
      window.open(
        `https://translate.google.com/translate?sl=fr&tl=${detectedLang}&u=${currentUrl}`,
        "_blank"
      );
    });
  }
});
