import { IDATA } from './interface';
import { Cart } from './cart';

export function setPaginationCart() {
  const DATA_LOCAL_STORAGE = localStorage.getItem('card');

  let DATA_PARSE: IDATA[] = [];

  if (DATA_LOCAL_STORAGE) DATA_PARSE = JSON.parse(DATA_LOCAL_STORAGE);

  let rows = 3;
  let currentPage = 1;

  function setDisplayList(arrData: IDATA[], rowPerPage: number, page: number): void {
    page--;
    const START = rowPerPage * page;
    const END = START + rowPerPage;
    const PAGINATION_DATA = arrData.slice(START, END);
    const CART = new Cart(PAGINATION_DATA);
    CART.render();
  }

  function displayPagination(arrData: IDATA[], rowPerPage: number): void {
    const PAGE_COUNT = Math.ceil(arrData.length / rowPerPage);
    const EL_UL = document.createElement('ul');
    EL_UL.className = 'pagination__list';

    for (let i = 0; i < PAGE_COUNT; i++) {
      const LI_EL = displayPaginationBtn(i + 1);
      EL_UL.append(LI_EL);
    }

    const CART = new Cart(arrData);
    CART.addPaginationBtn(EL_UL);
  }

  function displayPaginationBtn(page: number): HTMLElement {
    const LI_EL = document.createElement('li');
    LI_EL.className = 'pagination__item';
    LI_EL.textContent = String(page);

    LI_EL.addEventListener('click', (): void => {
      currentPage = page;

      const DATA_LOCAL_STORAGE = localStorage.getItem('card');
      if (DATA_LOCAL_STORAGE) {
        const DATA_PARSE = JSON.parse(DATA_LOCAL_STORAGE);
        setDisplayList(DATA_PARSE, rows, currentPage);
      }
    });

    return LI_EL;
  }

  setDisplayList(DATA_PARSE, rows, currentPage);
  displayPagination(DATA_PARSE, rows);

  const INPUT = document.querySelector('.pagination__control');
  let position = 0;

  if (INPUT) {
    INPUT.addEventListener('change', (): void => {
      rows = Number((INPUT as HTMLInputElement).value);
      setDisplayList(DATA_PARSE, rows, currentPage);
      displayPagination(DATA_PARSE, rows);
      position = 0;
    });
  }

  document.addEventListener('click', (e) => {
    (e.target as HTMLElement).classList.contains('pagination__btn-prev') && calcWidthElement(false);
    (e.target as HTMLElement).classList.contains('pagination__btn-next') && calcWidthElement(true);
  });

  function calcWidthElement(valid: boolean) {
    const PAG_ELEM = document.querySelectorAll('.pagination__item');
    const WIDTH_ELEM = (PAG_ELEM[0] as HTMLElement).offsetWidth;
    const VALID_ARRAY = PAG_ELEM.length * WIDTH_ELEM - WIDTH_ELEM;

    if (valid) {
      if (position >= VALID_ARRAY) return;
      position += WIDTH_ELEM;
      setPositionElem();
    }

    if (!valid) {
      if (position <= 0) return;
      position -= WIDTH_ELEM;
      setPositionElem();
    }
  }

  function setPositionElem() {
    const PAG_ELEM = document.querySelectorAll('.pagination__item');
    PAG_ELEM.forEach((value) => ((value as HTMLElement).style.left = -position + 'px'));
  }
}
