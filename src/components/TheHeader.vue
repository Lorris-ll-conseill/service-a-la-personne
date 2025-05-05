<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="container">
      <div class="header-container">
        <router-link to="/" class="logo">
          <i class="fas fa-hands-helping"></i>
          <span>Harmonie Services</span>
        </router-link>

        <nav>
          <ul class="nav-list" :class="{ active: isNavOpen }">
            <li v-for="item in navItems" :key="item.path">
              <router-link
                :to="item.path"
                class="nav-link"
                :class="{ active: isActivePath(item.path) }"
              >
                {{ item.name }}
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="btn btn-secondary btn-sm">
                Contact
              </router-link>
            </li>
          </ul>
        </nav>

        <div class="hamburger" @click="toggleMobileNav">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      isNavOpen: false,
      isScrolled: false,
      navItems: [
        { name: "Accueil", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Ménage", path: "/menage" },
        { name: "Repas", path: "/repas" },
        { name: "FAQ", path: "/faq" },
        { name: "Assistant IA", path: "/assistant" },
      ],
    };
  },
  methods: {
    toggleMobileNav() {
      this.isNavOpen = !this.isNavOpen;
      document.body.classList.toggle("nav-open", this.isNavOpen);
    },
    handleScroll() {
      const scrollPosition = window.scrollY;
      this.isScrolled = scrollPosition > 50;
    },
    isActivePath(path) {
      if (path === "/" && this.$route.path !== "/") {
        return false;
      }
      return this.$route.path.startsWith(path);
    },
    closeNavOnResize() {
      if (window.innerWidth >= 992 && this.isNavOpen) {
        this.isNavOpen = false;
        document.body.classList.remove("nav-open");
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.closeNavOnResize);
    this.handleScroll(); // Initial check

    // Handle route changes to close mobile menu
    this.$router.afterEach(() => {
      if (this.isNavOpen) {
        this.isNavOpen = false;
        document.body.classList.remove("nav-open");
      }
    });
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.closeNavOnResize);
  },
};
</script>
