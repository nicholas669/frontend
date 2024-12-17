
let a = 1
let interval;

function inf(){
    let names = document.getElementById('name').value;
    let num = document.getElementById('num').value;
    let nama = document.getElementById('nama');
    nama.innerHTML += names + " " + a + "<br>";
    if (a == num){
        clearInterval(interval);
    }
    a += 1;
}

function loop(){
    interval = setInterval(inf,2000);
}
