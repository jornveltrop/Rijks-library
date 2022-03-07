import { setDetailURL } from './getData.js'
import { getData } from './getData.js'

const imgSize = 2000;
const apiKey = "AbH3UnTw";
const asideSection = document.querySelector("aside > section");
const h2Aside = document.querySelector("aside h2");
const h3Aside = document.querySelector("aside h3");
const imgAside = document.querySelector("aside > section img");
const pAside = document.querySelector("aside p");
const arrowIcon = document.querySelector(".arrowIcon");

export async function getDetailData(id) {
    
    let searchURL = setDetailURL(id);
    console.log(searchURL);
    let detailData = getData(searchURL);
    console.log(detailData);
}


export async function renderDetailData(detailData) {
    let objectData = detailData.artObject;
    h2Aside.innerHTML = objectData.label.title;
    imgAside.src = objectData.webImage.url + imgSize;
    h3Aside.innerHTML = objectData.principalMaker + ", " + objectData.physicalMedium + ", " + objectData.dating.presentingDate;
    pAside.innerHTML = objectData.label.description;

    setTimeout(function(){
        let verschilScroll = asideSection.scrollHeight - asideSection.clientHeight;
        if (verschilScroll > 30) {
            console.log("check");
            arrowIcon.classList.add("arrowVisible")
        }
        else {
            arrowIcon.classList.remove("arrowVisible")
        }
    }, 1000);
    
}