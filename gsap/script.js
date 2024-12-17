function move(){
    gsap.fromTo(".box", {x: 300,y:100},
        {rotation: 0,
             x: 500,
             y : 0,
              duration: 1});
}