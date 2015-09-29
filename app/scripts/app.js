// Global variables
var interval = null;
var time = 65;
var onBreak = false;

// Starts the work timer interval and calls workTimer function
var startWork = function(){
  interval = setInterval(workTimer, 1000);
  buttonSwap('reset');
};

// Starts the break timer interval and calls breakTimer
var startBreak = function(){  
  interval = setInterval(breakTimer, 1000);
  buttonSwap('reset');
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
  buttonSwap('work');
};

// Set up the break
var setBreak = function(){
  clearInterval(interval);
  time = 10;
  onBreak = true;
  displayTime(time);
  buttonSwap('break');
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

// Swaps the button and click
function buttonSwap(type){
  switch (type) {
    case 'work':
      $('#btn').attr({'class': 'btn btn-md btn-primary btn-block', value: 'Work', onclick: 'startWork()'});
      break;
    case 'break':
      $('#btn').attr({'class': 'btn btn-md btn-success btn-block', value: 'Break', onclick: 'startBreak()'});
      break;
    case 'reset':
      $('#btn').attr({'class': 'btn btn-md btn-danger btn-block', value: 'Reset', onclick:'resetTimer()'});
      // Looking for a better way to do this...
      // $('#btn').addClass('btn-danger').removeClass('btn-primary','btn-success').attr({value: 'Reset', onclick:'resetTimer()'});
      break;
    default:
      console.log("I don't have a button for: "+type);
  }

}

// Sets everything up when the document is ready
$(document).ready(function(){
  displayTime(time);
});