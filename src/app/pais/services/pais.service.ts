import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1'
  get httpParams() {
    
    return new HttpParams().set('fields', 'name,capital,cca2,flags,population')
  } 

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/name/${termino}`, {params: this.httpParams})
  }

  buscarCapital( termino: string ): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${termino}`, {params: this.httpParams})
  }

  getPaisPorCodigo( id: string ): Observable<Country> {
    return this.http.get<Country>(`${this.apiUrl}/alpha/${id}`)
  }

  getPaisPorRegion( region: string ): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/region/${region}`, {params: this.httpParams})
  }
}
