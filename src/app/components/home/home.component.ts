import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodService } from '../../services/food/food.service';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   foods:string[]=[];
   constructor(private fs:FoodService){}

   ngOnInit(): void {
    this.foods = this.fs.getAll();
   }
}
