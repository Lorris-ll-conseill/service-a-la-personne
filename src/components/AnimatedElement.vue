<template>
  <div
    ref="animatedElement"
    :class="[baseClass, animationClass, { active: isActive }]"
    :style="{ 'animation-delay': delay + 'ms' }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AnimatedElement",
  props: {
    animation: {
      type: String,
      default: "fade-in-up",
      validator: (value) => {
        return [
          "fade-in-up",
          "fade-in-left",
          "fade-in-right",
          "zoom-in",
          "pulse",
          "shake",
        ].includes(value);
      },
    },
    delay: {
      type: Number,
      default: 0,
    },
    threshold: {
      type: Number,
      default: 0.2,
    },
    baseClass: {
      type: String,
      default: "",
    },
    startVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isActive: this.startVisible,
      observer: null,
    };
  },
  computed: {
    animationClass() {
      return this.animation;
    },
  },
  mounted() {
    if (typeof IntersectionObserver !== "undefined") {
      this.setupIntersectionObserver();
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      this.isActive = true;
    }
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    setupIntersectionObserver() {
      const options = {
        root: null, // Use the viewport
        rootMargin: "0px",
        threshold: this.threshold,
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isActive = true;
            // Once the animation has been triggered, we don't need to observe anymore
            this.observer.disconnect();
          }
        });
      }, options);

      this.observer.observe(this.$refs.animatedElement);
    },
  },
};
</script>

<style scoped>
/* The base styles are imported from the global animations.css */
/* This component just handles the triggering of animations */
</style>
