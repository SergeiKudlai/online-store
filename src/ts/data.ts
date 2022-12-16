import { IDATA } from './interface';

import lemon from '../assets/images/product/lemon.jpg';
import coffee from '../assets/images/product/coffee.jpg';
import carrot from '../assets/images/product/carrot.jpg';
import dragonFruit from '../assets/images/product/dragon_fruit.jpg';
import juice from '../assets/images/product/juice.jpg';
import ketchup from '../assets/images/product/ketchup.jpg';
import paprik from '../assets/images/product/paprik.jpg';
import pineapple from '../assets/images/product/pineapple.jpg';
import beverage from '../assets/images/product/beverage.jpg';

/*
id : 1  -> напитки
id : 2  -> фрукты
id : 3  -> овощи 
id : 4  -> ягода
id : 5  -> разное
 */

export const DATA: IDATA[] = [
  { id: 4, name: 'Лимон, 1кг', img: lemon, price: 100 },
  { id: 1, name: 'Кофе с коноплей органический Caffé Salomoni 250г', img: coffee, price: 200 },
  { id: 3, name: 'Морковь молодая с бабушкиной грядки, 1кг', img: carrot, price: 300 },
  { id: 2, name: 'Питахайя красная с белой мякотью, 1шт', img: dragonFruit, price: 400 },
  { id: 1, name: 'Напиток сокосодержащий Sanpellegrino Aranciata Orange', img: juice, price: 500 },
  { id: 5, name: 'Кетчуп томатный детский органический', img: ketchup, price: 600 },
  { id: 3, name: 'Перец оранжевый, 1кг', img: paprik, price: 150 },
  { id: 2, name: 'Ананас, 1кг', img: pineapple, price: 560 },
  { id: 1, name: 'Напиток LIFELINE Intellectual со вкусом арбуза и яблока Фонте Аква 0.5 л', img: beverage, price: 70 },
];
