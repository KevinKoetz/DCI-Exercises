"use strict";
const password = document.getElementById("password");
const passwordOptions = document.getElementById("passwordOptions");
if (!password)
    throw new Error("Wrong ID used for password");
if (!passwordOptions)
    throw new Error("Wrong ID used for passwordOptions");
if (!(passwordOptions instanceof HTMLFormElement))
    throw new Error("PaswordOptions is not a HTMLForm Element");
function generatePassword({ length, mixedCase, }) {
    const charset = "abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:-_";
    const pickRandomChar = () => charset[Math.floor(Math.random() * charset.length)];
    let password = "";
    for (let i = 1; i <= length; i++) {
        password += mixedCase
            ? i % 3 === 0
                ? pickRandomChar().toUpperCase()
                : pickRandomChar()
            : pickRandomChar();
    }
    return password;
}
password.innerText = generatePassword({
    length: Number(passwordOptions["passwordLength"].value),
    mixedCase: Boolean(passwordOptions["mixedCase"].value),
});
passwordOptions.onsubmit = (e) => {
    e.preventDefault();
    password.innerText = generatePassword({
        length: Number(passwordOptions["passwordLength"].value),
        mixedCase: passwordOptions["mixedCase"].value === "true" ? true : false,
    });
};
