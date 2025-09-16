// Optional: log that JS is loaded
console.log("script.js loaded");

// Example: highlight the current page in the navbar
const navLinks = document.querySelectorAll('nav ul li a');
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.style.textDecoration = 'underline'; // highlight current page
  }
});

// Example: simple alert for project cards (if you want interaction later)
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('click', () => {
    alert('Thanks for checking out this project!');
  });
});
