import { Component, OnInit } from '@angular/core';
import{Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[] =[
    new Ingredient('Chicken',5),
    new Ingredient('Chillies',10),
    new Ingredient('pepper',1),
    new Ingredient('Salt',1)
  ];
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient:Ingredient){
    console.log(ingredient);
   this.ingredients.push(ingredient);
  }

}
