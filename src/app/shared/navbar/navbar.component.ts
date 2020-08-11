import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { SeachService, SharedService } from 'src/app/service/index.service';
declare function removeSidevar();
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})

export class NavbarComponent implements OnInit {
 public ArrayDatos:any;
 config: any
 
  constructor(
    public _sharedService:SharedService,
    public _searchService: SeachService
    ) { }

  ngOnInit(): void {
    this._sharedService.search.valueChanges.pipe(debounceTime(300)).subscribe((resp: string) => {
      // this.searchEmiter.emit(resp);
      this.funSearch(resp)
		});
  }
  @Output('search') searchEmiter = new EventEmitter<string>();

  funSearch(init) {
    if(init != "") {
      this._searchService.search(init).subscribe((resp: any) => {
        if(init != undefined) {
          this._sharedService.activeSearch =  true;
          this.ArrayDatos = resp.datos
        }
     })
    }else {
      this.ArrayDatos = null;
      this._sharedService.activeSearch  = false;
    }
    
  }
  focus() {
    removeSidevar()
    // console.log(this.search.value)
  }
}
