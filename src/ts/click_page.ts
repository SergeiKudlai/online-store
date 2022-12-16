export function getClickCounter() {
  document.addEventListener('click', (e: Event): void => {
    if (e.target) {
      const ELEM = e.target as HTMLButtonElement;

      ELEM.hasAttribute('data-minus') && setMinusCounter(ELEM);
      ELEM.hasAttribute('data-plus') && setPlusCounter(ELEM);
    }
  });

  function setPlusCounter(data: HTMLButtonElement): void {
    const BOX_ELEMENT = data.closest('.amount');

    if (BOX_ELEMENT) {
      const CURRENT_NUMBER = BOX_ELEMENT.querySelector('[data-num]');

      if (CURRENT_NUMBER) {
        let dataNum = +CURRENT_NUMBER.innerHTML;
        dataNum++;
        CURRENT_NUMBER.innerHTML = String(dataNum);
      }
    }
  }

  function setMinusCounter(data: HTMLButtonElement): void {
    const BOX_ELEMENT = data.closest('.amount');

    if (BOX_ELEMENT) {
      const CURRENT_NUMBER = BOX_ELEMENT.querySelector('[data-num]');

      if (CURRENT_NUMBER) {
        if (CURRENT_NUMBER.textContent === '1') return;

        let dataNum = +CURRENT_NUMBER.innerHTML;
        dataNum--;
        CURRENT_NUMBER.innerHTML = String(dataNum);
      }
    }
  }
}
