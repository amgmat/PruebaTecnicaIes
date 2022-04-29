import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import { UsuarioIes } from '../interfaces/loginRespuesta.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://desa.ies-webcontent.com.mx/login'

  constructor(private http:HttpClient) { }

  login(username:string,password:string){
    return this.http.post<UsuarioIes>(this.url,{username,password})
    .pipe(
      tap(resp=>{
        console.log(resp);
        if(resp.exito){
          localStorage.setItem('token', resp.data.token)
        }
      }),
      map(resp=> resp.exito),
      catchError(({error}) => of(error.mensaje))
    )
  }

  logout(){
    localStorage.removeItem('token');
  }
}
