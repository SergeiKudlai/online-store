import { Product } from './cards_product';
import { IDATA } from './interface';

export class Cart extends Product {
  constructor(data: IDATA[], value: string) {
    super(data, value);
  }

  render(): void {
    this.data.forEach((value): void => {
      const { img, name, price, id, raiting, amount } = value;

      const ELEMENTS = `
          <article class="products__box" data-id="${id}" data-cart>
    
          <a class="products__img-box" href="#">
            <img class="products__img" src="${img}" alt="${name}">
          </a>
    
          <div class="products__box-text">

            <div class="products__box-rating raiting">
              <span class="raiting__num">${raiting}</span>
              <span class="raiting__img"></span>
            </div>
  
            <h3 class="products__title">
              <a class="products__title-link" href="#">${name}</a>
            </h3>
          </div>
      
          <div class="products__container">
    
            <span class="products__price-box">
              <span class="products__price">${price}</span>$
            </span>
      
            <ul class="products__amount amount">
              <li class="amount__item" type="button">
                <button class="amount__minus" type="button" data-minus>
                  <span class="sr-only">Увеличить количество</span>
                </button>
              </li>
      
              <li class="amount__item" data-num>${amount}</li>
      
              <li class="amount__item">
                <button class="amount__plus" type="button" data-plus>
                  <span class="sr-only">Уменьшить количество</span>
                </button>
              </li>
            </ul>
      
            <span class="products__total-price">
              Итого за товар: 
              <span class="products__total-sum">${Number(amount) * price}</span>
              $
            </span>
          </div>
        </article
          `;

      this.box && this.box.insertAdjacentHTML('beforeend', ELEMENTS);
    });
  }
}
