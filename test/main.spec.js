const main = require('../src/main');

describe('updateSeconds', () => {
    const tests = [
        {seconds: 0, expectedDegrees: -90},
        {seconds: 15, expectedDegrees: 0},
        {seconds: 30, expectedDegrees: 90},
        {seconds: 45, expectedDegrees: 180}
    ];

    beforeEach(() => {
        document.body.innerHTML = '<div id="seconds"/>';
    });

    tests.forEach(test => {
        it(`should rotate ${test.expectedDegrees} degrees when is ${test.seconds} seconds`, function () {
            let now = new Date();
            now.setSeconds(test.seconds);
            let secondsHand = document.querySelector('#seconds');

            main.updateSeconds(now);

            expect(secondsHand.style.transform).toBe(`rotate(${test.expectedDegrees}deg)`)
        });
    });
});

describe('updateMinutes', () => {
    const tests = [
        {minutes: 0, expectedDegrees: -90},
        {minutes: 15, expectedDegrees: 0},
        {minutes: 30, expectedDegrees: 90},
        {minutes: 45, expectedDegrees: 180}
    ];

    beforeEach(() => {
        document.body.innerHTML = '<div id="minutes"/>';
    });

    tests.forEach(test => {
        it(`should rotate ${test.expectedDegrees} degrees when is ${test.minutes} minutes`, function () {
            let now = new Date();
            now.setMinutes(test.minutes);
            let minutesHand = document.querySelector('#minutes');

            main.updateMinutes(now);

            expect(minutesHand.style.transform).toBe(`rotate(${test.expectedDegrees}deg)`)
        });
    });
});

describe('updateHours', () => {
    const tests = [
        {hours: 0, expectedDegrees: -90},
        {hours: 3, expectedDegrees: 0},
        {hours: 6, expectedDegrees: 90},
        {hours: 9, expectedDegrees: 180}
    ];

    beforeEach(() => {
        document.body.innerHTML = '<div id="hours"/>';
    });
    tests.forEach(test => {
        it(`should rotate ${test.expectedDegrees} degrees when is ${test.hours} hours`, function () {
            let now = new Date();
            now.setHours(test.hours);
            let hoursHand = document.querySelector('#hours');

            main.updateHours(now);

            expect(hoursHand.style.transform).toBe(`rotate(${test.expectedDegrees}deg)`)
        });
    });
});