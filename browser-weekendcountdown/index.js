"use strict";
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Sunday"] = 0] = "Sunday";
    Weekdays[Weekdays["Monday"] = 1] = "Monday";
    Weekdays[Weekdays["Tuesday"] = 2] = "Tuesday";
    Weekdays[Weekdays["Wednesday"] = 3] = "Wednesday";
    Weekdays[Weekdays["Thursday"] = 4] = "Thursday";
    Weekdays[Weekdays["Friday"] = 5] = "Friday";
    Weekdays[Weekdays["Saturday"] = 6] = "Saturday";
})(Weekdays || (Weekdays = {}));
function WeekendCountdown() {
    const message = document.querySelector("#countdownMessage");
    const nameForm = document.querySelector("#nameForm");
    const nameInput = document.querySelector("#nameInput");
    if (!nameForm)
        return;
    if (!nameInput)
        return;
    if (!message)
        return;
    nameForm.onsubmit = (e) => {
        e.preventDefault();
        const today = new Date();
        message.innerText = `Hello ${nameInput.value}. Today is ${Weekdays[today.getDay()]}. Only ${getDaysUntilNextSaturday(today)} days till Weekend`;
    };
}
function getDaysUntilNextSaturday(currentDate) {
    return Weekdays["Saturday"] - currentDate.getDay();
}
WeekendCountdown();
