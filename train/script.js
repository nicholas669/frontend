let light_duration = 5;
let ind = 0;
let interval;
let audio = document.getElementById('audio');
let gate = document.getElementById('gate');
let a = 0;
function close(){
  gate.style.transform = "rotate(0deg)";
  gate.style.transformOrigin = "bottom left";
}
function back(){
  gsap.fromTo(".car", 
    {
      y:'+200',
      scale:1.5,
      
    },
    {
      scale:1,
      y: '0%',
      duration: 3,
    }
  );
}
function car(){
  gsap.fromTo(".car", 
    {
      scale:1.5,
      
    },
    {
      scale:0.5,
      y: '-200%',
      duration: 5
    }
  );
  setTimeout(close,2000);
  setTimeout(back,3000);
}
function light_switch(){
    let light1 = document.getElementById('light1')
    let light2 = document.getElementById('light2')
    if (ind == light_duration){
      light1.style.backgroundColor = '';
        light2.style.backgroundColor = '';
        clearInterval(interval);
        gate.style.transform = "rotate(-90deg)";
        gate.style.transformOrigin = "bottom left";
        setTimeout(car,2000);
        ind = 0;
        audio.pause();
        return;
    }
    if (ind % 2 == 0){
        light1.style.backgroundColor = 'red'
        light2.style.backgroundColor = ''
    }
    else{
        light1.style.backgroundColor = ''
        light2.style.backgroundColor = 'red'
    }
    ind += 1;
    
}
function start_train(){
    audio.play();
    gsap.fromTo(".train", 
        {
          x: '-100%'
        },
        {
          x: '+200%',
          duration: 5,
          ease: "power1.inOut"
        }
      );
      interval = setInterval(light_switch,1000);
}
