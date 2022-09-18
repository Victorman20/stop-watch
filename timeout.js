var timer; 
 setInterval(getTime, 1000)
function getTime(){
    var mytime = new Date();
    // secondsSpace.innerHTML = date.getSeconds();
    // minuteSpace.innerHTML = date.getMinutes();
    // hourSpace.innerHTML = date.getHours();
    let h = mytime.getHours();
    let m = mytime.getMinutes();
    let s = mytime.getSeconds();
    let ms = mytime.getMilliseconds();
    let alltimme = `${h}: ${m}: ${s}: ${ms}`

    allTr.innerHTML = alltimme

}

// var D = new Date()

// setInterval(getSeconds, 1000)
// function getSeconds(){
//     var hour = new getSeconds 
//     secondsSpace.innerHTML = hour
// }



function callCount(){
    timer = setInterval(countDown, 1000)
}
function countDown(){
    let value = timerSpan.innerHTML;
    value -= 1;
    timerSpan.innerHTML = value;
}
function stopCount(){
    clearInterval(timer)
}

function callTimeout(){
    setTimeout(execute, 5000)
}
function execute(){
    alert("This is me coming out after 5sec")
}