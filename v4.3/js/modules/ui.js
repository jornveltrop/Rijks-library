const asideSection = document.querySelector("aside > section");
const arrowIcon = document.querySelector(".arrowIcon");

//Reset inputField
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
    aside.classList.add("asideOpen");
}

//Close side detail page
export function closeAside() {
    const aside = document.querySelector("aside");
    aside.classList.remove("asideOpen");
}

//ArrowVisible 
export function arrowVisible() {
    let verschilScroll = asideSection.scrollHeight - asideSection.clientHeight;
    if (verschilScroll > 30) {
        arrowIcon.classList.add("arrowVisible")
    }
    else {
        arrowIcon.classList.remove("arrowVisible")
    }
}