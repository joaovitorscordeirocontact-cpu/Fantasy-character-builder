import { navigateTo, saveCharacterName } from "./data/storage.js";
import { chosenRace } from "./data/character-data.js";



function renderCharacter(){
  let imageName = chosenRace.raceName.toLowerCase();

  let titleHTML = `Costumize your ${imageName} character.
  `;

  let characterHTML = `
      <img class="character" src="./assets/images/character-sprites/${imageName}/${imageName}.png">
  `;

  document.querySelector('.js-title')
    .textContent = titleHTML;  

  document.querySelector('.js-character-space')
    .innerHTML = characterHTML;
}

renderCharacter();

document.querySelector('.js-home-button')
  .addEventListener('click', () => {
    navigateTo("index.html");
  });

let inputName = '';

document.querySelector('.js-create-button')
  .addEventListener('click', () => {
    navigateTo("presentation.html");
    inputName = document.querySelector('.js-name-input').value;
    saveCharacterName(inputName);
  });

  




