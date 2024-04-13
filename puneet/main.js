import "./css/style.css";
import animations from "./aminations/gsapAnimations";

function init() {
  animations.hoverAnimations();
  animations.headingAnimation();
}

window.addEventListener("load", () => {
  init();
});
