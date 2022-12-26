function getDataRetrieval() {
  const DATA_LOCAL_STORAGE = localStorage.getItem('card');
  if (DATA_LOCAL_STORAGE) return JSON.parse(DATA_LOCAL_STORAGE);
}

function getSumDiscount(): number {
  const VALID_STORAGE = localStorage.getItem('discount');

  if (VALID_STORAGE) {
    return JSON.parse(VALID_STORAGE).reduce((acc: number, value: number): number => acc + value, 0);
  }

  return 0;
}

function getSumTotalDiscount() {
  if (getSumDiscount()) {
    const TOTAL_SUM = localStorage.getItem('sum');

    if (TOTAL_SUM) {
      return JSON.parse(TOTAL_SUM) - (JSON.parse(TOTAL_SUM) * getSumDiscount()) / 100;
    }
  }

  return 0;
}

function getValidDiscount() {
  const VALID_LENGTH = localStorage.getItem('discount');
  if (VALID_LENGTH) return VALID_LENGTH.length <= 2 ? true : false;
  return true;
}

function getValidPromo() {
  const VALID_PROMO_10 = localStorage.getItem('valid-10');
  const VALID_PROMO_20 = localStorage.getItem('valid-20');

  if (VALID_PROMO_10) {
    if (JSON.parse(VALID_PROMO_10)) return '10';
  }

  if (VALID_PROMO_20) {
    if (JSON.parse(VALID_PROMO_20)) return '20';
  }

  return '';
}

export { getDataRetrieval, getSumDiscount, getSumTotalDiscount, getValidDiscount, getValidPromo };
