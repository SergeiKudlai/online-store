import { IDATA } from './interface';
import { DATA } from './data';
import { clickAside } from './asidemenu';
import { Product } from './cards_product';
import { getClickCounter } from './click_page';
import { clickedFilters } from './click_filter';
import { Cart } from './cart';
import { setPaginationCart } from './pagination_cart';
import { getPromo } from './promo';
import { setLocationResolve } from './locationResolve';
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

const VALID_ARR_DATA = localStorage.getItem('arr');

if (VALID_ARR_DATA) {
  const product = new Product(JSON.parse(VALID_ARR_DATA));
  product.render();
} else {
  const product = new Product(DATA);
  product.render();
}

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

  if (getValidPromo()) {
    if (Array.isArray(getValidPromo())) {
      for (const NUM of getValidPromo()) {
        CART.addSalePromo(NUM);
      }
    } else {
      CART.addSalePromo(getValidPromo() as string);
    }
  }

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

const INPUTSEARCH = document.querySelector('.input-search') as HTMLInputElement;

if (INPUTSEARCH) {
  INPUTSEARCH.addEventListener('input', () => {
    const val = INPUTSEARCH.value.trim();
    const BOX_PRODUCT = document.querySelector('.products');

    if (BOX_PRODUCT) {
      for (let i = 0; i < BOX_PRODUCT.children.length; i++) {
        const n = BOX_PRODUCT.children[i].querySelector('.products__title')?.textContent;
        if (n?.toLowerCase().search(val.toLowerCase()) == -1) {
          (BOX_PRODUCT.children[i] as HTMLElement).style.display = 'none';
        } else {
          (BOX_PRODUCT.children[i] as HTMLElement).style.display = '';
        }
      }
    }
  });
}

if (getDataRetrieval()) {
  window.addEventListener('load', (): void => {
    const CARD_INDEX = document.querySelector('.basket-set');
    if (CARD_INDEX) CARD_INDEX.textContent = String(getDataRetrieval().length);
  });
}

window.addEventListener('hashchange', (e) => {
  const { newURL } = e;
  setLocationResolve(newURL.split('#')[1].split('-')[1]);
});

window.addEventListener('load', () => {
  window.history.pushState(null, '', window.location.pathname);

  const VALID_DISCOUNT = localStorage.getItem('discount');

  if (VALID_DISCOUNT) {
    if (VALID_DISCOUNT.length > 2) {
      const CURRENT_SUM = document.querySelector('.info');
      const CURRENT_SUM_INFO = document.querySelector('.info__total-sum');
      CURRENT_SUM?.classList.add('active');
      CURRENT_SUM_INFO?.classList.add('active');
    }
  }
});
