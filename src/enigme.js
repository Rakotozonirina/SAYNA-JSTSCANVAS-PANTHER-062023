
const descH1 = document.querySelector(".super-desc-h1");
descH1.addEventListener("mouseover", () => {
    gsap.to(".super-desc > .super-desc-h1", {
        yoyo: true,
        keyframes: [{scale: 1.1 },{scale:1 }]
    });
});
