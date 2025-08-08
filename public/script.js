// Функция показа меню и скрытия карты
function toggleMenu() {
  const menu = document.getElementById('menu-sections');
  const map = document.getElementById('map-section');

  menu.classList.add('show');   // показываем меню
  map.classList.remove('show'); // скрываем карту
}

// Функция показа карты и скрытия меню
function toggleMap() {
  const map = document.getElementById('about-and-location'); // правильный id секции с картой
  const menu = document.getElementById('menu-sections');

  map.classList.add('show');     // показываем карту
  menu.classList.remove('show'); // скрываем меню
}

let allItems = [];

fetch('/menu-data.json')
  .then(res => {
    if (!res.ok) throw new Error(`Ошибка HTTP: ${res.status}`);
    return res.json();
  })
  .then(data => {
    // Создаем карточку для одного пункта меню
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

    // Функция для добавления карточек в контейнер по ключу из объекта data
    function appendItems(containerId, items) {
      const container = document.getElementById(containerId);
      if (!container) {
        console.warn(`Контейнер с id="${containerId}" не найден`);
        return;
      }
      items.forEach(item => {
        container.appendChild(createCard(item));
      });
    }

    appendItems('beef-container', data.beefBurgers);
    appendItems('vegan-container', data.vegan);
    appendItems('chicken-container', data.chickenBurgers);
    appendItems('veggie-container', data.veggieBurgers);
    appendItems('wurst-container', data.curryWurst);
    appendItems('sides-container', data.beilagen);
    appendItems('extras-container', data.extras);
    appendItems('salads-container', data.salads);
    appendItems('sauces-container', data.sauces);
    appendItems('drinks-container', data.drinks);
    appendItems('desserts-container', data.desserts);
  })
  .catch(err => console.error('Fehler beim Laden des Menüs:', err));
