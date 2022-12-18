import { IDATA } from './interface';

export function getClickCounter() {
  document.addEventListener('click', (e: Event): void => {
    if (e.target) {
      const ELEM = e.target as HTMLButtonElement;

      ELEM.hasAttribute('data-minus') && setMinusCounter(ELEM);
      ELEM.hasAttribute('data-plus') && setPlusCounter(ELEM);
      ELEM.hasAttribute('data-card') && createObjectCard(ELEM);
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
      }
    }
  }

  /* count- */
  function setMinusCounter(data: HTMLButtonElement): void {
    const BOX_ELEMENT = data.closest('.amount');

    if (BOX_ELEMENT) {
      const CURRENT_NUMBER = BOX_ELEMENT.querySelector('[data-num]');

      if (CURRENT_NUMBER) {
        if (CURRENT_NUMBER.textContent === '1') return;

        let dataNum = +CURRENT_NUMBER.innerHTML;
        dataNum--;
        CURRENT_NUMBER.innerHTML = String(dataNum);
      }
    }
  }

  /* create card element */
  function createObjectCard(data: HTMLButtonElement): void {
    const BOX_ELEMENT = data.closest('.products__box');

    if (BOX_ELEMENT) {
      const NAME = BOX_ELEMENT.querySelector('.products__title-link')?.textContent;
      const ID = Number((BOX_ELEMENT as HTMLElement).dataset.id);
      const IMG = BOX_ELEMENT.querySelector('.products__img')?.getAttribute('src');
      const PRICE = Number(BOX_ELEMENT.querySelector('.products__price')?.textContent);
      const AMOUNT = BOX_ELEMENT.querySelector('[data-num]')?.textContent;

      if (NAME && ID && IMG && PRICE && AMOUNT) {
        const CARD: IDATA = {
          id: ID,
          name: NAME,
          img: IMG,
          price: PRICE,
          amount: AMOUNT,
        };
        setAddCardLocalStorage(CARD);
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
}
