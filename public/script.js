function toggleMenu() {
  const menu = document.getElementById('menu-sections');
  const map = document.getElementById('map-section');

  menu.classList.add('show');   // завжди показуємо меню
  map.classList.remove('show'); // ховаємо карту
}

function toggleMap() {
  const map = document.getElementById('map-section');
  const menu = document.getElementById('menu-sections');

  map.classList.add('show');     // завжди показуємо карту
  menu.classList.remove('show'); // ховаємо меню
}

let allItems = [];

fetch('/menu-data.json')
  .then(res => res.json())
  .then(data => {
    function createCard(item) {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    ${item.image ? `<img src="${item.image}" alt="${item.name}" />` : ''}
    <h3>${item.name} <span>${item.price}</span></h3>
    ${item.ingredients ? `<p>${item.ingredients}</p>` : ''}
  `;

  return card;
}

    const beefContainer = document.getElementById('beef-container');
    data.beefBurgers.forEach(item => {
      beefContainer.appendChild(createCard(item));
    });

    const veganContainer = document.getElementById('vegan-container');
    data.vegan.forEach(item => {
      veganContainer.appendChild(createCard(item));
    });

    const chickenContainer = document.getElementById('chicken-container');
    data.chickenBurgers.forEach(item => {
      chickenContainer.appendChild(createCard(item));
    });

    const veggieContainer = document.getElementById('veggie-container');
    data.veggieBurgers.forEach(item => {
      veggieContainer.appendChild(createCard(item));
    });

    const wurstContainer = document.getElementById('wurst-container');
    data.curryWurst.forEach(item => {
      wurstContainer.appendChild(createCard(item));
    });

    const sidesContainer = document.getElementById('sides-container');
    data.beilagen.forEach(item => {
      sidesContainer.appendChild(createCard(item));
    });

    const extrasContainer = document.getElementById('extras-container');
    data.extras.forEach(item => {
      extrasContainer.appendChild(createCard(item));
    });

    const saladsContainer = document.getElementById('salads-container');
    data.salads.forEach(item => {
      saladsContainer.appendChild(createCard(item));
    });

    const saucesContainer = document.getElementById('sauces-container');
    data.sauces.forEach(item => {
      saucesContainer.appendChild(createCard(item));
    });

    const drinksContainer = document.getElementById('drinks-container');
    data.drinks.forEach(item => {
      drinksContainer.appendChild(createCard(item));
    });

    const dessertsContainer = document.getElementById('desserts-container');
    data.desserts.forEach(item => {
      dessertsContainer.appendChild(createCard(item));
    });
  })

  
  .catch(err => console.error('Fehler beim Laden des Menüs:', err));