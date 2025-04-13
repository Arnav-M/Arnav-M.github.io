// script.js
function startCountdown(duration) {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    let timer = duration, hours, minutes, seconds;

    function updateDisplay() {
        hours = Math.floor(timer / (60 * 60));
        minutes = Math.floor((timer % (60 * 60)) / 60);
        seconds = Math.floor(timer % 60);

        hoursElement.textContent = String(hours).padStart(2, '0');
        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');

        if (timer > 0) {
            timer--;
        }
    }

    // Initial display
    updateDisplay();

    // Update the countdown every second
    setInterval(updateDisplay, 1000);
}

// Start countdown from 72 hours (3 days)
startCountdown(80 * 60 * 60);