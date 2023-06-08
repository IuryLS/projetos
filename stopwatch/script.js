let hours = 00;
let minutes = 00;
let seconds = 00;
let mseconds = 00;
let appendMseconds = document.getElementsByClassName("ms")[0];
let appendSeconds = document.getElementsByClassName("s")[0];
let appendMinutes = document.getElementsByClassName("min")[0];
let appendHours = document.getElementsByClassName("h")[0];
let botao = document.getElementsByClassName("start")[0];
let interval;


function start() {
    interval = setInterval(startTime, 10);
    botao.disabled = true;
}

function stop() {
    botao.disabled = false;
    clearInterval(interval);
}

function reset() {
    appendMinutes.style.display = "none";
    appendHours.style.display = "none";
    botao.disabled = false;
    clearInterval(interval);
    hours = 00;
    minutes = 00;
    seconds = 00;
    mseconds = 00;
    appendMseconds.innerHTML = mseconds + "0";
    appendSeconds.innerHTML = seconds + "0:";
    appendMinutes.innerHTML = minutes + "0:";
    appendHours.innerHTML = hours + "0:";
}

function startTime(){
    mseconds++;

    if(mseconds < 10){
        appendMseconds.innerHTML = "0" + mseconds;}
    else{
        appendMseconds.innerHTML = mseconds;}

    if(mseconds == 99){
        mseconds = 00;
        seconds++;
        if(seconds < 10){
            appendSeconds.innerHTML = "0" + seconds + ":";}
        else{
            appendSeconds.innerHTML = seconds + ":";}
    }

    if(seconds == 60){
        seconds = 00;
        appendMinutes.style.display = "inline";
        minutes++;
        if(minutes < 10){
            appendMinutes.innerHTML = "0" + minutes + ":";}
        else{
            appendMinutes.innerHTML = minutes + ":";}
    }

    if(minutes == 60){
        minutes = 00;
        appendHours.style.display = "inline";
        hours++;
        if(hours < 10){
            appendHours.innerHTML = "0" + hours + ":";}
        else{
            appendHours.innerHTML = hours + ":";}
    }
}