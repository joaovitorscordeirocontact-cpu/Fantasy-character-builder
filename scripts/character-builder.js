import { navigateTo, saveCharacterName, saveImageAdress, loadImageAdress } from "./data/storage.js";
import { chosenRace } from "./data/character-data.js";
import { imagePaths, getImageAdress } from "./data/shared.js";
import { changeArmor } from "./armor.js";




export let characterHTML = ``;

function renderCharacter(){
  // If there's no chosen race (page opened directly), bail out safely
  if(!chosenRace) return;

  let titleHTML = `Costumize your ${chosenRace.raceName} character.
  `;

 
  imagePaths(1);

  characterHTML = getImageAdress();
  saveImageAdress(characterHTML);

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
    customizationOptionsHTML += `<form id="armorForm" class="option">
      <p>Armor:</p>
      <label>
        <input type="radio" name="armor" value="1">
      </label>
      <label>
        <input type="radio" name="armor" value="2">
      </label>
      <label>
        <input type="radio" name="armor" value="3">
      </label>
      <label>
        <input type="radio" name="armor" value="4">
      </label>
    </form>`
  } else if(chosenRace.raceName === 'Human'){
    customizationOptionsHTML += `<form id="armorForm" class="option">
      <p>Armor:</p>
      <label>
        <input type="radio" name="armor" value="1">
      </label>
      <label>
        <input type="radio" name="armor" value="2">
      </label>
      <label>
        <input type="radio" name="armor" value="3">
      </label>
    </form>`
  } else if(chosenRace.costumizableTraits.armorOrClothes === true){
    customizationOptionsHTML += `<form id="armorForm" class="option">
      <p>Armor:</p>
      <label>
        <input type="radio" name="armor" value="1">
      </label>
      <label>
        <input type="radio" name="armor" value="2">
      </label>
    </form>`
  }

  const titleEl = document.querySelector('.js-title');
  if(titleEl) titleEl.textContent = titleHTML;

  const charSpaceEl = document.querySelector('.js-character-space');
  if(charSpaceEl) charSpaceEl.innerHTML = characterHTML;

  const customWinEl = document.querySelector('.js-customization-window');
  if(customWinEl) customWinEl.innerHTML = customizationOptionsHTML;
  
}

renderCharacter();
if(typeof changeArmor === 'function'){
  // attach armor listeners only when the customization form is present
  if(document.querySelector('.js-customization-window')) changeArmor();
}






const homeBtn = document.querySelector('.js-home-button');
if(homeBtn) homeBtn.addEventListener('click', () => {
  navigateTo("index.html");
});

const createBtn = document.querySelector('.js-create-button');
if(createBtn) createBtn.addEventListener('click', () => {
  const nameInputEl = document.querySelector('.js-name-input');
  const name = nameInputEl ? nameInputEl.value : '';
  saveCharacterName(name);
  navigateTo("presentation.html");
});











// imagePaths and imageAdress now live in `data/shared.js`




