let myDropdownCategory = document.querySelector(".dropbtn-cat") as HTMLElement;
let dropdownContent = document.querySelector(".dropdown-active") as HTMLElement;

let myDropdownRecoment = document.querySelector(".dropbtn-recomend") as HTMLElement;
let dropdownRecomend = document.querySelector(".dropdown-active-rec") as HTMLElement;

let myDropdownPrice = document.querySelector(".dropbtn-price") as HTMLElement;
let dropdownPrice = document.querySelector(".dropdown-active-price") as HTMLElement;

myDropdownCategory.addEventListener('click', () => {
    dropdownContent.classList.toggle("show");
  })

myDropdownRecoment.addEventListener('click', () => {
    dropdownRecomend.classList.toggle("show");
  })

  myDropdownPrice.addEventListener('click', () => {
    dropdownPrice.classList.toggle("show");
  })
  
  const rangeInput = document.querySelectorAll(".range-input input") as NodeListOf<Element>;
  const priceInput = document.querySelectorAll(".price-input input") as NodeListOf<HTMLInputElement>;
  const range = document.querySelector(".slider .progress") as HTMLElement;
  let priceGap = 1000;

// priceInput.forEach((input) => {
//   input.addEventListener("input", (e: any): void => {
//     let minPrice: number = parseInt(priceInput[0].value),
//       maxPrice: number = parseInt(priceInput[1].value);

//     if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
//       if (e.target.className === "input-min") {
//         rangeInput[0].value = minPrice;
//         range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
//       } else {
//         rangeInput[1].value = maxPrice;
//         range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
//       }
//     }
//   });
// });

// rangeInput.forEach((input: any) => {
//   input.addEventListener("input", (e) => {
//     let minVal: number = parseInt(rangeInput[0].value),
//       maxVal: number = parseInt(rangeInput[1].value);

//     if (maxVal - minVal < priceGap) {
//       if (e.target.className === "range-min") {
//         rangeInput[0].value = maxVal - priceGap;
//       } else {
//         rangeInput[1].value = minVal + priceGap;
//       }
//     } else {
//       (priceInput[0].value) = minVal;
//       priceInput[1].value = maxVal;
//       range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
//       range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
//     }
//   });
// });
