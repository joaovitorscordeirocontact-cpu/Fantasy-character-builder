import { transferCharacterData, characterId, loadId, navigateTo } from "./data/storage.js";
import { characterTraits } from "./data/races-data.js";

loadId();

const chosenId = characterId;

export function findMatchingId(racesInfo){
  let matchingId;

  racesInfo.forEach(characterInfo => {
    if(chosenId === characterInfo.raceName){
      matchingId = characterInfo;
    }
  });
  return matchingId;
}

let chosenRace = findMatchingId(characterTraits);

console.log(chosenRace);


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

document.querySelector('.js-create-button')
  .addEventListener('click', () => {
    navigateTo("presentation.html");
  });
