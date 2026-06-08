import { chosenRace } from "./data/character-data.js";
import { loadCharacterName, navigateTo, loadImageAdress, loadColor, loadImageSrc } from "./data/storage.js";

function renderPresentation(){
  const name = loadCharacterName();
  const characterHTML = loadImageAdress() || '';
  const color = loadColor();
  const layer = loadImageSrc();


  const titleEl = document.querySelector('.js-title');
  if(titleEl) titleEl.textContent = `You Created ${name}!`;

  const charSpace = document.querySelector('.js-character-space');
  if(charSpace) charSpace.innerHTML = characterHTML;

  //to render saved layer shape
  const colorLayer = document.querySelector('.character-color');
  colorLayer.style.maskImage = `url(${layer})`;
  //to render chosen color
  colorLayer.style.backgroundColor = color;
}

renderPresentation();

document.querySelector('.js-home-button')
  .addEventListener('click', () => {
    navigateTo("index.html");
  });