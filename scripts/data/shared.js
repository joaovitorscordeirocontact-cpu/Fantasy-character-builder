import { characterId } from "./storage.js";

export let imageAdress = ``;

export function imagePaths(path, selectedArmor){
	const imageName = String(characterId || '').toLowerCase();

	if(path === 1){
		imageAdress = `
					<img class="character" src="./assets/images/character-sprites/${imageName}/${imageName}.png">
			`;
	} else if(path === 2){
		const armorPart = selectedArmor || '';
		imageAdress = `
					<img class="character" src="./assets/images/character-sprites/${imageName}/${imageName}-armor/${armorPart}.png">
				`;
	}
}

export function getImageAdress(){
	return imageAdress;
}

