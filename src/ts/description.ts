import { getCategoryProducts } from './data_retrieval';
import { IDATA } from './interface';

export class DescriptionProduct {
  private elem: IDATA;
  private box: HTMLElement | null;

  constructor(elem: IDATA) {
    this.elem = elem;
    this.box = document.querySelector('.main');
  }

  setBreadCrumbAdd(...arg: string[]) {
    const BOX_BREADCRUMB = this.box?.querySelector('.breadcrumb');
    const VALID_ELEMENTS = BOX_BREADCRUMB?.querySelectorAll('[data-valid]');

    if (VALID_ELEMENTS?.length !== 0) {
      if (VALID_ELEMENTS) {
        for (const ELEM of VALID_ELEMENTS) {
          ELEM.remove();
        }
      }
    }

    for (const KEY of arg) {
      const ELEM = `
        <li class="breadcrumb__item" data-valid>
          <span class="breadcrumb__text">${KEY}</span>
        </li>
      `;
      BOX_BREADCRUMB?.insertAdjacentHTML('beforeend', ELEM);
    }
  }

  setSectionRemove() {
    const PRODUCT_SECTION = this.box?.querySelector('#section-products') as HTMLElement;
    const CARD = this.box?.querySelector('#cart') as HTMLElement;
    const SEARCH_BOX = document.querySelector('.search_wrapper') as HTMLElement;
    if (PRODUCT_SECTION) PRODUCT_SECTION.remove();
    if (CARD) CARD.remove();
    if (SEARCH_BOX) SEARCH_BOX.remove();
  }

  render() {
    if (this.box?.querySelector('.description')) this.box?.querySelector('.description')?.remove();

    const { img, id, brand, availability, index, name, price, raiting } = this.elem;

    if (brand) this.setBreadCrumbAdd(getCategoryProducts(id), brand);

    const VALID_AVAILABILITY = availability ? 'есть в наличии' : 'нет в наличии';

    const ASIDE_ELEM = `
      <article class="description container" data-index=${index}>

        <div class="description__wrapper">

          <h3 class="description__title">${name}</h3>

          <div class="description__inner">

            <ul class="description__images">
              <li class="description__images-item">
                <img class="description__item-img" src="${img}">
              </li>

              <li class="description__images-item">
                <img class="description__item-img" src="${img}">
              </li>

              <li class="description__images-item">
                <img class="description__item-img" src="${img}">
              </li>
            </ul>

            <div class="description__box-img">
              <img class="description__img" src="${img}" alt="" width="200" height="200 ">
            </div>

            <ul class="description__list">
              <li class="description__list-item category">
                <p class="category__text">Категория</p>
                <span class="category__name">${getCategoryProducts(id)}</span>
              </li>

              <li class="description__list-item brand">
                <p class="brand__text">Бренд</p>
                <span class="brand__name">${brand}</span>
              </li>

              <li class="description__list-item raiting">
                <p class="raiting__text">Рейтинг</p>
                <span class="raiting__name">${raiting}</span>
              </li>

              <li class="description__list-item price">
                <p class="price__text">Цена</p>
                <span class="price__name">${price}$</span>
              </li>

              <li class="description__list-item availability">
                <p class="availability__text">Наличие на складе</p>
                <span class="availability__name">${VALID_AVAILABILITY}</span>
              </li>
            </ul>

          </div>

          <ul class="description__buttons btn-des">
            <li class="btn-des__item">  
              <button class="btn-des__button" type="button">В корзину</button>
            </li>

            <li class="btn-des__item">  
              <button class="btn-des__button" type="button">Быстрая покупка</button>
            </li>        
          </ul>
        </div> 
      </article>
    `;

    this.box?.insertAdjacentHTML('beforeend', ASIDE_ELEM);
  }
}
