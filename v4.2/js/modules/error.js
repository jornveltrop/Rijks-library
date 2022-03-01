import { stopLoading } from "./loading.js";

//Error handling
export function setError(error) {
    const h1 = document.querySelector(".titels h1");
    const h2 = document.querySelector(".titels h2");
    
    h2.innerHTML = "We kunnen momenteel geen kunstwerken ophalen.";
    h1.innerHTML = "Helaas..."; 
    console.log(error);
    stopLoading();
}