// script.js
function startCountdown(duration) {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    let timer = duration, hours, minutes, seconds;

    setInterval(() => {
        hours = Math.floor(timer / (60 * 60));
        minutes = Math.floor((timer % (60 * 60)) / 60);
        seconds = Math.floor(timer % 60);

        hoursElement.textContent = String(hours).padStart(2, '0');
        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}

// Start the countdown from 72 hours (3 days * 24 hours)
startCountdown(72 * 60 * 60);