// Global variables
var interval = null;
var time = 25;
var onBreak = false;

// Starts the work timer interval and calls workTimer function
var startWork = function(){
  interval = setInterval(workTimer, 1000);
  workTimer();
  $('#btn').attr({'class': 'btn btn-md btn-danger btn-block', value: 'Reset', onclick:'resetTimer()'});
};

// Starts the break timer interval and calls breakTimer
var startBreak = function(){  
  interval = setInterval(breakTimer, 1000);
  breakTimer();
  $('#btn').attr({'class': 'btn btn-md btn-danger btn-block', value: 'Reset', onclick:'resetTimer()'});
};

// Decrements work time. Display the remaining time
var workTimer = function(){
    if (time === 0){
      clearInterval(interval);
      setBreak();
    }  
    time--;
    $('#displayNow').html(formatTime(time));
};

// Decrements break time. Display it... 
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
  time = 26;
  onBreak = false;
  $('#displayNow').html(formatTime(time));
  $('#btn').attr({'class': 'btn btn-md btn-primary btn-block', value: 'Work', onclick: 'startWork()'});
};

// Set up the break
var setBreak = function(){
  clearInterval(interval);
  time = 6;
  onBreak = true;
  $('#displayNow').html(formatTime(time));
  $('#btn').attr({'class': 'btn btn-md btn-success btn-block', value: 'Break', onclick: 'startBreak()'});
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