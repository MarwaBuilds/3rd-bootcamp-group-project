// Wait until the HTML page is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  }

  // Interactive Click on "START FREE" Button
  const freeBtn = document.querySelector(".free-pill-btn");
  if (freeBtn) {
    freeBtn.addEventListener("click", function () {
      alert("Thank you for trying Supportiva! Redirecting to sign up...");
    });
  }
});
