var seconds = 00;
var tens = 00;
var appendTens =document.getElementById('tens');
var appendseconds =document.getElementById('seconds');
var buttonStart =document.getElementById('start');
var buttonPause =document.getElementById('Pause');
var buttonReset =document.getElementById('Reset');

var interval;

function startTimer(){
    tens++;

    if(tens<9){
        appendTens.innerHTML = "0" + tens;
    }
     
    if(tens>9){
        appendTens.innerHTML = tens;
    }

    if(tens>99){
        seconds++;
        appendseconds.innerHTML ="0" +seconds;
        tens =0 ;
        appendTens.innerHTML = "0" +0;
    }

    if(seconds >9){
        appendseconds.innerHTML = seconds;
    }
     
}

buttonStart.onclick = function(){
    interval = setInterval(startTimer);
};

buttonPause.onclick =function(){
    clearInterval(interval);
};

buttonReset.onclick=function(){
    clearInterval(interval);
    tens="00";
    seconds="00";
    appendseconds.innerHTML= seconds;
    appendTens.innerHTML = tens;
}
