import { DATA } from './data';
import { Product } from './cards_product';
import { getClickCounter } from './click_page';

getClickCounter();

const product = new Product(DATA);

product.render();
