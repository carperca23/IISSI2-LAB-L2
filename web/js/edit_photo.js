"use strict";

import { photosAPI } from "/js/api/photos.js";
import { messageRenderer } from "/js/renderers/messages.js";

async function main() {
    let registerForm = document.getElementById("form-photo-upload");
    registerForm.onsubmit = handleSubmitPhoto;
}

async function handleSubmitPhoto(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    // Add the current user ID
    formData.append("userId", 1);
    try {
    let resp = await photosAPI_auto.create(formData);
    let newId = resp.lastId;
    window.location.href = `photo_detail.html?photoId=${newId}`;
    } catch (err) {
    messageRenderer.showErrorMessage(err.response.data.message);
    }
}
    

document.addEventListener("DOMContentLoaded", main);
