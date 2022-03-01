import { stopLoading } from './loading.js'

//Render data in HTML
export async function renderData(dataResults, inputField){
    const imgSize = 1000;
    const sectionData = document.querySelector(".resultaten");
    const h1 = document.querySelector(".titels h1");
    const h2 = document.querySelector(".titels h2");

    //Pak kunst objecten
    let objects = dataResults.artObjects;

    //Check of er 0 resultaten zijn
    if (objects.length == 0) {
        h1.innerHTML = "<span>'" + inputField + "'</span>"; 
        h2.innerHTML = "Helaas, geen resultaten voor:";
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
    let allImages = document.querySelectorAll("img");

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

//https://stackoverflow.com/questions/11071314/javascript-execute-after-all-images-have-loaded