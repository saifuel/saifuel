// ================= NAVBAR SHADOW ON SCROLL =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0,0,0,0.92)";
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.35)";
  } else {
    navbar.style.background = "rgba(0,0,0,0.7)";
    navbar.style.boxShadow = "none";
  }
});

// ================= SCROLL REVEAL ANIMATION =================

const revealElements = document.querySelectorAll(
  ".feature-card, .product-card, .nutrition-card, .about-wrapper, .contact-card",
);

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// ================= ACTIVE NAVBAR LINK =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ================= HERO IMAGE FLOAT EFFECT =================

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 40;
  const y = (window.innerHeight / 2 - e.pageY) / 40;

  heroImage.style.transform = `translate(${x}px, ${y}px)`;
});

// ================= COUNTDOWN TIMER =================

// SET TANGGAL CLOSE PO
// FORMAT: YEAR, MONTH-1, DAY, HOUR, MINUTE

const countdownDate = new Date(2026, 4, 25, 23, 59, 59).getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();

  const distance = countdownDate - now;

  // TIME CALCULATION

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // DISPLAY

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // IF COUNTDOWN FINISHED

  if (distance < 0) {
    clearInterval(countdown);

    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);

// ================= BUTTON HOVER EFFECT =================

const buttons = document.querySelectorAll(".btn-primary, .btn-product");

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-4px) scale(1.02)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0) scale(1)";
  });
});

// ================= FLOATING WA PULSE =================

const floatingWA = document.querySelector(".floating-wa");

setInterval(() => {
  floatingWA.classList.toggle("pulse");
}, 1200);
