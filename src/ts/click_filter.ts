import { Product } from './cards_product';
import { DATA } from './data';

export function clickedFilters(): void {
  const BTN_FILTER = document.querySelector('[data-availability]');
  const START_FILTER = document.querySelector('.products-filter__btn');
  const BTN_PRICE_MAX = document.querySelector('[data-price-max]');
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

  const BTNMIN = document.querySelector('.range-min');
  const BTNMAX = document.querySelector('.range-max');
  
  START_FILTER?.addEventListener('click', (): void => {
    const PRODUCT = new Product(DATA);
    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  });

  // filter: category
  DRINKS?.addEventListener('click', (): void => {
    const RESULT = DATA.filter((value) => value.id == 1);
    const PRODUCT = new Product(RESULT);

    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  })
  FRUITS?.addEventListener('click', (): void => {
    const RESULT = DATA.filter((value) => value.id == 2);
    const PRODUCT = new Product(RESULT);

    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  })
  VEGETABLES?.addEventListener('click', (): void => {
    const RESULT = DATA.filter((value) => value.id == 3);
    const PRODUCT = new Product(RESULT);

    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  })
  BERRY?.addEventListener('click', (): void => {
    const RESULT = DATA.filter((value) => value.id == 4);
    const PRODUCT = new Product(RESULT);

    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  })
  OTHER?.addEventListener('click', (): void => {
    const RESULT = DATA.filter((value) => value.id == 5);
    const PRODUCT = new Product(RESULT);

    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  })
  
  //filter: brands
  babGryadka?.addEventListener('click', (): void => {
    const RESULT = DATA.filter((value) => value.brand == 'Бабушкина грядка');
    const PRODUCT = new Product(RESULT);

    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  })
  magagaskar?.addEventListener('click', (): void => {
    const RESULT = DATA.filter((value) => value.brand == 'Мадагаскар');
    const PRODUCT = new Product(RESULT);

    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  })
  CaffeSalomoni?.addEventListener('click', (): void => {
    const RESULT = DATA.filter((value) => value.brand == 'Caffe Salomoni');
    const PRODUCT = new Product(RESULT);

    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  })
  candy?.addEventListener('click', (): void => {
    const RESULT = DATA.filter((value) => value.brand == 'Дед Мороз у камина');
    const PRODUCT = new Product(RESULT);

    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  })
  pepsiCola?.addEventListener('click', (): void => {
    const RESULT = DATA.filter((value) => value.brand == 'pepsi-cola');
    const PRODUCT = new Product(RESULT);

    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  })
  bonaqua?.addEventListener('click', (): void => {
    const RESULT = DATA.filter((value) => value.brand == 'Bonaqua');
    const PRODUCT = new Product(RESULT);

    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  })
  sanpellegrinoAranciata?.addEventListener('click', (): void => {
    const RESULT = DATA.filter((value) => value.brand == 'Sanpellegrino Aranciata');
    const PRODUCT = new Product(RESULT);

    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  })
  rocs?.addEventListener('click', (): void => {
    const RESULT = DATA.filter((value) => value.brand == 'R.O.C.S.');
    const PRODUCT = new Product(RESULT);

    if (PRODUCT.box) PRODUCT.box.innerHTML = '';
    PRODUCT.render();
  })

  //btn
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


console.log(BTNMIN);

  BTNMIN?.addEventListener('inpute', (e: Event): void => {
    console.log('hi');
    
    console.dir((document.querySelector('.input-min') as HTMLInputElement).value);
    
  })
}
