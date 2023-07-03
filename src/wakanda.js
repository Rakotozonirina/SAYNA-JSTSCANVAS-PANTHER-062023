gsap.to(".hero > article > .super-hero", {
    scrollTrigger: ".hero",
    keyframes: [{duration: 2, opacity: 0}, {duration: 2, opacity: 1}],
    yoyo: true,
    delay: 2
});
gsap.to(".hero > article > p", {
    scrollTrigger: ".hero",
    keyframes: [{duration: 2, opacity: 0}, {duration: 2, opacity: 1}],
    yoyo: true,
    delay: 2
});
gsap.to(".art-one > .one", {
    scrollTrigger: ".art-one",
    keyframes: [{duration: 2, opacity: 0}, {duration: 2, opacity: 1}],
    yoyo: true,
    delay: 4
});
gsap.to(".art-one > .two", {
    scrollTrigger: ".art-one",
    keyframes: [{duration: 2, opacity: 0}, {duration: 2, opacity: 1}],
    yoyo: true,
    delay: 4
});
gsap.to(".art-two > .one", {
    scrollTrigger: ".art-one",
    keyframes: [{duration: 2, opacity: 0}, {duration: 2, opacity: 1}],
    yoyo: true,
    delay: 6
});
gsap.to(".art-two > .two", {
    scrollTrigger: ".art-one",
    keyframes: [{duration: 2, opacity: 0}, {duration: 2, opacity: 1}],
    yoyo: true,
    delay: 6
})