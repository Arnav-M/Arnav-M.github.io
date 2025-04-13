// script.js
function startCountdown(hours, minutes, forceRestart = false) {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    // Check if there's a saved countdown in localStorage
    let savedTimer = localStorage.getItem('countdownTimer');
    let savedStartTime = localStorage.getItem('countdownStartTime');
    
    let timer;

    // If forceRestart is true or no saved timer exists, start a new countdown
    if (forceRestart || !savedTimer || !savedStartTime) {
        timer = (hours * 60 * 60) + (minutes * 60);
        localStorage.setItem('countdownTimer', timer);
        localStorage.setItem('countdownStartTime', Date.now());
    } else {
        // Calculate remaining time based on saved state
        const elapsedSeconds = Math.floor((Date.now() - savedStartTime) / 1000);
        timer = Math.max(0, savedTimer - elapsedSeconds);
    }

    function updateDisplay() {
        let remainingHours = Math.floor(timer / (60 * 60));
        let remainingMinutes = Math.floor((timer % (60 * 60)) / 60);
        let remainingSeconds = Math.floor(timer % 60);

        hoursElement.textContent = String(remainingHours).padStart(2, '0');
        minutesElement.textContent = String(remainingMinutes).padStart(2, '0');
        secondsElement.textContent = String(remainingSeconds).padStart(2, '0');

        if (timer > 0) {
            timer--;
            localStorage.setItem('countdownTimer', timer);
        }
    }

    // Initial display
    updateDisplay();

    // Update the countdown every second
    setInterval(updateDisplay, 1000);
}

// Function to reset the countdown
function resetCountdown() {
    localStorage.removeItem('countdownTimer');
    localStorage.removeItem('countdownStartTime');
    startCountdown(80, 30, true); // Start a new countdown from 80:30:00
}

// Start the countdown, checking for existing state
startCountdown(80, 30);

// You can call resetCountdown() when you want to restart the timer
// For example, you could add a button:
/*
<button onclick="resetCountdown()">Reset Countdown</button>
*/