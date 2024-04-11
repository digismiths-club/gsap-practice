import './css/style.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


console.log(gsap.version);

gsap.from('h1', {
    yPercent: 100,
    duration: 2,
    repeat: -1,
    yoyo: true,
})
