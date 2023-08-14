//particle color update
function updateParticleColor(color) {
  particlesJS("particle-background", {
    particles: {
      number: { value: 50 },
      color: {
        value: color, // Change this to the desired particle color
      },
      shape: { type: "circle" },
      opacity: {
        value: 0.8,
        random: true,
      },
      size: {
        value: 4, // Adjust this value to make the circles smaller
        random: true,
      },
      line_linked: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    // ... more configuration options
  });
}

// Detect system preference and set the theme on page load
function toggleDarkMode() {
  const body = document.body;
  const darkModeToggle = document.getElementById("darkModeToggle");

  // Toggle dark mode class on the body
  body.classList.toggle("dark-mode");

  // Toggle the icon between moon and sun
  if (body.classList.contains("dark-mode")) {
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    updateParticleColor("#ffffff"); // Set particle color to white in dark mode
  } else {
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    updateParticleColor("#000000"); // Set particle color to black in light mode
  }
}

function setDarkModeBasedOnSystem() {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const body = document.body;
  const darkModeToggle = document.getElementById("darkModeToggle");

  // Set dark mode class on the body based on system preference
  if (prefersDarkMode) {
    body.classList.add("dark-mode");
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    updateParticleColor("#ffffff"); // Set particle color to white in dark mode
  } else {
    body.classList.remove("dark-mode");
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    updateParticleColor("#000000"); // Set particle color to black in light mode
  }
}
setDarkModeBasedOnSystem();
