<template>
  <div class="contact-form-container">
    <div class="section-title left-align">
      <h2>Formulaire de contact</h2>
      <p>
        Remplissez ce formulaire pour nous faire part de votre demande. Nous
        vous répondrons dans les meilleurs délais.
      </p>
    </div>

    <form
      @submit.prevent="submitContactForm"
      class="contact-form"
      ref="contactFormElement"
    >
      <div class="form-row">
        <div class="form-group">
          <label for="name">Nom complet <span class="required">*</span></label>
          <input
            type="text"
            id="name"
            v-model="contactForm.name"
            placeholder="Votre nom et prénom"
            required
            class="modern-input"
          />
        </div>

        <div class="form-group">
          <label for="email">Email <span class="required">*</span></label>
          <input
            type="email"
            id="email"
            v-model="contactForm.email"
            placeholder="votre.email@exemple.com"
            required
            class="modern-input"
          />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="phone">Téléphone <span class="required">*</span></label>
          <input
            type="tel"
            id="phone"
            v-model="contactForm.phone"
            placeholder="Votre numéro de téléphone"
            required
            class="modern-input"
          />
        </div>

        <div class="form-group">
          <label for="service">Service concerné</label>
          <select
            id="service"
            v-model="contactForm.service"
            class="modern-select"
          >
            <option value="">Sélectionnez un service</option>
            <option value="seniors">Aide aux seniors</option>
            <option value="menage">Ménage à domicile</option>
            <option value="repas">Préparation de repas</option>
            <option value="enfants">Garde d'enfants</option>
            <option value="administratif">Aide administrative</option>
            <option value="autre">Autre demande</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label for="message">Message <span class="required">*</span></label>
        <textarea
          id="message"
          v-model="contactForm.message"
          placeholder="Décrivez votre besoin ou posez-nous vos questions"
          rows="5"
          required
          class="modern-textarea"
        ></textarea>
      </div>

      <div class="form-group">
        <div class="modern-checkbox">
          <input
            type="checkbox"
            id="consent"
            v-model="contactForm.consent"
            required
          />
          <label for="consent">
            J'accepte que mes données soient traitées pour le traitement de ma
            demande. <span class="required">*</span>
          </label>
        </div>
      </div>

      <div class="form-group">
        <button
          type="submit"
          class="btn-submit"
          :disabled="contactSubmitting"
          :class="{ 'btn-loading': contactSubmitting }"
        >
          <span v-if="!contactSubmitting">Envoyer ma demande</span>
          <span v-else class="btn-spinner">
            <i class="fas fa-spinner fa-spin"></i> Envoi en cours...
          </span>
        </button>
      </div>

      <transition name="fade">
        <div
          v-if="contactMessage"
          class="form-message"
          :class="contactSuccess ? 'success' : 'error'"
        >
          <i
            :class="
              contactSuccess
                ? 'fas fa-check-circle'
                : 'fas fa-exclamation-triangle'
            "
          ></i>
          {{ contactMessage }}
        </div>
      </transition>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const contactForm = ref({
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
  consent: false,
});

const contactSubmitting = ref(false);
const contactMessage = ref("");
const contactSuccess = ref(false);
const contactFormElement = ref(null); // Reference to the form element

const resetContactForm = () => {
  // Create a new object instead of modifying the existing one
  contactForm.value = {
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    consent: false,
  };

  // Optional: Reset the HTML form element directly
  if (contactFormElement.value) {
    contactFormElement.value.reset();
  }
};

const submitContactForm = async () => {
  contactSubmitting.value = true;
  contactMessage.value = "";

  try {
    // Mock API response instead of actual server call
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

    contactSuccess.value = true;
    contactMessage.value =
      "Votre message a été envoyé avec succès! Nous vous répondrons sous 24h.";
    resetContactForm();
  } catch (error) {
    contactSuccess.value = false;
    contactMessage.value =
      "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.";
    console.error("Erreur lors de la soumission du formulaire:", error);
  } finally {
    contactSubmitting.value = false;
  }
};
</script>

<style scoped>
.contact-form-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.form-row .form-group {
  flex: 1 1 280px;
}

.form-group {
  margin-bottom: 0.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  font-size: 0.9rem;
  color: #333;
}

.required {
  color: #e74c3c;
}

.modern-input,
.modern-textarea,
.modern-select {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  background: #f9f9f9;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.modern-input:focus,
.modern-textarea:focus,
.modern-select:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
  background: #fff;
}

.modern-input::placeholder,
.modern-textarea::placeholder {
  color: #aaa;
}

.modern-checkbox {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.modern-checkbox input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
  margin-top: 3px;
  position: relative;
  cursor: pointer;
  background: #f9f9f9;
}

.modern-checkbox input[type="checkbox"]:checked {
  background: #4a90e2;
  border-color: #4a90e2;
}

.modern-checkbox input[type="checkbox"]:checked:after {
  content: "✓";
  position: absolute;
  color: white;
  font-size: 14px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.modern-checkbox label {
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 0;
}

.btn-submit {
  display: inline-block;
  padding: 14px 28px;
  background: linear-gradient(135deg, #4a90e2 0%, #5ca8ff 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.btn-submit:hover {
  transform: translateY(-2px);
  box-shadow: 0 7px 14px rgba(74, 144, 226, 0.2);
}

.btn-submit:disabled {
  background: #cccccc;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.btn-loading {
  padding-left: 45px;
}

.btn-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.form-message {
  padding: 15px;
  border-radius: 8px;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.form-message.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.form-message.error {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .contact-form-container {
    padding: 1rem;
  }

  .form-row {
    flex-direction: column;
    gap: 0.75rem;
  }

  .btn-submit {
    width: 100%;
    padding: 12px 20px;
  }
}

@media (max-width: 480px) {
  .modern-input,
  .modern-textarea,
  .modern-select {
    padding: 10px 14px;
  }

  .form-group {
    margin-bottom: 0.75rem;
  }
}
</style>
