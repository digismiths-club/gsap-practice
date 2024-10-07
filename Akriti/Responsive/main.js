import './style.css'
import gsap from 'gsap';

window.addEventListener('resize', () => {
  const screenWidth = window.innerWidth;

  console.log(screenWidth);

  if (screenWidth > 700) {
    gsap.to(".animate-box", {
      duration: 1,
      x: 100,
      rotation: 360,
      scale: 1.5,
      ease: "power2.inOut",
      backgroundColor: 'red',
    });
  }
  else {
    gsap.to(".animate-box", {
      duration: 1,
      x: 100,
      rotation: 360,
      scale: 1.5,
      ease: "power2.inOut",
      backgroundColor: 'blue',
    });
  }
  
  // else {
  //   gsap.to(animateBox, {
  //     scale: 1,
  //     backgroundColor: '#',
  //   }
  // );
});