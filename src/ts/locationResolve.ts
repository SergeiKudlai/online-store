import { DATA } from './data';
import { getDescription } from './description_click';

export function setLocationResolve(value: string, elem?: HTMLElement) {
  if (elem) {
    const ELEM_BOX = elem.closest('.products__box') as HTMLElement;
    window.location.hash = `${value}-${ELEM_BOX.dataset.index}`;
  } else {
    if (value === '0' || !value || DATA.length - 1 < +value) {
      window.location.replace('./notfound.html');
      return;
    } else {
      for (const ELEM of DATA) {
        if (ELEM.index === +value) getDescription(ELEM);
      }
    }
  }
}
