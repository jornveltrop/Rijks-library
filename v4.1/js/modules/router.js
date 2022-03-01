import { setLoading } from './loading.js'
import { renderData } from './renderData.js'
import { imgRenderCheck } from './renderData.js'
import { getData } from './getData.js'
import { setURL } from './getData.js'
import { searchField } from './ui.js'
import { deleteResults } from './ui.js'
import { emptyField } from './ui.js'
import { getDetailID } from './detail.js'
import './vendor/routie.min.js'

export function handleRoutes() {
  routie(
    {
    '': () => {
        deleteResults();

        setLoading();
        let uitgelicht = "";
        let searchURL = setURL(uitgelicht);

        getData(searchURL)
        .then(data => {
          renderData(data).then(imgRenderCheck()).then(getDetailID())
        })
        .then(emptyField())
    },
    ':id': inputField => {
      deleteResults();
      setLoading();

      let searchURL = setURL(inputField);
      getData(searchURL)
      .then(data => {
        renderData(data, inputField).then(imgRenderCheck()).then(getDetailID())
      })
      .then(emptyField())
    }
  })
}

//MAG DIT HIER?
const form = document.querySelector('form');
form.addEventListener('submit', searchField);



//1. is '' voor routing clean? (Discord)

//3. Is er een manier om te kijken wanneer 
//   de API geladen is? Nu met timer
//.then na de catch 
//promise finally kan ook als alle plaatsjes

//4. Waar eventlistener voor zoekveld? Nu inline
// In de UI module

//5. Hoe stuur je zoekveld gegevens in hash?
//^




//TO DO 
//zoekveld gegevens in hash zetten,
//Router luistert naar hash > activeert functies 
//op basis van wat er in de URL staat
//Zo kan iemand rijks.nl/#rembrand delen

//ZOEK OPNIEUW KNOP > FOCUS NAAR KNOP

//Detail section uitklappen van links met ID onclick