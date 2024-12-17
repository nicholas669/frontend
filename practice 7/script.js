let light_1 = document.getElementById('red')
light_1.style.backgroundColor = "red";
function yellow(){
    let light_1 = document.getElementById('red')
    light_1.style.backgroundColor = "";
    let light_2 = document.getElementById('yellow')
    light_2.style.backgroundColor = "yellow";
}
function green(){
    let light_1 = document.getElementById('red')
    light_1.style.backgroundColor = "";
    let light_2 = document.getElementById('yellow')
    light_2.style.backgroundColor = "";
    let light_3 = document.getElementById('green');
    light_3.style.backgroundColor = "green";
}

setTimeout(yellow,3000)
setTimeout(green,4000)