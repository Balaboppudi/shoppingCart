import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute,Params,Router} from '@angular/router';
import {RecipieService} from '../recipie.service';
import {Recipie} from '../recipie.model';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent implements OnInit {
  recipie:Recipie;
  id:number;
  constructor(private recipieService:RecipieService,private route:ActivatedRoute,private router:Router ) { }

  ngOnInit() {
   // const id = this.route.snapshot.params['id'];
   this.route.params
   .subscribe(
     (params:Params) =>{
       this.id = +params['id'];
       this.recipie = this.recipieService.getRecipie(this.id);
     }
   );
  }
  onAddToShoppingList(){
    this.recipieService.addIngredientsToShoppingList(this.recipie.ingredients);
  }
  onEditRecipie(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
}
