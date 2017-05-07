
import{Ingredient} from '../shared/ingredient.model';
import{Subject} from 'rxjs/Subject';
export class ShoppingListService{
  ingredientsChanged = new Subject<Ingredient[]>();
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
      this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients(ingredients:Ingredient[]){
     this.ingredients.push(...ingredients);
       this.ingredientsChanged.next(this.ingredients.slice());
  }

   
}