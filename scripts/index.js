let characterId = '';

let characterTraits = [{
raceName: '',
costumizableTraits: {
  skinColor: '',
  hairType: '',
  hairColor: '',
  armor: '',
  weapon: ''
}}];

function transferCharacterData(){
  document.querySelector('.js-human-button')
    .addEventListener('click', () => {
      characterId = 'Human';
    });
  
  document.querySelector('.js-elf-button')
    .addEventListener('click', () => {
      characterId = 'Elf';
    });

  document.querySelector('.js-shadow-button')
    .addEventListener('click', () => {
      characterId = 'Shadow';
    });

  document.querySelector('.js-orc-button')
    .addEventListener('click', () => {
      characterId = 'Orc';
    });

  document.querySelector('.js-android-button')
    .addEventListener('click', () => {
      characterId = 'Android';
    });

  document.querySelector('.js-beastman-button')
    .addEventListener('click', () => {
      characterId = 'Beastman';
    });

    savaToStorage();
}

function savaToStorage(){
  localStorage.setItem('characterId', JSON.stringify(characterId));
}