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


  constructor(private http : HttpClient, private vinService: VinService) { }

  getRestaurants(): Observable<Array<Restaurant>> {
    return this.http.get<Array<Restaurant>>(URL.domaine + URL.restaurant.verb);
  }


  pushNextArrayRestaurants(restaurants: Array<Restaurant>) {
    this.restaurants$.next(restaurants);
  }

  setRestaurant(r: Restaurant) {
    this.restaurant = r;
  }

  getRestaurant(): Observable<Restaurant> {
    return of(this.restaurant);
  }

  getRestaurantDetail() {
    return this.restaurant$.asObservable();
  }

  pushNextRestaurant(r: Restaurant) {
    this.restaurant$.next(r);
  }

  getFilterResults() {
    return this.restaurants$.asObservable();
  }
}
