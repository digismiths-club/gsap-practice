// gsap.registerPlugin(ScrollSmoother);


// Hero animation

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



gsap.to(
    ".marquee",
    {
        xPercent: -30,
        repeat: -1,
        duration: 6,
        ease: "linear"
    }
).totalProgress(0.5)

gsap.set(
    ".marque",
    {
        xPercent: -50
    }
)


// socials animation

let socials= [document.getElementById("social1"),document.getElementById("social2"), document.getElementById("social3"), document.getElementById("social4")];


for(let i=0;i<4;i++){
    socials[i].addEventListener("mouseenter",(e)=>{
        gsap.to(
            e.target,
            {
                y: -15,
                ease:"ease-in",
                duration: 0.5
            }
        )
    })
    socials[i].addEventListener("mouseleave",(e)=>{
        gsap.to(
            e.target,
            {
                y: 0,
                ease:"elastic",
            }
        )
    })
}