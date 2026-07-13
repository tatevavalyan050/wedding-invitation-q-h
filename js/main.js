/**
 * Հովո և Քրիստինա — Wedding Invitation
 */

// ============================================
// SET YOUR WEDDING DATE HERE
// Format: Year, Month (0-11), Day, Hour, Minute
// ============================================
const WEDDING_DATE = new Date(2026, 8, 29, 0, 0, 0); // September 29, 2026 at 00:00

const GOOGLE_CALENDAR_URL =
  "https://calendar.google.com/calendar/render?action=TEMPLATE" +
  "&text=" + encodeURIComponent("Հովոյի և Քրիստինայի հարսանիք") +
  "&dates=20260929T130000Z/20260929T190000Z" +
  "&details=" + encodeURIComponent(
    "12:00 — Հարսի տուն, գյուղ Գեղանիստ, 10-րդ փողոց, 52 տուն\n14:00 — Փեսայի տուն, գյուղ Գոռավան, Հովհաննես Շիրազի փողոց, տուն 31\n16:00 — Եկեղեցական արարողություն, Արտաշատի Սուրբ Հովհաննես եկեղեցի\n18:00 — Հարսանյաց հանդիսություն\nՎայր՝ «Հրաշք Այգի» ռեստորանային համալիր"
  ) +
  "&location=" + encodeURIComponent("«Հրաշք Այգի» ռեստորանային համալիր, Դիտակ գյուղ, Գևորգյան փող., 1 շենք");

const isMobileView = () => window.matchMedia("(max-width: 768px)").matches;

function isWeddingDay(date = new Date()) {
  return (
    date.getFullYear() === WEDDING_DATE.getFullYear() &&
    date.getMonth() === WEDDING_DATE.getMonth() &&
    date.getDate() === WEDDING_DATE.getDate()
  );
}

// ---- Countdown ----
function updateCountdown() {
  const now = new Date();
  const diff = WEDDING_DATE - now;
  const countdown = document.getElementById("countdown");
  const weddingDayEl = document.getElementById("countdown-wedding-day");
  const countdownLabel = document.getElementById("countdown-label");
  const countdownSection = document.querySelector(".countdown-section");

  if (isWeddingDay(now)) {
    countdown?.setAttribute("hidden", "");
    weddingDayEl?.removeAttribute("hidden");
    if (countdownLabel) countdownLabel.hidden = true;
    countdownSection?.classList.add("countdown-section--wedding-day");
    return;
  }

  countdown?.removeAttribute("hidden");
  weddingDayEl?.setAttribute("hidden", "");
  if (countdownLabel) countdownLabel.hidden = false;
  countdownSection?.classList.remove("countdown-section--wedding-day");

  const units = {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };

  Object.entries(units).forEach(([unit, value]) => {
    const el = document.querySelector(`[data-unit="${unit}"]`);
    if (el) {
      const formatted = String(Math.max(0, value)).padStart(2, "0");
      if (el.textContent !== formatted) {
        el.textContent = formatted;
        el.classList.remove("is-ticking");
        el.offsetHeight;
        el.classList.add("is-ticking");
      }
    }
  });
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ---- Scroll reveal ----
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

revealElements.forEach((el) => revealObserver.observe(el));

// ---- Navigation show on scroll ----
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  if (!nav) return;
  nav.classList.toggle("visible", window.scrollY > 300);
});

// ---- Google Calendar link ----
document.querySelectorAll("#google-calendar").forEach((link) => {
  link.href = GOOGLE_CALENDAR_URL;
  link.target = "_blank";
});

// ---- Abstract canvas particle network ----
function initAbstractCanvas() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (isMobileView()) return;

  const canvas = document.getElementById("abstract-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const colors = ["232, 137, 158", "212, 165, 116", "255, 214, 224"];
  let particles = [];
  let width = 0;
  let height = 0;
  let animationFrame = 0;

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function createParticles() {
    const count = Math.min(58, Math.max(24, Math.floor(width / 22)));
    particles = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: 1.2 + Math.random() * 2.4,
      color: colors[index % colors.length],
      phase: Math.random() * Math.PI * 2,
    }));
  }

  resize();
  createParticles();

  window.addEventListener("resize", () => {
    cancelAnimationFrame(animationFrame);
    resize();
    createParticles();
    animate();
  });

  function animate(time = 0) {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.x += p.vx + Math.sin(time / 1400 + p.phase) * 0.06;
      p.y += p.vy + Math.cos(time / 1600 + p.phase) * 0.06;

      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;
      if (p.y < -20) p.y = height + 20;
      if (p.y > height + 20) p.y = -20;
    });

    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);
        if (dist < 145) {
          const opacity = 0.11 * (1 - dist / 145);
          ctx.beginPath();
          ctx.strokeStyle = `rgba(232, 137, 158, ${opacity})`;
          ctx.lineWidth = 0.7;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    particles.forEach((p) => {
      const glow = 0.18 + Math.sin(time / 900 + p.phase) * 0.08;
      ctx.beginPath();
      ctx.fillStyle = `rgba(${p.color}, ${glow})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    animationFrame = requestAnimationFrame(animate);
  }

  animate();
}

initAbstractCanvas();

// ---- Gallery lightbox ----
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox?.querySelector(".lightbox__img");
const galleryItems = document.querySelectorAll(".gallery__item");
let currentIndex = 0;

function openLightbox(index) {
  if (!lightbox || !lightboxImg) return;
  currentIndex = index;
  const img = galleryItems[index]?.querySelector("img");
  if (!img) return;

  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function showPrev() {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  openLightbox(currentIndex);
}

function showNext() {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  openLightbox(currentIndex);
}

galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => openLightbox(index));
});

lightbox?.querySelector(".lightbox__close")?.addEventListener("click", closeLightbox);
lightbox?.querySelector(".lightbox__prev")?.addEventListener("click", showPrev);
lightbox?.querySelector(".lightbox__next")?.addEventListener("click", showNext);

lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (!lightbox?.classList.contains("active")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") showPrev();
  if (e.key === "ArrowRight") showNext();
});

// ---- Image error handling (only on real load failures) ----
document.querySelectorAll(".gallery__item img").forEach((img) => {
  img.addEventListener("error", () => {
    console.warn("Image failed to load:", img.getAttribute("src"));
  });
});

// ---- Smooth nav active state ----
const sections = document.querySelectorAll("section[id], header[id]");
const navLinks = document.querySelectorAll(".nav a, .nav-bottom a");

function updateActiveNav() {
  let current = "";
  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      current = section.getAttribute("id") || "";
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${current}`;
    link.classList.toggle("is-active", isActive);
  });
}

window.addEventListener("scroll", updateActiveNav);
updateActiveNav();


// ---- Premium polish: map load state + subtle hero parallax ----
document.querySelectorAll(".venue-card__map iframe").forEach((iframe) => {
  iframe.addEventListener("load", () => {
    iframe.closest(".venue-card__map")?.classList.add("is-loaded");
  });
});

const heroBg = document.querySelector(".hero__bg");

window.addEventListener("scroll", () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (isMobileView()) return;
  const y = Math.min(window.scrollY, 700);
  if (heroBg) heroBg.style.transform = `scale(1.06) translateY(${y * 0.035}px)`;
});
