import { Component, OnInit,OnDestroy} from '@angular/core';
import{Subscription} from 'rxjs/Subscription';
import{Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients:Ingredient[];
  private subscription :Subscription
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
  this.subscription =  this.shoppingListService.ingredientsChanged
    .subscribe(
      (ingredients:Ingredient[])=>{
        console.log("test");
        this.ingredients = ingredients;
      }
    )
  }

 

  onIngredientAdded(ingredient:Ingredient){
    console.log(ingredient);
   this.ingredients.push(ingredient);
  }

  onEditItem(index:number){
    console.log(index);
   this.shoppingListService.startedEditing.next(index);
  }
   ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
