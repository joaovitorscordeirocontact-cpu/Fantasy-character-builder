import { imagePaths, getImageAdress } from "./data/shared.js";
import { saveImageAdress, saveImageSrc, saveColor, loadColor } from "./data/storage.js";

export let selectedArmor = '';

export function defaultLayer(){
 // To render the default character color layer
  imagePaths(4);
  const colorLayerSrc = getImageAdress();
  const colorLayer = document.querySelector('.character-color');
  if(colorLayer){
    colorLayer.style.maskImage = `url(${colorLayerSrc})`;
    colorLayer.style.backgroundColor = "transparent";
  }
}


export function changeArmor(){
	document.querySelectorAll('input[name="armor"]')
		.forEach(element => {
			element.addEventListener('click', () => {
				selectedArmor = element.value;
        

				imagePaths(2, selectedArmor);
				const characterHTML = getImageAdress();
				saveImageAdress(characterHTML);

				const charSpace = document.querySelector('.js-character-space');
				if(charSpace) charSpace.innerHTML = characterHTML;

        //To change the layer shape in the css
        imagePaths(3, selectedArmor);
        const colorLayerSrc = getImageAdress();
        saveImageSrc(colorLayerSrc);

        const colorLayer = document.querySelector('.character-color');
        if(colorLayer){
          colorLayer.style.maskImage = `url(${colorLayerSrc})`;
        }

        changeArmorColor();

        /*
        to keep the color changes after changing armor
        const chosenColor = loadColor() || "transparent";
        colorLayer.style.backgroundColor = chosenColor;
        */
			});
		});
}

// call changeArmor after the customization form has been rendered

export function changeArmorColor(){
  const colorPicker = document.querySelector('.skin-color input');
  const colorLayer = document.querySelector('.character-color');

  if(!colorPicker || !colorLayer) return;

  colorPicker.addEventListener('input', (color) => {
    let chosenColor = color.target.value;
    colorLayer.style.backgroundColor = chosenColor;
    saveColor(chosenColor);
  });
}