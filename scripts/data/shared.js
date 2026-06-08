import { characterId } from "./storage.js";

export let imageAdress = ``;

export function imagePaths(path, selectedArmor){
	const imageName = String(characterId || '').toLowerCase();

	if(path === 1){
		imageAdress = `
        <div class="character-wrapper">
					<img class="character" src="./assets/images/character-sprites/${imageName}/${imageName}.png">

          <div class="character-color"></div>
        </div>
			`;
	} else if(path === 2){
		const armorPart = selectedArmor || '';
		imageAdress = `
        <div class="character-wrapper">
					<img class="character" src="./assets/images/character-sprites/${imageName}/${imageName}-armor/${armorPart}.png">

          <div class="character-color"></div>
        </div>
				`;
	} else if(path === 3){
		const armorPart = selectedArmor || '';
		imageAdress = `"./assets/images/character-sprites/${imageName}/${imageName}-armor/${armorPart}.png"
				`;
	} else if(path === 4){
		const armorPart = selectedArmor || '';
		imageAdress = `"./assets/images/character-sprites/${imageName}/${imageName}.png"`;
	}
}

export function getImageAdress(){
	return imageAdress;
}

