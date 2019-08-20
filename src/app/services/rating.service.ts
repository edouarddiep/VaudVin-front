// tslint:disable: max-line-length
/**
 * 
 * 
 * @author Edouard Diep
 */
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

  /** Fonction qui crée une nouvelle note dans la bdd */
  public postRate(rate: Rate): Observable<any> {
    console.log(rate);
    return this.http.post(URL.domaine + URL.rate.verb, rate, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

    /** Fonction qui met à jour une note dans la bdd */
  public updateRate(rate: Rate): Observable<any> {
    console.log(rate);
    return this.http.put(URL.domaine + URL.rate.verb + rate.rat_id, rate);
  }

  /** Fonction qui récupère toutes les notes */
  public getRates(): Observable<Array<Rate>> {
    return this.http.get<Array<Rate>>(URL.domaine + URL.rate);
  }

  /** Fonction qui récupère les notes en fonction du millésime */
  public getRatesByVintag(vint_id: number): Observable<Array<Rate>> {
    return this.http.get<Array<Rate>>(URL.domaine + URL.vintage.verb + vint_id + URL.rate.verb);
  }

    /** Fonction qui récupère les notes en fonction du millésime et de l'utilisateur */
  public getUserRatesByVintage(user_id: number, vint_id: number): Observable<Array<Rate>> {
    return this.http.get<Array<Rate>>(URL.domaine + URL.user.verb + user_id + URL.vintage.verb + vint_id);
  }

    /** Fonction qui récupère les notes en fonction du vin et de l'utilisateur */
  public getUserRatesByWine(user_id: number, wine_id: number): Observable<Array<Rate>> {
    return this.http.get<Array<Rate>>(URL.domaine + URL.user.verb + user_id + URL.wine.verb + wine_id);
  }

    /** Fonction qui récupère les notes en fonction de l'utilisateur */
  public getUserRates(user_id: number): Observable<Array<Rate>> {
    return this.http.get<Array<Rate>>(URL.domaine + URL.user.verb + user_id + URL.rate.verb);
  }

    /** Fonction qui récupère les notes DISTINCTES en fonction de l'utilisateur */
  public getUserRatesDistinct(user_id: number): Observable<Array<Vin>> {
    return this.http.get<Array<Vin>>(URL.domaine + URL.user.verb + user_id + URL.rate.verb + 'distinct');
  }

  /** Fonction qui récupère les notes en fonction du vin */
  public getRatesByWine(wine_id: number): Observable<Array<Rate>> {
    return this.http.get<Array<Rate>>(URL.domaine + URL.wine.verb + wine_id + URL.rate.verb);
  }

  /** Fonction qui récupère la moyenne des notes des millésimes d'un vin pour l'utilisateur */
  public getWineRatesAverage(user_id: number, wine_id: number): Observable<number> {
    return this.http.get<number>(URL.domaine + URL.user.verb + user_id + URL.wine.verb + wine_id + URL.rate.verb + 'avg');
  }

  /** Fonction qui récupère la moyenne des notes des concours d'un vin pour l'utilisateur */
  public getWineConcoursRatesAverage(id: number): Observable<number> {
    return this.http.get<number>(URL.domaine + URL.wine.verb + id + URL.concoursRate.verb + 'avg');
  }

    /** Fonction qui permet d'envoyer la prochaine instance de tableau de notes dans le BehaviorSubject */
  public pushNextArrayRates(rates: Array<Rate>) {
    this.rates$.next(rates);
  }

      /** Fonction qui récupère le BehaviorSubject et le retourne en temps qu'observable*/
  public getArrayRates() {
    return this.rates$.asObservable();
  }


}
