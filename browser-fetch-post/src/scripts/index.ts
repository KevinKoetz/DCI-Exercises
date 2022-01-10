// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";

// \/ All of your javascript should go here \/

const form = document.getElementById("submit-form");
if (!(form instanceof HTMLFormElement)) throw new Error("Unable to find form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const inputs = form.querySelectorAll("input");
  const body: { [key: string]: string } = {};
  inputs.forEach((input) => {
    if (input.type === "checkbox") body[input.id] = String(input.checked);
    else body[input.id] = input.value;
  });

  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const data = await response.json()
  console.log(data);
  alert(`Thank you for submitting your details. User ID: ${data.id}`)
  
});
