let display = document.getElementById('display');
let lesson = document.getElementById('lesson')
let arr = [];
function dis(){
    display.innerHTML = "";
    let a = 1;
    let each = lesson.value;
    arr.push(each)
    for (let i of arr){
        display.innerHTML += a + ". " + i + "<br>"
        a += 1;
    }
}