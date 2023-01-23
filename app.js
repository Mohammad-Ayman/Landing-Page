/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const navMenu = document.querySelector(".navbar__menu");
const navBar = document.querySelector("#navbar__list");
const sections = document.querySelectorAll(".sections");
const main = document.querySelector("main");
const addSec = document.querySelector(".add");
const removeSec = document.querySelector(".remove");
const navUl = document.querySelector(" header nav #navbar__list");
let fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
let sectionNumber = sections.length + 1;
function addSection() {
  let newSection = document.createElement("section");
  newSection.setAttribute("id", "section" + (sections.length + 1));
  newSection.setAttribute("class", "sections");
  newSection.setAttribute("data-nav", "Section " + (sections.length + 1));
  newSection.innerHTML = `<div class='landing__container'><h2>Section ${sectionNumber}</h2><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem recusandae molestiae aliquid odio voluptas eaque fugiat reiciendis, pariatur, repellendus consequatur atque ut nisi adipisci eos? Ipsa culpa id ipsam asperiores.</p><p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinargravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam.Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentumconsectetur porttitor. Suspendisse imperdiet porttitor tortor, egetelementum tortor mollis non. </p></div>`;
  main.appendChild(newSection);

  let liNew = document.createElement("li");
  liNew.innerHTML = `<a class = 'menu__link' href='#${sectionNumber}'>section${sectionNumber}</a>`;
  navBar.appendChild(liNew);
  sectionNumber++;
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function buildNav() {}
sections.forEach((section) => {
  let li = document.createElement("li");
  li.innerHTML = `<a class = 'menu__link' href='#${section.id}'>${section.id}</a>`;

  navBar.appendChild(li);
});

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event
//Scrolling smoothly to the section

let navLinks = document.querySelectorAll("#navbar__list a");
navLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    let targetId = link.getAttribute("href");
    let target = document.querySelector(targetId);
    target.scrollIntoView({ behavior: "smooth" });
  });
});
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
buildNav();
// Scroll to section on link click

// Set sections as active
addSec.addEventListener("click", addSection);
