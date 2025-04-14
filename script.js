// script.js
let countdownInterval;

function startCountdown(targetDate) {
    const timerElement = document.getElementById('timer');

    function updateDisplay() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            timerElement.textContent = "00:00:00";
            return;
        }

        // Calculate days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Convert days to hours
        const totalHours = (days * 24) + hours;

        // Format the display
        timerElement.textContent = 
            String(totalHours).padStart(2, '0') + ':' +
            String(minutes).padStart(2, '0') + ':' +
            String(seconds).padStart(2, '0');
    }

    // Clear any existing interval
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    // Initial display
    updateDisplay();

    // Update the countdown every second
    countdownInterval = setInterval(updateDisplay, 1000);
}

// Set the target date (April 17, 2025, 7:30 PM IST)
const targetDate = new Date('2025-04-17T19:30:00+05:30').getTime();

// Start the countdown
startCountdown(targetDate);

// Reset function (if needed)
function resetCountdown() {
    startCountdown(targetDate);
}