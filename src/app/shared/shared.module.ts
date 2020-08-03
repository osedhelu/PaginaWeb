import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuFiltroComponent } from './menu-filtro/menu-filtro.component';



@NgModule({
  declarations: [NopagefoundComponent, FooterComponent, SidebarComponent, NavbarComponent, MenuFiltroComponent],
  exports:[NopagefoundComponent, FooterComponent, SidebarComponent, NavbarComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
