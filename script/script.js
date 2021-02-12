let p = document.querySelector("p");
let modal = document.querySelector(".modal-container");
let arrow = document.querySelector(".arrow-down");

let display = true;
function active() {
    if (display) {
        modal.style.display = "flex";
        arrow.style.display = "block";
        display = false;
    } else {
        modal.style.display = "none";
        arrow.style.display = "none";
        display = true;
    }
}