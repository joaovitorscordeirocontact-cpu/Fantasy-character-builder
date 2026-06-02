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

function navigateTo(url) {
  document.body.classList.add('fade-out');

  setTimeout(() => {
    window.location.href = url;
  }, 300);
}