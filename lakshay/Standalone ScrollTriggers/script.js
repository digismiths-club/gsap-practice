gsap.registerPlugin("ScrollTrigger");

ScrollTrigger.create({
    trigger: ".content",
    markers: true,
    start: "top 7%",
    toggleClass:{
        targets: "nav",
        className: "nav-active"
    }
})