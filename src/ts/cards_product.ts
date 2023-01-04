import { IDATA } from './interface';
export class Product {
  public data: IDATA[];
  public box: HTMLElement | null;

  constructor(data: IDATA[], box = '.products') {
    this.data = data;
    this.box = document.querySelector(box);
  }

  render(): void {
    this.data.forEach((value): void => {
      const { img, name, price, id, availability, raiting, brand, index } = value;

      const CHECKED: string = availability ? 'в наличии' : 'нет в наличии';

      const ELEMENTS = `
      <article class="products__box" data-id="${id}" data-index="${index}">

      <span class="sr-only" data-brand>${brand}</span>

      <div class="products__img-box" data-img>
        <img class="products__img" src="${img}" alt="${name}">
      </div>

      <div class="products__box-text">
        <div class="products__box-availability">
          <span class="products__availability" data-availability="${availability}">${CHECKED}</span>

          <div class="products__box-rating raiting">
            <span class="raiting__num">${raiting}</span>
            <span class="raiting__img"></span>
          </div>
        </div>
  
        <h3 class="products__title">${name}</h3>
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
  
          <li class="amount__item" data-num>1</li>
  
          <li class="amount__item">
            <button class="amount__plus" type="button" data-plus>
              <span class="sr-only">Уменьшить количество</span>
            </button>
          </li>
        </ul>
  
        <button class="products__card" type="button" ${availability} data-card>
          <span class="sr-only">Корзина</span>
        </button>
      </div>
    </article
      `;

      this.box && this.box.insertAdjacentHTML('beforeend', ELEMENTS);
    });
  }
}
