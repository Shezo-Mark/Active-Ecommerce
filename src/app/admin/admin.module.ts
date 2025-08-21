import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FotterComponent } from './shared/fotter/fotter.component';
import { AsideComponent } from './shared/aside/aside.component';
import { ProdustsComponent } from './produsts/produsts.component';
import { AddProductsComponent } from './add-products/add-products.component';


@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    HeaderComponent,
    FotterComponent,
    AsideComponent,
    ProdustsComponent,
    AddProductsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
