import { IDATA } from './interface';

import lemon from '../assets/images/product/lemon.jpg';
import coffee from '../assets/images/product/coffee.jpg';
import carrot from '../assets/images/product/carrot.jpg';
import dragonFruit from '../assets/images/product/dragon_fruit.jpg';
import juice from '../assets/images/product/juice.jpg';
import paste from '../assets/images/product/paste.png';
import paprik from '../assets/images/product/paprik.jpg';
import pineapple from '../assets/images/product/pineapple.jpg';
import beverage from '../assets/images/product/beverage.jpg';
import pepsi from '../assets/images/product/pepsi.png';
import cola from '../assets/images/product/cola.png';
import bonaqua2 from '../assets/images/product/bonaqua2.png';
import bonaqua from '../assets/images/product/bonaqua.png';
import orange from '../assets/images/product/orange.png';
import banana from '../assets/images/product/banana.png';
import granat from '../assets/images/product/granat.png';
import pepper_red from '../assets/images/product/pepper-red.png';
import cabbage from '../assets/images/product/cabbage.png';
import strawberry from '../assets/images/product/strawberry.png';
import сranberry from '../assets/images/product/сranberry.png';
import сherry from '../assets/images/product/сherry.png';
import star from '../assets/images/product/star.png';
import candy from '../assets/images/product/candy.png';

/*
id : 1  -> напитки
id : 2  -> фрукты
id : 3  -> овощи 
id : 4  -> ягода
id : 5  -> разное
 */

export const DATA: IDATA[] = [
  {
    index: 1,
    id: 4,
    name: 'Клубника быстрозамороженная, 1 кг, фасовка 0,8 -1,0 кг',
    img: strawberry,
    price: 30,
    availability: true,
    brand: 'Бабушкина грядка',
    raiting: 4.0,
  },
  {
    index: 2,
    id: 4,
    name: 'Лимон, 1кг',
    img: lemon,
    price: 100,
    availability: true,
    brand: 'Мадагаскар',
    raiting: 3.0,
  },
  {
    index: 3,
    id: 1,
    name: 'Кофе с коноплей органический Caffe Salomoni 250г',
    img: coffee,
    price: 200,
    availability: true,
    brand: 'Caffe Salomoni',
    raiting: 4.5,
  },
  {
    index: 4,
    id: 5,
    name: 'Набор шоколадных конфет ассорти «Дед Мороз у камина» 255 г',
    img: candy,
    price: 70,
    availability: true,
    brand: 'Дед Мороз у камина',
    raiting: 3.0,
  },
  {
    index: 5,
    id: 2,
    name: 'Бананы, 1 кг, фасовка 1 - 1,2 кг',
    img: banana,
    price: 140,
    availability: true,
    brand: 'Мадагаскар',
    raiting: 4.2,
  },
  {
    index: 6,
    id: 1,
    name: 'Напиток газированный «Pepsi» 1 л',
    img: pepsi,
    price: 70,
    availability: true,
    brand: 'pepsi-cola',
    raiting: 3.1,
  },
  {
    index: 7,
    id: 3,
    name: 'Перец красный, 1 кг, фасовка 0,6 -0,8 кг',
    img: pepper_red,
    price: 70,
    availability: true,
    brand: 'Бабушкина грядка',
    raiting: 5.0,
  },
  {
    index: 8,
    id: 1,
    name: 'Напиток газированный Coca-Cola 1 л',
    img: cola,
    price: 70,
    availability: true,
    brand: 'pepsi-cola',
    raiting: 3.3,
  },
  {
    index: 9,
    id: 2,
    name: 'Мандарин, 1 кг, фасовка 1 - 1,2 кг',
    img: orange,
    price: 135,
    availability: true,
    brand: 'Мадагаскар',
    raiting: 4.8,
  },
  {
    index: 10,
    id: 1,
    name: 'Вода питьевая «Bonaqua» среднегазированная 1 л',
    img: bonaqua2,
    price: 50,
    availability: true,
    brand: 'Bonaqua',
    raiting: 4.9,
  },
  {
    index: 11,
    id: 4,
    name: 'Черешня, 1 кг, фасовка 0,2 - 0,25 кг',
    img: сherry,
    price: 35,
    availability: true,
    brand: 'Свой огород',
    raiting: 2.1,
  },
  {
    index: 12,
    id: 5,
    name: 'Верхушка на елку «Волшебная страна» 15х15 см',
    img: star,
    price: 400,
    availability: true,
    brand: 'Волшебная страна',
    raiting: 5.0,
  },
  {
    index: 13,
    id: 3,
    name: 'Капуста белокачанная, 1 кг, фасовка 2,2 - 3,0 кг',
    img: cabbage,
    price: 70,
    availability: true,
    brand: 'Свой огород',
    raiting: 3.4,
  },
  {
    index: 14,
    id: 1,
    name: 'Вода питьевая «Bonaqua» сильногазированная 1 л',
    img: bonaqua,
    price: 50,
    availability: true,
    brand: 'Bonaqua',
    raiting: 4.7,
  },
  {
    index: 15,
    id: 3,
    name: 'Морковь молодая с бабушкиной грядки, 1кг',
    img: carrot,
    price: 300,
    availability: false,
    brand: 'Свой огород',
    raiting: 4.6,
  },
  {
    index: 16,
    id: 2,
    name: 'Питахайя красная с белой мякотью, 1шт',
    img: dragonFruit,
    price: 400,
    availability: true,
    brand: 'Жаркая страна',
    raiting: 3.9,
  },
  {
    index: 17,
    id: 2,
    name: 'Гранат, 1 кг, фасовка 0,7 - 0,9 кг',
    img: granat,
    price: 155,
    availability: true,
    brand: 'Жаркая страна',
    raiting: 4.1,
  },
  {
    index: 18,
    id: 1,
    name: 'Напиток сокосодержащий Sanpellegrino Aranciata Orange',
    img: juice,
    price: 500,
    availability: false,
    brand: 'Sanpellegrino Aranciata',
    raiting: 4.8,
  },
  {
    index: 19,
    id: 4,
    name: 'Клюква лесная, 180 г',
    img: сranberry,
    price: 35,
    availability: true,
    brand: 'Бабушкина грядка',
    raiting: 4.4,
  },
  {
    index: 20,
    id: 5,
    name: 'Зубная паста «R.O.C.S.» максимальная свежесть, 94 г г',
    img: paste,
    price: 150,
    availability: true,
    brand: 'R.O.C.S.',
    raiting: 5.0,
  },
  {
    index: 21,
    id: 3,
    name: 'Перец оранжевый, 1кг',
    img: paprik,
    price: 150,
    availability: true,
    brand: 'Бабушкина грядка',
    raiting: 4.3,
  },
  {
    index: 21,
    id: 2,
    name: 'Ананас, 1кг',
    img: pineapple,
    price: 450,
    availability: true,
    brand: 'Мадагаскар',
    raiting: 4.0,
  },
  {
    index: 22,
    id: 1,
    name: 'Напиток LIFELINE Intellectual со вкусом арбуза и яблока Фонте Аква 0.5 л',
    img: beverage,
    price: 70,
    availability: false,
    brand: 'LIFELINE Intellectual',
    raiting: 2.5,
  },
];
