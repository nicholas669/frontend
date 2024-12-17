let timer = document.getElementById('num');
let count = timer
let txt = document.getElementById('txt');
function countdown(){
    if (timer.value == 0){
        clearInterval;
    }
    else{
        txt.innerHTML = timer.value
        timer.value -= 1
    }
}
function green(){
    txt.innerHTML = "JALAN";
    let light_1 = document.getElementById('red')
    light_1.style.backgroundColor = "";
    let light_2 = document.getElementById('yellow')
    light_2.style.backgroundColor = "";
    let light_3 = document.getElementById('green');
    light_3.style.backgroundColor = "green";
}
function yellow(){
    txt.innerHTML = "HATi-HAti";
    let light_1 = document.getElementById('red')
    light_1.style.backgroundColor = "";
    let light_2 = document.getElementById('yellow')
    light_2.style.backgroundColor = "yellow";
    setTimeout(green,2000);
}
function red(){
    let light_1 = document.getElementById('red')
    light_1.style.backgroundColor = "red";
    setTimeout(yellow, (timer.value*1000)+1000)
    setInterval(countdown,1000);
}