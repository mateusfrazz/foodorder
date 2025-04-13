import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodService } from '../../services/food/food.service';
import { Foods } from '../../shared/models/food';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   foods:Foods[]=[];
   isFavorite = false;
   constructor(private fs:FoodService){}
  
   ngOnInit(): void {
    this.foods = this.fs.getAll();
   }

   toogleFavorite() {
    this.isFavorite = !this.isFavorite
   }
}
