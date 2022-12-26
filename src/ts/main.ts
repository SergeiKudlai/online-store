import { IDATA } from './interface';
import { DATA } from './data';
import { clickAside } from './asidemenu';
import { Product } from './cards_product';
import { getClickCounter } from './click_page';
import { clickedFilters } from './click_filter';
import { Cart } from './cart';
import { setPaginationCart } from './pagination_cart';
import { getPromo } from './promo';
import {
  getDataRetrieval,
  getSumDiscount,
  getSumTotalDiscount,
  getValidDiscount,
  getValidPromo,
} from './data_retrieval';

getClickCounter();
clickAside();
clickedFilters();

const product = new Product(DATA);
product.render();

if (getDataRetrieval()) {
  const CART = new Cart(getDataRetrieval());

  const RESULT_SUM = getDataRetrieval().reduce((acc: number, value: IDATA) => Number(value.amount) + acc, 0);

  const RESULT_PRICE: number = getDataRetrieval()
    .map((value: IDATA) => Number(value.amount) * value.price)
    .reduce((acc: number, value: number) => acc + value, 0);

  CART.addInputCart();
  CART.addCartIngo(RESULT_SUM, RESULT_PRICE);
  CART.addCartPromo();
  CART.addDiscount(getSumDiscount(), getSumTotalDiscount(), getValidDiscount());
  getValidPromo() && CART.addSalePromo(getValidPromo());
  getAddHeaderPrice();
  getPromo();
}

setPaginationCart();

function getAddHeaderPrice() {
  const HEADER_TOTAL_PRICE = document.querySelector('.header__amount');
  const ADD_LOCAL_PRIVE = localStorage.getItem('sum');
  if (ADD_LOCAL_PRIVE && HEADER_TOTAL_PRICE) {
    (HEADER_TOTAL_PRICE as HTMLElement).textContent = ADD_LOCAL_PRIVE;
  }
}

if (getDataRetrieval()) {
  window.addEventListener('load', (): void => {
    const CARD_INDEX = document.querySelector('.basket-set');
    if (CARD_INDEX) CARD_INDEX.textContent = String(getDataRetrieval().length);
  });
}
