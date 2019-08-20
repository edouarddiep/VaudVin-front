// tslint:disable: max-line-length
/**
 * 
 * 
 * @author Edouard Diep
 */
import { Injectable } from '@angular/core';
import { Restaurant } from '../models/Restaurant.model';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { VinService } from './vin.service';
import { Vin } from '../models/Vin.model';
import { HttpClient } from '@angular/common/http';
import { URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurants$ = new BehaviorSubject<Array<Restaurant>>(new Array<Restaurant>());

  restaurant = new Restaurant;

  restaurant$ = new BehaviorSubject<Restaurant>(this.restaurant);

  listeVins = new Array<Vin>();

  restaurantsFiltres = new Array<Restaurant>();


  constructor(private http: HttpClient, private vinService: VinService) { }

  /** Fonction qui récupère tous les restaurants de la bdd */
  public getRestaurants(): Observable<Array<Restaurant>> {
    return this.http.get<Array<Restaurant>>(URL.domaine + URL.restaurant.verb);
  }

  /** Fonction qui met à jour le BehaviorSubject */
  public pushNextArrayRestaurants(restaurants: Array<Restaurant>) {
    this.restaurants$.next(restaurants);
  }

  /** Fonction qui set le restaurant */
  public setRestaurant(r: Restaurant) {
    this.restaurant = r;
  }

  /** Fonction qui récupère le restaurant */
  public getRestaurant(): Observable<Restaurant> {
    return of(this.restaurant);
  }

  /** Fonction qui retourne le BehaviorSubject en tant qu'Observable */
  public getRestaurantDetail() {
    return this.restaurant$.asObservable();
  }

  /** Fonction qui met à jour le BehaviorSubject */
  public pushNextRestaurant(r: Restaurant) {
    this.restaurant$.next(r);
  }

  /** Fonction qui retourne le BehaviorSubject en tant qu'Observable */
  public getFilterResults() {
    return this.restaurants$.asObservable();
  }
}
