import { transferCharacterData, characterId, loadId } from "./data/storage.js";

loadId();

const chosenId = characterId;

const racesInfo = racesData;

export function findMatchingId(racesInfo, characterId){
  racesInfo.array.forEach(characterInfo => {
    if(chosenId === characterInfo.raceName){

    }
  });
}