var sound = new Audio ("https://www.freespecialeffects.co.uk/soundfx/animals/duck1.wav");
    sound.loop = true;

var h2 = document.getElementbyID('clock');

//display current time by the second

var currentTime = setInterval(function(){
    var date = new Date();
}

var hours = (12- date.getHours()));

var minutes = date.getminutes();

var seconds = date.getseconds();

var ampm = date.getHours()) < 12 ? 'AM' : 'PM';

if (hours < 0) {
    hours = hours * -1
} else if (hours == 0) {
    hours = 12;
} else {
    hours = hours; 
}

h2.textcontent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" + ampm;
}, 1000);

/*functions to get hour, min, secs, 
  am or pm, add zero, set alarm time and sound, clear alarm
*/

function addZero(time) {
    return(time < 10) ? "0" + time: time;
}

function hoursMenu(){
    var select = document.getElementbyID('alarmshrs');
    var hrs = 12;
}

