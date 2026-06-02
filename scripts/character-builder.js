import { transferCharacterData, characterId, loadId } from "./data/storage.js";
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

  let titleHTML = `
    <p>Costumize your ${imageName} character</p>
  `;

  let characterHTML = `
      <img class="character" src="./assets/images/character-sprites/${imageName}/${imageName}.png">
  `;

  document.querySelector('.js-page-title')
    .innerHTML = titleHTML;  

  document.querySelector('.js-character-space')
    .innerHTML = characterHTML;
}
renderCharacter();
