import { validPromo, discountValue } from './enum';
import { getAddDiscountPrice } from './discount';
import { getDataRetrieval } from './data_retrieval';
import { Cart } from './cart';

export function getPromo() {
  const PROMO_IN = document.querySelector('.promo__input');
  const CART = new Cart(getDataRetrieval());

  if (PROMO_IN) {
    PROMO_IN.addEventListener('change', () => {
      const PROMO_VALUE = (PROMO_IN as HTMLInputElement).value;

      if (PROMO_VALUE === validPromo.discount_10) {
        (PROMO_IN as HTMLInputElement).value = '';

        if (!localStorage.getItem('valid-10')) {
          localStorage.setItem('valid-10', JSON.stringify(true));
          CART.addSalePromo('10');
          getAddDiscountPrice(discountValue.discount_1, getDataRetrieval());
        } else {
          alert('Промокод уже введен!');
        }
      } else if (PROMO_VALUE === validPromo.discount_20) {
        (PROMO_IN as HTMLInputElement).value = '';

        if (!localStorage.getItem('valid-20')) {
          localStorage.setItem('valid-20', JSON.stringify(true));
          CART.addSalePromo('20');
          getAddDiscountPrice(discountValue.discount_2, getDataRetrieval());
        } else {
          alert('Промокод уже введен!');
        }
      } else {
        alert('Нет такого Промокода');
        (PROMO_IN as HTMLInputElement).value = '';
      }
    });
  }
}
