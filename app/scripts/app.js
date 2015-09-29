// Global variables
var interval = null;
var time = 65;
var onBreak = false;

// Starts the work timer interval and calls workTimer function
var startWork = function(){
  interval = setInterval(workTimer, 1000);
  $('#btn').attr({'class': 'btn btn-md btn-danger btn-block', value: 'Reset', onclick:'resetTimer()'});
};

// Starts the break timer interval and calls breakTimer
var startBreak = function(){  
  interval = setInterval(breakTimer, 1000);
  $('#btn').attr({'class': 'btn btn-md btn-danger btn-block', value: 'Reset', onclick:'resetTimer()'});
};

// Decrements work time. Display the remaining time
var workTimer = function(){
  time === 0 ? setBreak() : time--;
  displayTime(time);
};

// Decrements break time. Display it... 
var breakTimer = function(){
  time === 0 ? resetTimer() : time--;
  displayTime(time);
};

// Resets the interval and display
var resetTimer = function(){
  clearInterval(interval);
  time = 65;
  onBreak = false;
  displayTime(time);
  $('#btn').attr({'class': 'btn btn-md btn-primary btn-block', value: 'Work', onclick: 'startWork()'});
};

// Set up the break
var setBreak = function(){
  clearInterval(interval);
  time = 10;
  onBreak = true;
  displayTime(time);
  $('#btn').attr({'class': 'btn btn-md btn-success btn-block', value: 'Break', onclick: 'startBreak()'});
};

// Converts total seconds into minutes and seconds in the proper display format -XX:XX
function formatTime(seconds){
    var min = Math.floor(seconds/60);
    var sec = Math.floor(seconds%60);
  min === 0 ? min = "" : min;
  sec < 10 ? sec = '0'+sec : sec;
  return min+':'+sec;
}

// Sends time to the DOM
function displayTime(time){
 $('#displayNow').html(formatTime(time));
}

// Sets everything up when the document is ready
$(document).ready(function(){
  displayTime(time);
  //$('#displayNow').html(formatTime(time));
});