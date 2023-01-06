"use strict";

const postTextField = document.getElementById("postTextField");
const postBtn = document.getElementById("postBtn");
const signoutBtn = document.getElementById("signoutBtn");

window.onload = init;

function init () {
    postBtn.onclick = postBtncClicked;
    let profileName = document.getElementById("profileName");
    let recentPostName = document.getElementById("recentPostName");
    useFullName(profileName);
    useFullName(recentPostName);
    let bioBtn = document.getElementById("bioBtn");
    bioBtn.onclick = bioBtnClicked();
    let bioTextField = document.getElementById("bioTextField");
    bioTextField.value = localStorage.getItem("bioText")
    document.getElementById("recentPostTextField").innerHTML = localStorage.getItem("recentPostText")
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

    document.getElementById("recentPostTextField").innerHTML = postTextField.value;
    localStorage.setItem('recentPostText', document.getElementById("recentPostTextField").innerHTML);
}

function useProfileName (place) {
    let loginData = getLoginData();

    place.innerHTML = getLoginData().;
}

function useFullName (place) {
    let loginData = getLoginData();
    fetch(`https://microbloglite.herokuapp.com/api/users/${loginData.username}`, {
        method: "GET",
        headers: {"Authorization": `Bearer ${loginData.token}`,
                "Content-type":
                "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(data => {
        place.innerHTML = data.fullName;
    })
}

function bioBtnClicked () {
    let bioTextField = document.getElementById("bioTextField");
    bioTextField.value = bioTextField.value
    localStorage.setItem('bioText', bioTextField.value);
}

signoutBtn.onclick = function () {
    logout()
}