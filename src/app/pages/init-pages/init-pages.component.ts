import { Component, OnInit } from '@angular/core';
declare function init();
declare function menu();

@Component({
  selector: 'app-init-pages',
  templateUrl: './init-pages.component.html',
  styles: [
  ]
})
export class InitPagesComponent implements OnInit {
  htmlSidevar="<p>hola</p>";
  constructor() {
    init();
    menu()
   }

  ngOnInit(): void {
   
  }

}
