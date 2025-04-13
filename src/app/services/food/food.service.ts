import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[]{
    return [
      {
        id:1,
        name:'Batata Frita',
        cookTime: '10-20',
        price:10,
        favorite:false,
        origins: ['Estados Unidos'],
        star: 4.5,
        imageUrl: 'assets/food-1.jpg'
      },
      {
        id:2,
        name:'Hamburguer e Fritas',
        cookTime: '10-15',
        price:5,
        favorite:false,
        origins: ['us', 'germany'],
        star: 3.5,
        imageUrl: 'assets/food-2.jpg'
      },
      {
        id:3,
        name:'Burguer X Salad',
        cookTime: '10-30',
        price:20,
        favorite:false,
        origins: ['Brazil', 'germany'],
        star: 3.8,
        imageUrl: 'assets/food-3.jpg'
      },
      {
        id:4,
        name:'Pizza Peperone',
        cookTime: '10-40',
        price:50,
        favorite:false,
        origins: ['Italy', 'germany'],
        star: 3.9,
        imageUrl: 'assets/food-4.jpg'
      },
      {
        id:5,
        name:'Pizza Potatoes ',
        cookTime: '10-20',
        price:2,
        favorite:false,
        origins: ['Italy', 'France'],
        star: 3.7,
        imageUrl: 'assets/food-5.jpg'
      },
      {
        id:6,
        name:'Pizza Basil',
        cookTime: '10-40',
        price:40,
        favorite:false,
        origins: ['Italy', 'France'],
        star: 3.6,
        imageUrl: 'assets/food-6.jpg'
      },
      {
        id:7,
        name:'Soup Basil',
        cookTime: '10-60',
        price:30,
        favorite:false,
        origins: ['Italy', 'France'],
        star: 3.6,
        imageUrl: 'assets/food-7.jpg'
      },
      {
        id:8,
        name:'soup with bread',
        cookTime: '10-50',
        price:40,
        favorite:false,
        origins: ['Italy', 'France'],
        star: 3.4,
        imageUrl: 'assets/food-8.jpg'
      }
    ]
  }
}
