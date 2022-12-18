import { DATA } from './data';
import { clickAside } from './asidemenu';
import { Product } from './cards_product';
import { getClickCounter } from './click_page';
import { clickedFilters } from './click_filter';

getClickCounter();
clickAside();
clickedFilters();

const product = new Product(DATA);
product.render();

window.addEventListener('load', (): void => {
  const CARD_INDEX = document.querySelector('.basket-set');
  const RESULT = localStorage.getItem('card');

  if (RESULT && CARD_INDEX) CARD_INDEX.textContent = String(JSON.parse(RESULT).length);
});
