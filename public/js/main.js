// Éléments DOM
const header = document.querySelector(".header");
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-link");
const scrollDownBtn = document.querySelector(".scroll-down");
const revealElements = document.querySelectorAll(".reveal");
const testimonialSlider = document.querySelector(".testimonial-slider");
const testimonialPrev = document.querySelector(".testimonial-prev");
const testimonialNext = document.querySelector(".testimonial-next");

// Gestion des états actifs de navigation
function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Animation header au scroll
function handleScroll() {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // Révéler les éléments au scroll
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

// Menu mobile
function toggleMenu() {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
  document.body.classList.toggle("menu-open");
}

// Défilement vers la section suivante
function scrollToNextSection() {
  const heroHeight = document.querySelector(".hero").offsetHeight;
  window.scrollTo({
    top: heroHeight,
    behavior: "smooth",
  });
}

// Slider de témoignages
let currentSlide = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showSlide(n) {
  if (!testimonialSlider) return;

  if (n >= testimonials.length) {
    currentSlide = 0;
  } else if (n < 0) {
    currentSlide = testimonials.length - 1;
  } else {
    currentSlide = n;
  }

  // Calculer la largeur à décaler en tenant compte des marges
  const slideWidth =
    testimonials[0].offsetWidth +
    parseInt(getComputedStyle(testimonials[0]).marginLeft) * 2;

  // Déplacer le slider avec animation
  testimonialSlider.style.transform = `translateX(-${
    currentSlide * slideWidth
  }px)`;

  // Mettre à jour le style des témoignages
  testimonials.forEach((testimonial, index) => {
    if (index === currentSlide) {
      testimonial.style.transform = "scale(1)";
      testimonial.style.opacity = "1";
    } else {
      testimonial.style.transform = "scale(0.95)";
      testimonial.style.opacity = "0.8";
    }
  });
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Initialisation
function init() {
  setActiveNavLink();

  // Event listeners
  window.addEventListener("scroll", handleScroll);

  if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navList.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  if (scrollDownBtn) {
    scrollDownBtn.addEventListener("click", scrollToNextSection);
  }

  if (testimonialNext) {
    testimonialNext.addEventListener("click", nextSlide);
  }

  if (testimonialPrev) {
    testimonialPrev.addEventListener("click", prevSlide);
  }

  // Démarrer le carrousel automatiquement
  if (testimonialSlider && testimonials.length > 1) {
    setInterval(nextSlide, 5000);
  }

  // Animation initiale des éléments visibles
  setTimeout(() => {
    handleScroll();
  }, 100);
}

// Exécuter lorsque le DOM est chargé
document.addEventListener("DOMContentLoaded", init);

// Animation de comptage pour les chiffres
const counters = document.querySelectorAll(".counter");

function animateCounters() {
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(animateCounters, 20);
    } else {
      counter.innerText = target;
    }
  });
}

// Observer pour déclencher l'animation des compteurs
if (counters.length > 0) {
  const counterSection = document.querySelector(".counter-section");
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
        observer.unobserve(entries[0].target);
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(counterSection);
}

// Animation de la barre de compétences
const skillBars = document.querySelectorAll(".skill-progress-bar");

function animateSkillBars() {
  skillBars.forEach((bar) => {
    const target = bar.getAttribute("data-progress");
    bar.style.width = target + "%";
  });
}

// Observer pour déclencher l'animation des barres de compétences
if (skillBars.length > 0) {
  const skillsSection = document.querySelector(".skills-section");
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        animateSkillBars();
        observer.unobserve(entries[0].target);
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(skillsSection);
}

// Filtre de galerie
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

if (filterButtons.length > 0) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Changer la classe active
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filtrer les éléments
      const filter = button.getAttribute("data-filter");

      galleryItems.forEach((item) => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.style.display = "block";
          setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = "scale(1)";
          }, 50);
        } else {
          item.style.opacity = 0;
          item.style.transform = "scale(0.8)";
          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      });
    });
  });
}

// Animation au hover des cartes de service
const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("hover");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("hover");
  });
});

// Form validation
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Validation simple
    let isValid = true;
    const formInputs = contactForm.querySelectorAll(".form-control");

    formInputs.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add("is-invalid");
      } else {
        input.classList.remove("is-invalid");
      }
    });

    if (isValid) {
      // Simuler l'envoi du formulaire
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message envoyé!';
        submitBtn.classList.remove("btn-primary");
        submitBtn.classList.add("btn-success");

        // Réinitialiser le formulaire
        contactForm.reset();

        // Rétablir le bouton après 3 secondes
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          submitBtn.classList.remove("btn-success");
          submitBtn.classList.add("btn-primary");
        }, 3000);
      }, 1500);
    }
  });
}
