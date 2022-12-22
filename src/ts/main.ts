import { IDATA } from './interface';
import { DATA } from './data';
import { clickAside } from './asidemenu';
import { Product } from './cards_product';
import { getClickCounter } from './click_page';
import { clickedFilters } from './click_filter';
import { Cart } from './cart';

getClickCounter();
clickAside();
clickedFilters();

const product = new Product(DATA);
product.render();

const DATA_LOCAL_STORAGE = localStorage.getItem('card');

if (DATA_LOCAL_STORAGE) {
  const RESPONSE_DATA = JSON.parse(DATA_LOCAL_STORAGE);
  const CART = new Cart(RESPONSE_DATA);

  const RESULT_SUM = RESPONSE_DATA.reduce((acc: number, value: IDATA) => Number(value.amount) + acc, 0);

  const RESULT_PRICE = RESPONSE_DATA.map((value: IDATA) => Number(value.amount) * value.price).reduce(
    (acc: number, value: number) => acc + value,
    0
  );

  CART.render();
  CART.addCartIngo(RESULT_SUM, RESULT_PRICE);
}

window.addEventListener('load', (): void => {
  const CARD_INDEX = document.querySelector('.basket-set');
  if (DATA_LOCAL_STORAGE && CARD_INDEX) CARD_INDEX.textContent = String(JSON.parse(DATA_LOCAL_STORAGE).length);
});
