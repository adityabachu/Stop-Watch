// Select HTML elements
let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

// Initialize timer variables
let msec = 00; // Milliseconds
let secs = 00; // Seconds
let mins = 00; // Minutes

// Initialize timer ID for setInterval
let timerId = null;

// Event listener for the start button
startBtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId); // Clear any existing timer
    }
    timerId = setInterval(startTimer, 10); // Start the timer with 10ms interval
});

// Event listener for the stop button
stopBtn.addEventListener('click', function(){
    clearInterval(timerId); // Stop the timer
});

// Event listener for the reset button
resetBtn.addEventListener('click', function(){
    clearInterval(timerId); // Stop the timer
    timerDisplay.innerHTML = `00 : 00 : 00`; // Reset the display
    msec = secs = mins = 00; // Reset all timer variables
});

// Function to update the timer display
function startTimer(){
    msec++; // Increment milliseconds
    if(msec == 100){
        msec = 0; // Reset milliseconds and increment seconds
        secs++;
        if(secs == 60){
            secs = 0; // Reset seconds and increment minutes
            mins++;
        }
    }

    // Format the time values to ensure double digits
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    // Update the timer display
    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}
