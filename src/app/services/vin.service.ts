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

  /** Fonction qui récupère tous les vins */
  public getWines(): Observable<Array<Vin>> {
    return this.http.get<Array<Vin>>(URL.domaine + URL.wine.verb);
  }

  /** Fonction qui met à jour le BehaviorSubject */
  public pushNextVinArray(vins : Array<Vin>) {
    this.vins$.next(vins);
  }

  /** Fonction qui récupère un vin précis et le retrouve dans le tableau des vins */
  public getSelectedVin(vin: Vin): Observable<Vin> {
    const index = this.vins.indexOf(vin);
    this.vin = this.vins[index];
    return of(this.vin);
  }

  /** Fonction qui met à jour le BehaviorSubject */
  public pushNextVin(vin: Vin) {
    this.vin$.next(vin);
  }

  /** Fonction qui retourne le BehaviorSubject en tant qu'Observable */
  public getVinDetail() {
    return this.vin$.asObservable();
  }

  /** Fonction qui récupère les millésimes d'un vin */
  public getWineVintages(id: number) : Observable<Array<Vintage>> {
    return this.http.get<Array<Vintage>>(URL.domaine + URL.wine.verb + id + URL.vintage.verb);
  }

  /** Fonction qui récupère les vins en fonction d'un restaurant */
  public getRestaurantWines(res_id: number): Observable<Array<Vin>> {
    return this.http.get<Array<Vin>>(URL.domaine + URL.restaurant.verb + res_id + URL.wine.verb);
  }

  /** Fonction qui retourne le BehaviorSubject en tant qu'Observable */
  public getFilterResults() {
    return this.vins$.asObservable();
  }
}
