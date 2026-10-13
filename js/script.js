// ------Mobile menu -----------

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

// oppen or close the menu when the button is clicked
menuBtn.addEventListener ("click", function(){
    menu.classList.toggle("open");
});

// Close the menu when a link is clicked
const links = document.querySelectorAll("#menu a");
links.forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("open");
  });
}); 

// ----- Projects -----  
const projects = [
  {
    title: "Jobly",
    description: "A full-stack job board application where employers post jobs and candidates browse, search, filter, and apply. Built with React, Node.js, Express, MongoDB, and JWT authentication.",
    image: "images/jobly.png",
    tech: ["HTML", "CSS", "React", "Node.js", "Express", "MongoDB", "JWT"],
    link: "https://jobly-ruby.vercel.app"
  },
  {
    title: "Notes App",
    description: "A simple web app to write and save notes, built with HTML, CSS, and JavaScript.",
    image: "images/notes-app.png",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://yas-tech-tc.github.io/NotesApp/"
  },
  {
    title: "BUSY Bar - Landing Page",
    description: "Landing page for BUSY Bar, a productivity device with an LED screen that shows your \"busy\" status to avoid interruptions during focus time.",
    image: "images/busy-bar.png",
    tech: ["HTML", "TailwindCSS"],
    link: "https://yas-tech-tc.github.io/Busy-Bar---landing-page/"
  }
];

const projectsList = document.getElementById("projects-list");

// Create one card for each project
projects.forEach(function (project) {
  const card = document.createElement("article");
  card.className = "project-card";

  // Build the technology tags
  let tags = "";
  project.tech.forEach(function (name) {
    tags = tags + "<span>" + name + "</span>";
  });

  // Fill the card
  card.innerHTML =
    '<img src="' + project.image + '" alt="Screenshot of ' + project.title + '">' +
    '<div class="project-info">' +
      "<h3>" + project.title + "</h3>" +
      "<p>" + project.description + "</p>" +
      '<div class="tags">' + tags + "</div>" +
      '<a href="' + project.link + '" target="_blank" class="btn btn-primary">Live Demo</a>' +
    "</div>";

  // Add the card to the page
  projectsList.appendChild(card);
});

const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formMessage = document.getElementById("formjs code for the verification of validation of the conatct inputs-message");

form.addEventListener("submit", function (event) {
  event.preventDefault(); /*Empêche le comportement normal associé à cet événement.*/
  let valid = true;

  // Clear previous error messages
  document.getElementById("name-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("message-error").textContent = "";
  formMessage.textContent = "";

  // Validate name
  if (nameInput.value.trim() === "") {
    document.getElementById("name-error").textContent = "Please enter your name.";
    valid = false;
  }

  // Validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    document.getElementById("email-error").textContent = "Please enter a valid email address.";
    valid = false;
  }

  // Validate message
  if (messageInput.value.trim().length < 10) {
    document.getElementById("message-error").textContent = "Your message must be at least 10 characters long.";
    valid = false;
  }

  // if all fields are valid, show a success message
  if (valid) {
    formMessage.textContent = "Thank you " + nameInput.value.trim() + "! Your message is ready to be sent.";
    form.reset(); //empties the form 
  }
});