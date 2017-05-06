import{NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import{RecipiesComponent} from './recipies/recipies.component';
import{ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipiesStartComponent} from './recipies/recipies-start/recipies-start.component';
import {RecipieDetailComponent} from './recipies/recipie-detail/recipie-detail.component';
import {RecipiesEditComponent} from './recipies/recipies-edit/recipies-edit.component';
const appRoutes:Routes=[
{path :'',redirectTo:'/recipies',pathMatch:'full'},
 {path :'recipies',component:RecipiesComponent,children:[
     {path:'',component:RecipiesStartComponent},
     {path :'new',component:RecipiesEditComponent},     
     {path:':id',component:RecipieDetailComponent},
     {path :':id/edit',component:RecipiesEditComponent}
 ]},
 {path :'shopping-list',component:ShoppingListComponent}

];
@NgModule({
  imports :[RouterModule.forRoot(appRoutes)],
  exports :[RouterModule]
})
export class AppRoutingModule {

}