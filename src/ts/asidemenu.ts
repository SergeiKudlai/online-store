export function clickAside() {
  const myDropdownCategory = document.querySelector('.aside__category');
  const myDropdownRecoment = document.querySelector('.aside__category-show');
  const LINK_BREND = document.querySelectorAll('.dropdown-content__link-brend');
  const LINK = document.querySelectorAll('.dropdown-content__link');
  const myDropdownPrice = document.querySelector('.aside__category-price');
  const dropdownPrice = document.querySelector('.dropdown-active-price');

  if (myDropdownCategory && myDropdownRecoment) {
    myDropdownCategory.addEventListener('click', () => setAddClases(LINK, '.dropbtn-cat'));
    myDropdownRecoment.addEventListener('click', () => setAddClases(LINK_BREND, '.dropbtn-recomend'));
  }

  function setAddClases(box: NodeList, values: string): void {
    box.forEach((value) => (value as HTMLElement).classList.toggle('show'));
    const ELEMENT = <HTMLElement>document.querySelector(values);
    if (ELEMENT) {
      ELEMENT.classList.toggle('active');
      ELEMENT.classList.contains('active')
        ? (ELEMENT.style.transform = 'rotate(0)')
        : (ELEMENT.style.transform = 'rotate(180deg)');
    }
  }

  if (myDropdownPrice && dropdownPrice) {
    myDropdownPrice.addEventListener('click', (): void => {
      dropdownPrice.classList.toggle('show');
      const ELEM = <HTMLElement>document.querySelector('.dropbtn-price');

      if (ELEM) {
        ELEM.classList.toggle('active');
        ELEM.classList.contains('active')
          ? (ELEM.style.transform = 'rotate(0)')
          : (ELEM.style.transform = 'rotate(180deg)');
      }
    });
  }

  const rangeInput = document.querySelectorAll('.range-input input'); //as NodeListOf<Element>;
  const priceInput = document.querySelectorAll('.price-input input');
  const range = document.querySelector('.slider .progress') as HTMLElement;
  const priceGap = 100;

  priceInput.forEach((input) => {
    input.addEventListener('input', (e: Event): void => {
      const minPrice = Number((priceInput[0] as HTMLInputElement).value),
        maxPrice = Number((priceInput[1] as HTMLInputElement).value);

      if (maxPrice - minPrice >= priceGap && maxPrice <= Number(rangeInput[1].getAttribute('max'))) {
        if ((e.target as HTMLElement).className === 'input-min') {
          (rangeInput[0] as HTMLInputElement).value = minPrice.toString();
          range.style.left = (minPrice / Number(rangeInput[0].getAttribute('max'))) * 100 + '%';
        } else {
          (rangeInput[1] as HTMLInputElement).value = String(minPrice);
          if (range) {
            range.style.right = 100 - (maxPrice / Number(rangeInput[1].getAttribute('max'))) * 100 + '%';
          }
        }
      }
    });
  });

  rangeInput.forEach((input) => {
    input.addEventListener('input', (e: Event) => {
      const minVal = Number((rangeInput[0] as HTMLInputElement).value),
        maxVal = Number((rangeInput[1] as HTMLInputElement).value);

      if (maxVal - minVal < priceGap) {
        if ((e.target as HTMLElement).className === 'range-min') {
          (rangeInput[0] as HTMLInputElement).value = (maxVal - priceGap).toString();
        } else {
          (rangeInput[1] as HTMLInputElement).value = (minVal + priceGap).toString();
        }
      } else {
        (priceInput[0] as HTMLInputElement).value = minVal.toString();
        (priceInput[1] as HTMLInputElement).value = maxVal.toString();
        range.style.left = (minVal / Number(rangeInput[0].getAttribute('max'))) * 100 + '%';
        range.style.right = 100 - (maxVal / Number(rangeInput[1].getAttribute('max'))) * 100 + '%';
      }
    });
  });
}
