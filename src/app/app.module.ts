import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootComponent } from './root/root.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';


import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const appRoutes: Routes = [
  { path: '**', component: NopagefoundComponent }
];


@NgModule({
  declarations: [RootComponent],
  exports: [RootComponent],
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: false }),
    CommonModule,
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    PagesModule
  ],
  bootstrap: [RootComponent]

})



export class AppModule { }



