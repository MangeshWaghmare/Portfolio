// ---------------------------
// Simple modern portfolio JS
// ---------------------------

// THEME TOGGLE --------------------------------------------------
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
const saved = localStorage.getItem("theme");

if (saved === "dark") {
  root.setAttribute("data-theme", "dark");
}

function toggleTheme() {
  const isDark = root.getAttribute("data-theme") === "dark";
  if (isDark) {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  } else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
}

themeToggle.addEventListener("click", toggleTheme);

// TYPING EFFECT --------------------------------------------------
const typingEl = document.getElementById("typing");
const words = ["Web Developer", "UI Lover", "Creative Coder"];
let wIdx = 0,
  chIdx = 0,
  forward = true;

function tick() {
  const full = words[wIdx];

  if (forward) {
    chIdx++;
    if (chIdx === full.length) {
      forward = false;
      setTimeout(tick, 900);
      return;
    }
  } else {
    chIdx--;
    if (chIdx === 0) {
      forward = true;
      wIdx = (wIdx + 1) % words.length;
    }
  }

  typingEl.textContent = full.slice(0, chIdx);
  setTimeout(tick, forward ? 120 : 60);
}

tick();

// REVEAL ON SCROLL ----------------------------------------------
const reveals = document.querySelectorAll(".reveal");

const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((r) => obs.observe(r));

// CONTACT FORM FEEDBACK ------------------------------------------
const form = document.getElementById("contactForm");

form.addEventListener("submit", () => {
  const btn = form.querySelector("button");
  btn.disabled = true;
  btn.textContent = "Sending…";

  setTimeout(() => {
    btn.disabled = false;
    btn.textContent = "Send message";
  }, 2000);
});

// YEAR AUTO-UPDATE -----------------------------------------------
document.getElementById("year").textContent = new Date().getFullYear();

// ACCESSIBILITY: TAB NAV ------------------------------------------
document.querySelectorAll("a").forEach((a) => a.setAttribute("tabindex", "0"));
