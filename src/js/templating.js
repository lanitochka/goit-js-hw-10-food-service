import cardsTemplate from '../templates/menu-cards.hbs';

import cards from '../menu.json';

const markup = cardsTemplate(cards);

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('afterbegin', markup);
