import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitPagesComponent } from './init-pages/init-pages.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductosComponent } from './productos/productos.component';
import { CategoriaComponent } from './categoria/categoria.component';


const routes: Routes = [
  {
    path: '', component: InitPagesComponent,
    children: [
      { path: 'home', component: HomeComponent, data: { title: 'home' } },
      { path: 'producto', component: ProductosComponent, data: { title: 'home' } },
      { path: 'categoria', component: CategoriaComponent, data: { title: 'home' } },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];



@NgModule({
  declarations: [InitPagesComponent, HomeComponent, ProductosComponent, CategoriaComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class PagesModule { }
