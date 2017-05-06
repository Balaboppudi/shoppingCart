import { Component, OnInit,Input } from '@angular/core';
import {RecipieService} from '../recipie.service';
import {Recipie} from '../recipie.model';
@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent implements OnInit {
 @Input() recipie :Recipie;
  constructor(private recipieService:RecipieService ) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
     this.recipieService.addIngredientsToShoppingList(this.recipie.ingredients);
  }

}
