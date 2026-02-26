// ----- NAVIGATION BAR FUNCTION -----
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

// ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING -----
window.onscroll = function () { headerShadow() };
function headerShadow() {
  const navHeader = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

// ----- THEME TOGGLE -----
const themeBtn = document.getElementById("theme-button");
const themeIcon = document.getElementById("theme-icon");

let darkMode = localStorage.getItem("darkMode");

const enableLightMode = () => {
  document.body.classList.add("light-mode");
  if (themeIcon) themeIcon.className = "uil uil-sun";
  localStorage.setItem("darkMode", "disabled");
};

const disableLightMode = () => {
  document.body.classList.remove("light-mode");
  if (themeIcon) themeIcon.className = "uil uil-moon";
  localStorage.setItem("darkMode", "enabled");
};

if (darkMode === "disabled") {
  enableLightMode();
}

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "disabled") {
      enableLightMode();
    } else {
      disableLightMode();
    }
  });
}

// ----- TYPING EFFECT -----
var typingEffect = new Typed(".typedText", {
  strings: ["UI/UX Designer", "Web Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
});

// ----- SCROLL REVEAL ANIMATION -----
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true,
  easing: 'ease-in-out'
});

// -- HOME --
sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', { delay: 100 });
sr.reveal('.featured-text-info', { delay: 200 });
sr.reveal('.featured-text-btn', { delay: 200 });
sr.reveal('.social_icons', { delay: 200 });
sr.reveal('.featured-image', { delay: 300 });

// -- PROJECT BOX --
sr.reveal('.project-box', { interval: 200 });

// -- HEADINGS --
sr.reveal('.top-header', {});

// ----- SCROLL REVEAL LEFT/RIGHT ANIMATION -----
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true,
  easing: 'ease-in-out'
});

srLeft.reveal('.timeline-item', { interval: 200 });
srLeft.reveal('.contact-info', { delay: 100 });

const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true,
  easing: 'ease-in-out'
});

srRight.reveal('.skills-box-full', { interval: 200 });
srRight.reveal('.form-control', { delay: 100 });

// ----- CHANGE ACTIVE LINK ON SCROLL -----
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

// ----- MODAL GITHUB -----
function openGithubModal(url) {
  var modal = document.getElementById("githubModal");
  var confirmBtn = document.getElementById("githubConfirmBtn");

  // Set modal text and icon for GitHub
  document.querySelector("#githubModal .modal-icon i").className = "devicon-github-original";
  document.querySelector("#githubModal h3").innerText = "Visiter le code source";
  document.querySelector("#githubModal p").innerText = "Vous êtes sur le point d'être redirigé vers le dépôt GitHub de ce projet. Voulez-vous continuer ?";

  confirmBtn.href = url;
  modal.style.display = "flex";
}

// ----- MODAL DRIBBBLE -----
function openDribbbleModal(url) {
  var modal = document.getElementById("githubModal");
  var confirmBtn = document.getElementById("githubConfirmBtn");

  // Set modal text and icon for Dribbble
  document.querySelector("#githubModal .modal-icon i").className = "uil uil-dribbble";
  document.querySelector("#githubModal h3").innerText = "Visiter le Portfolio";
  document.querySelector("#githubModal p").innerText = "Vous êtes sur le point d'être redirigé vers la présentation Dribbble de ce projet. Voulez-vous continuer ?";

  confirmBtn.href = url;
  modal.style.display = "flex";
}

function closeGithubModal() {
  var modal = document.getElementById("githubModal");
  modal.style.display = "none";
}

// Close modal when clicking outside of it
window.addEventListener("click", function (event) {
  var modal = document.getElementById("githubModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// ----- 3D INTERACTIVE PARTICLE NETWORK (DEVELOPER VIBE) -----
const canvas = document.getElementById('canvas-grid');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
const mouse = { x: -1000, y: -1000 };

// Animation settings
const particleCount = Math.min(window.innerWidth / 15, 120);
const connectionDistance = 150;
const mouseInteractionDistance = 250;
const baseColor = 'rgba(255, 255, 255, 0.5)';

class Particle {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 1.5;
    this.vy = (Math.random() - 0.5) * 1.5;
    this.radius = Math.random() * 2 + 1;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > width) this.vx = -this.vx;
    if (this.y < 0 || this.y > height) this.vy = -this.vy;

    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouseInteractionDistance) {
      const forceDirectionX = dx / distance;
      const forceDirectionY = dy / distance;
      const force = (mouseInteractionDistance - distance) / mouseInteractionDistance;

      this.x -= forceDirectionX * force * 3;
      this.y -= forceDirectionY * force * 3;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = document.body.classList.contains("light-mode") ? 'rgba(0, 0, 0, 0.4)' : baseColor;
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  const count = Math.min(window.innerWidth / 12, 120);
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }
}

function resizeCanvas() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  initParticles();
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

window.addEventListener('mouseout', () => {
  mouse.x = -1000;
  mouse.y = -1000;
});

function animate() {
  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();

    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < connectionDistance) {
        ctx.beginPath();
        const opacity = 1 - (distance / connectionDistance);
        ctx.strokeStyle = document.body.classList.contains("light-mode")
          ? `rgba(0, 0, 0, ${opacity * 0.15})`
          : `rgba(255, 255, 255, ${opacity * 0.25})`;
        ctx.lineWidth = 1;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }

    const dxMouse = particles[i].x - mouse.x;
    const dyMouse = particles[i].y - mouse.y;
    const distanceMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

    if (distanceMouse < mouseInteractionDistance) {
      ctx.beginPath();
      const opacityMouse = 1 - (distanceMouse / mouseInteractionDistance);
      ctx.strokeStyle = `rgba(41, 98, 255, ${opacityMouse})`;
      ctx.lineWidth = 1.5;
      ctx.moveTo(particles[i].x, particles[i].y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
    }
  }

  requestAnimationFrame(animate);
}

// Start animation loop
animate();