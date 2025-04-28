<template>
  <div class="responsive-test-page">
    <h1 class="responsive-title">Testeur de Responsive Design</h1>
    <p class="responsive-description">
      Cet outil vous permet de tester l'affichage du site sur différents
      périphériques
    </p>

    <div class="responsive-controls">
      <div class="device-selector">
        <label for="device-select">Appareil :</label>
        <select
          id="device-select"
          v-model="selectedDevice"
          @change="updateFrameSize"
        >
          <option value="custom">Personnalisé</option>
          <option v-for="(device, key) in devices" :key="key" :value="key">
            {{ device.name }} ({{ device.width }}x{{ device.height }})
          </option>
        </select>
      </div>

      <div class="orientation-toggle" v-if="selectedDevice !== 'custom'">
        <label>Orientation :</label>
        <button
          :class="[
            'orientation-button',
            { active: orientation === 'portrait' },
          ]"
          @click="setOrientation('portrait')"
        >
          <i class="fas fa-mobile-alt"></i> Portrait
        </button>
        <button
          :class="[
            'orientation-button',
            { active: orientation === 'landscape' },
          ]"
          @click="setOrientation('landscape')"
        >
          <i class="fas fa-mobile-alt fa-rotate-90"></i> Paysage
        </button>
      </div>

      <div class="dimension-controls" v-if="selectedDevice === 'custom'">
        <div class="dimension-control">
          <label for="width-input">Largeur :</label>
          <input
            type="number"
            id="width-input"
            v-model.number="frameWidth"
            @change="updateCustomDimensions"
            min="320"
            max="2000"
          />
          <span>px</span>
        </div>
        <div class="dimension-control">
          <label for="height-input">Hauteur :</label>
          <input
            type="number"
            id="height-input"
            v-model.number="frameHeight"
            @change="updateCustomDimensions"
            min="320"
            max="2000"
          />
          <span>px</span>
        </div>
      </div>

      <div class="zoom-control">
        <label for="zoom-select">Zoom :</label>
        <select id="zoom-select" v-model="zoom" @change="updateZoom">
          <option value="0.25">25%</option>
          <option value="0.5">50%</option>
          <option value="0.75">75%</option>
          <option value="1">100%</option>
          <option value="0">Ajuster</option>
        </select>
      </div>
    </div>

    <div class="url-selector">
      <label for="url-input">URL :</label>
      <select id="url-input" v-model="currentUrl" @change="loadUrl">
        <option v-for="(page, index) in pages" :key="index" :value="page.url">
          {{ page.name }}
        </option>
      </select>
      <button class="refresh-button" @click="refreshFrame">
        <i class="fas fa-sync-alt"></i> Actualiser
      </button>
    </div>

    <div class="frame-container" ref="frameContainer" :style="containerStyle">
      <div class="frame-info">
        <span class="frame-dimensions"
          >{{ frameWidth }} × {{ frameHeight }}px</span
        >
        <span class="frame-device">{{ currentDeviceName }}</span>
      </div>
      <iframe
        :src="currentUrl"
        ref="frame"
        :style="frameStyle"
        class="responsive-frame"
      ></iframe>
    </div>

    <div class="tips">
      <h3>Pages disponibles</h3>
      <div class="pages-grid">
        <div v-for="(page, index) in pages" :key="index" class="page-card">
          <div
            class="page-thumbnail"
            :style="{ backgroundImage: `url(${page.thumbnail})` }"
          ></div>
          <div class="page-info">
            <h3>{{ page.name }}</h3>
            <p>{{ page.description }}</p>
            <button class="btn btn-primary" @click="loadPageUrl(page.url)">
              Tester la page
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResponsiveTestView",
  data() {
    return {
      selectedDevice: "iphone12",
      orientation: "portrait",
      frameWidth: 375,
      frameHeight: 812,
      zoom: "1",
      currentUrl: "/",
      pages: [
        {
          name: "Page d'accueil",
          url: "/",
          description:
            "Page principale présentant les services et arguments clés",
          thumbnail:
            "https://images.unsplash.com/photo-1576765608866-5b51046452be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
        },
        {
          name: "Services",
          url: "/services",
          description: "Présentation détaillée de tous nos services",
          thumbnail:
            "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
        },
        {
          name: "Ménage",
          url: "/menage",
          description: "Service de ménage à domicile et formules proposées",
          thumbnail:
            "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
        },
        {
          name: "Repas",
          url: "/repas",
          description: "Service de préparation de repas et options disponibles",
          thumbnail:
            "https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
        },
        {
          name: "Contact",
          url: "/contact",
          description: "Formulaire de contact et informations de l'entreprise",
          thumbnail:
            "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
        },
        {
          name: "FAQ",
          url: "/faq",
          description: "Questions fréquemment posées et leurs réponses",
          thumbnail:
            "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80",
        },
      ],
      devices: {
        iphone12: {
          name: "iPhone 12/13/14",
          width: 390,
          height: 844,
        },
        iphoneSE: {
          name: "iPhone SE",
          width: 375,
          height: 667,
        },
        ipad: {
          name: "iPad",
          width: 768,
          height: 1024,
        },
        ipadPro: {
          name: "iPad Pro",
          width: 1024,
          height: 1366,
        },
        galaxyS20: {
          name: "Galaxy S20",
          width: 360,
          height: 800,
        },
        pixel5: {
          name: "Pixel 5",
          width: 393,
          height: 851,
        },
        laptop: {
          name: "Laptop",
          width: 1366,
          height: 768,
        },
        desktop: {
          name: "Desktop",
          width: 1920,
          height: 1080,
        },
      },
    };
  },
  computed: {
    currentDeviceName() {
      if (this.selectedDevice === "custom") {
        return "Personnalisé";
      }
      return this.devices[this.selectedDevice].name;
    },
    frameStyle() {
      return {
        width: `${this.frameWidth}px`,
        height: `${this.frameHeight}px`,
        transform: this.zoom === "0" ? "" : `scale(${this.zoom})`,
        transformOrigin: "top left",
      };
    },
    containerStyle() {
      if (this.zoom === "0") {
        return {
          height: "auto",
          width: "100%",
          overflow: "hidden",
        };
      }
      return {
        width: `${this.frameWidth * this.zoom}px`,
        height: `${this.frameHeight * this.zoom}px`,
        overflow: "hidden",
      };
    },
  },
  methods: {
    updateFrameSize() {
      if (this.selectedDevice !== "custom") {
        const device = this.devices[this.selectedDevice];
        if (this.orientation === "portrait") {
          this.frameWidth = device.width;
          this.frameHeight = device.height;
        } else {
          this.frameWidth = device.height;
          this.frameHeight = device.width;
        }
      }
    },
    setOrientation(newOrientation) {
      if (this.orientation !== newOrientation) {
        this.orientation = newOrientation;
        // Swap dimensions
        const temp = this.frameWidth;
        this.frameWidth = this.frameHeight;
        this.frameHeight = temp;
      }
    },
    updateCustomDimensions() {
      this.selectedDevice = "custom";
    },
    updateZoom() {
      // If zoom is set to "Adjust", calculate the appropriate zoom factor
      if (this.zoom === "0") {
        this.$nextTick(() => {
          const container = this.$refs.frameContainer;
          if (!container) return;

          const availableWidth = container.clientWidth;
          const zoomFactor = Math.min(1, availableWidth / this.frameWidth);
          container.style.height = `${this.frameHeight * zoomFactor}px`;

          const frame = this.$refs.frame;
          if (frame) {
            frame.style.transform = `scale(${zoomFactor})`;
          }
        });
      }
    },
    loadUrl() {
      this.refreshFrame();
    },
    loadPageUrl(url) {
      this.currentUrl = url;
      this.refreshFrame();
    },
    refreshFrame() {
      const frame = this.$refs.frame;
      if (frame) {
        frame.src = frame.src;
      }
    },
  },
  mounted() {
    this.updateFrameSize();
    this.updateZoom();

    // Add event listener for window resize to adjust the "Adjust" zoom mode
    window.addEventListener("resize", () => {
      if (this.zoom === "0") {
        this.updateZoom();
      }
    });
  },
};
</script>

