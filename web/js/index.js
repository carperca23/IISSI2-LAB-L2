"use strict";
import { photosAPI_auto } from "/js/api/_photos.js";
import { galleryRenderer } from "/js/renderers/gallery.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { photoswithusersAPI_auto } from "/js/api/_photoswithusers.js";

async function main() {

    loadAllPhotos();
}
async function loadAllPhotos() {
    let galleryContainer = document.querySelector("div.container");
    try {
        let photos = await photoswithusersAPI_auto.getAll();
        let cardGallery = galleryRenderer.asCardGallery(photos);
        galleryContainer.appendChild(cardGallery);
        change_border();
    } catch (err) {
        messageRenderer.showErrorMessage("Error while loading photos",
            err);
    }
}

async function change_border(){
    let cards = document.querySelectorAll("div.card");
    
    for (let card of cards) {
        card.onmouseenter = handleMouseEnter;
        card.onmouseleave = handleMouseLeave;
    }
}

function handleMouseEnter(event) {
    let card = event.target;
    card.style.border = "2px solid grey"
}

function handleMouseLeave(event) {
    let card = event.target;
    card.style.border = "none";
}

document.addEventListener("DOMContentLoaded", main);

