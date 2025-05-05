import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

// Configure Axios defaults
axios.defaults.baseURL = "/"; // Use relative URLs

// Import CSS files
import "./assets/css/normalize.css";
import "./assets/css/style.css";
import "./assets/css/animations.css";
import "./assets/css/forms.css";
import "./assets/css/faq.css";
import "./assets/css/hero-section.css";
import "./assets/css/footer.css";

const app = createApp(App);

app.use(router);
app.mount("#app");
