<!-- ===================== js/menu.js ===================== -->

document.getElementById("hamburger").addEventListener("click", function () {

  document.getElementById("navMenu").classList.toggle("active");

});



// Mobile dropdown toggle

const dropdowns = document.querySelectorAll(".dropdown > a");

dropdowns.forEach(link => {

  link.addEventListener("click", function (e) {

    if (window.innerWidth < 768) {

      e.preventDefault();

      this.nextElementSibling.classList.toggle("active");

    }

  });

});
