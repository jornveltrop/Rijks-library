export function getDetailID() {
    let allArticles = document.querySelectorAll("article");

    allArticles.forEach(function(article) {
        article.addEventListener("click", function() {
            let clickedID = this.id;
            getDetailData(clickedID)
        });
    });
}

const apiKey = "AbH3UnTw";

export async function getDetailData(id) {
    const detailURL = `https://www.rijksmuseum.nl/api/nl/collection/${id}?key=${apiKey}`;

    let detailResults = fetch(detailURL)
    .catch(error => setError(error))
    .then(response => response.json())
    return detailResults;
}