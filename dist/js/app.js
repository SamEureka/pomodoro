// Global variables
var setInc = null;
var time = 1500;

// Starts the timer interval and calls countdown function
var startTimer = function(){
  setInc = setInterval(countdown, 1000);
  countdown();
  $('#btn').attr('value', 'Reset');
  $('#btn').attr('onclick','resetTimer()');
};

// Decrements time. Calls formatTime function and sends output to display  
var countdown = function(){  
  time--;
  $('#displayNow').html(formatTime(time));
};

// Resets the interval and display
function resetTimer(){
  clearInterval(setInc);
  time = 1500;
  $('#displayNow').html(formatTime(time));
  $('#btn').attr('value', 'Start');
  $('#btn').attr('onclick','startTimer()');
}

// Converts total seconds into minutes and seconds in the proper display format -XX:XX
function formatTime(time){
    var min = Math.floor(time/60);
    var sec = Math.floor(time%60);
  if (min < 10){min = '0'+min;}
  if (sec < 10){sec = '0'+sec;}
  return '-'+min+':'+sec;
}

// Sets everything up when the document is ready
$(document).ready(function(){
  $('#displayNow').html(formatTime(time));
});