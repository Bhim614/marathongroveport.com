// SCROLL ANIMATION
const elements = document.querySelectorAll(".card, section");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if(position < screenHeight - 100){
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});

// INITIAL STYLE
elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.8s ease";
});
