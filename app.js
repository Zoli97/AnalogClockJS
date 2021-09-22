//get the current time

var date = new Date();
var hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours,
    min = date.getMinutes(),
    sec = date.getSeconds(),
    milisecond = date.getMilliseconds();

var hourAngle = hour * 30 + (min * 6) / 12,
    minAngle = min * 6 + (sec * 6) / 60,
    secAngle = sec * 6 + (milisecond * 0.36) / 1000;
console.log(date);

//2 * 30 + (10 *6) /12 = 65
//10 * 6 + (10*6) /60= 61
//20 * 6 + (10 * 0.36) /1000 = 1200
//set initial angle of the hand container
function setAngle(wrapper, angle) {
    document.querySelector("." + wrapper).style.transform =
        "rotate(" + angle + "deg)";
}

setAngle("hr-container", hourAngle);
setAngle("min-container", minAngle);
setAngle("sec-container", secAngle);