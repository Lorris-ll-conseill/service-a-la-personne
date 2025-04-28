<template>
  <div>
    <HeroSection
      backgroundImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      title="Nos services d'aide à domicile"
      subtitle="Des solutions personnalisées pour améliorer votre quotidien"
      primaryLink="#services-detail"
      primaryText="Découvrir nos services"
      secondaryLink="/contact"
      secondaryText="Demander un devis"
      scrollTarget="#services-detail"
    />

    <section id="services-detail" class="services-detail">
      <div class="container">
        <div class="section-title">
          <h2>Nos prestations de services</h2>
          <p>
            Chez Harmonie Services, nous proposons une gamme complète de
            services à domicile adaptés aux besoins des seniors, des personnes
            en situation de handicap et des familles.
          </p>
        </div>

        <div class="services-tabs">
          <div class="service-tab-buttons">
            <button
              v-for="(tab, index) in tabs"
              :key="index"
              :class="['tab-button', { active: activeTab === index }]"
              @click="activeTab = index"
            >
              <i :class="tab.icon"></i>
              <span>{{ tab.name }}</span>
            </button>
          </div>

          <div class="service-tab-content">
            <div
              v-for="(tab, index) in tabs"
              :key="index"
              :class="['tab-content', { active: activeTab === index }]"
              :id="tab.id"
            >
              <div class="service-detail-content">
                <div class="service-detail-image">
                  <img :src="tab.image" :alt="tab.name" />
                </div>
                <div class="service-detail-text">
                  <h3>{{ tab.title }}</h3>
                  <p v-html="tab.description"></p>
                  <ul class="service-features">
                    <li v-for="(feature, fIndex) in tab.features" :key="fIndex">
                      <i class="fas fa-check"></i> {{ feature }}
                    </li>
                  </ul>
                  <div class="service-actions">
                    <router-link
                      v-if="tab.detailLink"
                      :to="tab.detailLink"
                      class="btn btn-outline-primary btn-sm"
                    >
                      En savoir plus
                    </router-link>
                    <router-link to="/contact" class="btn btn-primary btn-sm">
                      Demander un devis
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="process">
      <div class="container">
        <div class="section-title">
          <h2>Notre processus d'accompagnement</h2>
          <p>
            Nous vous accompagnons pas à pas dans la mise en place de votre
            service d'aide à domicile personnalisé.
          </p>
        </div>

        <div class="process-steps">
          <div class="process-step reveal fade-in-left">
            <div class="process-step-icon">
              <i class="fas fa-comments"></i>
              <div class="process-step-number">1</div>
            </div>
            <div class="process-step-content">
              <h3>Évaluation des besoins</h3>
              <p>
                Un premier entretien téléphonique ou à domicile pour comprendre
                vos attentes et vos besoins spécifiques.
              </p>
            </div>
          </div>

          <div class="process-step reveal fade-in-left" data-delay="200">
            <div class="process-step-icon">
              <i class="fas fa-file-alt"></i>
              <div class="process-step-number">2</div>
            </div>
            <div class="process-step-content">
              <h3>Proposition personnalisée</h3>
              <p>
                Élaboration d'un plan d'accompagnement sur mesure et
                établissement d'un devis détaillé et transparent.
              </p>
            </div>
          </div>

          <div class="process-step reveal fade-in-left" data-delay="400">
            <div class="process-step-icon">
              <i class="fas fa-user-friends"></i>
              <div class="process-step-number">3</div>
            </div>
            <div class="process-step-content">
              <h3>Sélection de l'intervenant</h3>
              <p>
                Choix d'un intervenant qualifié correspondant à vos besoins et
                préférences pour un accompagnement de qualité.
              </p>
            </div>
          </div>

          <div class="process-step reveal fade-in-left" data-delay="600">
            <div class="process-step-icon">
              <i class="fas fa-home"></i>
              <div class="process-step-number">4</div>
            </div>
            <div class="process-step-content">
              <h3>Mise en place du service</h3>
              <p>
                Démarrage des prestations selon le planning convenu et suivi
                régulier pour garantir votre satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="financing">
      <div class="container">
        <div class="section-title">
          <h2>Aides financières</h2>
          <p>
            Nos services peuvent être financés par différentes aides selon votre
            situation. Nous vous accompagnons dans vos démarches.
          </p>
        </div>

        <div class="financing-grid reveal fade-in-up">
          <div class="financing-item">
            <div class="financing-icon">
              <i class="fas fa-building"></i>
            </div>
            <h3>APA</h3>
            <p>
              L'Allocation Personnalisée d'Autonomie pour les personnes de plus
              de 60 ans en perte d'autonomie.
            </p>
          </div>

          <div class="financing-item">
            <div class="financing-icon">
              <i class="fas fa-wheelchair"></i>
            </div>
            <h3>PCH</h3>
            <p>
              La Prestation de Compensation du Handicap pour les personnes en
              situation de handicap.
            </p>
          </div>

          <div class="financing-item">
            <div class="financing-icon">
              <i class="fas fa-hand-holding-usd"></i>
            </div>
            <h3>Caisses de retraite</h3>
            <p>
              Des aides spécifiques peuvent être accordées par votre caisse de
              retraite selon vos revenus.
            </p>
          </div>

          <div class="financing-item">
            <div class="financing-icon">
              <i class="fas fa-percentage"></i>
            </div>
            <h3>Crédit d'impôt</h3>
            <p>
              50% de crédit d'impôt sur les sommes versées pour des services à
              la personne à domicile.
            </p>
          </div>
        </div>
      </div>
    </section>

    <CtaSection
      title="Besoin d'un accompagnement personnalisé ?"
      text="Contactez-nous dès aujourd'hui pour une évaluation gratuite de vos besoins et un devis personnalisé."
      buttonText="Nous contacter"
      buttonLink="/contact"
    />
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import CtaSection from "@/components/CtaSection.vue";

