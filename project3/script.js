function next(){
    localStorage.setItem("opening",document.getElementById('opening').value);
    localStorage.setItem("name",document.getElementById('name').value);
    localStorage.setItem("num",document.getElementById('num').value);
    localStorage.setItem("date",document.getElementById('date').value);
    localStorage.setItem("location",document.getElementById('location').value);
    // move
    window.location.href = "index2.html";
    // move

}