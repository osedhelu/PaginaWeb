import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { SeachService, SharedService } from 'src/app/service/index.service';
declare function init();

@Component({
  selector: 'app-init-pages',
  templateUrl: './init-pages.component.html',
  styles: [
  ]
})
export class InitPagesComponent implements OnInit {
  htmlSidevar="<p>hola</p>";
  arrayScroll: any;
  constructor(
    public router:Router,
    public search: SeachService,
    public scroll: SharedService
  ) {
    init();
   }

  ngOnInit(): void {
   
  }
  // searchEmiter(value) {
	// console.log(value)
  // }
  @HostListener("window:scroll", ['$event'])
  EventScroll(value:any) {
    this.scroll.scrollValue = value.srcElement.children[0].scrollTop;
  }
}
