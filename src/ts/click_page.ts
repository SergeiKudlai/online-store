import { IDATA } from './interface';
import { Cart } from './cart';
import { setPaginationCart } from './pagination_cart';
import { setAddPageDiscount } from './discount';
import { getDataRetrieval, getSumDiscount, getSumTotalDiscount, getValidDiscount } from './data_retrieval';
import { setLocationResolve } from './locationResolve';
import { resolveUrl } from './enum';

export function getClickCounter() {
  document.addEventListener('click', (e: Event): void => {
    if (e.target) {
      const ELEM = e.target as HTMLButtonElement;

      ELEM.hasAttribute('data-minus') && setMinusCounter(ELEM);
      ELEM.hasAttribute('data-plus') && setPlusCounter(ELEM);
      ELEM.hasAttribute('data-card') && createObjectCard(ELEM);
      ELEM.hasAttribute('data-remove') && setRemoveCart();
      ELEM.hasAttribute('data-sale') && setRemoveDiscount(ELEM);
      if (ELEM.matches('[data-img]') || ELEM.matches('.products__title')) {
        setLocationResolve(resolveUrl.description, ELEM);
      }
    }
  });

  /* count+ */
  function setPlusCounter(data: HTMLButtonElement): void {
    const BOX_ELEMENT = data.closest('.amount');

    if (BOX_ELEMENT) {
      const CURRENT_NUMBER = BOX_ELEMENT.querySelector('[data-num]');

      if (CURRENT_NUMBER) {
        let dataNum = +CURRENT_NUMBER.innerHTML;
        dataNum++;
        CURRENT_NUMBER.innerHTML = String(dataNum);

        const TOTAL_PRICE_CART = document.querySelector('.products__total-sum');

        if (TOTAL_PRICE_CART) {
          setAmountLocalStorage(BOX_ELEMENT, dataNum);
          getTotalPrice(dataNum, BOX_ELEMENT);
        }
      }
    }

    setSumCart();
    getAddHeaderPrice();
    setAddPageDiscount(getDataRetrieval());
  }

  /* count- */
  function setMinusCounter(data: HTMLButtonElement): void {
    const BOX_ELEMENT = data.closest('.amount');

    if (BOX_ELEMENT) {
      const CURRENT_NUMBER = BOX_ELEMENT.querySelector('[data-num]');

      if (CURRENT_NUMBER) {
        if (CURRENT_NUMBER.textContent === '1') {
          getValidCart(CURRENT_NUMBER);
          setSumCart();
          setPaginationCart();
          getRemovePageCartProduct();
          return;
        }

        let dataNum = +CURRENT_NUMBER.innerHTML;
        dataNum--;
        CURRENT_NUMBER.innerHTML = String(dataNum);

        const TOTAL_PRICE_CART = document.querySelector('.products__total-sum');

        if (TOTAL_PRICE_CART) {
          setAmountLocalStorage(BOX_ELEMENT, dataNum);
          getTotalPrice(dataNum, BOX_ELEMENT);
        }
      }
    }

    setSumCart();
    getAddHeaderPrice();
    setAddPageDiscount(getDataRetrieval());
  }

  function getAddHeaderPrice() {
    const HEADER_TOTAL_PRICE = document.querySelector('.header__amount');
    const ADD_LOCAL_PRIVE = localStorage.getItem('sum');
    if (ADD_LOCAL_PRIVE && HEADER_TOTAL_PRICE) {
      (HEADER_TOTAL_PRICE as HTMLElement).textContent = ADD_LOCAL_PRIVE;
    } else {
      (HEADER_TOTAL_PRICE as HTMLElement).textContent = '0';
    }
  }

  function setSumCart() {
    const CART = new Cart(getDataRetrieval());

    const RESULT_SUM = getDataRetrieval().reduce((acc: number, value: IDATA) => Number(value.amount) + acc, 0);

    const RESULT_PRICE = getDataRetrieval()
      .map((value: IDATA) => Number(value.amount) * value.price)
      .reduce((acc: number, value: number) => acc + value, 0);

    localStorage.setItem('sum', JSON.stringify(RESULT_PRICE));

    const SUM_LOCAL = localStorage.getItem('sum');

    if (SUM_LOCAL) CART.addCartIngo(RESULT_SUM, +SUM_LOCAL);

    getAddHeaderPrice();
  }

  /* create cart element */
  function createObjectCard(data?: HTMLButtonElement): void {
    if (data) {
      const BOX_ELEMENT = data.closest('.products__box') as HTMLElement;

      if (BOX_ELEMENT) {
        const NAME = BOX_ELEMENT.querySelector('.products__title')?.textContent;
        const ID = Number(BOX_ELEMENT.dataset.id);
        const INDEX = Number(BOX_ELEMENT.dataset.index);
        const IMG = BOX_ELEMENT.querySelector('.products__img')?.getAttribute('src');
        const PRICE = Number(BOX_ELEMENT.querySelector('.products__price')?.textContent);
        const AMOUNT = BOX_ELEMENT.querySelector('[data-num]')?.textContent;
        const RATING = Number(BOX_ELEMENT.querySelector('.raiting__num')?.textContent);

        if (NAME && ID && IMG && PRICE && AMOUNT && RATING) {
          const CARD: IDATA = {
            id: ID,
            name: NAME,
            img: IMG,
            price: PRICE,
            amount: AMOUNT,
            raiting: RATING,
            index: INDEX,
          };

          setAddCardLocalStorage(CARD);
          setSumCart();
        }
      }
    }
  }

  function setAddCardLocalStorage(data: IDATA): void {
    let result: IDATA[];

    const VALID_STORAGE = localStorage.getItem('card');

    VALID_STORAGE ? (result = JSON.parse(VALID_STORAGE)) : (result = []);

    result.forEach((value: IDATA, index: number, arr: IDATA[]): void => {
      value.name === data.name && arr.splice(index, 1);
    });

    result.push(data);
    localStorage.setItem('card', JSON.stringify(result));

    const CARD_INDEX = document.querySelector('.basket-set');
    const RESULT = localStorage.getItem('card');

    if (RESULT) {
      if (CARD_INDEX) {
        CARD_INDEX.textContent = String(JSON.parse(RESULT).length);
      }
    }
  }

  /* Cart set Total Price */
  function getTotalPrice(amount: number, elem: Element): void {
    const BOX_CARD = elem.closest('.products__box');
    const PRICE_CARD = Number(BOX_CARD?.querySelector('.products__price')?.textContent);
    const CARD_TOTAL_PRICE = BOX_CARD?.querySelector('.products__total-sum');
    if (CARD_TOTAL_PRICE) CARD_TOTAL_PRICE.textContent = (PRICE_CARD * amount).toString();
  }

  /* remove element cart */
  function getValidCart(elem: Element): void {
    const BOX_CARD = elem.closest('.products__box');

    if (BOX_CARD?.hasAttribute('data-cart')) {
      setRemoveElementLocalStorage(BOX_CARD);
      BOX_CARD.remove();
    }
  }

  /* localStorage */
  function setAmountLocalStorage(elem: Element, amount: number): void {
    const BOX_CARD = elem.closest('.products__box');
    const NAME_PRODUCT = BOX_CARD?.querySelector('.products__title')?.textContent;

    let result: IDATA[];

    const VALID_STORAGE = localStorage.getItem('card');

    VALID_STORAGE ? (result = JSON.parse(VALID_STORAGE)) : (result = []);

    result.forEach((value: IDATA): void => {
      if (value.name === NAME_PRODUCT) value.amount = amount.toString();
    });

    localStorage.setItem('card', JSON.stringify(result));
  }

  function setRemoveElementLocalStorage(elem: Element): void {
    const STORAGE = localStorage.getItem('card');
    const NAME_PRODUCT = elem?.querySelector('.products__title')?.textContent;

    if (STORAGE) {
      const result = JSON.parse(STORAGE);

      result.forEach((value: IDATA, index: number): void => {
        if (value.name) value.name === NAME_PRODUCT && result.splice(index, 1);
      });

      localStorage.setItem('card', JSON.stringify(result));
    }
  }

  function getRemovePageCartProduct() {
    const PRODUCT_BOX = document.querySelector('.product');
    if (PRODUCT_BOX) PRODUCT_BOX.children.length === 0 && setRemoveCart();
  }

  function setRemoveCart() {
    localStorage.clear();

    const BOX_PRODUCT = document.querySelector('.cart__product');
    const BOX_INFO = document.querySelector('.info');
    const BOX_PROMO = document.querySelector('.promo');
    const BOX_DISCOUNT = document.querySelector('.discount');

    if (BOX_PRODUCT && BOX_INFO && BOX_PROMO && BOX_DISCOUNT) {
      BOX_PRODUCT.innerHTML = '';
      BOX_PROMO.innerHTML = '';
      BOX_DISCOUNT.innerHTML = '';
      BOX_INFO.innerHTML = 'Корзина пуста';
    }

    getAddHeaderPrice();
  }

  function setRemoveDiscount(elem: HTMLButtonElement) {
    const NUM_BTN = elem.dataset.sale;
    const BOX_PROMO = elem.closest('.promo');
    const TEXT = BOX_PROMO?.querySelector(`[data-discount="${NUM_BTN}"]`);
    const VALID_STORAGE = localStorage.getItem('discount');

    TEXT?.remove();
    elem.remove();

    localStorage.removeItem(`valid-${NUM_BTN}`);

    if (VALID_STORAGE && NUM_BTN) {
      const ARR_DATA_DISCOUNT = JSON.parse(VALID_STORAGE);
      const RESULT_ARR = ARR_DATA_DISCOUNT.filter((value: number) => value !== +NUM_BTN);

      localStorage.setItem('discount', JSON.stringify(RESULT_ARR));

      const CART = new Cart(getDataRetrieval());
      CART.addDiscount(getSumDiscount(), getSumTotalDiscount(), getValidDiscount());
    }
  }
}
