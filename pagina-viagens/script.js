let search = document.getElementById("search");

let flight = document.getElementById("content-one");

let hotel = document.getElementById("content-two");

let rental = document.getElementById("content-three");

function dualclick(){
    if(search.style.visibility === "visible"){
        search.style.visibility = "hidden"
    }
    else{
        search.style.visibility = "visible"
    }
}

function one(){
    rental.style.display = "none"
    hotel.style.display = "none"
    flight.style.display = "grid"
    document.getElementById("flight").style.backgroundColor = "#f44336"
    document.getElementById("hotel").style.backgroundColor = "black"
    document.getElementById("rental").style.backgroundColor = "black"
}


function two(){
    flight.style.display = "none"
    rental.style.display = "none"
    hotel.style.display = "grid"
    document.getElementById("hotel").style.backgroundColor = "#f44336"
    document.getElementById("rental").style.backgroundColor = "black"
    document.getElementById("flight").style.backgroundColor = "black"
}


function three(){
    flight.style.display = "none"
    hotel.style.display = "none"
    rental.style.display = "grid"
    document.getElementById("rental").style.backgroundColor = "#f44336"
    document.getElementById("flight").style.backgroundColor = "black"
    document.getElementById("hotel").style.backgroundColor = "black"
}




