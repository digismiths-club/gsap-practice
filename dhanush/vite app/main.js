import './css/style.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


console.log(gsap.version);

gsap.to('.mobilefront', {
    rotateY:90,
    delay:3,
    opacity:0.4,
    duration: 2,
})


gsap.from('.backmobile', {
    delay:3,
    rotateY:90,
    opacity:0,
    duration: 5,
})


gsap.from('h3', {
    x: "50vw",
    duration: 10,
    repeat: -1,
    yoyo: true,
})


let basket = gsap.timeline();
basket.to('.basket', {
    rotateY:360,
    repeat:-1
})


function rotateresume(){
    basket.resume();
}

function rotatepause(){
    basket.pause();
}