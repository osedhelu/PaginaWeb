import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { SeachService, SharedService } from 'src/app/service/index.service';
declare function init();
declare function removeSidevar();
@Component({
  selector: 'app-init-pages',
  templateUrl: './init-pages.component.html',
  styles: [
  ]
})
export class InitPagesComponent implements OnInit {
  htmlSidevar="<p>hola</p>";
    arrayMEnuS:any;
  arrayScroll: any;
  item: any;
  datos: any
  constructor(
    public router:Router,
    public search: SeachService,
    public scroll: SharedService
  ) {
    init();
   
   }

  ngOnInit(): void {
   this.getMenuSecundary()
  }
  // searchEmiter(value) {
	// console.log(value)
  // }
  @HostListener("window:scroll", ['$event'])
  EventScroll(value:any) {
    this.scroll.scrollValue = value.srcElement.children[0].scrollTop;
    if(this.scroll.scrollValue  > 7) {
      removeSidevar()
   
    }
    if(this.scroll.scrollValue  > 180){
      this.scroll.search.setValue('');
    }
  }
  viewsMega_menu( item) {
    if(this.item == item) {
      this.scroll.Mega_menu = false
      this.item = ""
    }else if (this.item != item){
      this.scroll.Mega_menu = true
        this.item = item
        this.scroll.getEspecificaciones(item).subscribe((nnR:any) => {
          this.datos = nnR
          console.log(this.datos)
   })  
    }

  
  }
  getMenuSecundary() {
    this.scroll.listBarraSecundary().subscribe(resp => {
      this.arrayMEnuS = resp
      
    })
  }


}
