import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { URL_SERVICES } from "../../config/config";
import { ConstantPool } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

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
}

