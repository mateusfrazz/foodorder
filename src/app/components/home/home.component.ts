import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodService } from '../../services/food/food.service';
import { Produto } from '../../Interfaces/Produto';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [
    CommonModule,
   
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  produtos: Produto[] = []

  constructor( private foodService: FoodService){}
  ngOnInit(): void {
     this.foodService.getProdutos().subscribe((dado)=>{
       this.produtos = dado;
       console.log(dado);
     })
  }
}
