let slider1 = document.getElementById("slider1");
let slider2 = document.getElementById("slider2");
let left = document.getElementById("leftbutton");
let right = document.getElementById("rightbutton");
let offset=0;

let offsetChecker = () => {
    return offset <= 0 && offset >=-300;
}

right.onclick = () => {
    offset -= 100;
    if(offsetChecker)
}

