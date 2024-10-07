import './style.css';
import { gsap } from "gsap";

let a=gsap.to(".animation-div",{
  paused:true,
  duration:2,
  ease:"circ.out",
  rotate:360,
  opacity:"1",
  x:550,
});

document.getElementById("triggerStart").onclick=()=>a.play();