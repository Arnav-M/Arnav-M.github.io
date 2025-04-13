// script.js
function startCountdown(duration) {
    const countdownElement = document.getElementById('countdown');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    let timer = duration, hours, minutes, seconds;

    setInterval(() => {
        hours = Math.floor(timer / (60 * 60));
        minutes = Math.floor((timer % (60 * 60)) / 60);
        seconds = Math.floor(timer % 60);

        hoursElement.textContent = `${hours} Hours`;
        minutesElement.textContent = `${minutes} Minutes`;
        secondsElement.textContent = `${seconds} Seconds`;

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}

// Start the countdown from 72 hours (3 days * 24 hours)
startCountdown(72 * 60 * 60);