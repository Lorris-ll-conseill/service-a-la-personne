/**
 * Animations avancées pour le site Harmonie Services
 * Ce fichier contient des animations et effets interactifs supplémentaires
 */

document.addEventListener("DOMContentLoaded", () => {
  // Effet parallaxe sur les héros
  const parallaxHeros = document.querySelectorAll(".hero");
  if (parallaxHeros.length > 0) {
    window.addEventListener("scroll", () => {
      parallaxHeros.forEach((hero) => {
        const scrollPosition = window.scrollY;
        if (scrollPosition < window.innerHeight) {
          const translateY = scrollPosition * 0.4;
          hero.style.backgroundPositionY = `calc(50% + ${translateY}px)`;
        }
      });
    });
  }

  // Animation des chiffres clés avec counter.js
  const counters = document.querySelectorAll(".counter");
  if (counters.length > 0) {
    const animateCounter = (counter, target, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 16); // 60fps
      const timer = setInterval(() => {
        start += increment;
        counter.textContent = Math.floor(start);
        if (start >= target) {
          counter.textContent = target;
          clearInterval(timer);
        }
      }, 16);
    };

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.getAttribute("data-target"));
            animateCounter(counter, target);
            counterObserver.unobserve(counter);
          }
        });
      },
      { threshold: 0.5 }
    );

    counters.forEach((counter) => {
      counterObserver.observe(counter);
    });
  }

  // Effet de zoom sur les images des services
  const serviceImages = document.querySelectorAll(".service-image img");
  serviceImages.forEach((img) => {
    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.1)";
      img.style.transition = "transform 0.5s ease";
    });
    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1.0)";
    });
  });

  // Accordéon pour les FAQ
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = question.querySelector("i");

    answer.style.maxHeight = "0";
    answer.style.overflow = "hidden";
    answer.style.transition = "max-height 0.3s ease";

    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      // Fermer tous les autres items
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
          otherItem.querySelector(".faq-answer").style.maxHeight = "0";
          otherItem.querySelector("i").classList.remove("fa-chevron-up");
          otherItem.querySelector("i").classList.add("fa-chevron-down");
        }
      });

      if (isOpen) {
        item.classList.remove("active");
        answer.style.maxHeight = "0";
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
      } else {
        item.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up");
      }
    });
  });

  // Animation des boutons
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      button.style.transform = "translateY(-3px)";
      button.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
    });
    button.addEventListener("mouseleave", () => {
      button.style.transform = "translateY(0)";
      button.style.boxShadow = "";
    });
  });

  // Effet de survol sur les cartes de services
  const serviceCards = document.querySelectorAll(".service-card");
  serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px)";
      card.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.1)";
      const cardColor = card.style.getComputedStyle(card).borderTopColor;
      card.style.borderTop = "5px solid " + cardColor;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "";
      card.style.borderTop = "";
    });
  });

  // Effet de typage pour les titres
  const typingEffect = (element, text, speed = 100) => {
    let i = 0;
    element.textContent = "";
    const timer = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
  };

  // Animation de la barre de progression des compétences
  const skills = document.querySelectorAll(".skill-bar");
  if (skills.length > 0) {
    const skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBar = entry.target.querySelector(".skill-progress");
            const percentage = skillBar.getAttribute("data-percentage");
            skillBar.style.width = percentage + "%";
            skillsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    skills.forEach((skill) => {
      skillsObserver.observe(skill);
    });
  }

  // Animation des témoignages
  const testimonials = document.querySelectorAll(".testimonial");
  let currentTestimonial = 0;

  const showTestimonial = (index) => {
    testimonials.forEach((testimonial, i) => {
      if (i === index) {
        testimonial.classList.add("active");
        testimonial.style.opacity = "1";
        testimonial.style.transform = "translateX(0)";
      } else {
        testimonial.classList.remove("active");
        testimonial.style.opacity = "0";
        testimonial.style.transform =
          i < index ? "translateX(-100%)" : "translateX(100%)";
      }
    });
  };

  if (testimonials.length > 0) {
    testimonials.forEach((testimonial, i) => {
      if (i !== 0) {
        testimonial.style.opacity = "0";
        testimonial.style.transform = "translateX(100%)";
      }
    });

    const prevButton = document.querySelector(".testimonial-prev");
    const nextButton = document.querySelector(".testimonial-next");

    if (prevButton && nextButton) {
      prevButton.addEventListener("click", () => {
        currentTestimonial =
          (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
      });

      nextButton.addEventListener("click", () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
      });

      // Auto rotation
      setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
      }, 8000);
    }
  }

  // Animation au survol des liens du footer
  const footerLinks = document.querySelectorAll(".footer-nav a");
  footerLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.paddingLeft = "10px";
      link.style.color = "#ffcb42";
    });
    link.addEventListener("mouseleave", () => {
      link.style.paddingLeft = "0";
      link.style.color = "";
    });
  });

  // Animation des boutons sociaux
  const socialLinks = document.querySelectorAll(".social-link");
  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.transform = "translateY(-5px) rotate(10deg)";
    });
    link.addEventListener("mouseleave", () => {
      link.style.transform = "";
    });
  });

  // Validation du formulaire de contact
  const contactForm = document.querySelector(".contact-form form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let isValid = true;
      const formInputs = contactForm.querySelectorAll(
        "input, textarea, select"
      );

      formInputs.forEach((input) => {
        if (input.hasAttribute("required") && !input.value.trim()) {
          isValid = false;
          input.classList.add("error");
          const errorMessage = document.createElement("div");
          errorMessage.className = "error-message";
          errorMessage.textContent = "Ce champ est requis";

          if (
            !input.nextElementSibling ||
            !input.nextElementSibling.classList.contains("error-message")
          ) {
            input.parentNode.insertBefore(errorMessage, input.nextSibling);
          }
        } else {
          input.classList.remove("error");
          if (
            input.nextElementSibling &&
            input.nextElementSibling.classList.contains("error-message")
          ) {
            input.parentNode.removeChild(input.nextElementSibling);
          }
        }
      });

      if (isValid) {
        // Simuler l'envoi du formulaire
        const submitButton = contactForm.querySelector('button[type="submit"]');
        submitButton.innerHTML =
          '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        submitButton.disabled = true;

        setTimeout(() => {
          contactForm.innerHTML = `
            <div class="success-message">
              <i class="fas fa-check-circle"></i>
              <h3>Votre message a été envoyé !</h3>
              <p>Nous vous répondrons dans les plus brefs délais.</p>
            </div>
          `;
        }, 2000);
      }
    });
  }

  // Animation de défilement fluide pour les ancres
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });
});
