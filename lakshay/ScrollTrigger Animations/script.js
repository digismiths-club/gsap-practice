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
gsap.to(".square",{
    x: 700,
    duration: 3,
    scrollTrigger: {
        trigger:'.square',
        start: "top 60%",
        end: "top 40%",
        //              onEnter     onLeave     onEnterBack     onLeaveBack
        toggleActions: "play        none        none            play",
        markers: true,
    }
})