const sectionData = document.querySelector(".resultaten");
const loader = document.querySelector(".loader");
const aantalResults = 100;
const imgSize = 600;
const apiKey = "AbH3UnTw";
const apiURL = `https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}`
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");

//Verwijder huidige kunstwerken
function deleteResults() {
    const articleElements = document.querySelectorAll("section > article");
    for (var i = 0, l = articleElements.length; i < l; i++) {
        articleElements[i].remove();
    }
}

//Start loading animatie
function setLoading() {
    loader.classList.add("loaderDisplay");
    sectionData.classList.add("resultsNoDisplay");

    setTimeout(() => {
        loader.classList.remove("loaderDisplay");
        sectionData.classList.remove("resultsNoDisplay");
    }, 3500);
}

//URL ophalen
function setURL() {
    //Titel vullen met zoekterm
    let inputField = document.querySelector("input").value;
    h2.innerHTML = "Resultaten voor:";
    h1.innerHTML = "<span>'" + inputField + "'</span>"; 

    //In geval geen input zoekbalk, laat uitgelicht zien
    if (inputField == 0) {
        inputField = "";
        h1.innerHTML = "Uitgelicht"; 
        h2.innerHTML = "";
    }

    //URL instellen
    let getURL = apiURL + `&q=${inputField}&ps=${aantalResults}`;
    return getURL;
}

function setError(error) {
    h2.innerHTML = "We kunnen momenteel geen kunstwerken ophalen.";
    h1.innerHTML = "Helaas..."; 
    console.log(error);
}

function getData() {
    let data = fetch(setURL())
    .then(response => response.json())
    .catch(error => setError(error));
    return data;
}

async function renderData(){
    let inputField = document.querySelector("input").value;
    let dataResults =  await getData();

    //Pak kunst objecten
    let objects = dataResults.artObjects;

    //Check of er 0 resultaten zijn
    if (objects.length == 0) {
        h1.innerHTML = "<span>'" + inputField + "'</span>"; 
        h2.innerHTML = "Helaas, geen resultaten voor:";
    } 
    else {
        //Genereer HTML blokken voor elk resultaat
        console.log(objects)
        objects.forEach(number => {
            let scaledImg = number.webImage.url + imgSize;
            sectionData.insertAdjacentHTML("beforeend",`
                <article>
                    <h3>${number.title}</h3>
                    <img src="${scaledImg}">
                </article
            `)
        });
    }
}


function getAndRenderData() {
    //Verwijder huidige kunstwerken
    deleteResults();

    //Start loading animatie
    setLoading();

    //Render data in HTML
    renderData();
}

getAndRenderData();