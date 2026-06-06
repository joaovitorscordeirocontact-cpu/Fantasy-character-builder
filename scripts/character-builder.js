import { navigateTo, saveCharacterName } from "./data/storage.js";
import { chosenRace } from "./data/character-data.js";



function renderCharacter(){
  let imageName = chosenRace.raceName.toLowerCase();

  let titleHTML = `Costumize your ${chosenRace.raceName} character.
  `;

  let characterHTML = `
      <img class="character" src="./assets/images/character-sprites/${imageName}/${imageName}.png">
  `;

  let customizationOptionsHTML = `
    <div class="skin-color option">
      <p>Skin Color:</p>
      <input type="color">
    </div>

    <div class="hair-style option">
      <p>Hair Style:</p>
      <input type="radio" name="hair-style" value="hair-one">
      <input type="radio" name="hair-style" value="hair-two">
      <input type="radio" name="hair-style" value="hair-three">
    </div>

    <div class="hair-color option">
      <p>Hair Color:</p>
      <input type="color">
    </div>

    <div class="armor option">
      <p>Armor:</p>
      <input type="radio" name="armor" value="armor-one">
      <input type="radio" name="armor" value="armor-two">
      <input type="radio" name="armor" value="armor-three">
    </div>

    <div class="weapon option">
      <p>Weapon:</p>
      <input type="radio" name="Weapon" value="weapon-one">
      <input type="radio" name="Weapon" value="weapon-one">
      <input type="radio" name="Weapon" value="weapon-one">
    </div>
  `;

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






