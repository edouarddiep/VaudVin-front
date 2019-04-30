import { Injectable } from '@angular/core';
import { Restaurant } from '../model/Restaurant.model';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { VinService } from './vin.service';
import { Vin } from '../model/Vin.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurants$ = new BehaviorSubject<Array<Restaurant>>(new Array<Restaurant>());

  restaurant = new Restaurant;

  restaurant$ = new BehaviorSubject<Restaurant>(this.restaurant);

  listeVins = new Array<Vin>();

  restaurantsFiltres = new Array<Restaurant>();

  public listeRestaurants: Array<Restaurant> = [
    {id: 1, nom: 'La Picholine', type: 'Café restaurant', adresse : 'Chemin du Levant 159A', code_postal : 1005, ville: 'Lausanne', no_telephone: '+41 21 721 41 41', carte_des_vins: null},
    {id: 2, nom: 'Le Pierrefleur', type: 'Café restaurant', adresse : 'Chemin de Pierrefleur 30', code_postal : 1001, ville: 'Lausanne', no_telephone: '+41 21 348 29 37', carte_des_vins: null},
    {id: 3, nom: 'Le Pinocchio', type: 'Restaurant pizzeria', adresse : 'Avenue de la Harpe 16', code_postal : 1007, ville: 'Lausanne', no_telephone: '+41 21 616 40 37', carte_des_vins: null},
    {id: 4, nom: 'Luigia', type: 'Restaurant pizzeria', adresse : 'Rue Adrien-Lachenal 24a', code_postal : 1207, ville: 'Genève', no_telephone: '+41 22 840 15 15', carte_des_vins: null},
    {id: 5, nom: 'Chez Marino', type: 'Restaurant pizzeria', adresse : 'Rue Muzy 22', code_postal : 1207, ville: 'Genève', no_telephone: '+41 22 736 45 16', carte_des_vins: null},
    {id: 6, nom: 'La Petite Vendée', type: 'Restaurant pizzeria', adresse : 'Chemin de la Vendée 16', code_postal : 1213, ville: 'Petit-Lancy', no_telephone: '+41 22 792 14 15', carte_des_vins: null},
    {id: 7, nom: 'Dai 3 fratelli Scalea', type: 'Restaurant pizzeria', adresse : 'Quai du Cheval-Blanc 23', code_postal : 1227, ville: 'Les Acacias', no_telephone: '+41 22 342 52 14', carte_des_vins: null},
    {id: 8, nom: 'Spaghetti d\'oro', type: 'Restaurant pizzeria', adresse : 'Rue de Carouge 56', code_postal : 1205, ville: 'Genève', no_telephone: '+41 22 329 21 84', carte_des_vins: null},
    {id: 9, nom: 'Le Patara', type: 'Restaurant thailandais', adresse : 'Quai du Mont Blanc 13', code_postal : 1201, ville: 'Genève', no_telephone: '+41 21 616 40 37', carte_des_vins: null},
    {id: 10, nom: 'Restaurant Demi Lune', type: 'Café Restaurant', adresse : 'Rue Etienne-Dumont 3', code_postal : 1204, ville: 'Genève', no_telephone: '+41 22 312 12 90', carte_des_vins: null},
  ];

  constructor(private vinService: VinService) { }

  getRestaurants(): Observable<Array<Restaurant>> {
    return of(this.listeRestaurants);
  }

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
