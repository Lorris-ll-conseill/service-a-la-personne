<template>
  <div>
    <HeroSection
      backgroundImage="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      title="Questions fréquemment posées"
      subtitle="Trouvez les réponses à vos questions sur nos services d'aide à domicile"
      scrollTarget="#faq-content"
    />

    <section id="faq-content" class="faq-section">
      <div class="container">
        <div class="section-title">
          <h2>FAQ</h2>
          <p>
            Nous avons regroupé les questions les plus fréquentes concernant nos
            services. Si vous ne trouvez pas la réponse à votre question,
            n'hésitez pas à nous contacter directement.
          </p>
          <router-link to="/contact" class="btn btn-primary"
            >Nous contacter</router-link
          >
        </div>

        <div class="faq-categories">
          <div class="faq-category-buttons">
            <button
              v-for="(category, index) in categories"
              :key="index"
              :class="[
                'faq-category-button',
                { active: activeCategory === category.id },
              ]"
              @click="activeCategory = category.id"
            >
              <i :class="category.icon"></i>
              <span>{{ category.name }}</span>
            </button>
          </div>

          <div class="faq-categories-content">
            <div
              v-for="(category, categoryIndex) in categories"
              :key="categoryIndex"
              :id="category.id"
              :class="[
                'faq-category-content',
                { active: activeCategory === category.id },
              ]"
            >
              <div
                v-for="(item, itemIndex) in category.questions"
                :key="itemIndex"
                class="faq-item"
                :class="{ active: openItems[`${category.id}-${itemIndex}`] }"
              >
                <div
                  class="faq-question"
                  @click="toggleItem(category.id, itemIndex)"
                >
                  <h3>{{ item.question }}</h3>
                  <i
                    class="fas"
                    :class="
                      openItems[`${category.id}-${itemIndex}`]
                        ? 'fa-chevron-up'
                        : 'fa-chevron-down'
                    "
                  ></i>
                </div>
                <div
                  class="faq-answer"
                  :style="getAnswerStyle(category.id, itemIndex)"
                >
                  <div v-html="item.answer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <div class="container">
        <div class="section-title">
          <h2>Ce que disent nos clients</h2>
        </div>

        <div class="testimonial-slider reveal fade-in-up">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="testimonial"
            :class="{ active: currentTestimonial === index }"
          >
            <div class="testimonial-content">
              <p>{{ testimonial.content }}</p>
            </div>
            <div class="testimonial-author">
              <img :src="testimonial.image" :alt="testimonial.name" />
              <div class="testimonial-info">
                <h4>{{ testimonial.name }}</h4>
                <p>{{ testimonial.role }}</p>
              </div>
            </div>
          </div>

          <div class="testimonial-controls">
            <button
              class="testimonial-control testimonial-prev"
              @click="prevTestimonial"
            >
              <i class="fas fa-chevron-left"></i>
            </button>
            <button
              class="testimonial-control testimonial-next"
              @click="nextTestimonial"
            >
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>

    <CtaSection
      title="D'autres questions ?"
      text="Notre équipe est à votre disposition pour répondre à toutes vos interrogations et vous accompagner dans vos démarches."
      buttonText="Nous contacter"
      buttonLink="/contact"
    />
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import CtaSection from "@/components/CtaSection.vue";

