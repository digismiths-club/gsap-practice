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
});

timiLine.to("#box2",{
  x:650,
  rotate:360,
  duration:2,
  color: "purple",
  fontFamily:"Brush Script MT",
  borderRadius:"3rem"
});

timiLine.to("#box3",{
  x:650,
  rotate:360,
  duration:2,
  color: "purple",
  fontFamily:"Brush Script MT",
  borderRadius:"3rem"
});

timiLine.to("#box4",{
  x:650,
  rotate:360,
  duration:2,
  color: "purple",
  fontFamily:"Brush Script MT",
  borderRadius:"3rem",
  ease:"bounce"
});