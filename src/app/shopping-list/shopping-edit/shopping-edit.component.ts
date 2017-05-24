import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  @ViewChild('f') slForm: NgForm;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe((index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      })
  }


  onSubmitItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    }
    else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
     form.reset();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();

  }
  clear(){
    this.slForm.reset();
    this.editMode = false;
  }
  deleteItem(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.clear();
  }

}
