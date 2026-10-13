// ------Mobile menu -----------

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

// oppen or close the menu when the button is clicked
menuBtn.addEvebtListener ("click", function(){
    menu.classList.toggle("open");
});

// Close the menu when a link is clicked
const links = document.querySelectorAll("#menu a");
links.forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("open");
  });
});

