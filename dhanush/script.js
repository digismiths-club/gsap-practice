function scaling(){
    animation.resume();
}

function pause(){
    
    animation.pause();
}


let animation = gsap.timeline();
    animation.to(
        ".mic",{
            rotate:20,
            rotate:-10,
            repeat:-1
        }
    )

    
    animation.pause();

gsap.to(
    ".googleIcon",{
        rotate:360,
        repeat:-1
    }
)




    