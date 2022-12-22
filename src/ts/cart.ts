import { Product } from './cards_product';
import { IDATA } from './interface';

export class Cart extends Product {
  public info: HTMLElement | null;
  public boxProduct: HTMLElement | null;

  constructor(data: IDATA[], value = '.product') {
    super(data, value);
    this.info = document.querySelector('.info');
    this.boxProduct = document.querySelector('.cart__product');
  }

  addCartIngo(value: number, price: number) {
    if (this.info) this.info.innerHTML = '';

    const TITLE = document.createElement('h3');
    TITLE.textContent = 'Информация о товаре';
    TITLE.className = 'info__title';
    this.info?.append(TITLE);

    const PRODUCT_TEXT = document.createElement('p');
    PRODUCT_TEXT.className = 'info__text';
    PRODUCT_TEXT.textContent = 'Количество товаров:';

    const PRODUCT_SUM = document.createElement('span');
    PRODUCT_SUM.className = 'info__sum';
    PRODUCT_SUM.textContent = String(value);

    PRODUCT_TEXT.append(PRODUCT_SUM);
    this.info?.append(PRODUCT_TEXT);

    const PRODUCT_TOTAL = document.createElement('p');
    PRODUCT_TOTAL.className = 'info__total';
    PRODUCT_TOTAL.textContent = 'Общая цена:';

    const PRODUCT_TOTAL_SUM = document.createElement('span');
    PRODUCT_TOTAL_SUM.className = 'info__total-sum';
    PRODUCT_TOTAL_SUM.textContent = `${String(price)} $`;

    PRODUCT_TOTAL.append(PRODUCT_TOTAL_SUM);
    this.info?.append(PRODUCT_TOTAL);

    const BTN_REMOVE = document.createElement('button');
    BTN_REMOVE.className = 'info__btn-remove';
    BTN_REMOVE.setAttribute('type', 'button');
    BTN_REMOVE.setAttribute('data-remove', '');
    BTN_REMOVE.textContent = 'Очистить корзину';

    this.info?.append(BTN_REMOVE);
  }

  render(): void {
    const PAGINATION = `
      <div class="pagination">
        <label for="control">
          Количество:
          <input class="pagination__control" type="text" id="control" value="3">
        </label>

        <ul class="pagination__list"></ul>
      </div>
    `;

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
    this.boxProduct?.insertAdjacentHTML('beforeend', PAGINATION);
  }
}