export default {
  name: "FaqView",
  components: {
    HeroSection,
    CtaSection,
  },
  data() {
    return {
      activeCategory: "general",
      openItems: {},
      currentTestimonial: 0,
      categories: [
        {
          id: "general",
          name: "Informations générales",
          icon: "fas fa-info-circle",
          questions: [
            {
              question:
                "Quels sont les services proposés par Harmonie Services ?",
              answer:
                "<p>Harmonie Services propose une gamme complète de services d'aide à domicile :</p><ul><li>Aide aux personnes âgées et dépendantes</li><li>Services de ménage à domicile</li><li>Préparation de repas</li><li>Garde d'enfants</li><li>Aide administrative</li></ul><p>Tous nos services sont personnalisables selon vos besoins spécifiques.</p>",
            },
            {
              question: "Dans quelles zones géographiques intervenez-vous ?",
              answer:
                "<p>Nous intervenons principalement à Paris et dans la petite couronne (départements 92, 93, 94). Pour savoir si votre domicile est dans notre zone d'intervention, contactez-nous par téléphone au 01 23 45 67 89 ou via notre formulaire de contact.</p>",
            },
            {
              question: "Comment sont sélectionnés vos intervenants ?",
              answer:
                "<p>Nos intervenants sont sélectionnés selon un processus rigoureux qui comprend :</p><ul><li>Vérification des diplômes et expériences</li><li>Entretiens approfondis</li><li>Vérification des références</li><li>Formation continue</li></ul><p>Nous nous assurons que chaque intervenant partage nos valeurs de bienveillance, de respect et de professionnalisme.</p>",
            },
            {
              question: "Puis-je choisir mon intervenant ?",
              answer:
                "<p>Oui, nous tenons compte de vos préférences dans la sélection de l'intervenant. Nous organisons une première rencontre pour vous assurer que le feeling passe bien. Si vous n'êtes pas satisfait, nous vous proposerons un autre intervenant.</p>",
            },
          ],
        },
        {
          id: "tarifs",
          name: "Tarifs et financement",
          icon: "fas fa-euro-sign",
          questions: [
            {
              question: "Comment sont calculés vos tarifs ?",
              answer:
                "<p>Nos tarifs sont calculés en fonction du type de service, de la fréquence des interventions et des besoins spécifiques. Nous proposons des tarifs horaires compétitifs, et vous bénéficiez d'un crédit d'impôt de 50% sur les sommes versées.</p><p>Pour obtenir un devis personnalisé gratuit, contactez-nous par téléphone ou via notre formulaire en ligne.</p>",
            },
            {
              question: "Quelles aides financières puis-je obtenir ?",
              answer:
                "<p>Plusieurs aides financières peuvent réduire le coût de nos services :</p><ul><li>APA (Allocation Personnalisée d'Autonomie) pour les personnes âgées</li><li>PCH (Prestation de Compensation du Handicap)</li><li>Aides des caisses de retraite</li><li>Crédit d'impôt de 50%</li></ul><p>Notre équipe peut vous aider dans vos démarches pour obtenir ces aides.</p>",
            },
            {
              question: "Comment fonctionne le crédit d'impôt de 50% ?",
              answer:
                "<p>Vous bénéficiez d'un crédit d'impôt égal à 50% des sommes versées pour des services à la personne, dans la limite de 12 000€ par an (plafond majoré dans certains cas). Ce crédit d'impôt est accessible à tous, même aux personnes non imposables.</p><p>Exemple : pour 2 000€ de services utilisés, vous récupérez 1 000€ sous forme de crédit d'impôt.</p>",
            },
            {
              question: "Quels sont vos moyens de paiement acceptés ?",
              answer:
                "<p>Nous acceptons plusieurs moyens de paiement :</p><ul><li>Prélèvement automatique</li><li>Virement bancaire</li><li>Chèque bancaire</li><li>CESU préfinancé (Chèque Emploi Service Universel)</li></ul><p>En fin d'année, nous vous fournissons une attestation fiscale pour bénéficier du crédit d'impôt de 50%.</p>",
            },
          ],
        },
        {
          id: "services",
          name: "Organisation des services",
          icon: "fas fa-calendar-alt",
          questions: [
            {
              question:
                "Comment mettre en place un service d'aide à domicile ?",
              answer:
                "<p>La mise en place d'un service se déroule en plusieurs étapes :</p><ol><li>Évaluation de vos besoins lors d'un entretien téléphonique ou à domicile</li><li>Élaboration d'un plan d'accompagnement personnalisé</li><li>Proposition d'un devis détaillé</li><li>Sélection d'un intervenant adapté à vos besoins</li><li>Mise en place du service selon le planning convenu</li></ol><p>Tout ce processus peut être mis en place en quelques jours, et même plus rapidement en cas d'urgence.</p>",
            },
            {
              question: "Quelle est la durée minimale d'intervention ?",
              answer:
                "<p>La durée minimale d'intervention est généralement de 2 heures pour les services de ménage et d'aide à domicile. Pour la préparation de repas, nous recommandons un minimum de 3 heures pour permettre une prestation de qualité.</p><p>Les interventions peuvent être planifiées selon la fréquence qui vous convient : quotidienne, hebdomadaire, bi-mensuelle, etc.</p>",
            },
            {
              question: "Que se passe-t-il en cas d'absence de l'intervenant ?",
              answer:
                "<p>En cas d'absence prévue, nous vous informons à l'avance et vous proposons un remplaçant ayant le même profil et les mêmes compétences.</p><p>En cas d'absence imprévue, nous mettons tout en œuvre pour trouver un remplaçant dans les plus brefs délais, en vous tenant informé de la situation.</p>",
            },
            {
              question: "Comment modifier ou annuler une prestation ?",
              answer:
                "<p>Pour modifier ou annuler une prestation, nous vous demandons de nous prévenir au moins 48 heures à l'avance par téléphone ou par email. En cas d'annulation tardive (moins de 48 heures), la prestation pourra être facturée, sauf en cas de force majeure.</p>",
            },
          ],
        },
        {
          id: "personnel",
          name: "Notre personnel",
          icon: "fas fa-user-tie",
          questions: [
            {
              question:
                "Comment sont sélectionnés vos intervenants à domicile ?",
              answer:
                "<p>Notre processus de recrutement est rigoureux et comporte plusieurs étapes :</p><ul><li>Vérification des références et expériences antérieures</li><li>Entretiens approfondis et tests pratiques</li><li>Vérification du casier judiciaire</li><li>Évaluation des compétences techniques et relationnelles</li></ul><p>Nous recrutons uniquement des professionnels qualifiés et expérimentés, partageant nos valeurs de respect et de bienveillance.</p>",
            },
            {
              question: "Quelles qualifications ont vos intervenants ?",
              answer:
                "<p>Nos intervenants à domicile possèdent des qualifications adaptées à leurs missions :</p><ul><li>Auxiliaires de vie : DEAVS, DEAES ou équivalent</li><li>Aides ménagères : formation spécifique aux techniques d'entretien</li><li>Cuisiniers : formation en restauration ou expérience significative</li><li>Assistantes maternelles : agrément ou CAP Petite Enfance</li></ul><p>Tous suivent régulièrement des formations pour actualiser leurs compétences.</p>",
            },
            {
              question: "Puis-je avoir toujours le même intervenant ?",
              answer:
                "<p>Oui, nous privilégions la stabilité de l'intervenant pour établir une relation de confiance. Sauf en cas d'absence ou de congés, vous aurez toujours le même intervenant pour vos prestations régulières.</p><p>En cas de remplacement nécessaire, nous vous proposerons un intervenant ayant un profil similaire.</p>",
            },
            {
              question: "Comment évaluez-vous la qualité de vos services ?",
              answer:
                "<p>Nous avons mis en place plusieurs outils pour garantir la qualité de nos services :</p><ul><li>Suivi régulier par notre équipe de coordination</li><li>Enquêtes de satisfaction auprès des clients</li><li>Visites de contrôle (avec votre accord)</li><li>Formation continue des intervenants</li></ul><p>Votre feedback est essentiel pour nous permettre d'améliorer constamment nos services.</p>",
            },
          ],
        },
      ],
      testimonials: [
        {
          content:
            '"Faire appel à Harmonie Services a changé ma vie quotidienne. Les intervenants sont ponctuels, efficaces et d\'une gentillesse remarquable. Je recommande vivement leurs services !"',
          name: "Marie D.",
          role: "Cliente depuis 2022",
          image:
            "https://images.unsplash.com/photo-1551863863-e01bbf274ef6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80",
        },
        {
          content:
            "\"L'équipe d'Harmonie Services s'occupe de ma mère avec beaucoup de professionnalisme et d'empathie. Grâce à eux, elle peut rester à son domicile en toute sécurité. Un grand merci !\"",
          name: "Thomas L.",
          role: "Client depuis 2021",
          image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80",
        },
        {
          content:
            '"Les repas préparés par le chef d\'Harmonie Services sont un vrai régal ! Mon père retrouve le plaisir de manger grâce à des plats savoureux et adaptés à ses besoins."',
          name: "Sophie M.",
          role: "Cliente depuis 2023",
          image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80",
        },
      ],
    };
  },
  methods: {
    toggleItem(categoryId, itemIndex) {
      const key = `${categoryId}-${itemIndex}`;
      this.openItems = {
        ...this.openItems,
        [key]: !this.openItems[key],
      };
    },
    getAnswerStyle(categoryId, itemIndex) {
      const key = `${categoryId}-${itemIndex}`;
      if (this.openItems[key]) {
        // We need a non-zero height for the transition to work
        // This is a bit of a hack but works well in practice
        return { maxHeight: "1000px" };
      }
      return { maxHeight: "0" };
    },
    initRevealAnimations() {
      const reveal = () => {
        const reveals = document.querySelectorAll(".reveal");
        reveals.forEach((element) => {
          const windowHeight = window.innerHeight;
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150;

          if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
          }
        });
      };

      window.addEventListener("scroll", reveal);
      reveal(); // Initial check
    },
    nextTestimonial() {
      this.currentTestimonial =
        (this.currentTestimonial + 1) % this.testimonials.length;
    },
    prevTestimonial() {
      this.currentTestimonial =
        (this.currentTestimonial - 1 + this.testimonials.length) %
        this.testimonials.length;
    },
  },
  mounted() {
    this.initRevealAnimations();
  },
};
</script>
