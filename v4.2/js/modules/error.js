import { stopLoading } from "./loading.js";

//Error handling
export function setError(error) {
    const h1 = document.querySelector(".titels h1");
    const h2 = document.querySelector(".titels h2");
    const errorImg = document.querySelector(".resultaten > img");
    
    h2.innerHTML = "We kunnen momenteel geen kunstwerken ophalen.";
    h1.innerHTML = "Helaas..."; 
    errorImg.src = "./images/empty_frame.png"
    errorImg.classList.add("visible");
    console.log(error);
    stopLoading();
}