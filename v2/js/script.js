const sectionData = document.querySelector(".resultaten");
const aantalResults = 100;
const imgSize = 600;

function elementInViewport() {
    const articles = document.querySelectorAll("article");
    const onderT1 = document.querySelector("#onderT1");

    articles.forEach(article => {
        const bounding = article.getBoundingClientRect();
        console.log(article.textContent);

        if (bounding.top >= 125 && bounding.top <= 450) {
            onderT1.innerHTML = article.textContent;
        };
    });
}

document.addEventListener('scroll', elementInViewport);


function getAndRenderData () {
    
    //Verwijder huidige kunstwerken
    const articleElements = document.querySelectorAll("section > article");
    for (var i = 0, l = articleElements.length; i < l; i++) {
        articleElements[i].remove();
    }
    
    //Titel vullen met zoekterm
    const h1 = document.querySelector("h1");
    let inputField = document.querySelector("input").value;
    h1.innerHTML = "Gezocht naar: " + inputField; 

    //In geval geen input zoekbalk, laat uitgelicht zien
    if (inputField == 0) {
        inputField = "";
        h1.innerHTML = "Uitgelicht"; 
    }

    //Stel URL in (100)
    const getURL = "https://www.rijksmuseum.nl/api/nl/collection?key=AbH3UnTw&q=" + inputField + "&ps=" + aantalResults;
    
    //Haal data op
    fetch(getURL).then(response => response.json())
    .then(data => {
        
        //Pak kunst objecten
        const objects = data.artObjects;
        console.log(objects);

        //Check of er 0 resultaten zijn
        if (objects.length == 0) {
            h1.innerHTML = "'" + inputField + "'" + " gaf helaas geen resultaten."; 
        } 
        else {
            //Genereer HTML blokken voor elk resultaat
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
    }).catch(error => console.log(error))
}

getAndRenderData();
