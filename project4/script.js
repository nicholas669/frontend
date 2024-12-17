let num = document.getElementById('number');
let txt = document.getElementById('txt');
function cntdown(a,b){
    
    if (num.value == 0){
        txt.innerHTML = 'Finish';
        clearInterval;
    }
    else{
 
    txt.innerHTML = num.value;
    num.value -= 1
    }
    
}
function finish(){
    setInterval(cntdown,1000);
}

// setTimeout(nama function, milisec, parameter optional)

// red 1-3 (yellow and green off)
// yellow 4 (red off, green off)
// green 5 (yellow off, red off)