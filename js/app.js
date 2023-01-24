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
const sections = document.querySelectorAll("section");
const main = document.querySelector("main");
const addSec = document.querySelector(".add");
const scrollUp = document.querySelector(".scrollToTop");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
let sectionNumber = sections.length + 1;
function addSection() {
  let newSection = document.createElement("section");
  newSection.setAttribute("id", "section" + sectionNumber);
  newSection.setAttribute("data-nav", "Section " + sectionNumber);
  newSection.setAttribute("class", "sections");
  newSection.innerHTML = `<div class='landing__container'><h2>Section ${sectionNumber}</h2><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem recusandae molestiae aliquid odio voluptas eaque fugiat reiciendis, pariatur, repellendus consequatur atque ut nisi adipisci eos? Ipsa culpa id ipsam asperiores.</p><p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinargravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam.Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentumconsectetur porttitor. Suspendisse imperdiet porttitor tortor, egetelementum tortor mollis non. </p></div>`;
  main.appendChild(newSection);

  let liNew = document.createElement("li");
  liNew.innerHTML = `<a class = 'menu__link' href='#section${sectionNumber}'>section${sectionNumber}</a>`;
  navBar.appendChild(liNew);
  newSection.scrollIntoView({ behavior: "smooth" });
  sectionNumber++;
  scroll();
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function buildNav() {
  sections.forEach((section) => {
    let li = document.createElement("li");
    li.innerHTML = `<a class = 'menu__link' href='#${section.id}'>${section.id}</a>`;

    navBar.appendChild(li);
  });
}
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event
//Scrolling smoothly to the section
function scroll() {
  let navLinks = document.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      let targetId = link.getAttribute("href");
      let target = document.querySelector(targetId);
      target.scrollIntoView({ behavior: "smooth" });
      // window.scrollTo({top:target.offsetTop, behavior:'smooth'});
    });
  });
}

// scroll to top of the page onClick
scrollUp.addEventListener("click", () => {
  document.documentElement.scrollIntoView({
    behavior: "smooth",
    block: "start",
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
scroll();
// Set sections as active
addSec.addEventListener("click", addSection);
