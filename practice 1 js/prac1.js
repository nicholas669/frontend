
// function rubah() {
//     let a = document.getElementById('x').value;
//     let b = document.getElementById('nama');
//     b.innerHTML = a;

// }
function add(){
    let a = parseInt(document.getElementById('first_num').value);
    let b = parseInt(document.getElementById('sec_num').value);
    let c = document.getElementById('nama');
    c.innerHTML = a+b;
}
function minus(){
    let a = document.getElementById('first_num').value;
    let b = document.getElementById('sec_num').value;
    let c = document.getElementById('nama');
    c.innerHTML = a-b;
}
function multiply(){
    let a = document.getElementById('first_num').value;
    let b = document.getElementById('sec_num').value;
    let c = document.getElementById('nama');
    c.innerHTML = a*b;
}
function divide(){
    let a = document.getElementById('first_num').value;
    let b = document.getElementById('sec_num').value;
    let c = document.getElementById('nama');
    if(b == 0){
        c.innerHTML = "Infinity";
        return;
    }
    c.innerHTML = a/b;
}
function mod(){
    let a = document.getElementById('first_num').value;
    let b = document.getElementById('sec_num').value;
    let c = document.getElementById('nama');
    c.innerHTML = a%b;
}




function math(operator){
    let a = parseInt(document.getElementById('first_num').value);
    let b = parseInt(document.getElementById('sec_num').value);
    let c = document.getElementById('nama');
    let d = eval(a + operator + b);
    c.innerHTML = d;
}

function o(){
    let operator = document.getElementById('opera').value;
    math(operator);
}