// gsap.registerPlugin(ScrollSmoother);


gsap.fromTo(
    ".hero-img",
    {
        y: -10
    },
    {
        y: 10,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease:"ease-out"
    }
)

// let smoother= ScrollSmoother.create({
//     wrapper:"body",
//     content:"body",
//     smooth: 2
// })