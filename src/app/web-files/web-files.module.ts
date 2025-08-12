import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { WebFilesRoutingModule } from './web-files-routing.module';
import { WebFilesComponent } from './web-files.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';
import { CategoriesListComponent } from './shared/categories-list/categories-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WebFilesComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CategoriesListComponent,
  ],
  imports: [
    CommonModule,
    WebFilesRoutingModule,
    CarouselModule,
    FormsModule
  ]
})
export class WebFilesModule { }
