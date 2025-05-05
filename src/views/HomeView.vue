<template>
  <div>
    <HeroSection
      backgroundImage="https://images.unsplash.com/photo-1576765608866-5b51046452be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      title="Services d'aide à domicile de qualité"
      subtitle="Accompagnement personnalisé pour seniors et personnes en perte d'autonomie"
      primaryLink="/services"
      primaryText="Découvrir nos services"
      secondaryLink="/contact"
      secondaryText="Nous contacter"
      scrollTarget="#services"
    />

    <section id="services" class="services">
      <div class="container">
        <div class="section-title">
          <h2>Nos services à domicile</h2>
        </div>
        <div class="services-grid">
          <AnimatedElement
            baseClass="service-card"
            animation="fade-in-up"
            :delay="0"
          >
            <div class="service-icon">
              <i class="fas fa-user-friends"></i>
            </div>
            <h3 class="service-title">Aide aux seniors</h3>
            <p class="service-description">
              Assistance dans les actes de la vie quotidienne pour les personnes
              âgées ou en perte d'autonomie.
            </p>
            <router-link to="/services#seniors" class="btn btn-outline-primary"
              >En savoir plus</router-link
            >
          </AnimatedElement>

          <AnimatedElement
            baseClass="service-card"
            animation="fade-in-up"
            :delay="200"
          >
            <div class="service-icon">
              <i class="fas fa-broom"></i>
            </div>
            <h3 class="service-title">Ménage à domicile</h3>
            <p class="service-description">
              Entretien régulier ou ponctuel de votre domicile par des
              professionnels qualifiés.
            </p>
            <router-link to="/menage" class="btn btn-outline-primary"
              >En savoir plus</router-link
            >
          </AnimatedElement>

          <AnimatedElement
            baseClass="service-card"
            animation="fade-in-up"
            :delay="400"
          >
            <div class="service-icon">
              <i class="fas fa-utensils"></i>
            </div>
            <h3 class="service-title">Préparation de repas</h3>
            <p class="service-description">
              Élaboration de repas équilibrés adaptés à vos goûts et besoins
              nutritionnels.
            </p>
            <router-link to="/repas" class="btn btn-outline-primary"
              >En savoir plus</router-link
            >
          </AnimatedElement>

          <AnimatedElement
            baseClass="service-card"
            animation="fade-in-up"
            :delay="600"
          >
            <div class="service-icon">
              <i class="fas fa-file-alt"></i>
            </div>
            <h3 class="service-title">Assistance administrative</h3>
            <p class="service-description">
              Aide pour les démarches administratives et le suivi des documents
              importants.
            </p>
            <router-link to="/services" class="btn btn-outline-primary"
              >En savoir plus</router-link
            >
          </AnimatedElement>
        </div>
      </div>
    </section>

    <section class="about">
      <div class="container">
        <div class="section-title">
          <h2>Pourquoi choisir Harmonie Services ?</h2>
        </div>
        <div class="about-content">
          <AnimatedElement baseClass="about-image" animation="fade-in-left">
            <img
              src="https://images.unsplash.com/photo-1559485474-e2acd31f7f47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="Équipe professionnelle à votre service"
            />
          </AnimatedElement>
          <AnimatedElement
            baseClass="about-text"
            animation="fade-in-right"
            :delay="200"
          >
            <h3>Une équipe professionnelle à votre service</h3>
            <p>
              Nous proposons des services d'aide à domicile personnalisés avec
              une approche humaine et bienveillante. Notre objectif est de
              permettre aux personnes âgées ou en perte d'autonomie de rester à
              leur domicile dans les meilleures conditions possibles.
            </p>
            <div class="about-features">
              <div class="about-feature">
                <i class="fas fa-certificate"></i>
                <div class="about-feature-text">
                  <h4 class="about-feature-title">Qualité</h4>
                  <p>Intervenants qualifiés et formation continue.</p>
                </div>
              </div>
              <div class="about-feature">
                <i class="fas fa-heart"></i>
                <div class="about-feature-text">
                  <h4 class="about-feature-title">Bienveillance</h4>
                  <p>Approche humaine et relation de confiance.</p>
                </div>
              </div>
              <div class="about-feature">
                <i class="fas fa-clock"></i>
                <div class="about-feature-text">
                  <h4 class="about-feature-title">Disponibilité</h4>
                  <p>
                    Service 7j/7 avec une permanence téléphonique constante.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>

    <section class="counter-section">
      <div class="container">
        <div class="counters-grid">
          <AnimatedElement baseClass="counter-item">
            <i class="fas fa-users"></i>
            <div class="counter" :data-target="2500" ref="clientsCounter">
              0
            </div>
            <h3>Clients satisfaits</h3>
          </AnimatedElement>
          <AnimatedElement baseClass="counter-item" :delay="200">
            <i class="fas fa-home"></i>
            <div
              class="counter"
              :data-target="12000"
              ref="interventionsCounter"
            >
              0
            </div>
            <h3>Interventions par an</h3>
          </AnimatedElement>
          <AnimatedElement baseClass="counter-item" :delay="400">
            <i class="fas fa-user-tie"></i>
            <div class="counter" :data-target="75" ref="employeesCounter">
              0
            </div>
            <h3>Employés dévoués</h3>
          </AnimatedElement>
          <AnimatedElement baseClass="counter-item" :delay="600">
            <i class="fas fa-map-marker-alt"></i>
            <div class="counter" :data-target="15" ref="experienceCounter">
              0
            </div>
            <h3>Années d'expérience</h3>
          </AnimatedElement>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <div class="container">
        <div class="section-title">
          <h2>Ce que disent nos clients</h2>
        </div>
        <div class="testimonials-container">
          <div class="testimonial-slider">
            <div
              v-for="(testimonial, index) in testimonials"
              :key="index"
              class="testimonial"
              :class="{ active: index === currentTestimonialIndex }"
              :style="getTestimonialStyle(index)"
            >
              <div class="testimonial-content">
                <p>{{ testimonial.content }}</p>
              </div>
              <div class="testimonial-author">
                <div class="testimonial-author-name">
                  {{ testimonial.authorName }}
                </div>
                <div class="testimonial-author-role">
                  {{ testimonial.authorRole }}
                </div>
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
      title="Besoin d'aide pour vous ou un proche ?"
      text="Contactez-nous dès aujourd'hui pour une évaluation gratuite de vos besoins et un devis personnalisé."
      buttonText="Nous contacter"
      buttonLink="/contact"
    />
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import CtaSection from "@/components/CtaSection.vue";
import AnimatedElement from "@/components/AnimatedElement.vue";

