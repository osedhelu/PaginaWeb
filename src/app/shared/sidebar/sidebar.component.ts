import { Component, OnInit, Input, HostListener, Inject } from '@angular/core';
import { SharedService } from 'src/app/service/index.service';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common'; 
declare function removeSidevar();
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
  public footerHtml: SafeHtml;
  // @Input() footerHtml: string = "";
  Active: any = 'cat_108';
  styleExp = "translateX(0)"
  constructor(
    public htmlToggel: SharedService, 
    private sanitizer: DomSanitizer,
    public router: Router,
    @Inject(DOCUMENT) document
    ) { this.cargarMenu() }

  ngOnInit(): void {
  }

  cargarMenu() {
    this.htmlToggel.listarToggle().subscribe((resp: any)=> {
      this.footerHtml =  this.sanitizer.bypassSecurityTrustHtml(resp.datos[0].HTML) 
      
      
      console.log()
    })
  
  }
  getRoute(event){
    console.log(event)
  }
    // Watch for clicks in our component
    @HostListener("click", ['$event'])
    onClick(event: MouseEvent) {
      // If we don't have an anchor tag, we don't need to do anything.
      if (event.target instanceof HTMLAnchorElement === false) { 
        return;
      }
      // Prevent page from reloading
      event.preventDefault();
      let target = <HTMLAnchorElement>event.target;
      // Navigate to the path in the link
      if(target.pathname.substr(1) == ""){
        return
      }
if(this.Active != `cat_${target.pathname.substr(1)}`) {
 let vieja =  document.getElementById(this.Active);
 vieja.className = ''
  this.router.navigate(['filtros', target.pathname.substr(1)]);
  let hola = document.getElementById(`cat_${target.pathname.substr(1)}`);
 hola.className = 'active'
 this.Active = `cat_${target.pathname.substr(1)}`
 removeSidevar()
}

    }
    cerrar() {
      let sidevar = document.getElementsByClassName('my-sidevar');
      console.log(sidevar);
    }
}
