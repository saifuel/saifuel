const waGeneral =
  "https://wa.me/6283890272210?text=Halo%20Admin%20Saifuel%20👋%0ASaya%20ingin%20order%20menu%20high%20protein.%0ABoleh%20minta%20menu%20dan%20price%20listnya?";

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

// ================= JSON PRODUCTS =================

const productsWrapper = document.getElementById("productsWrapper");

fetch("products.json")
  .then((response) => response.json())
  .then((products) => {
    products.forEach((product) => {
      const card = `

      <div class="product-card">

        ${
          product.signature
            ? `
          <div class="signature-badge">
            SIGNATURE
          </div>
          `
            : ""
        }

         ${
           product.bestseller
             ? `
          <div class="bestseller-badge">
            BESTSELLER
          </div>
          `
             : ""
         }

        <img src="${product.image}" alt="${product.name}" />

         ${
           product.status
             ? `
                  <div class="status-badge ${product.status
                    .toLowerCase()
                    .replace(" ", "-")}">
                    ${product.status}
                  </div>
                  `
             : ""
         }

        <div class="product-content">

          <h3>${product.name}</h3>

          <div class="product-protein">
            ${product.description}
          </div>

          <div class="macro-wrapper">

            <div class="macro-box">
              <span>Protein</span>
              <h4>${product.protein}</h4>
            </div>

            <div class="macro-box">
              <span>Carbs</span>
              <h4>${product.carbs}</h4>
            </div>

            <div class="macro-box">
              <span>Fat</span>
              <h4>${product.fat}</h4>
            </div>

            <div class="macro-box">
              <span>Calories</span>
              <h4>${product.calories}</h4>
            </div>

          </div>

          <div class="product-price">
            Rp ${product.price}
          </div>

          ${
            product.status === "OPEN PO"
              ? `
            <a
              href="https://wa.me/6283890272210?text=${encodeURIComponent(
                `Halo admin Saifuel 👋
        Saya ingin order menu berikut:

        ━━━━━━━━━━━━━━━
        🍱 Menu : ${product.name}
        💪 Protein : ${product.protein}
        🔥 Calories : ${product.calories}
        💰 Harga : Rp ${product.price}
        ━━━━━━━━━━━━━━━

        Qty :

        Nama :
        Alamat :
        `,
              )}"
              class="btn-product"
              target="_blank"
            >
              Order Now
            </a>
            `
              : `
            <button class="btn-product disabled-btn">
              ${product.status}
            </button>
            `
          }

        </div>

      </div>

      `;

      productsWrapper.innerHTML += card;
    });
  });

// ================= AUTO KE ISI TEKS WA pada button order now =================
const navbarOrder = document.getElementById("navbar-order");

navbarOrder.href = waGeneral;

const heroOrder = document.getElementById("hero-order");

heroOrder.href = waGeneral;

const countdownOrder = document.getElementById("countdown-order");

countdownOrder.href = waGeneral;

const floatingOrder = document.getElementById("floating-order");

floatingOrder.href = waGeneral;
