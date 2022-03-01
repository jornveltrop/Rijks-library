import { stopLoading } from "./loading.js";

//Error handling
export function setError(error) {
    const h1 = document.querySelector("h1");
    const h2 = document.querySelector("h2");
    
    h2.innerHTML = "We kunnen momenteel geen kunstwerken ophalen.";
    h1.innerHTML = "Helaas..."; 
    console.log(error);
    stopLoading();
}