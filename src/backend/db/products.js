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
    image: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    categoryName: "mens",
    rating: 4.3
  },

  {
    _id: uuid(),
    title: "t-shirt",
    price: "2000",
    image: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    categoryName: "mens",
    rating: 3.3
  },
  {
    _id: uuid(),
    title: "t-shirt",
    price: "1000",
    image:"https://live.staticflickr.com/7387/11747860814_72a017f292_w.jpg",
    categoryName: "womens",
    rating: 2.3
  },
  {
    _id: uuid(),
    title: "t-shirt",
    price: "3000",
    image:"https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    categoryName: "mens",
    rating: 1.3
  },
  {
    _id: uuid(),
    title: "t-shirt",
    price: "1000",
    image:"https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    categoryName: "mens",
    rating: 4.3
  },
  {
    _id: uuid(),
    title: "t-shirt",
    price: "1000",
    image:"https://live.staticflickr.com/4046/5118584459_656aaa3654.jpg",
    categoryName: "womens",
    rating: 4.5
  }
 
];
