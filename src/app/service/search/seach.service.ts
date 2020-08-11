import { Injectable } from '@angular/core';
import { URL_SERVICES } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeachService {

  constructor(
   public http: HttpClient
    ) { }
  search(value: string) {
    let url = `${URL_SERVICES}/QSearch?filtro=${value}`;
    return this.http.get(url).pipe(
      catchError(err => {
        console.log("Error en el buscador",  err);
        return throwError(err);
      })
    )
  }
}
