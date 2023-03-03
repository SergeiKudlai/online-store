import { DescriptionProduct } from './description';
import { IDATA } from './interface';
import { Cart } from './cart';
import { getDataRetrieval } from './data_retrieval';

export function getDescription(elem: IDATA) {
  const DESCRIPTION = new DescriptionProduct(elem);
  DESCRIPTION.setSectionRemove();
  DESCRIPTION.render();
}

export function getClickBtnCartDescription(elem: HTMLElement, valid: boolean) {
  const BOX_ELEMENT = valid ? elem.closest('[data-index]') : elem.querySelector('[data-btn-description]');

  if (BOX_ELEMENT) {
    let result: IDATA[];
    const VALID_STORAGE = localStorage.getItem('card');

    VALID_STORAGE ? (result = JSON.parse(VALID_STORAGE)) : (result = []);

    if (result.length === 0 && valid) setLocalDes(BOX_ELEMENT as HTMLElement);

    result.forEach((value, index) => {
      if (value.index?.toString() === (BOX_ELEMENT as HTMLElement).dataset.index) {
        if (valid) {
          result.splice(index, 1);
          localStorage.setItem('card', JSON.stringify(result));
          BOX_ELEMENT.textContent = 'Добавить в корзину';
        } else {
          BOX_ELEMENT.textContent = 'Удалить из корзины';
        }
      } else {
        valid && setLocalDes(BOX_ELEMENT as HTMLElement);
      }
    });

    setSumCart();

    getUrlCart(elem, true);
  }
}

function getUrlCart(elem: HTMLElement, valid: boolean) {
  if (elem.hasAttribute('data-btn-buy')) {
    if (valid) {
      localStorage.setItem('bye', 'true');
      location.replace('./cart.html');
    }
  }
}

function setLocalDes(elem: HTMLElement) {
  elem.textContent = 'Удалить из корзины';
  const BOX_ELEMENT = elem.closest('.description') as HTMLElement;

  if (BOX_ELEMENT) {
    const NAME = BOX_ELEMENT.querySelector('.description__title')?.textContent;
    const ID = Number(BOX_ELEMENT.dataset.id);
    const INDEX = Number(BOX_ELEMENT.dataset.index);
    const IMG = BOX_ELEMENT.querySelector('.description__img')?.getAttribute('src');
    const PRICE = Number(BOX_ELEMENT.querySelector('.price__name')?.textContent?.slice(0, -1));
    const RATING = Number(BOX_ELEMENT.querySelector('.raiting__name')?.textContent);

    if (NAME && ID && IMG && PRICE && RATING) {
      const CARD: IDATA = {
        id: ID,
        name: NAME,
        img: IMG,
        price: PRICE,
        raiting: RATING,
        index: INDEX,
        amount: '1',
      };

      const VALID_STORAGE = localStorage.getItem('card');

      let result: IDATA[];

      VALID_STORAGE ? (result = JSON.parse(VALID_STORAGE)) : (result = []);

      result.forEach((elem: IDATA, index: number) => {
        if (elem.index === CARD.index) result.splice(index, 1);
      });

      result.push(CARD);
      localStorage.setItem('card', JSON.stringify(result));
    }
  }
  setSumCart();
}

function setSumCart() {
  const CART = new Cart(getDataRetrieval());

  if (getDataRetrieval()) {
    const RESULT_SUM = getDataRetrieval().reduce((acc: number, value: IDATA) => Number(value.amount) + acc, 0);

    const RESULT_PRICE = getDataRetrieval()
      .map((value: IDATA) => Number(value.amount) * value.price)
      .reduce((acc: number, value: number) => acc + value, 0);

    localStorage.setItem('sum', JSON.stringify(RESULT_PRICE));

    const SUM_LOCAL = localStorage.getItem('sum');

    if (SUM_LOCAL) CART.addCartIngo(RESULT_SUM, +SUM_LOCAL);

    getAddHeaderPrice();
  }
}

function getAddHeaderPrice() {
  const HEADER_TOTAL_PRICE = document.querySelector('.header__amount');
  const ADD_LOCAL_PRIVE = localStorage.getItem('sum');

  ADD_LOCAL_PRIVE && HEADER_TOTAL_PRICE
    ? ((HEADER_TOTAL_PRICE as HTMLElement).textContent = ADD_LOCAL_PRIVE)
    : ((HEADER_TOTAL_PRICE as HTMLElement).textContent = '0');

  const CARD_INDEX = document.querySelector('.basket-set');
  const RESULT = localStorage.getItem('card');

  if (RESULT) {
    if (CARD_INDEX) CARD_INDEX.textContent = String(JSON.parse(RESULT).length);
  }
}

export function setImagesDes(elem: HTMLElement) {
  const BOX_ELEM = elem.closest('.description');
  const IMAGES = BOX_ELEM?.querySelector('.description__img') as HTMLElement;
  IMAGES?.setAttribute('src', `${elem.getAttribute('src')}`);
}
