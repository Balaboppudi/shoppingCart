import{EventEmitter} from '@angular/core';
import{Ingredient} from '../shared/ingredient.model';
export class ShoppingListService{
  ingredientsChanged = new EventEmitter<Ingredient[]>();
    private  ingredients:Ingredient[] =[
    new Ingredient('Chicken',5),
    new Ingredient('Chillies',10),
    new Ingredient('pepper',1),
    new Ingredient('Salt',1)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){
      this.ingredients.push(ingredient);
      this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredients:Ingredient[]){
     this.ingredients.push(...ingredients);
       this.ingredientsChanged.emit(this.ingredients.slice());
  }

   
}