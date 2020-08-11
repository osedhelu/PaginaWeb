import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/index.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: [
  ]
})
export class ProductosComponent implements OnInit {
  config: any;
  id: any
  constructor(public _sharedService: SharedService,
    private router: Router, 		
    private activateRouter: ActivatedRoute
    ) { 

    activateRouter.params.subscribe(item => {
      this.id = item['id_categoria']
      // this.listProduct()
      
      this._sharedService.search.setValue("");
      this._sharedService.activeSearch = false
    })
  }

  ngOnInit(): void {
  }

}