export default {
  name: "ServicesView",
  components: {
    HeroSection,
    CtaSection,
  },
  data() {
    return {
      activeTab: 0,
      tabs: [
        {
          id: "seniors",
          name: "Aide aux seniors",
          icon: "fas fa-user-friends",
          title: "Aide aux personnes âgées et dépendantes",
          image:
            "https://images.unsplash.com/photo-1574109671283-d3ff73d7f181?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
          description:
            "Notre service d'aide aux seniors permet aux personnes âgées de continuer à vivre chez elles en toute sécurité. Nos intervenants qualifiés apportent un soutien quotidien et une présence rassurante.",
          features: [
            "Aide à la toilette et à l'habillage",
            "Aide aux déplacements et à la mobilité",
            "Préparation et aide à la prise des repas",
            "Surveillance de la prise de médicaments",
            "Accompagnement aux rendez-vous médicaux",
          ],
          detailLink: null,
        },
        {
          id: "menage",
          name: "Ménage à domicile",
          icon: "fas fa-broom",
          title: "Service de ménage et d'entretien",
          image:
            "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
          description:
            "Nous proposons un service de ménage complet et personnalisé pour maintenir votre maison propre et saine.",
          features: [
            "Nettoyage régulier des pièces de vie",
            "Entretien des sanitaires et cuisine",
            "Dépoussiérage et aspiration",
            "Lavage des sols",
            "Changement des draps et linge de maison",
          ],
          detailLink: "/menage",
        },
        {
          id: "repas",
          name: "Préparation de repas",
          icon: "fas fa-utensils",
          title: "Préparation de repas à domicile",
          image:
            "https://images.unsplash.com/photo-1483137140003-ae073b395549?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
          description:
            "Des repas équilibrés, savoureux et adaptés à vos besoins diététiques, préparés directement chez vous.",
          features: [
            "Élaboration de menus personnalisés",
            "Courses alimentaires",
            "Préparation de repas frais ou à congeler",
            "Respect des régimes spécifiques",
            "Rangement de la cuisine après préparation",
          ],
          detailLink: "/repas",
        },
        {
          id: "enfants",
          name: "Garde d'enfants",
          icon: "fas fa-baby",
          title: "Garde d'enfants à domicile",
          image:
            "https://images.unsplash.com/photo-1602029908656-b1f51a3da72a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
          description:
            "Un service de garde d'enfants professionnel et attentionné pour assurer le bien-être de vos enfants à votre domicile.",
          features: [
            "Garde d'enfants régulière ou ponctuelle",
            "Aide aux devoirs et soutien scolaire",
            "Préparation des repas et goûters",
            "Accompagnement aux activités extrascolaires",
            "Éveil et activités ludiques adaptées à l'âge",
          ],
          detailLink: null,
        },
        {
          id: "administratif",
          name: "Aide administrative",
          icon: "fas fa-file-alt",
          title: "Assistance aux démarches administratives",
          image:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
          description:
            "Un accompagnement personnalisé pour vous aider dans vos démarches administratives du quotidien.",
          features: [
            "Aide à la rédaction de courriers",
            "Classement et organisation des documents",
            "Accompagnement dans les démarches administratives",
            "Aide aux démarches en ligne",
            "Suivi du budget et des paiements",
          ],
          detailLink: null,
        },
      ],
    };
  },
  methods: {
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
  },
  mounted() {
    this.initRevealAnimations();
  },
};
</script>
