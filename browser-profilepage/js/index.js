"use strict";
const template = document.getElementById("profileCardTemplate");
if (!template)
    throw new Error("Can not find ProfileCardTemplate on page.");
if (!(template instanceof HTMLTemplateElement))
    throw new Error("ProfileCardTemplate is not a Template Element");
const profileCard = document.createElement("article");
profileCard.append(template.content.cloneNode(true));
profileCard.addEventListener("click", (e) => {
    if (e.target instanceof HTMLInputElement) {
        e.currentTarget instanceof HTMLElement && e.currentTarget.remove();
    }
});
const form = document.querySelector("form");
if (!form)
    throw new Error("Can not find form on page.");
form.onsubmit = (e) => {
    e.preventDefault();
    populateProfileCardData();
    document.body.append(profileCard);
};
form.onreset = () => {
    profileCard.remove();
};
function populateProfileCardData() {
    const form = document.querySelector("form");
    const nameInput = form === null || form === void 0 ? void 0 : form.querySelector("#nameInput");
    const dateInput = form === null || form === void 0 ? void 0 : form.querySelector("#dateInput");
    const photoInput = form === null || form === void 0 ? void 0 : form.querySelector("#photoInput");
    const primaryColorInput = form === null || form === void 0 ? void 0 : form.querySelector("#primaryColor");
    const secondaryColorInput = form === null || form === void 0 ? void 0 : form.querySelector("#secondaryColor");
    const textInput = form === null || form === void 0 ? void 0 : form.querySelector("#textInput");
    const skillsCheckboxes = form === null || form === void 0 ? void 0 : form.querySelectorAll('input[type="checkbox"]');
    const name = profileCard.querySelector("#name");
    const age = profileCard.querySelector("#age");
    const img = profileCard.querySelector("img");
    const text = profileCard.querySelector("#text");
    const skills = profileCard.querySelector("#skills");
    if (!(name &&
        age &&
        img &&
        text &&
        skills &&
        form &&
        nameInput &&
        dateInput &&
        photoInput &&
        primaryColorInput &&
        secondaryColorInput &&
        textInput &&
        skillsCheckboxes))
        throw new Error("Something wrong");
    profileCard.style.backgroundColor = primaryColorInput.value;
    profileCard.style.color = secondaryColorInput.value;
    name.innerText = nameInput.value;
    console.log(dateInput.value);
    age.innerText = `Age is ${calculateAge(new Date(dateInput.value))}`;
    img.src = photoInput.files
        ? photoInput.files[0] && URL.createObjectURL(photoInput.files[0])
        : "";
    text.innerText = textInput.value;
    skills.innerHTML = "";
    skillsCheckboxes.forEach((skill) => {
        if (!skill.checked)
            return;
        const li = document.createElement("li");
        li.innerText = skill.nextSibling
            ? skill.nextSibling.textContent
                ? skill.nextSibling.textContent
                : ""
            : "";
        skills.append(li);
    });
}
function calculateAge(birthday) {
    const today = new Date();
    return `${today.getFullYear() - birthday.getFullYear()}`;
}
