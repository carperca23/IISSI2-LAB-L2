"use strict";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";
import { authAPI_auto } from "/js/api/_auth.js";

const loginForm = document.getElementById("login-form");

async function main(){
    loginForm.onsubmit=handleSubmitLogin;
}

async function handleSubmitLogin(event){
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    sendLogin(formData);
}

async function sendLogin(formData){
    try{
        let loginData = await authAPI_auto.login(formData);
        console.log(loginData);
        let sessionToken = loginData.sessionToken;
        let loggedUser = loginData.user;
        sessionManager.login(sessionToken, loggedUser);
        window.location.href = "index.html";
    }catch(err){
        messageRenderer.showErrorMessage("Error logging a new user", err);
    }
}

document.addEventListener("DOMContentLoaded", main);