const section = document.querySelector(".horizontal-section");
const content = document.querySelector(".horizontal-content");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  
  if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
    const scrollInside = scrollPosition - sectionTop;
    content.style.transform = `translateX(-${scrollInside}px)`;
  }
});





const carrossel = document.querySelector(".carroselInterno");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

next.addEventListener("click", ()=>{
  carrossel.scrollLeft += 380;
});

prev.addEventListener("click", ()=>{
  carrossel.scrollLeft -= 380;
});



const carrossel2 = document.querySelector(".carroselInterno3");
const next2 = document.querySelector(".next2");
const prev2 = document.querySelector(".prev2");

next2.addEventListener("click", ()=>{
  carrossel2.scrollLeft += 380;
});

prev2.addEventListener("click", ()=>{
  carrossel2.scrollLeft -= 380;
});


