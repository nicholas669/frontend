let nama = document.getElementById('name');
nama.innerHTML = localStorage.getItem('name') + "'s" + " birthday";




// date 
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date(localStorage.getItem('date'));
let month = months[d.getMonth()];
let date = d.getDay();
document.getElementById("date").innerHTML = date + " " + month; 
// date 
document.getElementById('location').innerHTML = localStorage.getItem('location');