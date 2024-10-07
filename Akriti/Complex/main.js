import './style.css'
import gsap from 'gsap';

document.addEventListener("DOMContentLoaded", () => {

  gsap.to("#box1", {
    duration: 2,
    x: 700, 
    scale: 1.5, 
    opacity: 1,
    ease: "power2.out"
  });

  gsap.to("#box2", {
    duration: 2.5,
    x: 700,
    rotation: 360,
    opacity: 1,
    ease: "bounce"
  });

  gsap.to("#box3", {
    duration: 2,
    y: -150,
    opacity: 1,
    ease: "power2.in"
  });

  gsap.to("#box4", {
    duration: 2,
    scale: 1.8,
    opacity: 1,
    ease: "elastic.out(1, 0.3)"
  });

  gsap.to("#box5", {
    duration: 3,
    x: 700,
    opacity: 1,
    ease: "linear"
  });
});
