import gsap from "gsap";

export function headingAnimation() {
  gsap.from("h1", {
    xPercent: -100,
    duration: 2,
    delay: 0.5,
  });
}

export function hoverAnimations() {
  //gsap.utils.toArray is a function that takes a selector and returns an array of elements that match the selector
  //the forEach method is used to iterate over the array of elements and add event listeners to each element
  //the event listeners are used to animate the element when the mouse enters or leaves it

  const navigationLinks = gsap.utils.toArray(".navigation li");
  console.log(navigationLinks);
  navigationLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      gsap.to(link, { scale: 1.2, y:5, duration: 1 });
    });
    link.addEventListener("mouseleave", () => {
      gsap.to(link, { scale: 1, y:0, duration: 1 });
    });
  });
}

export default { headingAnimation, hoverAnimations };
