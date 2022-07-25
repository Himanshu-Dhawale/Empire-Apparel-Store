import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "t-shirt",
    price: "2000",
    image: "https://m.media-amazon.com/images/I/5145t8LnJkL._AC_UL320_.jpg",
    categoryName: "mens",
    rating: 4.3
  },

  {
    _id: uuid(),
    title: " Men's Regular T-Shirt",
    price: "2000",
    image: "https://m.media-amazon.com/images/I/715t4rJ7s7L._AC_UL320_.jpg",
    categoryName: "mens",
    rating: 3.3
  },
  {
    _id: uuid(),
    title: "Jumpsuit",
    price: "1000",
    image:"https://m.media-amazon.com/images/I/71glRz1LeVL._AC_UL320_.jpghttps://m.media-amazon.com/images/I/71glRz1LeVL._AC_UL320_.jpg",
    categoryName: "womens",
    rating: 2.3
  },
  {
    _id: uuid(),
    title: "Men's Loose Shirt",
    price: "3000",
    image:"https://m.media-amazon.com/images/I/912rwQT24kL._UL1500_.jpg",
    categoryName: "mens",
    rating: 1.3
  },
  {
    _id: uuid(),
    title: "Oversized Cotton Blend Half Sleeve",
    price: "1000",
    image:"https://m.media-amazon.com/images/I/71+VSLa9joL._AC_UL320_.jpg",
    categoryName: "mens",
    rating: 4.3
  },
  {
    _id: uuid(),
    title: "t-shirt",
    price: "1000",
    image:"https://m.media-amazon.com/images/I/71fXwaZj3vS._AC_UL320_.jpg",
    categoryName: "womens",
    rating: 4.5
  },
  {
    _id: uuid(),
    title: "t-shirt",
    price: "1000",
    image:"https://img.faballey.com/images/Product/ITN00294Z/1.jpg",
    categoryName: "womens",
    rating: 4.5
  },
  {
    _id: uuid(),
    title: "Kurti",
    price: "1000",
    image:"https://m.media-amazon.com/images/I/61zNbUnGwNL._UL1500_.jpg",
    categoryName: "womens",
    rating: 4.5
  }, 
];
