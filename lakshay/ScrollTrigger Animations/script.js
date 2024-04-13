gsap.registerPlugin("ScrollTrigger")

// basic scrollTrigger
// gsap.to(".square",{
//     x: 700,
//     duration: 3,
//     scrollTrigger: ".square"
// })


// start and end properties
// gsap.to(".square",{
//     x: 700,
//     duration: 3,
//     scrollTrigger: {
//         trigger:'.square',
//         start: "top 70%",
//         // end: "center 20%",
//         end: `${document.querySelector(".square").offsetHeight} 50%`,
//         markers: true,
//         toggleClass: "red"
//     }
// })

// toggle actions
// gsap.to(".square",{
//     x: 700,
//     duration: 3,
//     scrollTrigger: {
//         trigger:'.square',
//         start: "top 80%",
//         scrub: 4,
//         end: "top 30%",
//         //              onEnter     onLeave     onEnterBack     onLeaveBack
//         // play pause reset none reverse complete restart resume
//         toggleActions: "restart none none none",

//         toggleClass:"red",
//         markers: true,
//     }
// })

// scrub
// gsap.to(".square",{
//     x: 700,
//     duration: 3,
//     scrollTrigger: {
//         trigger:'.square2',
//         start: "top 80%",
//         scrub: 4,
//         end: "top 30%",
//         markers: true,
//     }
// })

// pin
// gsap.to(".square",{
//     // x: 700,
//     duration: 3,
//     scrollTrigger: {
//         trigger:'.square2',
//         start: "top 80%",
//         scrub: 4,
//         end: "top 30%",
//         pin:".square",
//         // pinSpacing: true,
//         markers: true,
//     }
// })

// Scroll-Trigger with timeline

let tl= gsap.timeline({
    scrollTrigger: {
        trigger: ".box",
        start: "top 80%",
        end: "top 30%",
        markers: true,
        scrub: 2
    }
})

tl.to(".box",{x:200,duration: 2})
  .to(".box",{y:300,duration: 4})
  .to(".box",{x:0,duration: 2})