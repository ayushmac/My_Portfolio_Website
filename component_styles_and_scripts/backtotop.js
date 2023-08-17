//scroll to top of the page
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Show or hide the back-to-top button based on scroll position
window.addEventListener("scroll", function () {
  const backToTopBtn = document.querySelector(".back-to-top-btn");
  if (window.scrollY >= 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});
