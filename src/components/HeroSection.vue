<template>
  <section
    class="hero"
    :style="{
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage}) center/cover no-repeat`,
    }"
  >
    <div class="container">
      <div class="hero-content" :class="{ 'center-aligned': centerAligned }">
        <h1 v-if="title" class="hero-title">{{ title }}</h1>
        <p v-if="subtitle" class="hero-subtitle">{{ subtitle }}</p>
        <div v-if="primaryLink || secondaryLink" class="hero-buttons">
          <a
            v-if="primaryLink"
            :href="primaryLink"
            class="btn btn-primary btn-lg"
            >{{ primaryText }}</a
          >
          <router-link
            v-if="secondaryLink"
            :to="secondaryLink"
            class="btn btn-outline-light btn-lg"
            >{{ secondaryText }}</router-link
          >
        </div>
      </div>
      <a v-if="scrollTarget" :href="scrollTarget" class="scroll-down">
        <i class="fas fa-chevron-down"></i>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  props: {
    backgroundImage: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1524901548305-08eeddc35080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    primaryLink: {
      type: String,
      default: "",
    },
    primaryText: {
      type: String,
      default: "En savoir plus",
    },
    secondaryLink: {
      type: String,
      default: "",
    },
    secondaryText: {
      type: String,
      default: "Nous contacter",
    },
    scrollTarget: {
      type: String,
      default: "",
    },
    centerAligned: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    // We're directly applying the style in the template now for better readability
  },
  mounted() {
    // Setup animated scroll for anchor links
    if (this.scrollTarget) {
      const scrollBtn = document.querySelector(".scroll-down");
      if (scrollBtn) {
        scrollBtn.addEventListener("click", (event) => {
          event.preventDefault();
          const targetId = this.scrollTarget.slice(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop,
              behavior: "smooth",
            });
          }
        });
      }
    }
  },
};
</script>
