// tslint:disable: max-line-length
/**
 * 
 * 
 * @author Edouard Diep
 */
import { Injectable } from '@angular/core';
import { Vin } from '../models/Vin.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URL } from '../../environments/environment';
import { Vintage } from '../models/Vintage.model';

@Injectable({
  providedIn: 'root'
})
export class VinService {


  vin: Vin;
  vins = new Array<Vin>();
  vintages = new Set<string>();
  vintages$ = new BehaviorSubject<Set<string>>(new Set<string>());
  vin$ = new BehaviorSubject<Vin>(this.vin);
  vins$ = new BehaviorSubject<Array<Vin>>(new Array<Vin>());
  millesime: Array<number>;
  millesime$ = new BehaviorSubject<Array<number>>(new Array<number>());

  constructor(private http: HttpClient) { }

  getWines(): Observable<Array<Vin>> {
    return this.http.get<Array<Vin>>(URL.domaine + URL.wine.verb);
  }

  pushNextVinArray(vins : Array<Vin>) {
    this.vins$.next(vins);
  }

  getSelectedVin(vin: Vin): Observable<Vin> {
    const index = this.vins.indexOf(vin);
    this.vin = this.vins[index];
    return of(this.vin);
  }

  pushNextVin(vin: Vin) {
    this.vin$.next(vin);
  }

  getVinDetail() {
    return this.vin$.asObservable();
  }

  getWineVintages(id: number) : Observable<Array<Vintage>> {
    return this.http.get<Array<Vintage>>(URL.domaine + URL.wine.verb + id + URL.vintage.verb);
  }

  getRestaurantWines(res_id: number): Observable<Array<Vin>> {
    return this.http.get<Array<Vin>>(URL.domaine + URL.restaurant.verb + res_id + URL.wine.verb);
  }


  getFilterResults() {
    return this.vins$.asObservable();
  }
}
