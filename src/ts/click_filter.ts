import { Product } from './cards_product';
import { DATA } from './data';

export function clickedFilters(): void {
  const BTN_FILTER = document.querySelector('[data-availability]');
  const START_FILTER = document.querySelector('.products-filter__btn');
  const BTN_PRICE_MAX = document.querySelector('[data-price-max]');
  const BTN_RAITING_MAX = document.querySelector('[data-raiting-max]');
  const BTN_RAITING_MIN = document.querySelector('[data-raiting-min]');
  const BTN_PRICE_MIN = document.querySelector('[data-price-min]');
  const BOX_FILTER_BTN = document.querySelectorAll('.box-filter__btn');
  const BOX_PRODUCT = document.querySelector('.products');

  const DRINKS = document.querySelector('.drinks');
  const FRUITS = document.querySelector('.fruits');
  const VEGETABLES = document.querySelector('.vegetables');
  const BERRY = document.querySelector('.berry');
  const OTHER = document.querySelector('.other');

  const babGryadka = document.querySelector('.babGryadka');
  const magagaskar = document.querySelector('.magagaskar');
  const CaffeSalomoni = document.querySelector('.CaffeSalomoni');
  const candy = document.querySelector('.candy');
  const pepsiCola = document.querySelector('.pepsicola');
  const bonaqua = document.querySelector('.bonaqua');
  const sanpellegrinoAranciata = document.querySelector('.sanpellegrinoAranciata');
  const rocs = document.querySelector('.rocs');

  START_FILTER?.addEventListener('click', (): void => {
    const PRODUCT = new Product(DATA);
    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  });

  // filter: category
  DRINKS?.addEventListener('click', (): void => {
    const RESULT = DATA.filter((value) => value.id === 1);
    const PRODUCT = new Product(RESULT);

    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  });
  FRUITS?.addEventListener('click', (): void => {
    const RESULT = DATA.filter((value) => value.id === 2);
    const PRODUCT = new Product(RESULT);

    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  });
  VEGETABLES?.addEventListener('click', (): void => {
    const RESULT = DATA.filter((value) => value.id === 3);
    const PRODUCT = new Product(RESULT);

    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  });
  BERRY?.addEventListener('click', (): void => {
    const RESULT = DATA.filter((value) => value.id === 4);
    const PRODUCT = new Product(RESULT);

    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  });
  OTHER?.addEventListener('click', (): void => {
    const RESULT = DATA.filter((value) => value.id === 5);
    const PRODUCT = new Product(RESULT);

    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  });

  //filter: brands
  babGryadka?.addEventListener('click', (): void => {
    const RESULT = DATA.filter((value) => value.brand === 'Бабушкина грядка');
    const PRODUCT = new Product(RESULT);

    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  });

  magagaskar?.addEventListener('click', (): void => {
    const RESULT = DATA.filter((value) => value.brand === 'Мадагаскар');
    const PRODUCT = new Product(RESULT);

    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  });

  CaffeSalomoni?.addEventListener('click', (): void => {
    const RESULT = DATA.filter((value) => value.brand === 'Caffe Salomoni');
    const PRODUCT = new Product(RESULT);

    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  });

  candy?.addEventListener('click', (): void => {
    const RESULT = DATA.filter((value) => value.brand === 'Дед Мороз у камина');
    const PRODUCT = new Product(RESULT);

    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  });

  pepsiCola?.addEventListener('click', (): void => {
    const RESULT = DATA.filter((value) => value.brand === 'pepsi-cola');
    const PRODUCT = new Product(RESULT);

    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  });
  bonaqua?.addEventListener('click', (): void => {
    const RESULT = DATA.filter((value) => value.brand === 'Bonaqua');
    const PRODUCT = new Product(RESULT);

    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  });

  sanpellegrinoAranciata?.addEventListener('click', (): void => {
    const RESULT = DATA.filter((value) => value.brand === 'Sanpellegrino Aranciata');
    const PRODUCT = new Product(RESULT);

    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  });

  rocs?.addEventListener('click', (): void => {
    const RESULT = DATA.filter((value) => value.brand === 'R.O.C.S.');
    const PRODUCT = new Product(RESULT);

    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  });

  //btn
  BTN_FILTER?.addEventListener('click', (): void => setAvailability());
  BTN_PRICE_MIN?.addEventListener('click', (): void => setSortMin('.products__price'));
  BTN_PRICE_MAX?.addEventListener('click', (): void => setSortMax('.products__price'));
  BTN_RAITING_MAX?.addEventListener('click', (): void => setSortMax('.raiting__num'));
  BTN_RAITING_MIN?.addEventListener('click', (): void => setSortMin('.raiting__num'));

  function setAvailability(): void {
    if (BOX_PRODUCT) {
      Array(...BOX_PRODUCT.children).forEach((value): void => {
        const AVAILABILITY = (value.querySelector('.products__availability') as HTMLElement).dataset.availability;
        AVAILABILITY === 'false' && value.remove();
      });
    }
  }

  function setSortMin(value: string): void {
    if (BOX_PRODUCT) {
      for (let i = 0; i < BOX_PRODUCT.children.length; i++) {
        for (let j = i; j < BOX_PRODUCT.children.length; j++) {
          const PRICE = Number(BOX_PRODUCT.children[i].querySelector(value)?.textContent);
          const PRICE_2 = Number(BOX_PRODUCT.children[j].querySelector(value)?.textContent);
          if (PRICE > PRICE_2) {
            const REPLACE_NODE = BOX_PRODUCT.replaceChild(BOX_PRODUCT.children[j], BOX_PRODUCT.children[i]);
            instertAfter(REPLACE_NODE, BOX_PRODUCT.children[i]);
          }
        }
      }
    }
  }

  function setSortMax(value: string): void {
    if (BOX_PRODUCT) {
      for (let i = 0; i < BOX_PRODUCT.children.length; i++) {
        for (let j = i; j < BOX_PRODUCT.children.length; j++) {
          const PRICE = Number(BOX_PRODUCT.children[i].querySelector(value)?.textContent);
          const PRICE_2 = Number(BOX_PRODUCT.children[j].querySelector(value)?.textContent);
          if (PRICE < PRICE_2) {
            const REPLACE_NODE = BOX_PRODUCT.replaceChild(BOX_PRODUCT.children[j], BOX_PRODUCT.children[i]);
            instertAfter(REPLACE_NODE, BOX_PRODUCT.children[i]);
          }
        }
      }
    }
  }

  function instertAfter(elem: Element, refElem: Element): Element | undefined {
    if (refElem.parentNode) {
      return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
    }
  }

  if (BOX_FILTER_BTN.length !== 0) {
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
}
