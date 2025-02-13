import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';  
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true, 
  imports: [CommonModule,RouterModule], 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods: Food[] = []; 

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
  }
}
