const sectionData = document.querySelector(".resultaten");
const loader = document.querySelector(".loader");

//Start loading animatie
export function setLoading() {
    loader.classList.add("loaderDisplay");
    sectionData.classList.add("resultsNoDisplay");
}

//Stop loading animatie
export function stopLoading() {
    loader.classList.remove("loaderDisplay");
    sectionData.classList.remove("resultsNoDisplay");
}

