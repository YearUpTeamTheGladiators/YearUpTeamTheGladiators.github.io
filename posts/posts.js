/* Posts Page JavaScript */

"use strict";

window.onload = displayUserPost() 
const signoutBtn = document.getElementById("signoutBtn")

signoutBtn.onclick = function () {
    logout();
}

function displayUserPost() { 
    let loginData = getLoginData()

    let postOutputList = document.getElementById("postOutputList")
    postOutputList.innerHTML = "";
    fetch("https://microbloglite.herokuapp.com/api/posts", {
        method: "GET", 
        headers: {"Authorization": `Bearer ${loginData.token}`,
                "Content-type":
                "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(data =>   {
        for(let i=0; i<data.length; i++) {
            let postOutput = document.createElement("div")
            let postUsername = document.createElement("div")
            let postContent = document.createElement("div")
            let postCreation = document.createElement("div")
            
            postUsername.classList.add('postUserName')
            postContent.classList.add('postContent')
            postCreation.classList.add('postCreation')  
            postOutput.classList.add('postOutput')  

            postOutput.appendChild(postUsername);
            postOutput.appendChild(postContent);
            postOutput.appendChild(postCreation);
            
    
          postUsername.innerHTML = `<h7 <span class='fw-bold'> ${data[i].username} </span></h7> `
          postContent.innerHTML = `<h8 <span class='fw-bold'> <br>  ${data[i].text}  <br> </span></h8> `
          postCreation.innerHTML = `<small> ${prettyDate(data[i].createdAt)} <small>`
          
        postOutputList.appendChild(postOutput);
          
        }
    })
    
}

function prettyDate (date) {
    let givenDate = new Date(date);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = givenDate.getDate();
    let month = months[givenDate.getMonth()];
    let year = givenDate.getFullYear();
    let dayOfWeek = days[givenDate.getDay()];
    let prettyDate = `${dayOfWeek}, ${month} ${day}, ${year}`

    return prettyDate;
}

