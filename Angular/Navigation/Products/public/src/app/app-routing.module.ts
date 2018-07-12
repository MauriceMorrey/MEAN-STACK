import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { ProductComponent } from './product/product.component';
import { ShowComponent } from './show/show.component';


const routes: Routes = [
	{path:'home', component: HomeComponent},
  {path:'product/edit/:id', component: EditComponent},
  {path:'product/new', component: NewComponent},
  {path:'product', component: ProductComponent}, 
	{path:'product/show/:id', component: ShowComponent},     
	{path:'', pathMatch:'full', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  bootstrap: [AppComponent]

})
export class AppRoutingModule { }
