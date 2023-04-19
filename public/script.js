
setInterval(update, 100);

function update (){

console.log("update");

const date = new Date();

document.getElementById("year").innerHTML = date.getFullYear();
document.getElementById("month").innerHTML = date.getMonth() + 1;
document.getElementById("day").innerHTML = date.getDate();
document.getElementById("hour").innerHTML = date.getHours();
document.getElementById("minute").innerHTML = date.getMinutes();
document.getElementById("second").innerHTML = date.getSeconds();

}