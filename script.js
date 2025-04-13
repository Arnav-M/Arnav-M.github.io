// script.js
function startCountdown(duration) {
    const countdownElement = document.getElementById('countdown');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    let timer = duration, days, hours, minutes, seconds;

    setInterval(() => {
        days = Math.floor(timer / (24 * 60 * 60));
        hours = Math.floor((timer % (24 * 60 * 60)) / (60 * 60));
        minutes = Math.floor((timer % (60 * 60)) / 60);
        seconds = Math.floor(timer % 60);

        daysElement.textContent = `${days} Days`;
        hoursElement.textContent = `${hours} Hours`;
        minutesElement.textContent = `${minutes} Minutes`;
        secondsElement.textContent = `${seconds} Seconds`;

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}

// Start the countdown from 3 days (3 * 24 * 60 * 60 seconds)
startCountdown(3 * 24 * 60 * 60);