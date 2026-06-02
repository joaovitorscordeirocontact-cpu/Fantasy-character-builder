import { chosenRace } from "./data/character-data.js";
import { loadCharacterName } from "./data/storage.js";

console.log(loadCharacterName());

function renderPresentation(){
  let imageName = chosenRace.raceName.toLowerCase();
  let name = loadCharacterName();

  let titleHTML = `You Created ${name}!
  `;

  let characterHTML = `
      <img class="character" src="./assets/images/character-sprites/${imageName}/${imageName}.png">
  `;

  document.querySelector('.js-title')
    .textContent = titleHTML;  

  document.querySelector('.js-character-space')
    .innerHTML = characterHTML;
}

renderPresentation();
