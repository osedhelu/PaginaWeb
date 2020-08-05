import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitPagesComponent } from './init-pages/init-pages.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ServiceModule } from '../service/service.module';
import { FiltroComponent } from './filtro/filtro.component';
import { SharedModule  } from "../shared/shared.module";

const routes: Routes = [
  {
    path: '', component: InitPagesComponent,
    children: [
      { path: 'home', component: HomeComponent, data: { title: 'home' } },
      { path: 'producto/:id', component: ProductosComponent, data: { title: 'home' } },
      { path: 'categoria/:id_categoria', component: CategoriaComponent, data: { title: 'home' } },
      { path: 'filtros', component: FiltroComponent, data: { title: 'home' } },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];



@NgModule({
  declarations: [InitPagesComponent, HomeComponent, ProductosComponent, CategoriaComponent, FiltroComponent],
  imports: [
    CommonModule,
    ServiceModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class PagesModule { }
