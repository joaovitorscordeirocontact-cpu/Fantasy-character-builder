import { chosenRace } from "./data/character-data.js";
import { loadCharacterName, navigateTo, loadImageAdress } from "./data/storage.js";

function renderPresentation(){
  const name = loadCharacterName();
  const characterHTML = loadImageAdress() || '';

  const titleEl = document.querySelector('.js-title');
  if(titleEl) titleEl.textContent = `You Created ${name}!`;

  const charSpace = document.querySelector('.js-character-space');
  if(charSpace) charSpace.innerHTML = characterHTML;
}

renderPresentation();

document.querySelector('.js-home-button')
  .addEventListener('click', () => {
    navigateTo("index.html");
  });