// Global variables
var interval = null;
var time = 20;
var onBreak = false;

// Starts the work timer interval and calls workTimer function
var startWork = function(){
  interval = setInterval(workTimer, 1000);
  workTimer();
  $('#btn').attr({value: 'Reset', onclick:'resetTimer()'});
};

// Starts the break timer interval and calls breakTimer
var startBreak = function(){  
  interval = setInterval(breakTimer, 1000);
  breakTimer();
  $('#btn').attr({value: 'Reset', onclick:'resetTimer()'});
};

var workTimer = function(){
    if (time === 0){
      clearInterval(interval);
      setBreak();
    }  
    time--;
    $('#displayNow').html(formatTime(time));
};

// Decrements break time. Displays it... I think there is a better way to do this.
var breakTimer = function(){
  if (time === 0){
    clearInterval(interval);
    resetTimer();
  }
  time--;
  $('#displayNow').html(formatTime(time));
};

// Resets the interval and display
var resetTimer = function(){
  clearInterval(interval);
  time = 21;
  onBreak = false;
  $('#displayNow').html(formatTime(time));
  $('#btn').attr({value: 'Work', onclick: 'startWork()'});
};

// Set up the break
var setBreak = function(){
  clearInterval(interval);
  time = 6;
  onBreak = true;
  $('#displayNow').html(formatTime(time));
  $('#btn').attr({value: 'Break', onclick: 'startBreak()'});
};

// Converts total seconds into minutes and seconds in the proper display format -XX:XX
function formatTime(seconds){
    var min = Math.floor(seconds/60);
    var sec = Math.floor(seconds%60);
  // if (min < 10){min = '0'+min;}
  if (sec < 10){sec = '0'+sec;}
  return min+':'+sec;
}

// Sets everything up when the document is ready
$(document).ready(function(){
  $('#displayNow').html(formatTime(time));
});