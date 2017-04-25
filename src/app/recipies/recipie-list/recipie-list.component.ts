import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import{Recipie} from '../recipie.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  @Output() recipieWasSelected = new EventEmitter<Recipie>();
  recipies:Recipie [] =[
    new Recipie('Chicken 65','need to deep fry the chicken','http://4.bp.blogspot.com/-s8_us8l-ddI/UaCwZCiORuI/AAAAAAAAC34/oo8viQ4tevw/s1600/019.JPG'),
       new Recipie('Pav bhaji','need to toast the bread and make curry','https://i.ytimg.com/vi/rSLiOqJ2egU/maxresdefault.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipieSelected(recipie:Recipie){
     this.recipieWasSelected.emit(recipie);
  }

}
