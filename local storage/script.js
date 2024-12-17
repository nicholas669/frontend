function muncul(){
    let name = document.getElementById('name');
    localStorage.setItem("nama",name.value);
    window.location.href = "res.html";

}