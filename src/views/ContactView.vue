<template>
  <div>
    <HeroSection
      backgroundImage="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      title="Contactez-nous"
      subtitle="Nous sommes à votre écoute pour répondre à vos questions et vous accompagner"
      scrollTarget="#contact-info"
    />

    <section id="contact-info" class="contact-info">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-details">
            <div class="section-title left-align">
              <h2>Nos coordonnées</h2>
              <p>
                Plusieurs moyens sont à votre disposition pour nous contacter.
                N'hésitez pas à nous appeler ou nous écrire, nous vous
                répondrons dans les meilleurs délais.
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
                Vous préférez que nous vous appelions ? Laissez-nous vos
                coordonnées et nous vous recontacterons rapidement.
              </p>
              <form
                @submit.prevent="submitCallbackForm"
                class="callback-form"
                ref="callbackForm"
              >
                <div class="form-group">
                  <input
                    type="text"
                    id="callback-name"
                    v-model="callbackForm.name"
                    placeholder="Votre nom"
                    required
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
                  />
                </div>
                <div class="form-group callback-submit">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    :disabled="callbackSubmitting"
                  >
                    <span v-if="!callbackSubmitting">Demander un rappel</span>
                    <span v-else>
                      <i class="fas fa-spinner fa-spin"></i> Traitement...
                    </span>
                  </button>
                </div>
                <div
                  v-if="callbackMessage"
                  class="callback-message"
                  :class="callbackSuccess ? 'success' : 'error'"
                >
                  {{ callbackMessage }}
                </div>
              </form>
            </div>
          </div>

          <div class="contact-form-container">
            <div class="section-title left-align">
              <h2>Formulaire de contact</h2>
              <p>
                Remplissez ce formulaire pour nous faire part de votre demande.
                Nous vous répondrons dans les meilleurs délais.
              </p>
            </div>

            <form
              @submit.prevent="submitContactForm"
              class="contact-form"
              ref="contactForm"
            >
              <div class="form-group">
                <label for="name"
                  >Nom complet <span class="required">*</span></label
                >
                <input
                  type="text"
                  id="name"
                  v-model="contactForm.name"
                  placeholder="Votre nom et prénom"
                  required
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
                />
              </div>

              <div class="form-group">
                <label for="phone"
                  >Téléphone <span class="required">*</span></label
                >
                <input
                  type="tel"
                  id="phone"
                  v-model="contactForm.phone"
                  placeholder="Votre numéro de téléphone"
                  required
                />
              </div>

              <div class="form-group">
                <label for="service">Service concerné</label>
                <select id="service" v-model="contactForm.service">
                  <option value="">Sélectionnez un service</option>
                  <option value="seniors">Aide aux seniors</option>
                  <option value="menage">Ménage à domicile</option>
                  <option value="repas">Préparation de repas</option>
                  <option value="enfants">Garde d'enfants</option>
                  <option value="administratif">Aide administrative</option>
                  <option value="autre">Autre demande</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message"
                  >Message <span class="required">*</span></label
                >
                <textarea
                  id="message"
                  v-model="contactForm.message"
                  placeholder="Décrivez votre besoin ou posez-nous vos questions"
                  rows="5"
                  required
                ></textarea>
              </div>

              <div class="form-group">
                <div class="checkbox">
                  <input
                    type="checkbox"
                    id="consent"
                    v-model="contactForm.consent"
                    required
                  />
                  <label for="consent">
                    J'accepte que mes données soient traitées pour le traitement
                    de ma demande. *
                  </label>
                </div>
              </div>

              <div class="form-group">
                <button
                  type="submit"
                  class="btn btn-primary btn-lg"
                  :disabled="contactSubmitting"
                >
                  <span v-if="!contactSubmitting">Envoyer ma demande</span>
                  <span v-else>
                    <i class="fas fa-spinner fa-spin"></i> Envoi en cours...
                  </span>
                </button>
              </div>

              <div
                v-if="contactMessage"
                class="form-message"
                :class="contactSuccess ? 'success' : 'error'"
              >
                {{ contactMessage }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="map-section">
      <div class="container">
        <div class="section-title">
          <h2>Nos zones d'intervention</h2>
          <p>
            Nous intervenons principalement à Paris et dans la petite couronne.
            Contactez-nous pour vérifier si nous intervenons dans votre
            quartier.
          </p>
        </div>
        <div class="map-container">
          <img
            src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
            alt="Carte des zones d'intervention"
            class="map-image"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import HeroSection from "@/components/HeroSection.vue";

export default {
  name: "ContactView",
  components: {
    HeroSection,
  },
  data() {
    return {
      contactForm: {
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        consent: false,
      },
      callbackForm: {
        name: "",
        phone: "",
      },
      contactSubmitting: false,
      callbackSubmitting: false,
      contactMessage: "",
      callbackMessage: "",
      contactSuccess: false,
      callbackSuccess: false,
    };
  },
  methods: {
    async submitContactForm() {
      this.contactSubmitting = true;
      this.contactMessage = "";

      try {
        // Mock API response instead of actual server call
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay

        this.contactSuccess = true;
        this.contactMessage =
          "Votre message a été envoyé avec succès! Nous vous répondrons sous 24h.";
        this.resetContactForm();
      } catch (error) {
        this.contactSuccess = false;
        this.contactMessage =
          "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.";
        console.error("Erreur lors de la soumission du formulaire:", error);
      } finally {
        this.contactSubmitting = false;
      }
    },

    async submitCallbackForm() {
      this.callbackSubmitting = true;
      this.callbackMessage = "";

      try {
        // Mock API response instead of actual server call
        await new Promise((resolve) => setTimeout(resolve, 800)); // Simulate network delay

        this.callbackSuccess = true;
        this.callbackMessage =
          "Votre demande de rappel a été enregistrée! Un conseiller vous contactera sous peu.";
        this.resetCallbackForm();
      } catch (error) {
        this.callbackSuccess = false;
        this.callbackMessage =
          "Une erreur est survenue lors de la demande de rappel. Veuillez réessayer.";
        console.error(
          "Erreur lors de la soumission du formulaire de rappel:",
          error
        );
      } finally {
        this.callbackSubmitting = false;
      }
    },

    resetContactForm() {
      this.contactForm = {
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        consent: false,
      };
    },

    resetCallbackForm() {
      this.callbackForm = {
        name: "",
        phone: "",
      };
    },
  },
};
</script>
