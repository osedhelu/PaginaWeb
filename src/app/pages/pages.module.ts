import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitPagesComponent } from './init-pages/init-pages.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: InitPagesComponent,
    children: [
      { path: 'dashboard', component: HomeComponent, data: { title: 'Dashboard' } },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];



@NgModule({
  declarations: [InitPagesComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PagesModule { }
