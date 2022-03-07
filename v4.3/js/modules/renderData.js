import { stopLoading, setError } from './states.js'
import { openAside } from './ui.js'
import { getData, setDetailURL } from './getData.js';

const imgSize = 2000;
const asideSection = document.querySelector("aside > section");
const h2Aside = document.querySelector("aside h2");
const h3Aside = document.querySelector("aside h3");
const imgAside = document.querySelector("aside > section img");
const pAside = document.querySelector("aside p");
const arrowIcon = document.querySelector(".arrowIcon");

//Render data in HTML
export async function renderData(dataResults, inputField){
    const imgSize = 1000;
    const sectionData = document.querySelector(".resultaten");
    const errorImg = document.querySelector(".resultaten > img");

    //Reset errorImg
    errorImg.classList.remove("visible");

    //Pak kunst objecten
    let objects = dataResults.artObjects;

    //Check of er 0 resultaten zijn
    if (objects.length == 0) {
        setError(null, 2, inputField);
    } 
    else {
        //Genereer HTML blokken voor elk resultaat
        objects.forEach(number => {
            let scaledImg = number.webImage.url + imgSize;
            sectionData.insertAdjacentHTML("beforeend",`
                <article id="${number.objectNumber}">
                    <h3>${number.title}</h3>
                    <img src="${scaledImg}">
                </article
            `)
        });
    }
    
}

//Check of alle IMG rendered
export function imgRenderCheck(){
    let allImages = document.querySelectorAll("article img");

    Promise.all(Array.from(allImages).map(img => {
        if (img.complete)
            return Promise.resolve(img.naturalHeight !== 0);
        return new Promise(resolve => {
            img.addEventListener('load', () => resolve(true));
            img.addEventListener('error', () => resolve(false));
        });
    })).then(results => {
        if (results.every(res => res)) {
            stopLoading()
        }
        else
            console.log('some images failed to load, all finished loading');
    });
}

//Set detailID on rendered data
export function getDetailID() {
    let allArticles = document.querySelectorAll("article");

    allArticles.forEach(function(article) {
        article.addEventListener("click", function() {
            let clickedID = this.id;
            let detailURL = setDetailURL(clickedID);
            getData(detailURL)
                .then(data => {
                    renderDetailData(data).then(openAside());
                })
        });
    });
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


//https://stackoverflow.com/questions/11071314/javascript-execute-after-all-images-have-loaded