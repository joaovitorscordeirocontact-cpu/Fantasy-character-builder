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

  let characterHTML = `
    <div class="character">
      <img src="./assets/images/character-sprites/${imageName}/${imageName}.png">
    </div>
  `;

  document.querySelector('.js-window-grid')
    .innerHTML = characterHTML;
}
console.log(renderCharacter());