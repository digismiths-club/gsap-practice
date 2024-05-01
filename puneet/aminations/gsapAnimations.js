import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
// gsap.set(".navigation li", { autoAlpha: 0 });

export function headingAnimation() {
  gsap.from("h1", {
    xPercent: -100,
    duration: 2,
    delay: 0.5,
  });

  ScrollTrigger.create(
    // The purpose of this code is to add a class to the header element when the user scrolls past the 100-pixel mark. This class change could be used to apply different styles to the header, such as changing the logo or adjusting the header's appearance to indicate that the user has scrolled down the page.
    {
      start: 50,
      end: "bottom +=100",
      toggleClass: { targets: "header", className: "scroll-logo" },
      onEnter: ({ direction }) => navLinksAnimation(direction),
      onLeaveBack: ({ direction }) => navLinksAnimation(direction),
      markers: true,
    }
  );
}

function navLinksAnimation(direction) {
  console.log(direction);
  const scrollingDown = direction === 1;
  gsap.to(".navigation li", {
    yPercent: () => (scrollingDown ? -100 : 0 ),
    duration: 0.5,
    stagger: 0.2,
    autoAlpha: () => (scrollingDown ? 0 : 1),
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
      gsap.to(link, { scale: 1.2, y: 5, duration: 0.2 });
    });
    link.addEventListener("mouseleave", () => {
      gsap.to(link, { scale: 1, y: 0, duration: 0.2 });
    });
  });
}

export default { headingAnimation, hoverAnimations };
