import { gsap } from "gsap";
import "./style.css";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


window.addEventListener("load", () => {
    let boxAnim = gsap.to("#box1", {
        x:100,
        y:100,
        repeat:100,
    })
    boxAnim.pause();
    
});
