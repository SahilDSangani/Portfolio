document.addEventListener("DOMContentLoaded", function() {
      const cards = document.querySelectorAll(".skill-card");
      cards.forEach(card => {
        card.addEventListener("click", () => {
          cards.forEach(c => c !== card && c.classList.remove("expanded"));
          card.classList.toggle("expanded");
        });
      });
    });