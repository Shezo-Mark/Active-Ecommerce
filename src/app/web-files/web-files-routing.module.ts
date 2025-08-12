import { SallerAuthModule } from './saller-auth/saller-auth.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebFilesComponent } from './web-files.component';
import { HomeComponent } from './home/home.component';
import { SallerForgetComponent } from './saller-auth/saller-forget/saller-forget.component';
import { SallerSetNewPinComponent } from './saller-auth/saller-set-new-pin/saller-set-new-pin.component';

const routes: Routes = [
   {
    path: '',
    component: WebFilesComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'index', component: HomeComponent },
      {
        path: 'saller',
        loadChildren: () => import("../web-files/saller-auth/saller-auth.module").then(m => m.SallerAuthModule)
      },
       {
        path: 'user',
        loadChildren: () => import("../web-files/user-auth/user-auth.module").then(m => m.UserAuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebFilesRoutingModule { }
