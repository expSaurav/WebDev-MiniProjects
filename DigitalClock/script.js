

let hrs = document.getElementById('hrs');
let mins = document.getElementById('mins');
let secs = document.getElementById('secs');



setInterval(()=>{
    let currentTime = new Date();

    hrs.innerText = (currentTime.getHours()<10?"0":"")+ currentTime.getHours();
    mins.innerText = (currentTime.getMinutes()<10?"0":"")+ currentTime.getMinutes();
    secs.innerText = (currentTime.getSeconds()<10?"0":"")+ currentTime.getSeconds();


},1000)


