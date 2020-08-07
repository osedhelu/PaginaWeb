import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeachService } from 'src/app/service/index.service';
declare function init();

@Component({
  selector: 'app-init-pages',
  templateUrl: './init-pages.component.html',
  styles: [
  ]
})
export class InitPagesComponent implements OnInit {
  htmlSidevar="<p>hola</p>";
  constructor(
    public router:Router,
    public search: SeachService
  ) {
    init();
   }

  ngOnInit(): void {
   
  }
  searchEmiter(value) {
	console.log(value)
	}
}
