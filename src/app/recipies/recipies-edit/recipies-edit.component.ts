import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Params,Router} from '@angular/router';
import{ FormGroup,FormControl,FormArray,Validators } from '@angular/forms';
import { RecipieService } from '../recipie.service';
import {Recipie} from '../recipie.model';

 
@Component({
  selector: 'app-recipies-edit',
  templateUrl: './recipies-edit.component.html',
  styleUrls: ['./recipies-edit.component.css']
})
export class RecipiesEditComponent implements OnInit {
  id:number;
  editMode = false;
  recipieForm :FormGroup;
  constructor(private route:ActivatedRoute, private recipieService: RecipieService,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params['id'];
        this.editMode = params['id']!=null;
        this.initForm();
      }
    )
  }

  onAddIngredient(){
   (<FormArray>this.recipieForm.get('ingredients')).push(
     new FormGroup({
       'name': new FormControl(null,Validators.required),
       'amount': new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
     })
   )
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo:this.route})
  }
onDeleteIngredient(index:number){
  console.log("test");
    (<FormArray>this.recipieForm.get('ingredients')).removeAt(index);
  }
  onSubmit(){
    // const newRecipie = new Recipie(
    //   this.recipieForm.value['name'],
    //   this.recipieForm.value['description'],
    //   this.recipieForm.value['imagePath'],
    //   this.recipieForm.value['ingredients']
    // )
   if(this.editMode){
     this.recipieService.updateRecipie(this.id,this.recipieForm.value);

   }
   else{
     this.recipieService.addRecipie(this.recipieForm.value);
   }
   this.onCancel();
  }

  private initForm(){
  
    let recipieName ='';
    let recipieImagePath = '';
    let recipieDescription = '';
    let recipieIngredients = new FormArray([]);
    if(this.editMode){
      const Recipie = this.recipieService.getRecipie(this.id);
      recipieName = Recipie.name;
      recipieImagePath = Recipie.imagePath;
      recipieDescription = Recipie.description;
      if(Recipie['ingredients']){
        for(let ingredient of Recipie.ingredients){
          recipieIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name,Validators.required),
               'amount': new FormControl(ingredient.amount,[
                 Validators.required,
                 Validators.pattern(/^[1-9]+[0-9]*$/)
               ])
            })
          )
        }
      }
    }
    this.recipieForm = new FormGroup({
      'name' : new FormControl(recipieName,Validators.required),
      'imagePath': new FormControl(recipieImagePath,Validators.required),
      'description': new FormControl(recipieDescription,Validators.required),
      'ingredients' :recipieIngredients
    });
  }

}
