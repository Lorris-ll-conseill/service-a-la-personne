<template>
  <div>
    <HeroSection
      backgroundImage="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      title="Services de ménage professionnels"
      subtitle="Un intérieur propre et sain pour votre bien-être quotidien"
      primaryLink="#formules"
      primaryText="Nos formules"
      secondaryLink="/contact"
      secondaryText="Demander un devis"
      scrollTarget="#services-menage"
    />

    <section id="services-menage" class="services-detail">
      <div class="container">
        <div class="section-title">
          <h2>Notre service de ménage à domicile</h2>
        </div>

        <div class="service-intro reveal fade-in-up">
          <div class="service-intro-image">
            <img
              src="https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="Service de ménage professionnel"
            />
          </div>
          <div class="service-intro-text">
            <h3>Un intérieur impeccable sans effort</h3>
            <p>
              Notre service de ménage à domicile est conçu pour vous offrir un
              intérieur parfaitement entretenu sans que vous ayez à vous en
              soucier. Nos agents d'entretien qualifiés prennent en charge
              toutes les tâches ménagères selon vos besoins et préférences.
            </p>
            <p>
              Que vous ayez besoin d'un entretien régulier ou d'un nettoyage
              ponctuel, nous adaptons nos services à votre rythme de vie et à
              vos exigences spécifiques.
            </p>
            <div class="service-benefits">
              <div class="service-benefit">
                <i class="fas fa-check-circle"></i>
                <span>Agents d'entretien professionnels et formés</span>
              </div>
              <div class="service-benefit">
                <i class="fas fa-check-circle"></i>
                <span>Produits d'entretien écologiques et efficaces</span>
              </div>
              <div class="service-benefit">
                <i class="fas fa-check-circle"></i>
                <span>Services personnalisés selon vos besoins</span>
              </div>
              <div class="service-benefit">
                <i class="fas fa-check-circle"></i>
                <span>Interventions régulières ou ponctuelles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="formules" class="formules">
      <div class="container">
        <div class="section-title">
          <h2>Nos formules de ménage</h2>
          <p>
            Choisissez la formule qui correspond le mieux à vos besoins et à
            votre budget. Toutes nos formules sont personnalisables.
          </p>
        </div>

        <div class="formule-cards">
          <div class="formule-card reveal fade-in-up">
            <div class="formule-header">
              <h3 class="formule-title">Essentiel</h3>
              <div class="formule-price">
                <span class="price">26€</span>
                <span class="period">/heure</span>
              </div>
              <p class="tax-info">Soit 13€/h après crédit d'impôt de 50%</p>
            </div>
            <div class="formule-content">
              <ul class="formule-features">
                <li>Dépoussiérage des surfaces</li>
                <li>Nettoyage des sols</li>
                <li>Entretien des sanitaires</li>
                <li>Vaisselle</li>
                <li>Lits faits</li>
              </ul>
              <p class="formule-note">Idéal pour un entretien régulier</p>
              <router-link to="/contact" class="btn btn-outline-primary">
                Demander un devis
              </router-link>
            </div>
          </div>

          <div class="formule-card featured reveal fade-in-up" data-delay="200">
            <div class="formule-tag">Le plus demandé</div>
            <div class="formule-header">
              <h3 class="formule-title">Confort</h3>
              <div class="formule-price">
                <span class="price">30€</span>
                <span class="period">/heure</span>
              </div>
              <p class="tax-info">Soit 15€/h après crédit d'impôt de 50%</p>
            </div>
            <div class="formule-content">
              <ul class="formule-features">
                <li>Tous les services Essentiel</li>
                <li>Repassage</li>
                <li>Nettoyage des vitres</li>
                <li>Entretien électroménager</li>
                <li>Changement de linge</li>
              </ul>
              <p class="formule-note">Notre formule la plus demandée</p>
              <router-link to="/contact" class="btn btn-primary">
                Demander un devis
              </router-link>
            </div>
          </div>

          <div class="formule-card reveal fade-in-up" data-delay="400">
            <div class="formule-header">
              <h3 class="formule-title">Premium</h3>
              <div class="formule-price">
                <span class="price">35€</span>
                <span class="period">/heure</span>
              </div>
              <p class="tax-info">Soit 17,50€/h après crédit d'impôt de 50%</p>
            </div>
            <div class="formule-content">
              <ul class="formule-features">
                <li>Tous les services Confort</li>
                <li>Nettoyage en profondeur</li>
                <li>Entretien des meubles</li>
                <li>Traitement spécifique des sols</li>
                <li>Organisation des placards</li>
              </ul>
              <p class="formule-note">Pour un entretien impeccable</p>
              <router-link to="/contact" class="btn btn-outline-primary">
                Demander un devis
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="services-features alternating">
      <div class="container">
        <div class="section-title">
          <h2>Nos prestations de ménage</h2>
        </div>

        <div class="feature-row reveal fade-in-right">
          <div class="feature-image">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="Ménage régulier"
            />
          </div>
          <div class="feature-content">
            <h3>Ménage régulier</h3>
            <p>
              Un service de ménage programmé selon la fréquence qui vous
              convient (hebdomadaire, bi-mensuel ou mensuel) pour maintenir
              votre intérieur propre au quotidien.
            </p>
            <ul class="feature-list">
              <li>
                <i class="fas fa-check"></i> Aspiration et lavage des sols
              </li>
              <li><i class="fas fa-check"></i> Dépoussiérage des meubles</li>
              <li>
                <i class="fas fa-check"></i> Nettoyage des sanitaires et cuisine
              </li>
              <li>
                <i class="fas fa-check"></i> Vidage des poubelles et recyclage
              </li>
            </ul>
          </div>
        </div>

        <div class="feature-row reverse reveal fade-in-left">
          <div class="feature-image">
            <img
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="Nettoyage en profondeur"
            />
          </div>
          <div class="feature-content">
            <h3>Nettoyage en profondeur</h3>
            <p>
              Un nettoyage intensif pour les occasions spéciales ou pour
              rafraîchir complètement votre intérieur.
            </p>
            <ul class="feature-list">
              <li>
                <i class="fas fa-check"></i> Nettoyage des zones difficiles
                d'accès
              </li>
              <li>
                <i class="fas fa-check"></i> Détartrage et traitement
                anti-calcaire
              </li>
              <li>
                <i class="fas fa-check"></i> Nettoyage des intérieurs de placard
              </li>
              <li>
                <i class="fas fa-check"></i> Traitement des taches tenaces
              </li>
            </ul>
          </div>
        </div>

        <div class="feature-row reveal fade-in-right">
          <div class="feature-image">
            <img
              src="https://images.unsplash.com/photo-1469329989840-dcedc5267d33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="Lavage des vitres"
            />
          </div>
          <div class="feature-content">
            <h3>Lavage des vitres</h3>
            <p>
              Un nettoyage professionnel de vos vitres pour une luminosité
              optimale et une vue dégagée.
            </p>
            <ul class="feature-list">
              <li>
                <i class="fas fa-check"></i> Nettoyage des vitres intérieures et
                extérieures
              </li>
              <li>
                <i class="fas fa-check"></i> Nettoyage des cadres et rebords
              </li>
              <li>
                <i class="fas fa-check"></i> Utilisation de produits adaptés
                sans traces
              </li>
              <li>
                <i class="fas fa-check"></i> Matériel professionnel pour les
                hauteurs
              </li>
            </ul>
          </div>
        </div>

        <div class="feature-row reverse reveal fade-in-left">
          <div class="feature-image">
            <img
              src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="Repassage et entretien du linge"
            />
          </div>
          <div class="feature-content">
            <h3>Repassage et entretien du linge</h3>
            <p>
              Un service de repassage professionnel pour un linge impeccable
              sans effort.
            </p>
            <ul class="feature-list">
              <li>
                <i class="fas fa-check"></i> Repassage soigné de tous types de
                vêtements
              </li>
              <li><i class="fas fa-check"></i> Pliage et rangement du linge</li>
              <li>
                <i class="fas fa-check"></i> Changement et préparation des lits
              </li>
              <li><i class="fas fa-check"></i> Petits travaux de couture</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <CtaSection
      title="Envie d'un intérieur impeccable sans effort ?"
      text="Contactez-nous dès aujourd'hui pour une évaluation gratuite de vos besoins et un devis personnalisé."
      buttonText="Demander un devis gratuit"
      buttonLink="/contact"
    />
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import CtaSection from "@/components/CtaSection.vue";

export default {
  name: "MenageView",
  components: {
    HeroSection,
    CtaSection,
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
