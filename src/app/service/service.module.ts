import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  
  SharedService,
  SeachService
} from "./index.service"; 
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  providers: [SharedService, SeachService],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServiceModule { }
