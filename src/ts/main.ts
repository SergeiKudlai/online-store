const myDropdownCategory = document.querySelector('.dropbtn-cat');
const dropdownContent = document.querySelector('.dropdown-active');

const myDropdownRecoment = document.querySelector('.dropbtn-recomend');
const dropdownRecomend = document.querySelector('.dropdown-active-rec');

const myDropdownPrice = document.querySelector('.dropbtn-price');
const dropdownPrice = document.querySelector('.dropdown-active-price');

if (myDropdownCategory && dropdownContent) {
  myDropdownCategory.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
  });
}

if (myDropdownRecoment && dropdownRecomend) {
  myDropdownRecoment.addEventListener('click', () => {
    dropdownRecomend.classList.toggle('show');
  });
}

if (myDropdownPrice && dropdownPrice) {
  myDropdownPrice.addEventListener('click', () => {
    dropdownPrice.classList.toggle('show');
  });
}

const rangeInput = document.querySelectorAll('.range-input input'); //as NodeListOf<Element>;
const priceInput = document.querySelectorAll('.price-input input');
const range = document.querySelector('.slider .progress') as HTMLElement;
const priceGap = 1000;

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
