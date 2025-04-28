<template>
  <section class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2 v-if="title">{{ title }}</h2>
        <p v-if="text">{{ text }}</p>
        <router-link
          v-if="buttonLink"
          :to="buttonLink"
          class="btn btn-primary btn-lg"
          >{{ buttonText }}</router-link
        >
        <a
          v-else-if="externalLink"
          :href="externalLink"
          class="btn btn-primary btn-lg"
          >{{ buttonText }}</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CtaSection",
  props: {
    title: {
      type: String,
      default: "Besoin d'un service d'aide à domicile ?",
    },
    text: {
      type: String,
      default:
        "Nous sommes à votre disposition pour vous accompagner et faciliter votre quotidien.",
    },
    buttonText: {
      type: String,
      default: "Contactez-nous",
    },
    buttonLink: {
      type: String,
      default: "/contact",
    },
    externalLink: {
      type: String,
      default: "",
    },
  },
};
</script>
