// tslint:disable: max-line-length
/**
 * 
 * 
 * @author Edouard Diep
 */
import { Injectable } from '@angular/core';
import { Vintage } from '../models/Vintage.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VintageService {

  constructor(private http: HttpClient) { }

  /** Fonction qui crée un millésime */
  public postVintage(vintage: Vintage): Observable<any> {
    console.log(vintage);
    return this.http.post(URL.domaine + URL.vintage.verb, vintage, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
