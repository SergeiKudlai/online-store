import { IDATA } from './interface';

export function setPaginationCart() {
  const DATA_LOCAL_STORAGE = localStorage.getItem('card');
  const AMAOUNT_ELEMENTS = document.querySelector('.pagination__control') as HTMLInputElement;

  if (DATA_LOCAL_STORAGE && AMAOUNT_ELEMENTS) {
    const DATA = JSON.parse(DATA_LOCAL_STORAGE);

    AMAOUNT_ELEMENTS.addEventListener('change', () => {
      const { value } = AMAOUNT_ELEMENTS;

      const arr: IDATA[][] = [];

      for (let i = 0; i < DATA.length; i++) {
        const arrays: IDATA[] = [];
        if (arrays.length !== Number(value)) {
          // sda
        }
      }

      console.log(arr);
    });
  }
}
