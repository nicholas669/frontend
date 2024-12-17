let box = document.querySelector('.box');

function jalan(){
    box.style.transition = '2s';
    box.style.transform = "translate(400px,0px) rotate(180deg) ";
    box.style.backgroundColor = 'red';
}
function kembali(){
    box.style.transition = '2s';
    box.style.transform = "translate(0px,0px) rotate(360deg)";
    box.style.backgroundColor = 'blue';
}