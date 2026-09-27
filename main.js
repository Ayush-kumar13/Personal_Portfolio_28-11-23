const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  const reveal = ScrollReveal({
    distance: "70px",
    duration: 1200,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    reset: true,
  });

  reveal.reveal(".header__image .profile__portrait", { origin: "right", delay: 100 });
  reveal.reveal(".hero__name", { origin: "left", delay: 250 });
  reveal.reveal(".hero__contact", { origin: "left", delay: 450 });
  reveal.reveal(".hero__role", { origin: "left", delay: 600 });
  reveal.reveal(".header__content > .section__description", { origin: "bottom", delay: 750 });
  reveal.reveal(".header__btn", { origin: "bottom", delay: 900 });

  reveal.reveal(".about__visual", { origin: "left" });
  reveal.reveal(".about__content .section__header", { origin: "right" });
  reveal.reveal(".about__content .section__description", { origin: "right", delay: 200 });
  reveal.reveal(".about__facts", { origin: "bottom", delay: 350 });

  reveal.reveal(".service__container .section__header", { origin: "bottom" });
  reveal.reveal(".service__card", { origin: "bottom", interval: 140, delay: 150 });

  reveal.reveal(".portfolio__container > .section__header", { origin: "bottom" });
  reveal.reveal(".portfolio__container > .section__description", { origin: "bottom", delay: 150 });
  reveal.reveal(".portfolio__card", { origin: "bottom", interval: 180, delay: 200 });
  reveal.reveal(".portfolio__banner__card", { origin: "bottom", interval: 140, delay: 150 });
}
