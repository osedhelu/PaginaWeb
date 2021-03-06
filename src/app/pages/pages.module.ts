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
import { MyComponetModule  } from "../my-componet/my-componet.module";
import { PipeModule  } from "../pipe/pipe.module";
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


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
    MyComponetModule,
    PerfectScrollbarModule,
    RouterModule.forChild(routes),
    PipeModule
  ],
  providers: [
    { provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG}
  ]
})
export class PagesModule { }
