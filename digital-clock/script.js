digitalClock();
function digitalClock() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let clock = document.getElementById("clock");


    let h = String(hours).padStart(2, "0");
    let min = String(minutes).padStart(2, "0");
    let s = String(seconds).padStart(2, "0");

    clock.innerHTML = h + ":" + min + ":" + s;
}

setInterval(digitalClock, 1000);

// function one(){
//     if()
// }