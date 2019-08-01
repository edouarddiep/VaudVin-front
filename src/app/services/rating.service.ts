import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { URL } from 'src/environments/environment';
import { Rate } from '../models/Rate.model';
import { Vin } from '../models/Vin.model';
import { VinService } from './vin.service';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  rates$ = new BehaviorSubject<Array<Rate>>(new Array<Rate>());

  constructor(private http: HttpClient) { }

  public postRate(rate: Rate): Observable<any> {
    console.log(rate);
    return this.http.post(URL.domaine + URL.rate.verb, rate, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
  public updateRate(rate: Rate): Observable<any> {
    console.log(rate);
    return this.http.put(URL.domaine + URL.rate.verb + rate.id, rate);
  }

  public getRates(): Observable<Array<Rate>> {
    return this.http.get<Array<Rate>>(URL.domaine + URL.rate);
  }
  public getRatesByVintage(vint_id: number): Observable<Array<Rate>> {
    return this.http.get<Array<Rate>>(URL.domaine + URL.vintage.verb + vint_id + URL.rate.verb);
  }
  public getUserRates(user_id: number): Observable<Array<Rate>> {
    return this.http.get<Array<Rate>>(URL.domaine + URL.user.verb + user_id + URL.rate.verb);
  }

  public getUserRatesByVintage(user_id: number, vint_id: number): Observable<Array<Rate>> {
    return this.http.get<Array<Rate>>(URL.domaine + URL.user.verb + user_id + URL.vintage.verb + vint_id);
  }

  public getUserRatesByWine(user_id: number, wine_id: number): Observable<Array<Rate>> {
    return this.http.get<Array<Rate>>(URL.domaine + URL.user.verb + user_id + URL.wine.verb + wine_id);
  }

  public getRatesByWine(wine_id: number): Observable<Array<Rate>> {
    return this.http.get<Array<Rate>>(URL.domaine + URL.wine.verb + wine_id + URL.rate.verb);
  }

  pushNextArrayRates(rates: Array<Rate>) {
    this.rates$.next(rates);
  }

  getArrayRates() {
    return this.rates$.asObservable();
  }


}
