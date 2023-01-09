import { IDATA } from './interface';

import lemon from '../assets/images/product/lemon.jpg';
import lemon2 from '../assets/images/product/lemon2.png';
import lemon3 from '../assets/images/product/lemon3.jpg';

import coffee from '../assets/images/product/coffee.jpg';
import coffee2 from '../assets/images/product/coffee2.jpg';
import coffee3 from '../assets/images/product/coffee3.png';

import carrot from '../assets/images/product/carrot.jpg';
import carrot2 from '../assets/images/product/carrot2.png';
import carrot3 from '../assets/images/product/carrot3.png';

import dragonFruit from '../assets/images/product/dragon_fruit.jpg';
import dragonFruit2 from '../assets/images/product/dragon_fruit2.jpg';
import dragonFruit3 from '../assets/images/product/dragon_fruit3.jpg';

import juice from '../assets/images/product/juice.jpg';
import juice2 from '../assets/images/product/juice2.jpg';
import juice3 from '../assets/images/product/juice3.jpg';

import paste from '../assets/images/product/paste.png';
import paste2 from '../assets/images/product/paste2.jpg';
import paste3 from '../assets/images/product/paste3.jpg';

import paprik from '../assets/images/product/paprik.jpg';
import paprik2 from '../assets/images/product/paprik2.jpg';
import paprik3 from '../assets/images/product/paprik3.jpg';

import pineapple from '../assets/images/product/pineapple.jpg';
import pineapple2 from '../assets/images/product/pineapple2.png';
import pineapple3 from '../assets/images/product/pineapple3.png';

import beverage from '../assets/images/product/beverage.jpg';
import beverage2 from '../assets/images/product/beverage2.jpg';
import beverage3 from '../assets/images/product/beverage3.jpg';

import pepsi from '../assets/images/product/pepsi.png';
import pepsi2 from '../assets/images/product/pepsi2.jpg';
import pepsi3 from '../assets/images/product/pepsi3.jpg';

import cola from '../assets/images/product/cola.png';
import cola2 from '../assets/images/product/cola2.png';
import cola3 from '../assets/images/product/cola3.jpg';

import bonaqua2 from '../assets/images/product/bonaqua2.png';
import bonaqua22 from '../assets/images/product/bonaqua2-2.jpg';
import bonaqua23 from '../assets/images/product/bonaqua2-3.png';

import bonaqua from '../assets/images/product/bonaqua.png';
import bonaqua12 from '../assets/images/product/bonaqua12.jpg';
import bonaqua13 from '../assets/images/product/bonaqua13.jpg';

import orange from '../assets/images/product/orange.png';
import orange2 from '../assets/images/product/orange2.png';
import orange3 from '../assets/images/product/orange3.png';

import banana from '../assets/images/product/banana.png';
import banana2 from '../assets/images/product/banana2.jpg';
import banana3 from '../assets/images/product/banana3.jpg';

import granat from '../assets/images/product/granat.png';
import granat2 from '../assets/images/product/granat2.jpg';
import granat3 from '../assets/images/product/granat3.jpg';

import pepper_red from '../assets/images/product/pepper-red.png';
import pepper_red2 from '../assets/images/product/pepper-red2.jpg';
import pepper_red3 from '../assets/images/product/pepper-red3.png';

import cabbage from '../assets/images/product/cabbage.png';
import cabbage2 from '../assets/images/product/cabbage2.jpg';
import cabbage3 from '../assets/images/product/cabbage3.jpg';

import strawberry from '../assets/images/product/strawberry.png';
import strawberry2 from '../assets/images/product/strawberry2.png';
import strawberry3 from '../assets/images/product/strawberry3.png';

import сranberry from '../assets/images/product/сranberry.png';
import сranberry2 from '../assets/images/product/сranberry2.png';
import сranberry3 from '../assets/images/product/сranberry3.jpg';

import сherry from '../assets/images/product/сherry.png';
import сherry2 from '../assets/images/product/сherry2.jpg';
import сherry3 from '../assets/images/product/сherry3.jpg';

import star from '../assets/images/product/star.png';
import star2 from '../assets/images/product/star2.png';
import star3 from '../assets/images/product/star3.png';

import candy from '../assets/images/product/candy.png';
import candy2 from '../assets/images/product/candy2.jpg';
import candy3 from '../assets/images/product/candy3.jpg';

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
    images: [strawberry2, strawberry3],
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
    images: [lemon2, lemon3],
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
    images: [coffee2, coffee3],
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
    images: [candy2, candy3],
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
    images: [banana2, banana3],
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
    images: [pepsi2, pepsi3],
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
    images: [pepper_red2, pepper_red3],
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
    images: [cola2, cola3],
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
    images: [orange2, orange3],
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
    images: [bonaqua22, bonaqua23],
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
    images: [сherry2, сherry3],
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
    images: [star2, star3],
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
    images: [cabbage2, cabbage3],
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
    images: [bonaqua12, bonaqua13],
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
    images: [carrot2, carrot3],
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
    images: [dragonFruit2, dragonFruit3],
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
    images: [granat2, granat3],
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
    images: [juice2, juice3],
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
    images: [сranberry2, сranberry3],
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
    images: [paste2, paste3],
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
    images: [paprik2, paprik3],
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
    images: [pineapple2, pineapple3],
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
    images: [beverage2, beverage3],
  },
];