export default {
  name: "HomeView",
  components: {
    HeroSection,
    CtaSection,
    AnimatedElement,
  },
  data() {
    return {
      currentTestimonialIndex: 0,
      testimonials: [
        {
          content:
            "Grâce à Harmonie Services, ma mère peut rester chez elle en toute sécurité. Les intervenants sont devenus comme une seconde famille pour elle.",
          authorName: "Sophie L.",
          authorRole: "Client depuis 3 ans",
        },
        {
          content:
            "Un service impeccable pour le ménage hebdomadaire. Toujours ponctuels et efficaces, ils s'adaptent parfaitement à nos besoins.",
          authorName: "Pierre et Marie D.",
          authorRole: "Clients depuis 1 an",
        },
        {
          content:
            "Les repas préparés sont délicieux et variés. Notre intervenante prend en compte toutes nos préférences et contraintes alimentaires.",
          authorName: "Jean B.",
          authorRole: "Client depuis 2 ans",
        },
      ],
    };
  },
  methods: {
    startCounters() {
      // Use Vue refs to access the counter elements
      const counters = [
        this.$refs.clientsCounter,
        this.$refs.interventionsCounter,
        this.$refs.employeesCounter,
        this.$refs.experienceCounter,
      ].filter(Boolean); // Filter out any undefined refs

      counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target");
        const duration = 2000; // 2 seconds
        const start = 0;
        const end = target;
        const range = end - start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / range));
        const startTime = new Date().getTime();
        const endTime = startTime + duration;

        const animateCounter = () => {
          const now = new Date().getTime();
          const remaining = Math.max((endTime - now) / duration, 0);
          const value = Math.floor(end - remaining * range);
          counter.innerText = value;

          if (value == end) {
            clearInterval(timer);
          }
        };

        const timer = setInterval(animateCounter, stepTime);
        animateCounter(); // Start immediately
      });
    },
    initRevealAnimations() {
      // No longer needed - handled by AnimatedElement component
    },
    nextTestimonial() {
      this.currentTestimonialIndex =
        (this.currentTestimonialIndex + 1) % this.testimonials.length;
    },
    prevTestimonial() {
      this.currentTestimonialIndex =
        (this.currentTestimonialIndex - 1 + this.testimonials.length) %
        this.testimonials.length;
    },
    getTestimonialStyle(index) {
      if (index === this.currentTestimonialIndex) {
        return { opacity: 1, transform: "translateX(0)" };
      } else {
        return {
          opacity: 0,
          transform:
            index < this.currentTestimonialIndex
              ? "translateX(-100%)"
              : "translateX(100%)",
        };
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.startCounters();

      // Start automatic testimonial slider
      this.testimonialInterval = setInterval(() => {
        this.nextTestimonial();
      }, 5000);
    });
  },
  beforeUnmount() {
    // Clear testimonial interval
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
  },
};
</script>
