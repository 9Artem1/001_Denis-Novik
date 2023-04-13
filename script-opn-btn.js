window.onload = scripts;

function opnMenu(){
    let button = document.getElementById("burgButton")
    button.onclick = openButtonClick;
}
function openButtonClick() {
    document.getElementsByClassName('container-min')[0].style.display = "flex";
}
function clsMenu(){
    let button = document.getElementById("closeBurgButton")
    button.onclick = closeButtonClick;
}
function closeButtonClick() {
    document.getElementsByClassName('container-min')[0].style.display = "none";
}




function scripts() {
    opnMenu();
    clsMenu();
}