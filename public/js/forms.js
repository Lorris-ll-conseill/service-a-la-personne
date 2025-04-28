/**
 * Script pour gérer les soumissions des formulaires
 * et autres fonctionnalités interactives
 */

document.addEventListener("DOMContentLoaded", () => {
  // Gestion du formulaire de contact principal
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Validation du formulaire
      if (!validateForm(contactForm)) {
        return;
      }

      // Animation de chargement pendant la soumission
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.innerHTML;
      submitButton.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
      submitButton.disabled = true;

      try {
        // Récupération des données du formulaire
        const formData = new FormData(contactForm);
        const formDataObj = {};
        formData.forEach((value, key) => {
          formDataObj[key] = value;
        });

        // Envoi des données au serveur
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataObj),
        });

        const result = await response.json();

        if (result.success) {
          // Afficher un message de succès
          const formContainer = contactForm.closest(".contact-form");
          formContainer.innerHTML = `
            <div class="success-message zoom-in">
              <i class="fas fa-check-circle pulse"></i>
              <h3>Votre message a été envoyé avec succès !</h3>
              <p>Nous vous répondrons dans les plus brefs délais, généralement sous 24h.</p>
            </div>
          `;

          // Scroll jusqu'au message de confirmation
          formContainer.scrollIntoView({ behavior: "smooth" });
        } else {
          // En cas d'erreur, afficher un message d'erreur
          showError(
            contactForm,
            "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer."
          );
          submitButton.innerHTML = originalButtonText;
          submitButton.disabled = false;
        }
      } catch (error) {
        console.error("Erreur lors de la soumission du formulaire:", error);
        showError(
          contactForm,
          "Une erreur de connexion s'est produite. Veuillez vérifier votre connexion internet et réessayer."
        );
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
      }
    });
  }

  // Gestion du formulaire de rappel
  const callbackForm = document.getElementById("callbackForm");
  if (callbackForm) {
    callbackForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Validation du formulaire
      if (!validateForm(callbackForm)) {
        return;
      }

      // Animation de chargement
      const submitButton = callbackForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton.innerHTML;
      submitButton.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Envoi...';
      submitButton.disabled = true;

      try {
        // Récupération des données
        const formData = new FormData(callbackForm);
        const formDataObj = {};
        formData.forEach((value, key) => {
          formDataObj[key] = value;
        });

        // Envoi au serveur
        const response = await fetch("/api/callback", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataObj),
        });

        const result = await response.json();

        if (result.success) {
          // Message de succès
          const callbackSection = callbackForm.closest(".callback-content");
          callbackSection.innerHTML = `
            <div class="success-message zoom-in">
              <i class="fas fa-phone-alt pulse"></i>
              <h3>Demande de rappel enregistrée !</h3>
              <p>Un conseiller vous contactera au ${formDataObj["callback-phone"]} 
              durant la plage horaire sélectionnée.</p>
            </div>
          `;
        } else {
          showError(
            callbackForm,
            "Une erreur est survenue. Veuillez réessayer."
          );
          submitButton.innerHTML = originalButtonText;
          submitButton.disabled = false;
        }
      } catch (error) {
        console.error("Erreur lors de la demande de rappel:", error);
        showError(
          callbackForm,
          "Une erreur de connexion s'est produite. Veuillez réessayer."
        );
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
      }
    });
  }

  // Fonctions utilitaires

  // Validation de formulaire
  function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll("input, textarea, select");

    // Supprimer tous les messages d'erreur précédents
    form.querySelectorAll(".error-message").forEach((msg) => msg.remove());
    inputs.forEach((input) => input.classList.remove("error"));

    // Vérifier chaque champ obligatoire
    inputs.forEach((input) => {
      if (input.hasAttribute("required") && !input.value.trim()) {
        isValid = false;
        markAsError(input, "Ce champ est obligatoire");
      } else if (
        input.type === "email" &&
        input.value &&
        !validateEmail(input.value)
      ) {
        isValid = false;
        markAsError(input, "Veuillez entrer une adresse email valide");
      } else if (
        input.type === "tel" &&
        input.value &&
        !validatePhone(input.value)
      ) {
        isValid = false;
        markAsError(input, "Veuillez entrer un numéro de téléphone valide");
      } else if (
        input.id === "zip" &&
        input.value &&
        !validatePostalCode(input.value)
      ) {
        isValid = false;
        markAsError(
          input,
          "Veuillez entrer un code postal français valide (5 chiffres)"
        );
      }
    });

    return isValid;
  }

  // Marquer un champ comme erreur
  function markAsError(input, message) {
    input.classList.add("error");
    const errorMsg = document.createElement("div");
    errorMsg.className = "error-message";
    errorMsg.textContent = message;
    input.parentNode.appendChild(errorMsg);

    // Animation shake
    input.classList.add("shake");
    setTimeout(() => {
      input.classList.remove("shake");
    }, 800);

    // Focus sur le premier champ en erreur
    if (document.querySelectorAll(".error").length === 1) {
      setTimeout(() => input.focus(), 500);
    }
  }

  // Validation email
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Validation téléphone (format français)
  function validatePhone(phone) {
    // Accepte divers formats de téléphone français
    const re = /^(\+33|0)[1-9](\d{2}){4}$/;
    return re.test(phone.replace(/\s/g, ""));
  }

  // Validation code postal (format français)
  function validatePostalCode(postalCode) {
    const re = /^\d{5}$/;
    return re.test(postalCode);
  }

  // Afficher un message d'erreur général
  function showError(form, message) {
    // Supprimer les erreurs précédentes
    const existingError = form.querySelector(".form-error");
    if (existingError) {
      existingError.remove();
    }
    errorDiv.scrollIntoView({ behavior: "smooth", block: "center" });
  }
});
