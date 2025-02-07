import { setError } from './error.js';
import { closeAside } from './ui.js';

//URL ophalen
export function setURL(inputField) {
    const h1 = document.querySelector(".titels h1");
    const h2 = document.querySelector(".titels h2");
    const aantalResults = 100;
    const apiKey = "AbH3UnTw";
    const apiURL = `https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}`

    //Reset if aside is open
    closeAside();

    //Titel vullen met zoekterm
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

//Haal data op (op basis van zoekveld)
export async function getData(url) {
    let dataResults = fetch(url)
    .catch(error => setError(error))
    .then(response => response.json())
    return dataResults;
}