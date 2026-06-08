export let characterId = '';





export function transferCharacterData(){
  document.querySelector('.js-human-button').addEventListener('click', () => {
      characterId = 'Human';
      saveId();
      console.log('clicked');
      navigateTo('character-builder.html');
    });
  
  document.querySelector('.js-elf-button')
    .addEventListener('click', () => {
      characterId = 'Elf';
      saveId();
      navigateTo('character-builder.html');
    });

  document.querySelector('.js-shadow-button')
    .addEventListener('click', () => {
      characterId = 'Shadow';
      saveId();
      navigateTo('character-builder.html');
    });

  document.querySelector('.js-orc-button')
    .addEventListener('click', () => {
      characterId = 'Orc';
      saveId();
      navigateTo('character-builder.html');
    });

  document.querySelector('.js-android-button')
    .addEventListener('click', () => {
      characterId = 'Android';
      saveId();
      navigateTo('character-builder.html');
    });

  document.querySelector('.js-beastman-button')
    .addEventListener('click', () => {
      characterId = 'Beastman';
      saveId();
      navigateTo('character-builder.html');
    });
}

export function saveId(){
  localStorage.setItem('characterId', JSON.stringify(characterId));
}

export function loadId(){
  characterId = JSON.parse(localStorage.getItem('characterId'));
}

export function saveImageAdress(imageAdress){
  localStorage.setItem('characterImageAdress', JSON.stringify(imageAdress));
}

export function loadImageAdress(){
  return JSON.parse(localStorage.getItem('characterImageAdress'));
}





export function navigateTo(url) {
  document.body.classList.add('fade-out');

  setTimeout(() => {
    window.location.href = url;
  }, 300);
}

export function saveCharacterName(name) {
  localStorage.setItem('characterName', JSON.stringify(name));
}

export function loadCharacterName() {
  return JSON.parse(localStorage.getItem('characterName'));
}