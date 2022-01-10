enum Weekdays {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function WeekendCountdown() {
  const message =
    document.querySelector<HTMLParagraphElement>("#countdownMessage");
  const nameForm = document.querySelector<HTMLFormElement>("#nameForm");
  const nameInput = document.querySelector<HTMLInputElement>("#nameInput");
  if (!nameForm) return;
  if (!nameInput) return;
  if (!message) return;

  nameForm.onsubmit = (e) => {
    e.preventDefault()
    const today = new Date();
    message.innerText = `Hello ${
      nameInput.value
    }. Today is ${Weekdays[today.getDay()]}. Only ${getDaysUntilNextSaturday(today)} days till Weekend`;
  };
}

function getDaysUntilNextSaturday(currentDate: Date): number {
  return Weekdays["Saturday"] - currentDate.getDay()
}

WeekendCountdown();
