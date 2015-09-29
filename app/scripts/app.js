// Global variables
var setInc = null;
var time = 1500;
var breakSeconds = 300;
var onBreak = false;

// Starts the timer interval and calls countdown function
var startTimer = function(){
  if(onBreak === true){ 
    setInc = setInterval(breakTime, 1000);
    breakTime();
  } else {
    setInc = setInterval(countdown, 1000);
    countdown();
}
  $('#btn').attr('value', 'Reset');
  $('#btn').attr('onclick','resetTimer()');
};

// Decrements time. Calls formatTime function and sends output to display  
var countdown = function(){
  time--;
  $('#displayNow').html(formatTime(time));
};

var countdown = function(){
  breakSeconds--;
  $('#displayNow').html(formatTime(breakSeconds));
};

// Resets the interval and display
function resetTimer(){
  clearInterval(setInc);
  time = 1500;
  onBreak = false;
  $('#displayNow').html(formatTime(time));
  $('#btn').attr('value', 'Start');
  $('#btn').attr('onclick','startTimer()');
}

// Converts total seconds into minutes and seconds in the proper display format -XX:XX
function formatTime(seconds){
    var min = Math.floor(seconds/60);
    var sec = Math.floor(seconds%60);
  if (min < 10){min = '0'+min;}
  if (sec < 10){sec = '0'+sec;}
  return '-'+min+':'+sec;
}

// Sets everything up when the document is ready
$(document).ready(function(){
  $('#displayNow').html(formatTime(time));
});