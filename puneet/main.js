import './css/style.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


console.log(gsap.version);

gsap.from('h1', {
    scale: 0.1,
    duration: 2,
    repeat: -1,
    yoyo: true,
})
