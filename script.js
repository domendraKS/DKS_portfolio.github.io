/*--==Header toggle==--*/
let menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", function (e) {
  document.querySelector("body").classList.toggle("mobile-nav-active");
  this.classList.toggle("fa-xmark");
});

/*--==Typing Effect==--*/
let typed = new Typed(".auto-input", {
  strings: [
    "have 6 Months of Experience in Prixso Software",
    "am MERN Stack Developer",
    "know basics of MySQL and MongoDB",
    "am Full Stack Developer",
  ],
  typedSpeed: 200,
  backSpeed: 100,
  backDelay: 4000,
  loop: true,
});

/*--==Active Link State on scroll==--*/
//Get All links
let navLinks = document.querySelectorAll("nav ul li a");
//Get All Sections
let sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY + 20;
  sections.forEach((section) => {
    if (
      scrollPos > section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (
          section.getAttribute("id") === link.getAttribute("href").substring(1)
        ) {
          link.classList.add("active");
        }
      });
    }
  });
});
