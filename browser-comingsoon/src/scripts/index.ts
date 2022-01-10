
// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/
import moment from "moment"

// \/ All of your javascript should go here \/
const startDate = moment("2021-12-24")

const days = document.querySelector<HTMLParagraphElement>("#days")
if(!days) throw new Error("Wrong ID used for days")

const hours = document.querySelector<HTMLParagraphElement>("#hours")
if(!hours) throw new Error("Wrong ID used for hours")

const minutes = document.querySelector<HTMLParagraphElement>("#minutes")
if(!minutes) throw new Error("Wrong ID used for minutes")

const seconds = document.querySelector<HTMLParagraphElement>("#seconds")
if(!seconds) throw new Error("Wrong ID used for seconds")

setInterval(function n (){
    const now = moment()
    const duration = moment.duration(startDate.diff(now))
    days.innerText = duration.days().toString()
    hours.innerText = duration.hours().toString()
    minutes.innerText = duration.minutes().toString() 
    seconds.innerText = duration.seconds().toString()
    return n
}(), 1000)
