import { createRouter, createWebHistory } from "vue-router";

// Import views
import HomeView from "../views/HomeView.vue";
import ServicesView from "../views/ServicesView.vue";
import MenageView from "../views/MenageView.vue";
import RepasView from "../views/RepasView.vue";
import ContactView from "../views/ContactView.vue";
import FaqView from "../views/FaqView.vue";
import ResponsiveTestView from "../views/ResponsiveTestView.vue";
import AdminView from "../views/AdminView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/services",
      name: "services",
      component: ServicesView,
    },
    {
      path: "/menage",
      name: "menage",
      component: MenageView,
    },
    {
      path: "/repas",
      name: "repas",
      component: RepasView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/faq",
      name: "faq",
      component: FaqView,
    },
    {
      path: "/responsive-test",
      name: "responsive-test",
      component: ResponsiveTestView,
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminView,
      meta: { requiresAuth: true }, // This could be used to add auth guard in the future
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
