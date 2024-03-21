"use strict";
import { galleryRenderer } from '/js/renderers/gallery.js';
function main() {
    let container = document.getElementById("gallery");
    let photos = [
        {
            title: "Samoyed",
            description: "A very good boy.",
            userId: 1,
            url: "https://i.ibb.co/tY1Jcnc/wlZCfCv.jpg",
            date: "15/08/2020",
        },
        {
            title: "ETSII",
            description: "E.T.S. Ing. Informatica, Universidad de Sevilla",
            userId: 2,
            url: "https://cdn.pixabay.com/photo/2023/04/13/09/56/alps-7922246_1280.jpg",
            date: "01/01/2021",
        },
        {
            title: "Seville",
            description: "The beautiful city of Seville",
            userId: 3,
            url: "https://urbansevilla.es/wp-content/uploads/2019/03/urban-sevilla-foto-ciudad.jpg",
            date: "03/02/2019",
        },
        {
            title: "Abstract art",
            description: "Clipart",
            userId: 4,
            url: "https://cdn.pixabay.com/photo/2023/04/11/13/27/bird-7917250_1280.jpg",
            date: "14/08/2019",
        },
    ];
    
    let gallery = galleryRenderer.asCardGallery(photos);
    container.appendChild(gallery);

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
