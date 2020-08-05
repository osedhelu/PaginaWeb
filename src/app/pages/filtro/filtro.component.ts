import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/service/index.service';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styles: [
  ]
})
export class FiltroComponent implements OnInit {
  product = []
  id: string = '1'
  constructor(
    private router: Router, 		
    private activateRouter: ActivatedRoute,
    public _filtro: SharedService
) { 

  activateRouter.params.subscribe(item => {
    this.id = item['id_categoria']
  this.listProduct()

  })
}

  ngOnInit(): void {
  }
  listProduct() {
    this._filtro.cosulfilter(this.id).subscribe((resp: any) => {
      console.log(resp)
      this.product = resp.datos
  })
}
}
