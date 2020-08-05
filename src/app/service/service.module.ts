import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  
  SharedService
} from "./index.service"; 
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  providers: [SharedService],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServiceModule { }
