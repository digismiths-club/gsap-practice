import './style.css';
import gsap from 'gsap';

let timiLine=gsap.timeline();

timiLine.to("#box1",{
  x:650,
  rotate:360,
  duration:2,
  color: "purple",
  fontFamily:"Brush Script MT",
  borderRadius:"3rem",
  ease:"bounce"
},2);

timiLine.to("#box2",{
  x:650,
  rotate:360,
  duration:2,
  color: "purple",
  fontFamily:"Brush Script MT",
  borderRadius:"3rem"
},1);

timiLine.to("#box3",{
  x:650,
  rotate:360,
  duration:2,
  color: "purple",
  fontFamily:"Brush Script MT",
  borderRadius:"3rem"
},0.5);

timiLine.to("#box4",{
  x:650,
  rotate:360,
  duration:2,
  color: "purple",
  fontFamily:"Brush Script MT",
  borderRadius:"3rem",
  ease:"bounce"
},1.5);