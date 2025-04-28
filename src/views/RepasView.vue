<template>
  <div>
    <HeroSection
      backgroundImage="https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      title="Préparation de repas à domicile"
      subtitle="Des repas savoureux et équilibrés, adaptés à vos goûts et besoins"
      primaryLink="#formules-repas"
      primaryText="Nos formules"
      secondaryLink="/contact"
      secondaryText="Demander un devis"
      scrollTarget="#repas-info"
    />

    <section id="repas-info" class="services-detail">
      <div class="container">
        <div class="section-title">
          <h2>Notre service de préparation de repas</h2>
        </div>

        <div class="service-intro reveal fade-in-up">
          <div class="service-intro-image">
            <img
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="Préparation de repas à domicile"
            />
          </div>
          <div class="service-intro-text">
            <h3>Une alimentation sur mesure qui vous ressemble</h3>
            <p>
              Notre service de préparation de repas à domicile vous permet de
              bénéficier de plats savoureux et équilibrés, cuisinés directement
              chez vous selon vos goûts et vos besoins nutritionnels.
            </p>
            <p>
              Nos cuisiniers qualifiés s'occupent de tout : élaboration des
              menus, courses, préparation des repas et rangement de la cuisine,
              pour vous offrir une expérience sans souci.
            </p>
            <div class="service-benefits">
              <div class="service-benefit">
                <i class="fas fa-check-circle"></i>
                <span>Cuisiniers professionnels et expérimentés</span>
              </div>
              <div class="service-benefit">
                <i class="fas fa-check-circle"></i>
                <span>Ingrédients frais et de qualité</span>
              </div>
              <div class="service-benefit">
                <i class="fas fa-check-circle"></i>
                <span>Menus personnalisés selon vos préférences</span>
              </div>
              <div class="service-benefit">
                <i class="fas fa-check-circle"></i>
                <span>Adaptations aux régimes spécifiques</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="formules-repas" class="formules">
      <div class="container">
        <div class="section-title">
          <h2>Nos formules de préparation de repas</h2>
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
                <span class="price">180€</span>
                <span class="period">/semaine</span>
              </div>
              <p class="tax-info">Soit 90€ après crédit d'impôt de 50%</p>
            </div>
            <div class="formule-content">
              <ul class="formule-features">
                <li>3 repas simples par semaine</li>
                <li>Plats familiaux</li>
                <li>Possibilité de congélation</li>
                <li>Courses comprises</li>
                <li>Repas équilibrés</li>
              </ul>
              <p class="formule-note">Idéal pour un complément régulier</p>
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
                <span class="price">280€</span>
                <span class="period">/semaine</span>
              </div>
              <p class="tax-info">Soit 140€ après crédit d'impôt de 50%</p>
            </div>
            <div class="formule-content">
              <ul class="formule-features">
                <li>5 repas variés par semaine</li>
                <li>Personnalisation des plats</li>
                <li>Ingrédients frais et locaux</li>
                <li>Courses comprises</li>
                <li>Suivi nutritionnel</li>
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
                <span class="price">390€</span>
                <span class="period">/semaine</span>
              </div>
              <p class="tax-info">Soit 195€ après crédit d'impôt de 50%</p>
            </div>
            <div class="formule-content">
              <ul class="formule-features">
                <li>7 repas complets par semaine</li>
                <li>Menus sur mesure</li>
                <li>Produits bio et premium</li>
                <li>Régimes spécifiques</li>
                <li>Accompagnement nutritionnel</li>
              </ul>
              <p class="formule-note">Pour une alimentation optimale</p>
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
          <h2>Nos prestations de préparation de repas</h2>
        </div>

        <div class="feature-row reveal fade-in-right">
          <div class="feature-image">
            <img
              src="https://images.unsplash.com/photo-1589010588553-46e8e7c21a8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="Repas familiaux"
            />
          </div>
          <div class="feature-content">
            <h3>Repas familiaux</h3>
            <p>
              Des plats savoureux et réconfortants adaptés à toute la famille,
              préparés avec des ingrédients frais et de saison.
            </p>
            <ul class="feature-list">
              <li>
                <i class="fas fa-check"></i> Plats traditionnels et savoureux
              </li>
              <li>
                <i class="fas fa-check"></i> Adaptation aux goûts de chacun
              </li>
              <li><i class="fas fa-check"></i> Portions adaptables</li>
              <li>
                <i class="fas fa-check"></i> Préparation pour plusieurs jours
                possible
              </li>
            </ul>
          </div>
        </div>

        <div class="feature-row reverse reveal fade-in-left">
          <div class="feature-image">
            <img
              src="https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="Régimes spécifiques"
            />
          </div>
          <div class="feature-content">
            <h3>Régimes spécifiques</h3>
            <p>
              Des menus adaptés aux besoins diététiques particuliers, conçus
              avec l'aide de nutritionnistes pour votre santé et votre
              bien-être.
            </p>
            <ul class="feature-list">
              <li>
                <i class="fas fa-check"></i> Régimes sans gluten, sans lactose
              </li>
              <li>
                <i class="fas fa-check"></i> Options végétariennes et vegan
              </li>
              <li>
                <i class="fas fa-check"></i> Alimentation adaptée au diabète
              </li>
              <li>
                <i class="fas fa-check"></i> Repas adaptés aux allergies
                alimentaires
              </li>
            </ul>
          </div>
        </div>

        <div class="feature-row reveal fade-in-right">
          <div class="feature-image">
            <img
              src="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="Cuisine du monde"
            />
          </div>
          <div class="feature-content">
            <h3>Cuisine du monde</h3>
            <p>
              Un voyage culinaire à travers différentes traditions
              gastronomiques pour varier les plaisirs et découvrir de nouvelles
              saveurs.
            </p>
            <ul class="feature-list">
              <li>
                <i class="fas fa-check"></i> Découverte de cuisines
                internationales
              </li>
              <li>
                <i class="fas fa-check"></i> Adaptation aux goûts et préférences
              </li>
              <li>
                <i class="fas fa-check"></i> Utilisation d'épices et
                d'ingrédients authentiques
              </li>
              <li>
                <i class="fas fa-check"></i> Équilibre entre tradition et
                adaptation
              </li>
            </ul>
          </div>
        </div>

        <div class="feature-row reverse reveal fade-in-left">
          <div class="feature-image">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="Nutrition seniors"
            />
          </div>
          <div class="feature-content">
            <h3>Nutrition adaptée aux seniors</h3>
            <p>
              Des repas spécialement conçus pour répondre aux besoins
              nutritionnels des personnes âgées, alliant plaisir gustatif et
              bienfaits pour la santé.
            </p>
            <ul class="feature-list">
              <li>
                <i class="fas fa-check"></i> Texture adaptée en cas de
                difficultés de déglutition
              </li>
              <li><i class="fas fa-check"></i> Apport protéique suffisant</li>
              <li>
                <i class="fas fa-check"></i> Contrôle des apports en sel et en
                matières grasses
              </li>
              <li>
                <i class="fas fa-check"></i> Saveurs préservées pour le plaisir
                de manger
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="nutritional-info">
      <div class="container">
        <div class="section-title">
          <h2>Notre approche nutritionnelle</h2>
          <p>
            Nous attachons une importance particulière à l'équilibre
            nutritionnel et à la qualité des aliments que nous utilisons dans la
            préparation de vos repas.
          </p>
        </div>

        <div class="nutrition-grid reveal fade-in-up">
          <div class="nutrition-item">
            <div class="nutrition-icon">
              <i class="fas fa-carrot"></i>
            </div>
            <h3>Ingrédients frais et de saison</h3>
            <p>
              Nous privilégions les produits frais et de saison, idéalement
              locaux, pour vous garantir une fraîcheur et une qualité optimales.
            </p>
          </div>

          <div class="nutrition-item">
            <div class="nutrition-icon">
              <i class="fas fa-balance-scale"></i>
            </div>
            <h3>Équilibre nutritionnel</h3>
            <p>
              Nos menus sont élaborés pour vous apporter tous les nutriments
              nécessaires à votre bien-être, dans des proportions adaptées à vos
              besoins.
            </p>
          </div>

          <div class="nutrition-item">
            <div class="nutrition-icon">
              <i class="fas fa-leaf"></i>
            </div>
            <h3>Options bio disponibles</h3>
            <p>
              Pour ceux qui le souhaitent, nous proposons des options
              biologiques pour une alimentation encore plus respectueuse de
              l'environnement et de votre santé.
            </p>
          </div>

          <div class="nutrition-item">
            <div class="nutrition-icon">
              <i class="fas fa-heart"></i>
            </div>
            <h3>Plaisir et santé</h3>
            <p>
              Nous concilions les aspects nutritionnels et le plaisir de manger,
              car nous sommes convaincus que l'on peut allier alimentation saine
              et gourmandise.
            </p>
          </div>
        </div>
      </div>
    </section>

    <CtaSection
      title="Envie de repas savoureux et équilibrés sans contrainte ?"
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
  name: "RepasView",
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
