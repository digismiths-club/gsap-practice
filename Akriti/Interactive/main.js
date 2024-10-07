// import './style.css'
// import gsap from 'gsap';

// const button = document.querySelector(".animate-btn");

// let rotationAngle=0

// // button.addEventListener("mouseover",
// //    () => {
// //   gsap.to(button, {
// //     duration: 0.5,  
// //     scale: 1.1, 
// //     ease: "power2.out",
// //   });
// //   gsap.to("img", {
// //     duration: 0.5,  
// //     scale: 1.1, 
// //     ease: "power2.out",
// //     opacity:"0.5",
// //   });
// // });

// function handleMouseOver(){
//    gsap.to(button, {
//      duration: 0.5,  
//      scale: 1.1, 
//      ease: "power2.out",
//    });
//    gsap.to("img", {
//      duration: 0.5,  
//      scale: 1.1, 
//      ease: "power2.out",
//      opacity:"0.5",
//    });
// }

// button.addEventListener("mouseout", () => {
//   gsap.to(button, {
//     duration: 0.5,
//     scale: 1,      
//     ease: "power2.out"
//   });
//   gsap.to("img", {
//     duration: 0.5,
//     scale: 1,
//     ease: "power2.out",
//     opacity:"0"
//   });
// });

// button.addEventListener("click", () => {
//   rotationAngle+=360;

//   gsap.to(button, {
//     duration: 0.5,
//     scale: 1.2, 
//     rotateY: rotationAngle,
//   });
//   gsap.to("img", {
//     duration: 0.5,
//     scale: 1.2, 
//     rotateY: rotationAngle,
//     opacity:"1" 
//   });
// });


window.addEventListener("load", () => {
  // const button = document.querySelector(".animate-btn");

let rotationAngle=0

// button.addEventListener("mouseover",
//    () => {
//   gsap.to(".animate-btn", {
//     duration: 0.5,  
//     scale: 1.1, 
//     ease: "power2.out",
//   });
//   gsap.to("img", {
//     duration: 0.5,  
//     scale: 1.1, 
//     ease: "power2.out",
//     opacity:"0.5",
//   });
// });

let handleMouseOver=()=>{
  // console.log("here");
gsap.to(".animate-btn", {
 duration: 0.5,  
 scale: 1.1, 
 ease: "power2.out",
});
gsap.to("img", {
 duration: 0.5,  
 scale: 1.1, 
 ease: "power2.out",
 opacity:"0.5",
});
}

button.addEventListener("mouseout", () => {
  gsap.to(".animate-btn", {
    duration: 0.5,
    scale: 1,      
    ease: "power2.out"
  });
  gsap.to("img", {
    duration: 0.5,
    scale: 1,
    ease: "power2.out",
    opacity:"0"
  });
});
});