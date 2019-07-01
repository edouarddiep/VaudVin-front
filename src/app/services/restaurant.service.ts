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

  /*
  getRestaurantsByName(content: string): Observable<Array<Restaurant>> {
    this.restaurantsFiltres = new Array<Restaurant>();
    this.listeRestaurants.forEach(r => {
      const nom = r.nom.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const type = r.type.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const contentNormalized = content.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if(nom.toLocaleUpperCase().includes(contentNormalized.toLocaleUpperCase())
      || type.toLocaleUpperCase().includes(contentNormalized.toLocaleUpperCase())) {
        this.restaurantsFiltres.push(r);
      }
    });
    return of(this.restaurantsFiltres);
  }
*/
  pushNextArrayRestaurants(restaurants: Array<Restaurant>) {
    this.restaurants$.next(restaurants);
  }

  setRestaurant(r: Restaurant) {
    this.restaurant = r;
  }

  getRestaurant(): Observable<Restaurant> {
    return of(this.restaurant);
  }

  pushNextRestaurant() {
    this.restaurant$.next(this.restaurant);
  }
}
