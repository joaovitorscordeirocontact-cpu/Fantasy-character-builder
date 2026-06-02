import { transferCharacterData, characterId, loadId, navigateTo } from "./storage.js";
import { characterTraits } from "./races-data.js";



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

export let chosenRace = findMatchingId(characterTraits);
