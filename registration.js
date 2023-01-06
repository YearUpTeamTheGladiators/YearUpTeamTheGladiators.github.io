/* Registration Page JavaScript */

"use strict";

const registrationForm = document.querySelector("#registrationForm");

registrationForm.onsubmit = function (event) {
    // Prevent the form from refreshing the page,
    // as it will do by default when the Submit event is triggered:
    event.preventDefault();

    let name = `${registrationForm.nameField.value} ${registrationForm.lastNameField.value}`

    const registrationData = {
        username: registrationForm.usernameField.value,
        password: registrationForm.passwordField.value,
        fullName: name,
    }

    // Disables the button after the form has been submitted already:
    registrationForm.signinBtn.disabled = true;

    register(registrationData);
};

function register(userData) {
    fetch(`https://microbloglite.herokuapp.com/api/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData)
    })
    .then(result => result.json())
    .then(user => {
        window.location.href = "index.html"
    });
}