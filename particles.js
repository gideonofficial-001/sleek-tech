const particlesContainer = document.getElementById("particles");

function createParticle() {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  particle.style.left = Math.random() * 100 + "vw";
  particle.style.animationDuration = (6 + Math.random() * 8) + "s";

  particlesContainer.appendChild(particle);

  setTimeout(() => particle.remove(), 15000);
}

setInterval(createParticle, 300);
