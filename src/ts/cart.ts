import { Product } from './cards_product';
import { IDATA } from './interface';

export class Cart extends Product {
  public info: HTMLElement | null;
  public controlBox: HTMLElement | null;
  public pagination_inner: HTMLElement | null;
  public box_promo: HTMLElement | null;

  constructor(data: IDATA[], value = '.product') {
    super(data, value);
    this.info = document.querySelector('.info');
    this.controlBox = document.querySelector('.pagination');
    this.pagination_inner = document.querySelector('.pagination__inner');
    this.box_promo = document.querySelector('.promo');
  }

  addSalePromo(value: string) {
    const SPAN_EL = document.createElement('span');
    SPAN_EL.className = 'promo__sale-text';
    SPAN_EL.textContent = `Ваша Скидка ${value}%`;

    const BTN_EL = document.createElement('button');
    BTN_EL.className = 'promo__btn';
    BTN_EL.textContent = 'Отменить скидку';
    BTN_EL.setAttribute('type', 'button');
    BTN_EL.setAttribute('data-sale', value);

    this.box_promo?.append(SPAN_EL);
    this.box_promo?.append(BTN_EL);
  }

  addCartPromo() {
    const LAB_EL = document.createElement('label');
    LAB_EL.className = 'promo__text';
    LAB_EL.textContent = 'Введите промо код';
    LAB_EL.setAttribute('for', 'promo');

    const IN_EL = document.createElement('input');
    IN_EL.className = 'promo__input';
    IN_EL.setAttribute('type', 'text');
    IN_EL.setAttribute('id', 'promo');
    IN_EL.setAttribute('name', 'promo');
    IN_EL.setAttribute('placeholder', 'Введите промо');
    IN_EL.setAttribute('required', '');

    this.box_promo?.append(LAB_EL);
    this.box_promo?.append(IN_EL);
  }

  addCartIngo(value: number, price: number): void {
    if (this.info) this.info.innerHTML = '';

    const TITLE = document.createElement('h3');
    TITLE.textContent = 'Информация о корзине:';
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

    const BTN_ORDER = document.createElement('button');
    BTN_ORDER.className = 'info__btn-order';
    BTN_ORDER.setAttribute('type', 'button');
    BTN_ORDER.setAttribute('data-order', '');
    BTN_ORDER.textContent = 'Оформить заказ';

    this.info?.append(BTN_ORDER);
  }

  addInputCart(): void {
    const EL_LABEL = document.createElement('label');
    EL_LABEL.setAttribute('for', 'amount');
    EL_LABEL.className = 'pagination__name';
    EL_LABEL.textContent = 'Введите количетсво строк:';

    const EL_IN = document.createElement('input');
    EL_IN.className = 'pagination__control';
    EL_IN.setAttribute('type', 'text');
    EL_IN.setAttribute('value', '3');
    EL_IN.setAttribute('id', 'amount');

    this.controlBox?.append(EL_IN);
    this.controlBox?.append(EL_LABEL);
  }

  addPaginationBtn(elem: HTMLElement): void {
    if (this.pagination_inner) this.pagination_inner.innerHTML = '';
    const BTN_NEXT = document.createElement('button');
    BTN_NEXT.classList.add('pagination__btn');
    BTN_NEXT.classList.add('pagination__btn-next');
    BTN_NEXT.setAttribute('type', 'button');

    const BTN_PREV = document.createElement('button');
    BTN_PREV.classList.add('pagination__btn');
    BTN_PREV.classList.add('pagination__btn-prev');
    BTN_PREV.setAttribute('type', 'button');

    this.pagination_inner?.append(BTN_PREV);
    this.pagination_inner?.append(elem);
    this.pagination_inner?.append(BTN_NEXT);
  }

  render(): void {
    if (this.box) this.box.innerHTML = '';

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