<style scoped>
.responsive-test-page {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.responsive-title {
  text-align: center;
  margin-bottom: 0.5rem;
}

.responsive-description {
  text-align: center;
  margin-bottom: 2rem;
  color: #666;
}

.responsive-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 0.5rem;
}

.device-selector,
.orientation-toggle,
.dimension-controls,
.zoom-control {
  margin-right: 1rem;
}

.device-selector select,
.zoom-control select {
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ddd;
}

.orientation-button {
  padding: 0.5rem 0.75rem;
  background-color: #e9e9e9;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-right: 0.5rem;
}

.orientation-button.active {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.dimension-control {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.dimension-control input {
  width: 5rem;
  padding: 0.5rem;
  margin: 0 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ddd;
}

.url-selector {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 0.5rem;
}

.url-selector select {
  flex: 1;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ddd;
  margin: 0 1rem;
}

.refresh-button {
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
}

.frame-container {
  margin: 0 auto 2rem;
  position: relative;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.frame-info {
  position: absolute;
  top: -2rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 0.875rem;
}

.responsive-frame {
  border: none;
  display: block;
  background-color: white;
}

.tips {
  margin-top: 3rem;
}

.pages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.page-card {
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.page-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.page-thumbnail {
  height: 150px;
  background-size: cover;
  background-position: center;
}

.page-info {
  padding: 1rem;
}

.page-info h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.page-info p {
  margin-bottom: 1rem;
  color: #666;
  font-size: 0.875rem;
}
</style>
