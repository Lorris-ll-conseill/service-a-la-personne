/**
 * Script pour tester la réactivité du site sur différentes tailles d'écran
 * Ce script ajoute une barre flottante qui permet de simuler différentes tailles d'écran
 * et de visualiser comment le site s'adapte à différents dispositifs
 */

document.addEventListener("DOMContentLoaded", () => {
  // Créer la barre de test de réactivité
  const responsiveTestBar = document.createElement("div");
  responsiveTestBar.className = "responsive-test-bar";
  responsiveTestBar.innerHTML = `
    <button class="close-test-bar"><i class="fas fa-times"></i></button>
    <h4>Test de réactivité</h4>
    <div class="device-buttons">
      <button data-width="375" data-device="Mobile S" title="Mobile S (375px)"><i class="fas fa-mobile-alt"></i> S</button>
      <button data-width="414" data-device="Mobile L" title="Mobile L (414px)"><i class="fas fa-mobile"></i> L</button>
      <button data-width="768" data-device="Tablette" title="Tablette (768px)"><i class="fas fa-tablet-alt"></i></button>
      <button data-width="1024" data-device="Laptop" title="Laptop (1024px)"><i class="fas fa-laptop"></i></button>
      <button data-width="1440" data-device="Desktop" title="Desktop (1440px)"><i class="fas fa-desktop"></i></button>
      <button data-width="100%" data-device="Full" title="Taille réelle"><i class="fas fa-expand"></i></button>
    </div>
    <div class="size-controls">
      <button class="size-decrease" title="Réduire la largeur"><i class="fas fa-minus"></i></button>
      <div class="current-size">
        <span class="size-label">Dimensions:</span>
        <span class="current-width"></span> x <span class="current-height"></span>
      </div>
      <button class="size-increase" title="Augmenter la largeur"><i class="fas fa-plus"></i></button>
    </div>
    <div class="page-selector">
      <select id="page-select">
        <option value="index.html">Accueil</option>
        <option value="services.html">Services</option>
        <option value="menage.html">Ménage</option>
        <option value="repas.html">Repas</option>
        <option value="contact.html">Contact</option>
        <option value="faq.html">FAQ</option>
      </select>
      <button class="load-page" title="Charger la page"><i class="fas fa-arrow-right"></i></button>
    </div>
    <div class="responsive-tools">
      <button class="toggle-grid" title="Afficher/masquer la grille"><i class="fas fa-th"></i></button>
      <button class="take-screenshot" title="Capture d'écran"><i class="fas fa-camera"></i></button>
    </div>
  `;

  // Ajouter les styles CSS
  const style = document.createElement("style");
  style.textContent = `
    .responsive-test-bar {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(44, 120, 115, 0.95);
      color: white;
      padding: 12px;
      text-align: center;
      z-index: 9999;
      font-family: Arial, sans-serif;
      box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 15px;
    }
    
    .responsive-test-bar h4 {
      margin: 0 15px 0 0;
      font-size: 16px;
      white-space: nowrap;
    }
    
    .device-buttons {
      display: flex;
      gap: 8px;
      margin-right: 15px;
    }
    
    .device-buttons button {
      background-color: rgba(255, 255, 255, 0.2);
      border: none;
      border-radius: 4px;
      padding: 8px 10px;
      cursor: pointer;
      color: white;
      font-size: 16px;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      gap: 5px;
    }
    
    .device-buttons button:hover {
      background-color: rgba(255, 255, 255, 0.4);
    }
    
    .device-buttons button.active {
      background-color: white;
      color: #2c7873;
      font-weight: bold;
    }
    
    .size-controls {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-right: 15px;
    }
    
    .size-controls button {
      background-color: rgba(255, 255, 255, 0.2);
      border: none;
      border-radius: 4px;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: white;
      font-size: 14px;
      transition: all 0.2s;
    }
    
    .size-controls button:hover {
      background-color: rgba(255, 255, 255, 0.4);
    }
    
    .current-size {
      font-size: 14px;
      display: flex;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.2);
      padding: 5px 10px;
      border-radius: 4px;
      white-space: nowrap;
    }
    
    .size-label {
      margin-right: 8px;
    }
    
    .page-selector {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-right: 15px;
    }
    
    .page-selector select {
      padding: 6px 10px;
      border-radius: 4px;
      border: none;
      background-color: rgba(255, 255, 255, 0.9);
      color: #2c7873;
      font-size: 14px;
    }
    
    .page-selector button, .responsive-tools button {
      background-color: rgba(255, 255, 255, 0.2);
      border: none;
      border-radius: 4px;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: white;
      font-size: 14px;
      transition: all 0.2s;
    }
    
    .page-selector button:hover, .responsive-tools button:hover {
      background-color: rgba(255, 255, 255, 0.4);
    }
    
    .responsive-tools {
      display: flex;
      gap: 8px;
    }
    
    .responsive-tools button.active {
      background-color: white;
      color: #2c7873;
    }
    
    .close-test-bar {
      position: absolute;
      top: 5px;
      right: 5px;
      background: transparent;
      border: none;
      color: white;
      cursor: pointer;
      font-size: 16px;
      padding: 5px;
    }
    
    .responsive-frame {
      border: 2px solid #2c7873 !important;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2) !important;
      margin: 20px auto !important;
      transition: width 0.3s ease !important;
      height: calc(100vh - 100px) !important;
      overflow: auto !important;
      position: relative;
    }
    
    .responsive-grid {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: linear-gradient(to right, rgba(44, 120, 115, 0.1) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(44, 120, 115, 0.1) 1px, transparent 1px);
      background-size: 20px 20px;
      pointer-events: none;
      z-index: 9000;
    }
    
    .screenshot-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.8);
      z-index: 10000;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    
    .screenshot-overlay img {
      max-width: 90%;
      max-height: 80vh;
      border: 3px solid white;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    }
    
    .screenshot-controls {
      margin-top: 20px;
      display: flex;
      gap: 15px;
    }
    
    .screenshot-controls button {
      background-color: #2c7873;
      color: white;
      border: none;
      padding: 8px 15px;
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 5px;
    }
    
    .screenshot-controls button:hover {
      background-color: #1a5953;
    }
    
    @media (max-width: 768px) {
      .responsive-test-bar {
        flex-direction: column;
        padding: 10px 5px 15px;
        gap: 10px;
      }
      
      .device-buttons, .size-controls, .page-selector, .responsive-tools {
        margin-right: 0;
      }
    }
  `;

  // Ajouter les éléments au document
  document.head.appendChild(style);
  document.body.appendChild(responsiveTestBar);

  // Détecter quelle page est actuellement affichée
  const currentPath = window.location.pathname;
  const pageName = currentPath.split("/").pop() || "index.html";
  const pageSelect = document.getElementById("page-select");
  if (pageSelect) {
    for (let i = 0; i < pageSelect.options.length; i++) {
      if (pageSelect.options[i].value === pageName) {
        pageSelect.selectedIndex = i;
        break;
      }
    }
  }

  // Mettre à jour l'affichage de la taille actuelle
  const updateCurrentSize = () => {
    const currentWidth = document.querySelector(".current-width");
    const currentHeight = document.querySelector(".current-height");
    if (currentWidth && currentHeight) {
      currentWidth.textContent = window.innerWidth;
      currentHeight.textContent = window.innerHeight;
    }
  };

  // Initialiser et mettre à jour l'affichage de taille
  updateCurrentSize();
  window.addEventListener("resize", updateCurrentSize);

  // Gérer les clics sur les boutons de dispositifs
  const deviceButtons = document.querySelectorAll(".device-buttons button");
  deviceButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const width = event.currentTarget.getAttribute("data-width");
      applyDeviceSize(width, event.currentTarget);
    });
  });

  // Appliquer une taille d'écran
  const applyDeviceSize = (width, buttonElement) => {
    // Retirer la classe active de tous les boutons
    const buttons = document.querySelectorAll(".device-buttons button");
    buttons.forEach((btn) => btn.classList.remove("active"));

    // Réinitialiser si on choisit la taille réelle
    if (width === "100%") {
      document.body.style.width = "";
      document.body.style.margin = "";
      document.body.classList.remove("responsive-frame");
      if (buttonElement) buttonElement.classList.add("active");
      updateCurrentSize();
      return;
    }

    // Appliquer la nouvelle taille
    const numWidth = parseInt(width);
    document.body.style.width = numWidth + "px";
    document.body.style.margin = "0 auto";
    document.body.classList.add("responsive-frame");
    if (buttonElement) buttonElement.classList.add("active");

    updateCurrentSize();
  };

  // Gérer les boutons d'incrémentation/décrémentation de la taille
  const decreaseButton = document.querySelector(".size-decrease");
  const increaseButton = document.querySelector(".size-increase");

  if (decreaseButton) {
    decreaseButton.addEventListener("click", () => {
      // Seulement si on est en mode responsive
      if (document.body.classList.contains("responsive-frame")) {
        const currentWidth = parseInt(document.body.style.width);
        const newWidth = Math.max(320, currentWidth - 50); // Minimum 320px
        document.body.style.width = newWidth + "px";
        updateCurrentSize();

        // Désélectionner les boutons de dispositifs prédéfinis
        document.querySelectorAll(".device-buttons button").forEach((btn) => {
          btn.classList.remove("active");
        });
      }
    });
  }

  if (increaseButton) {
    increaseButton.addEventListener("click", () => {
      // Seulement si on est en mode responsive
      if (document.body.classList.contains("responsive-frame")) {
        const currentWidth = parseInt(document.body.style.width);
        const newWidth = Math.min(2560, currentWidth + 50); // Maximum 2560px
        document.body.style.width = newWidth + "px";
        updateCurrentSize();

        // Désélectionner les boutons de dispositifs prédéfinis
        document.querySelectorAll(".device-buttons button").forEach((btn) => {
          btn.classList.remove("active");
        });
      }
    });
  }

  // Gérer le changement de page
  const pageSelector = document.querySelector(".load-page");
  if (pageSelector) {
    pageSelector.addEventListener("click", () => {
      const pageSelect = document.getElementById("page-select");
      const selectedPage = pageSelect.value;
      window.location.href = selectedPage;
    });
  }

  // Gérer l'affichage de la grille
  const gridButton = document.querySelector(".toggle-grid");
  if (gridButton) {
    gridButton.addEventListener("click", () => {
      gridButton.classList.toggle("active");

      // Vérifier si la grille existe déjà
      let gridOverlay = document.querySelector(".responsive-grid");

      if (gridButton.classList.contains("active")) {
        if (!gridOverlay) {
          gridOverlay = document.createElement("div");
          gridOverlay.className = "responsive-grid";
          document.body.appendChild(gridOverlay);
        }
      } else {
        if (gridOverlay) {
          gridOverlay.remove();
        }
      }
    });
  }

  // Fonctionnalité de capture d'écran (simulée, car JavaScript ne peut pas prendre de véritables captures)
  const screenshotButton = document.querySelector(".take-screenshot");
  if (screenshotButton) {
    screenshotButton.addEventListener("click", () => {
      // Créer un overlay simulant une capture d'écran
      const overlay = document.createElement("div");
      overlay.className = "screenshot-overlay";

      // Note: Dans un environnement réel, on utiliserait html2canvas
      // ou une autre bibliothèque pour faire une vraie capture
      // Ici, on simule avec un message explicatif
      overlay.innerHTML = `
        <img src="https://images.unsplash.com/photo-1577036421869-7c8d388d2123?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Aperçu de capture d'écran">
        <div class="screenshot-controls">
          <button class="download-screenshot"><i class="fas fa-download"></i> Télécharger</button>
          <button class="close-screenshot"><i class="fas fa-times"></i> Fermer</button>
        </div>
        <p style="color: white; margin-top: 15px;">Note: Ceci est une simulation. Une implémentation complète nécessiterait HTML2Canvas ou une bibliothèque similaire.</p>
      `;

      document.body.appendChild(overlay);

      // Gérer la fermeture de l'overlay
      const closeButton = overlay.querySelector(".close-screenshot");
      closeButton.addEventListener("click", () => {
        overlay.remove();
      });

      // Simuler un téléchargement
      const downloadButton = overlay.querySelector(".download-screenshot");
      downloadButton.addEventListener("click", () => {
        alert(
          "Dans une implémentation complète, l'image serait téléchargée ici."
        );
        // En réalité, on créerait un lien <a> avec download et href pointant vers
        // l'image générée, puis on déclencherait un clic sur ce lien
      });
    });
  }

  // Fermer la barre de test
  const closeButton = document.querySelector(".close-test-bar");
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      responsiveTestBar.remove();

      // Réinitialiser la largeur du body
      document.body.style.width = "";
      document.body.style.margin = "";
      document.body.classList.remove("responsive-frame");

      // Supprimer la grille si elle existe
      const gridOverlay = document.querySelector(".responsive-grid");
      if (gridOverlay) {
        gridOverlay.remove();
      }
    });
  }
});
