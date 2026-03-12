function checkEmail(stringToCheck) {

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;

    return regex.test(stringToCheck);
}

document.querySelector("#button-choice").addEventListener("click", function () {

    let email = document.querySelector('input[name="emailInput"]').value;

    let message = document.querySelector("#message");

    if (email === "") {
        message.textContent = "Veuillez entrer un email valide.";
        message.classList.remove("success");
        message.classList.add("error");
        return;
    }

    if (checkEmail(email)) {
        message.textContent = "Email valide !";
        message.classList.remove("error");
        message.classList.add("success");
    } else {
        message.textContent = "Email non valide.";
        message.classList.remove("success");
        message.classList.add("error");
    }

});