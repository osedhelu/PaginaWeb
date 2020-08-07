import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuFiltroComponent } from './menu-filtro/menu-filtro.component';
import { ServiceModule } from '../service/service.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [NopagefoundComponent, FooterComponent, SidebarComponent, NavbarComponent, MenuFiltroComponent],
  exports:[NopagefoundComponent, FooterComponent, SidebarComponent, NavbarComponent, MenuFiltroComponent],
  imports: [
    CommonModule,
    ServiceModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    PerfectScrollbarModule
  ],
  providers: [
    { provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG}
  ]
})
export class SharedModule { }
