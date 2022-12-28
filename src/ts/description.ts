import { getCategoryProducts } from './data_retrieval';

export class DescriptionProduct {
  private elem: HTMLElement;
  private box: HTMLElement | null;

  constructor(elem: HTMLElement) {
    this.elem = elem;
    this.box = document.querySelector('.main');
  }

  setBreadCrumbAdd(...arg: string[]) {
    const BOX_BREADCRUMB = this.box?.querySelector('.breadcrumb');

    for (const KEY of arg) {
      const ELEM = `
        <li class="breadcrumb__item">
          <span class="breadcrumb__text">${KEY}</span>
        </li>
      `;
      BOX_BREADCRUMB?.insertAdjacentHTML('beforeend', ELEM);
    }
  }

  setSectionRemove() {
    const PRODUCT_SECTION = this.box?.querySelector('#section-products') as HTMLElement;
    if (PRODUCT_SECTION) PRODUCT_SECTION.classList.add('active');
  }

  render() {
    if (this.box?.querySelector('.description')) this.box?.querySelector('.description')?.remove();

    const ELEM_BOX = this.elem.closest('.products__box') as HTMLElement;
    const TITLE = ELEM_BOX?.querySelector('.products__title')?.textContent;
    const IMG = ELEM_BOX?.querySelector('.products__img')?.getAttribute('src');
    const BRAND = ELEM_BOX.querySelector('[data-brand]')?.textContent;
    const RAITING = ELEM_BOX.querySelector('.raiting__num')?.textContent;
    const PRICE = ELEM_BOX.querySelector('.products__price')?.textContent;
    const AVAILABILITY = ELEM_BOX.querySelector('.products__availability')?.textContent;

    if (BRAND) {
      this.setBreadCrumbAdd(getCategoryProducts(ELEM_BOX.dataset.id), BRAND);
    }

    const ASIDE_ELEM = `
      <article class="description container">

        <div class="description__wrapper">

          <h3 class="description__title">${TITLE}</h3>

          <div class="description__inner">

            <ul class="description__images">
              <li class="description__images-item">
                <img class="description__item-img" src="${IMG}">
              </li>

              <li class="description__images-item">
                <img class="description__item-img" src="${IMG}">
              </li>

              <li class="description__images-item">
                <img class="description__item-img" src="${IMG}">
              </li>
            </ul>

            <div class="description__box-img">
              <img class="description__img" src="${IMG}" alt="" width="200" height="200 ">
            </div>

            <ul class="description__list">
              <li class="description__list-item category">
                <p class="category__text">Категория</p>
                <span class="category__name">${getCategoryProducts(ELEM_BOX.dataset.id)}</span>
              </li>

              <li class="description__list-item brand">
                <p class="brand__text">Бренд</p>
                <span class="brand__name">${BRAND}</span>
              </li>

              <li class="description__list-item raiting">
                <p class="raiting__text">Рейтинг</p>
                <span class="raiting__name">${RAITING}</span>
              </li>

              <li class="description__list-item price">
                <p class="price__text">Цена</p>
                <span class="price__name">${PRICE}$</span>
              </li>

              <li class="description__list-item availability">
                <p class="availability__text">Наличие на складе</p>
                <span class="availability__name">${AVAILABILITY}</span>
              </li>
            </ul>

          </div>

        </div> 
      </article>
    `;

    this.box?.insertAdjacentHTML('beforeend', ASIDE_ELEM);
  }
}
