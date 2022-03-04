import { openAside } from './ui.js'

const imgSize = 2000;
const apiKey = "AbH3UnTw";
const aside = document.querySelector("aside");
const h2Aside = document.querySelector("aside h2");
const h3Aside = document.querySelector("aside h3");
const imgAside = document.querySelector("aside img");
const pAside = document.querySelector("aside p");
const arrowIcon = document.querySelector(".arrowIcon");

export function getDetailID() {
    let allArticles = document.querySelectorAll("article");

    allArticles.forEach(function(article) {
        article.addEventListener("click", function() {
            let clickedID = this.id;
            getDetailData(clickedID)
                .then(openAside())
        });
    });
}


export async function getDetailData(id) {
    let detailURL = `https://www.rijksmuseum.nl/api/nl/collection/${id}?key=${apiKey}`;

    fetch(detailURL)
    .catch(error => setError(error))
    .then(response => response.json())
    .then(detailData => renderDetailData(detailData))
}


export async function renderDetailData(detailData) {
    let objectData = detailData.artObject;
    h2Aside.innerHTML = objectData.label.title;
    imgAside.src = objectData.webImage.url + imgSize;
    h3Aside.innerHTML = objectData.principalMaker + ", " + objectData.physicalMedium + ", " + objectData.dating.presentingDate;
    pAside.innerHTML = objectData.label.description;

    setTimeout(function(){
        let verschilScroll = aside.scrollHeight - aside.clientHeight;
        if (verschilScroll > 30) {
            console.log("check");
            arrowIcon.classList.add("arrowVisible")
        }
        else {
            arrowIcon.classList.remove("arrowVisible")
        }
    }, 1000);
    
}