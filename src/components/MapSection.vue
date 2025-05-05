<template>
  <section class="map-section">
    <div class="container">
      <div class="section-title">
        <h2>Nos zones d'intervention</h2>
        <p>
          Nous intervenons principalement à Paris et dans la petite couronne.
          Contactez-nous pour vérifier si nous intervenons dans votre quartier.
        </p>
      </div>
      <div class="map-container">
        <!-- Replace with actual map embed -->
        <div class="map-embed">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.76457410151!2d2.2646349797657686!3d48.85894658156338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1665765831497!5m2!1sen!2sus"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="service-zones">
          <h3>Zones principales :</h3>
          <ul class="zones-list">
            <li>
              <i class="fas fa-check-circle"></i> Paris (tous arrondissements)
            </li>
            <li><i class="fas fa-check-circle"></i> Hauts-de-Seine (92)</li>
            <li><i class="fas fa-check-circle"></i> Seine-Saint-Denis (93)</li>
            <li><i class="fas fa-check-circle"></i> Val-de-Marne (94)</li>
          </ul>
          <p class="note">Autres zones sur demande</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No reactive data needed for this component
</script>

<style scoped>
.map-section {
  padding: 3rem 0;
  background-color: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-title {
  text-align: center;
  margin-bottom: 2.5rem;
}

.section-title h2 {
  margin-bottom: 1rem;
  color: #333;
  position: relative;
  padding-bottom: 1rem;
  font-size: 2rem;
}

.section-title h2::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(135deg, #4a90e2 0%, #5ca8ff 100%);
}

.section-title p {
  color: #555;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

.map-container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
  background: white;
  margin-bottom: 2rem;
}

.map-embed {
  flex: 1 1 600px;
  min-height: 450px;
  overflow: hidden;
  border-radius: 8px;
}

.map-embed iframe {
  border-radius: 8px;
  display: block;
}

.service-zones {
  flex: 1 1 300px;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.service-zones h3 {
  margin: 0 0 1.25rem 0;
  color: #333;
  font-size: 1.3rem;
  position: relative;
  padding-bottom: 0.75rem;
}

.service-zones h3::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: linear-gradient(135deg, #4a90e2 0%, #5ca8ff 100%);
}

.zones-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
}

.zones-list li {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  color: #444;
  font-size: 1.05rem;
}

.zones-list li i {
  color: #4a90e2;
  margin-right: 10px;
}

.note {
  color: #777;
  font-style: italic;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px dashed #e1e1e1;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .map-container {
    flex-direction: column;
    gap: 0;
  }

  .map-embed {
    min-height: 350px;
    border-radius: 8px 8px 0 0;
  }

  .service-zones {
    border-radius: 0 0 8px 8px;
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .section-title h2 {
    font-size: 1.75rem;
  }

  .map-embed {
    min-height: 300px;
  }
}
</style>
