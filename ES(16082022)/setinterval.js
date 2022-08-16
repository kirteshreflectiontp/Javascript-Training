var minutes = 0;
var seconds = 0 ;
var hours = 0;
var watch = time();
function stop(){
    clearInterval(watch);
}
function replay(){
    minutes = 0; 
    seconds = 0 ;
    hours = 0;
    watch = time();
}
function start(){
    watch = time();
}
function time(){
    return setInterval(function(){
        seconds++;
        if(seconds == 61){
            seconds = 0;
            minutes++;
        }
        if(minutes == 61){
            minutes = 0;
            hours++;
        }
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
    },1000)
}