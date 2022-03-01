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