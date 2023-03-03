import { IDATA } from './interface';
import { Cart } from './cart';
import { getSumDiscount, getSumTotalDiscount } from './data_retrieval';

function getAddDiscountPrice(value: number, data: IDATA[]) {
  const VALID_STORAGE = localStorage.getItem('discount');
  let result: number[];

  VALID_STORAGE ? (result = JSON.parse(VALID_STORAGE)) : (result = []);

  result.push(value);

  localStorage.setItem('discount', JSON.stringify(result));

  setAddPageDiscount(data);
}

function setAddPageDiscount(data: IDATA[]) {
  const CART = new Cart(data);

  if (!getSumDiscount()) {
    CART.addDiscount(getSumDiscount(), getSumTotalDiscount(), true);
  } else {
    CART.addDiscount(getSumDiscount(), getSumTotalDiscount(), false);
  }
}

export { getAddDiscountPrice, setAddPageDiscount };
