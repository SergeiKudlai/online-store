import { Product } from './cards_product';
import { DATA } from './data';

export function clickedFilters(): void {
  const BTN_FILTER = document.querySelector('[data-availability]');
  const START_FILTER = document.querySelector('.products-filter__btn');
  const BTN_PRICE_MAX = document.querySelector('[data-price-max]');
  const BTN_PRICE_MIN = document.querySelector('[data-price-min]');
  const BOX_FILTER_BTN = document.querySelectorAll('.box-filter__btn');
  const BOX_PRODUCT = document.querySelector('.products');

  START_FILTER?.addEventListener('click', (): void => {
    const PRODUCT = new Product(DATA);
    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  });

  BTN_FILTER?.addEventListener('click', (): void => {
    const RESULT = DATA.filter((value) => value.availability !== false);
    const PRODUCT = new Product(RESULT);

    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  });

  BTN_PRICE_MAX?.addEventListener('click', (): void => {
    const NEW_DATA = [...DATA];

    for (let i = 0; i < NEW_DATA.length; i++) {
      for (let j = i; j < NEW_DATA.length; j++) {
        if (NEW_DATA[i].price < NEW_DATA[j].price) {
          const startIndex = NEW_DATA[i];
          NEW_DATA[i] = NEW_DATA[j];
          NEW_DATA[j] = startIndex;
        }
      }
    }

    const PRODUCT = new Product(NEW_DATA);
    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  });

  BTN_PRICE_MIN?.addEventListener('click', (): void => {
    const NEW_DATA = [...DATA];

    for (let i = 0; i < NEW_DATA.length; i++) {
      for (let j = i; j < NEW_DATA.length; j++) {
        if (NEW_DATA[i].price > NEW_DATA[j].price) {
          const startIndex = NEW_DATA[i];
          NEW_DATA[i] = NEW_DATA[j];
          NEW_DATA[j] = startIndex;
        }
      }
    }

    const PRODUCT = new Product(NEW_DATA);
    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  });

  BOX_FILTER_BTN[1].addEventListener('click', function (): void {
    BOX_FILTER_BTN[0].classList.remove('active');
    BOX_FILTER_BTN[1].classList.add('active');
    BOX_PRODUCT?.classList.add('products--active');
  });

  BOX_FILTER_BTN[0].addEventListener('click', function (): void {
    BOX_FILTER_BTN[1].classList.remove('active');
    BOX_FILTER_BTN[0].classList.add('active');
    BOX_PRODUCT?.classList.remove('products--active');
  });
}
