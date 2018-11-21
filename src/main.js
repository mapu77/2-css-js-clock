const secondHand = document.querySelector('#second');
const minuteHand = document.querySelector('#minute');
const hourHand = document.querySelector('#hour');

const CLOCK_DEGREES = 360;
const HAND_DEFAULT_ROTATION = -90;
const SECONDS_IN_CLOCK = 60;
const MINUTES_IN_CLOCK = 60;
const HOURS_IN_CLOCK = 12;

function updateSeconds(now) {
    let secondsDegrees = ((now.getSeconds() / SECONDS_IN_CLOCK) * CLOCK_DEGREES) + HAND_DEFAULT_ROTATION;
    rotateHand(secondHand, secondsDegrees);
}

function updateMinutes(now) {
    let minutesDegrees = ((now.getMinutes() / MINUTES_IN_CLOCK) * CLOCK_DEGREES + HAND_DEFAULT_ROTATION);
    rotateHand(minuteHand, minutesDegrees);
}

function updateHours(now) {
    let hoursDegrees = ((now.getHours() / HOURS_IN_CLOCK) * CLOCK_DEGREES) + HAND_DEFAULT_ROTATION;
    rotateHand(hourHand, hoursDegrees);
}

function rotateHand(div, degrees) {
    div.style.transform = `rotate(${degrees}deg)`;
}

function updateHands() {
    let now = new Date();
    updateSeconds(now);
    updateMinutes(now);
    updateHours(now);
}

setInterval(updateHands, 1000);