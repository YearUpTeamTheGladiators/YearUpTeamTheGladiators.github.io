/* Posts Page JavaScript */

"use strict";

window.onload = displayUserPost() 
const signOutBtn = document.getElementById("signOutBtn")

signOutBtn.onclick = function () {
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
            let postUsername = document.createElement("div")
            let postContent = document.createElement("div")
            let postCreation = document.createElement("div")
            
            
    
          postUsername.innerHTML = `<h7 <span class='fw-bold'> ${data[i].username} </span></h7> `
          postContent.innerHTML = `<h8 <span class='fw-bold'> <br>  ${data[i].text}  <br> </span></h8> `
          postCreation.innerHTML = `<small> ${data[i].createdAt} <small>`
          
    
          postOutputList.appendChild(postUsername);
          postOutputList.appendChild(postContent);
          postOutputList.appendChild(postCreation);
          
        }
    })
    
}
