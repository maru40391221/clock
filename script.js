const clockBody = document.querySelector(".clockBody");
const year = document.querySelector("#year");
const month = document.querySelector("#month");
const day = document.querySelector("#day");
const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");

const date = new Date();



startTime = setInterval(update, 10);

function update (){
document.getElementById("year").innerHTML = date.getFullYear();
document.getElementById("month").innerHTML = date.getMonth() + 1;
document.getElementById("day").innerHTML = date.getDate();
document.getElementById("hour").innerHTML = date.getHours();
document.getElementById("minute").innerHTML = date.getMinutes();
document.getElementById("second").innerHTML = date.getSeconds();

}

/*
document.getElementById("year").innerHTML = date.getFullYear();
document.getElementById("month").innerHTML = date.getMonth() + 1;
document.getElementById("day").innerHTML = date.getDate();
document.getElementById("hour").innerHTML = date.getHours();
document.getElementById("minute").innerHTML = date.getMinutes();
document.getElementById("second").innerHTML = date.getSeconds();
*/