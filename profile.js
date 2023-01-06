"use strict";

const postTextField = document.getElementById("postTextField");
const postBtn = document.getElementById("postBtn");
const signoutBtn = document.getElementById("signoutBtn");

window.onload = init;

function init () {
    postBtn.onclick = postBtncClicked;
    populateProfileName();
}

function postBtncClicked () {
    let loginData = getLoginData()

    let bodyData = {
        text: postTextField.value
    };
    fetch(`https://microbloglite.herokuapp.com/api/posts`, {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {"Authorization": `Bearer ${loginData.token}`,
                "Content-type":
                "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(json => {
        console.log("post successful");
    })
}

function populateProfileName () {
    let profileName = document.getElementById("profileName");
    let loginData = getLoginData();

    profileName.innerHTML = loginData.username;
}


signoutBtn.onclick = function () {
    logout()
}