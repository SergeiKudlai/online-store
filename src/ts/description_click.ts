import { DescriptionProduct } from './description';

export function getDescription(elem: HTMLElement) {
  const DESCRIPTION = new DescriptionProduct(elem);
  DESCRIPTION.setSectionRemove();
  DESCRIPTION.render();
}
