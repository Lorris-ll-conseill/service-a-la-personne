<template>
  <div class="contact-details-container">
    <div class="section-title left-align">
      <h2>Nos coordonnées</h2>
      <p>
        Plusieurs moyens sont à votre disposition pour nous contacter. N'hésitez
        pas à nous appeler ou nous écrire, nous vous répondrons dans les
        meilleurs délais.
      </p>
    </div>

    <div class="contact-methods">
      <div class="contact-method">
        <div class="contact-method-icon">
          <i class="fas fa-map-marker-alt"></i>
        </div>
        <div class="contact-method-details">
          <h3>Adresse</h3>
          <p>123 rue de la Bienveillance<br />75011 Paris, France</p>
        </div>
      </div>

      <div class="contact-method">
        <div class="contact-method-icon">
          <i class="fas fa-phone"></i>
        </div>
        <div class="contact-method-details">
          <h3>Téléphone</h3>
          <p>01 23 45 67 89</p>
          <p class="contact-method-note">
            Du lundi au vendredi, 8h30-19h<br />Samedi, 9h-17h
          </p>
        </div>
      </div>

      <div class="contact-method">
        <div class="contact-method-icon">
          <i class="fas fa-envelope"></i>
        </div>
        <div class="contact-method-details">
          <h3>Email</h3>
          <p>contact@harmonieservices.fr</p>
          <p class="contact-method-note">Réponse sous 24h ouvrées</p>
        </div>
      </div>
    </div>

    <div class="contact-callback">
      <h3>Demande de rappel</h3>
      <p>
        Vous préférez que nous vous appelions ? Laissez-nous vos coordonnées et
        nous vous recontacterons rapidement.
      </p>
      <form
        @submit.prevent="submitCallbackForm"
        class="callback-form"
        ref="callbackForm"
      >
        <div class="form-row">
          <div class="form-group">
            <input
              type="text"
              id="callback-name"
              v-model="callbackForm.name"
              placeholder="Votre nom"
              required
              class="modern-input"
            />
          </div>
          <div class="form-group">
            <input
              type="tel"
              id="callback-phone"
              v-model="callbackForm.phone"
              name="callback-phone"
              placeholder="Votre téléphone"
              required
              class="modern-input"
            />
          </div>
        </div>
        <div class="form-group callback-submit">
          <button
            type="submit"
            class="btn-submit"
            :disabled="callbackSubmitting"
            :class="{ 'btn-loading': callbackSubmitting }"
          >
            <span v-if="!callbackSubmitting">Demander un rappel</span>
            <span v-else class="btn-spinner">
              <i class="fas fa-spinner fa-spin"></i> Traitement...
            </span>
          </button>
        </div>
        <transition name="fade">
          <div
            v-if="callbackMessage"
            class="form-message"
            :class="callbackSuccess ? 'success' : 'error'"
          >
            <i
              :class="
                callbackSuccess
                  ? 'fas fa-check-circle'
                  : 'fas fa-exclamation-triangle'
              "
            ></i>
            {{ callbackMessage }}
          </div>
        </transition>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const callbackForm = ref({
  name: "",
  phone: "",
});

const callbackSubmitting = ref(false);
const callbackMessage = ref("");
const callbackSuccess = ref(false);

const resetCallbackForm = () => {
  callbackForm.value = {
    name: "",
    phone: "",
  };
};

const submitCallbackForm = async () => {
  callbackSubmitting.value = true;
  callbackMessage.value = "";

  try {
    // Mock API response instead of actual server call
    await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate network delay

    callbackSuccess.value = true;
    callbackMessage.value =
      "Votre demande de rappel a été enregistrée! Un conseiller vous contactera sous peu.";
    resetCallbackForm();
  } catch (error) {
    callbackSuccess.value = false;
    callbackMessage.value =
      "Une erreur est survenue lors de la demande de rappel. Veuillez réessayer.";
    console.error(
      "Erreur lors de la soumission du formulaire de rappel:",
      error
    );
  } finally {
    callbackSubmitting.value = false;
  }
};
</script>

<style scoped>
.contact-details-container {
  max-width: 100%;
  margin: 0 auto;
  padding: 1.5rem;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.contact-method {
  display: flex;
  align-items: flex-start;
  padding: 1.25rem;
  border-radius: 8px;
  background: #f9f9f9;
  transition: all 0.3s ease;
}

.contact-method:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.contact-method-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4a90e2 0%, #5ca8ff 100%);
  color: white;
  font-size: 1.2rem;
  margin-right: 1rem;
  flex-shrink: 0;
}

.contact-method-details {
  flex: 1;
}

.contact-method-details h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  color: #333;
}

.contact-method-details p {
  margin: 0;
  color: #555;
  line-height: 1.5;
}

.contact-method-note {
  font-size: 0.85rem;
  color: #777;
  margin-top: 0.5rem !important;
}

.contact-callback {
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 8px;
  background: linear-gradient(to right, #f8f9fa, #e9f0f7);
  border-left: 4px solid #4a90e2;
}

.contact-callback h3 {
  margin: 0 0 0.75rem 0;
  color: #333;
}

.contact-callback p {
  margin: 0 0 1.25rem 0;
  color: #555;
}

.callback-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.form-row .form-group {
  flex: 1 1 200px;
}

.modern-input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  background: #f9f9f9;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.modern-input:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
  background: #fff;
}

.modern-input::placeholder {
  color: #aaa;
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
  .contact-details-container {
    padding: 1rem;
  }

  .form-row {
    flex-direction: column;
    gap: 0.75rem;
  }

  .callback-submit .btn-submit {
    width: 100%;
  }

  .contact-method {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .contact-method {
    flex-direction: column;
  }

  .contact-method-icon {
    margin-bottom: 1rem;
    margin-right: 0;
  }
}
</style>
