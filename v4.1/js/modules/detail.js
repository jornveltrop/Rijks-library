const apiKey = "AbH3UnTw";
const h2 = document.querySelectorAll(".detail h2");

export function renderDetailData(detailData) {
    
}

export async function getDetailData(id) {
    const detailURL = `https://www.rijksmuseum.nl/api/nl/collection/${id}?key=${apiKey}`;

    let detailResults = fetch(detailURL)
    .catch(error => setError(error))
    .then(response => response.json())
    renderDetailData(detailResults);
}

export function getDetailID() {
    let allArticles = document.querySelectorAll("article");

    allArticles.forEach(function(article) {
        article.addEventListener("click", function() {
            let clickedID = this.id;
            getDetailData(clickedID)
            console.log(clickedID);
        });
    });
}
