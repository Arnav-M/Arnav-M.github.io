// script.js
function startCountdown(hours, minutes) {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    // Convert hours and minutes to total seconds
    let timer = (hours * 60 * 60) + (minutes * 60);

    function updateDisplay() {
        let remainingHours = Math.floor(timer / (60 * 60));
        let remainingMinutes = Math.floor((timer % (60 * 60)) / 60);
        let remainingSeconds = Math.floor(timer % 60);

        hoursElement.textContent = String(remainingHours).padStart(2, '0');
        minutesElement.textContent = String(remainingMinutes).padStart(2, '0');
        secondsElement.textContent = String(remainingSeconds).padStart(2, '0');

        if (timer > 0) {
            timer--;
        }
    }

    // Initial display
    updateDisplay();

    // Update the countdown every second
    setInterval(updateDisplay, 1000);
}

// Start countdown from 80 hours and 30 minutes
startCountdown(80, 30);