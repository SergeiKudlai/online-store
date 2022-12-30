import { DescriptionProduct } from './description';
import { IDATA } from './interface';

export function getDescription(elem: IDATA) {
  const DESCRIPTION = new DescriptionProduct(elem);
  DESCRIPTION.setSectionRemove();
  DESCRIPTION.render();
}
