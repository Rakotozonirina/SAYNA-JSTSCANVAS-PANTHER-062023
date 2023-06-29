gsap.to(".super-hero > h1", {
    scrollTrigger: "hero",
    keyframes: [{x:50, opacity: 0, duration: 2},{x:0, opacity: 1, duration: 2}],
    yoyo: true,
    delay: 1
});
gsap.to(".super-hero > h2", {
    scrollTrigger: "hero",
    keyframes: [{x:50, opacity: 0, duration: 2},{x:0, opacity: 1, duration: 2}],
    yoyo: true,
    delay: 1
});
gsap.to(".pic-hero > img", {
    scrollTrigger: "hero",
    keyframes: [{opacity: 0, duration: 2},{opacity: 1, duration: 2}],
    yoyo: true,
    delay: 1
});
gsap.to(".hero > article > p", {
    scrollTrigger: "hero",
    keyframes: [{x:50, opacity: 0, duration: 2},{x:0, opacity: 1, duration: 2}],
    yoyo: true,
    delay: 2
});
gsap.to(".hero > article > .description", {
    scrollTrigger: "hero",
    keyframes: [{x:50, opacity: 0, duration: 2},{x:0, opacity: 1, duration: 2}],
    yoyo: true,
    delay: 2
});
gsap.to(".slide-hero", {
    scrollTrigger: "slide-hero",
    keyframes: [{opacity: 0, duration: 2}, {opacity: 1, duration: 2}],
    yoyo: true,
    delay: 4
});
gsap.from(".descriptions > .desc-hero > .prince", {
    scrollTrigger: ".descriptions",
    keyframes: [{x:-50, duration: 2, opacity: 0},{x:0, duration: 2, opacity: 1}],
    yoyo: true,
    delay: 6
});
gsap.from(".descriptions > .desc-hero > .prince-panther > div", {
    scrollTrigger: ".descriptions",
    keyframes: [{x:-50, duration: 2, opacity: 0},{x:0, duration: 2, opacity: 1}],
    yoyo: true,
    delay: 6
});
gsap.to(".descriptions > .more-desc", {
    scrollTrigger: ".descriptions",
    keyframes: [{duration: 2, opacity: 0}, {duration: 2, opacity: 1}],
    yoyo: true,
    delay: 6
});
gsap.to(".back-contact > form", {
    scrollTrigger: ".back-contact",
    keyframes: [{duration: 2, opacity: 0}, {duration: 2, opacity: 1}],
    yoyo: true,
    delay: 9
});
/*Slide*/
/*
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlides(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let result;
    let slides = document.getElementById("mySlides");
    if(n > slides.length){ slideIndex = 1 }
    if(n < 1){ slideIndex = slideIndex.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    result = slideIndex - 1;
    slides[result].style.display = "block"; 
}*/

function firstShow(){
    const firstSlide = document.querySelector(".wakanda-hero");
    const firstBtn = document.querySelector(".btn-wakanda-hero");
    const secondSlide = document.querySelector(".wakanda-hero-two");

    firstSlide.style.display = "none";
    firstBtn.style.display = "none";
    secondSlide.style.display = "flex";
    gsap.to(secondSlide, {
        scrollTrigger: ".slide-hero",
        keyframes: [{duration: 1, opacity: 0}, {duration: 1, opacity: 1}],
        yoyo: true
    });
}


