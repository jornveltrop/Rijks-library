import { setLoading } from './states.js'
import { renderData } from './renderData.js'
import { imgRenderCheck } from './renderData.js'
import { getData } from './getData.js'
import { setURL } from './getData.js'
import { deleteResults } from './ui.js'
import { emptyField } from './ui.js'
import { closeAside } from './ui.js'
import { getDetailID } from './renderData.js'
import './vendor/routie.min.js'
// import { searchField } from './ui.js'

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
          renderData(data)
            .then(imgRenderCheck())
            .then(getDetailID())
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

const closeAsideButton = document.querySelector('aside nav button');
closeAsideButton.addEventListener('click', closeAside);


//Set Routing on Input value
function searchField(event) {
  event.preventDefault();

  let searchValue = document.querySelector("input").value;
  window.location.hash = searchValue;
}

const form = document.querySelector('form');
form.addEventListener('submit', searchField);

