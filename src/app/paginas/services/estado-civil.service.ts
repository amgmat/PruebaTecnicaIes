import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import { CatalogoEstadoCivil } from '../interfaces/catologo.interface';

@Injectable({
  providedIn: 'root'
})
export class EstadoCivilService {

  private url = 'http://201.131.20.125/BienesRaicesApi/api/services/app/Catalogo/EstadoCivil'

  constructor(private http:HttpClient) { }


  obtenerCatalogo(){
    return this.http.post<CatalogoEstadoCivil>(this.url,{}).pipe(
      // tap(resp=>console.log(resp)),
      map(resp => resp.result),
      catchError((error)=>of(error))
    )
  }
}
