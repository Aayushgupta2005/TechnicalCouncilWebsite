window.addEventListener("load", () => {
  const landingPage = document.querySelector(".landingPage");
  const content = landingPage.querySelector(".content");
  const navbar = document.querySelector(".navbar");
  landingPage.classList.add("visible");
  content.classList.add("visible"); // Add the 'visible' class after the page loads
  navbar.classList.add("visible");
});

document.querySelector(".hamburger > .icon").addEventListener("click", () => {
  const element = document.querySelector(".listFunctionalities");
  if (element.style.opacity == 1) {
    element.style.opacity = 0;
  } else {
    element.style.opacity = 1;
  }
});


const sections = document.querySelectorAll(".section");
function revealOnScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight / 1.25; // Adjust the trigger point
    if (sectionTop < triggerPoint) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
document.querySelector(".AUScroll").addEventListener('click',() =>{
  document.querySelector(".aboutUs").scrollIntoView({
    behavior: "smooth"
  });
});
document.querySelector(".UEScroll").addEventListener('click',() =>{
  document.querySelector(".upcomingEvents").scrollIntoView({
    behavior: "smooth"
  });
});
document.querySelector(".PEScroll").addEventListener('click',() =>{
  document.querySelector(".upcomingEvents2").scrollIntoView({
    behavior: "smooth"
  });
});
document.querySelector(".TMScroll").addEventListener('click',() =>{
  document.querySelector(".team").scrollIntoView({
    behavior: "smooth"
  });
});
document.querySelector(".CUScroll").addEventListener('click',() =>{
  document.querySelector(".ContactUs").scrollIntoView({
    behavior: "smooth"
  });
});