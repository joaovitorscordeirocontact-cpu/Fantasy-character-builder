import { imagePaths, getImageAdress } from "./data/shared.js";
import { saveImageAdress } from "./data/storage.js";

export let selectedArmor = '';

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
			});
		});
}

// call changeArmor after the customization form has been rendered

