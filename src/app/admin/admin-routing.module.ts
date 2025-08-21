import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { AddProductsComponent } from './add-products/add-products.component';

const routes: Routes = [
  { path: '', component: AdminComponent,
   children:[
    {path:'', component: HomeComponent},
    {path:'add-product', component: AddProductsComponent}
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
