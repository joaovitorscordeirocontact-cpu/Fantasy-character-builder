import { navigateTo, saveCharacterName } from "./data/storage.js";
import { chosenRace } from "./data/character-data.js";



function renderCharacter(){
  let imageName = chosenRace.raceName.toLowerCase();

  let titleHTML = `Costumize your ${chosenRace.raceName} character.
  `;

  let characterHTML = `
      <img class="character" src="./assets/images/character-sprites/${imageName}/${imageName}.png">
  `;

  let customizationOptionsHTML = ``;

  if(chosenRace.costumizableTraits.skinColor === true){
    customizationOptionsHTML += `<div class="skin-color option">
      <p>Skin Color:</p>
      <input type="color">
    </div>`
  }
  if(chosenRace.costumizableTraits.hairColor === true){
    customizationOptionsHTML += `<div class="hair-color option">
      <p>Hair Color:</p>
      <input type="color">
    </div>`
  }
  if(chosenRace.raceName === 'Android'){
    customizationOptionsHTML += `<div class="armor option">
      <p>Armor:</p>
      <input type="radio" name="armor" value="armor-1">
      <input type="radio" name="armor" value="armor-2">
      <input type="radio" name="armor" value="armor-3">
      <input type="radio" name="armor" value="armor-4">
    </div>`
  } else if(chosenRace.raceName === 'Human'){
    customizationOptionsHTML += `<div class="armor option">
      <p>Armor:</p>
      <input type="radio" name="armor" value="armor-1">
      <input type="radio" name="armor" value="armor-2">
      <input type="radio" name="armor" value="armor-3">
    </div>`
  } else if(chosenRace.costumizableTraits.armorOrClothes === true){
    customizationOptionsHTML += `<div class="armor option">
      <p>Armor:</p>
      <input type="radio" name="armor" value="armor-1">
      <input type="radio" name="armor" value="armor-2">
    </div>`
  }

  document.querySelector('.js-title')
    .textContent = titleHTML;  

  document.querySelector('.js-character-space')
    .innerHTML = characterHTML;

  document.querySelector('.js-customization-window')
    .innerHTML = customizationOptionsHTML;
  
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






