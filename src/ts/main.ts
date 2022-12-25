import { IDATA } from './interface';
import { validPromo } from './enum';
import { DATA } from './data';
import { clickAside } from './asidemenu';
import { Product } from './cards_product';
import { getClickCounter } from './click_page';
import { clickedFilters } from './click_filter';
import { Cart } from './cart';
import { setPaginationCart } from './pagination_cart';

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

  const RESULT_PRICE: number = RESPONSE_DATA.map((value: IDATA) => Number(value.amount) * value.price).reduce(
    (acc: number, value: number) => acc + value,
    0
  );

  CART.addInputCart();
  CART.addCartIngo(RESULT_SUM, RESULT_PRICE);
  CART.addCartPromo();
  getAddHeaderPrice();

  const VALID_PROMO_10 = localStorage.getItem('valid-10');

  if (VALID_PROMO_10) {
    const DATA_VALID = JSON.parse(VALID_PROMO_10);
    DATA_VALID && CART.addSalePromo('10');
  }

  const VALID_PROMO_20 = localStorage.getItem('valid-20');

  if (VALID_PROMO_20) {
    const DATA_VALID = JSON.parse(VALID_PROMO_20);
    DATA_VALID && CART.addSalePromo('20');
  }

  const PROMO_IN = document.querySelector('.promo__input');

  if (PROMO_IN) {
    PROMO_IN.addEventListener('change', () => {
      const PROMO_VALUE = (PROMO_IN as HTMLInputElement).value;

      const VALID_PROMO_10 = localStorage.getItem('valid-10');

      if (PROMO_VALUE === validPromo.sale_10) {
        if (!VALID_PROMO_10) {
          localStorage.setItem('valid-10', JSON.stringify(true));
          CART.addSalePromo('10');
          CART.addCartIngo(RESULT_SUM, RESULT_PRICE);
        }
      }

      const VALID_PROMO_20 = localStorage.getItem('valid-20');

      if (PROMO_VALUE === validPromo.sale_20) {
        if (!VALID_PROMO_20) {
          localStorage.setItem('valid-20', JSON.stringify(true));
          CART.addSalePromo('20');
        }
      }
    });
  }
}

setPaginationCart();

function getAddHeaderPrice() {
  const HEADER_TOTAL_PRICE = document.querySelector('.header__amount');
  const ADD_LOCAL_PRIVE = localStorage.getItem('sum');
  if (ADD_LOCAL_PRIVE && HEADER_TOTAL_PRICE) {
    (HEADER_TOTAL_PRICE as HTMLElement).textContent = ADD_LOCAL_PRIVE;
  }
}

window.addEventListener('load', (): void => {
  const CARD_INDEX = document.querySelector('.basket-set');
  if (DATA_LOCAL_STORAGE && CARD_INDEX) CARD_INDEX.textContent = String(JSON.parse(DATA_LOCAL_STORAGE).length);
});
