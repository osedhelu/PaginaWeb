import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/index.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor(public _sharedService: SharedService) { }

  ngOnInit(): void {
  }
  valueSearch(value) {
    this._sharedService.search.setValue(value)
  }

}
