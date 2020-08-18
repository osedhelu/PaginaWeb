import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, filter } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { URL_SERVICES } from "../../config/config";
import { ConstantPool } from '@angular/compiler';
import { FormControl } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  search = new FormControl('');
  scrollValue: any;
  activeSearch = false;
  Mega_menu = false;
  megaMenu = {
    title: '',
    img: '',
    array: {}
  }
  constructor(private http: HttpClient) {  
  }

  listarToggle() {
    let url = `${URL_SERVICES}/ToggleCategorias`;
    return this.http.get(url).pipe(
      catchError((err) => {
        console.log(err)
        return throwError(err)
      })
    )
  }
  cosulfilter(id) {
    let url = `${URL_SERVICES}/DatosProCat?categoria=${id}`;
    return this.http.get(url).pipe(
      catchError(err => {
        console.log("error en filtros", err)
        return throwError(err)
      })
    )
  }
  listBarraSecundary() {
    let url = `${URL_SERVICES}/NavBarCat`;
    return this.http.get(url).pipe(
      map((nr:any )=> nr.datos),
      filter((nn : any) => nn), 
      catchError(err => {
        return throwError(err);
      }) 
    );
  }
  getEspecificaciones(id) {
    let url = `${URL_SERVICES}/NavBarCatItem?filtro=${id}`;
    return this.http.get(url).pipe(
      map((n: any) =>  {
        console.log(n);
        console.log(id);

        return n.datos
      }),
      catchError(err => {
        return throwError(err)
      })
    )
  }
}

