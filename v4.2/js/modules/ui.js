export function searchField(event) {
    event.preventDefault();

    let searchValue = document.querySelector("input").value;
    window.location.hash = searchValue;
}

export function emptyField() {
    document.querySelector("input").value = "";
}

//Verwijder huidige kunstwerken
export function deleteResults() {
    const articleElements = document.querySelectorAll("section > article");
    for (var i = 0, l = articleElements.length; i < l; i++) {
        articleElements[i].remove();
    }
}


//Open side detail page
export function openAside() {
    const aside = document.querySelector("aside");
    setTimeout(() => {
        aside.classList.add("asideOpen");
    }, 500);
}

//Close side detail page
export function closeAside() {
    const aside = document.querySelector("aside");
    aside.classList.remove("asideOpen");
}