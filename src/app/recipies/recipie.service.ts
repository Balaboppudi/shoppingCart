import{Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Recipie} from './recipie.model';
import{ ShoppingListService} from '../shopping-list/shopping-list.service';
import{Subject} from 'rxjs/Subject';
@Injectable()
export class RecipieService{
recipiesChanged = new Subject<Recipie[]>();

   private recipies:Recipie [] =[
    new Recipie('Chicken 65','need to deep fry the chicken','http://4.bp.blogspot.com/-s8_us8l-ddI/UaCwZCiORuI/AAAAAAAAC34/oo8viQ4tevw/s1600/019.JPG',[
        new Ingredient('Chicken',5),
        new Ingredient('Chilli',10)

    ]),
       new Recipie('Pav bhaji','need to toast the bread and make curry','https://i.ytimg.com/vi/rSLiOqJ2egU/maxresdefault.jpg',[
        new Ingredient('Bread',5),
        new Ingredient('Potatoes',10)
       ])
  ];
  constructor(private shoppingListService:ShoppingListService){

  }

  getRecipies() {
      return this.recipies.slice();
  }


getRecipie(index:number){
  return this.recipies[index];
}
  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
  addRecipie(recipie:Recipie){
   this.recipies.push(recipie);
   this.recipiesChanged.next(this.recipies.slice());
  }

  updateRecipie(index:number,newRecipie:Recipie){
   this.recipies[index] = newRecipie;
     this.recipiesChanged.next(this.recipies.slice());
  }

  deleteRecipie(index:number){
    this.recipies.splice(index,1);
    this.recipiesChanged.next(this.recipies.slice());
  }
}