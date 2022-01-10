"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// The following line makes sure your styles are included in the project. Don't remove this.
require("../styles/main.scss");
// Import any additional modules you want to include below \/
const moment_1 = __importDefault(require("moment"));
// \/ All of your javascript should go here \/
const startDate = (0, moment_1.default)("2021-12-24");
const days = document.querySelector("#days");
if (!days)
    throw new Error("Wrong ID used for days");
const hours = document.querySelector("#hours");
if (!hours)
    throw new Error("Wrong ID used for hours");
const minutes = document.querySelector("#minutes");
if (!minutes)
    throw new Error("Wrong ID used for minutes");
const seconds = document.querySelector("#seconds");
if (!seconds)
    throw new Error("Wrong ID used for seconds");
setInterval(function n() {
    const now = (0, moment_1.default)();
    const duration = moment_1.default.duration(startDate.diff(now));
    days.innerText = duration.days().toString();
    hours.innerText = duration.hours().toString();
    minutes.innerText = duration.minutes().toString();
    seconds.innerText = duration.seconds().toString();
    return n;
}(), 1000);
