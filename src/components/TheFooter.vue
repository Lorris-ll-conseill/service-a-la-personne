<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-column">
          <div class="footer-logo">
            <i class="fas fa-hands-helping"></i>
            <span>Harmonie Services</span>
          </div>
          <p>
            Services d'aide à domicile pour seniors, personnes dépendantes et
            familles dans toute la région parisienne.
          </p>
          <div class="footer-social">
            <a href="#" class="social-icon" aria-label="Facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#" class="social-icon" aria-label="Twitter">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="social-icon" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="social-icon" aria-label="LinkedIn">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div class="footer-column">
          <h3>Nos services</h3>
          <ul class="footer-links">
            <li>
              <router-link to="/services">Aide aux seniors</router-link>
            </li>
            <li>
              <router-link to="/menage">Ménage à domicile</router-link>
            </li>
            <li>
              <router-link to="/repas">Préparation de repas</router-link>
            </li>
            <li>
              <router-link to="/services">Accompagnement</router-link>
            </li>
            <li>
              <router-link to="/services">Aide administrative</router-link>
            </li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>Liens rapides</h3>
          <ul class="footer-links">
            <li>
              <router-link to="/">Accueil</router-link>
            </li>
            <li>
              <router-link to="/faq">FAQ</router-link>
            </li>
            <li>
              <router-link to="/contact">Contact</router-link>
            </li>
            <li>
              <a href="#">Témoignages</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div class="footer-column">
          <h3>Contact</h3>
          <div class="footer-contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>123 rue de la Bienveillance, 75011 Paris</span>
          </div>
          <div class="footer-contact-item">
            <i class="fas fa-phone"></i>
            <span>01 23 45 67 89</span>
          </div>
          <div class="footer-contact-item">
            <i class="fas fa-envelope"></i>
            <span>contact@harmonieservices.fr</span>
          </div>
          <div class="footer-contact-item">
            <i class="fas fa-clock"></i>
            <span>Lun-Ven: 8h-19h, Sam: 9h-17h</span>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright">
          © {{ currentYear }} Harmonie Services. Tous droits réservés.
        </div>
        <div class="footer-nav">
          <a href="#">Mentions légales</a>
          <a href="#">Politique de confidentialité</a>
          <a href="#">CGU</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>
