window.onload = function(){
    slider = document.querySelector(".slider input");
    slider.oninput = function(){
        progressBar = document.querySelector(".slider progress");
        progressBar.value = slider.value;
        sliderValue = document.querySelector(".slider-value");
        sliderValue.innerHTML = slider.value;
    }
}



const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click",() => {
        const offset = button.dataset.carouselButton === "next" ? 1: -1 
        const slides = button 
       .closest("[data-carousel]")
        .querySelector("[data-slides]")

       const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
       if(newIndex < 0 ) newIndex  = slides.children.length - 1 
       if(newIndex >= slides.children.length)newIndex = 0

        slides.children[newIndex].dataset.active = true
       delete activeSlide.dataset.active
   }) })
