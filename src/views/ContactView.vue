<template>
  <div>
    <HeroSection
      backgroundImage="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      title="Contactez-nous"
      subtitle="Nous sommes à votre écoute pour répondre à vos questions et vous accompagner"
      scrollTarget="#contact-info"
    />

    <section id="contact-info" class="contact-info">
      <div class="container">
        <div class="contact-grid">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>

    <MapSection />
  </div>
</template>

<script setup>
import HeroSection from "@/components/HeroSection.vue";
import ContactInfo from "@/components/ContactInfo.vue";
import ContactForm from "@/components/ContactForm.vue";
import MapSection from "@/components/MapSection.vue";
</script>

<style scoped>
.contact-info {
  padding: 5rem 0;
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .contact-info {
    padding: 3rem 0;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }
}
</style>
