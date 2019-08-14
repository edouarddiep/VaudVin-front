// tslint:disable: max-line-length
/**
 * 
 * 
 * @author Edouard Diep
 */
import { Component, OnInit } from '@angular/core';
import { VinService } from 'src/app/services/vin.service';
import { Vin } from 'src/app/models/Vin.model';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Restaurant } from 'src/app/models/Restaurant.model';
import { of } from 'rxjs';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})

export class SearchbarComponent implements OnInit {

  searched: string;
  vins: Array<Vin>;
  restaurant: Restaurant;
  restaurants: Array<Restaurant>;
  user_id: number;
  placeHolder: string;

  constructor(private vs: VinService, private auth: AuthenticationService, private rs: RestaurantService, private ratingService: RatingService, private router: Router) { }

  ngOnInit() {
    this.user_id = this.auth.getUserId();
  }

  searchWines(vins: Array<Vin>){
    const filteredList = new Array<Vin>();
    this.vins = vins;
    this.vins.forEach(v => {
      const nom = v.win_name.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const provenance = v.win_region.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const producteur = v.win_producer.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const appellation = v.win_appellation.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const cepage = v.win_grape_variety.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const type = v.win_category.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const contentNormalized = this.searched.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if (nom.includes(contentNormalized) || provenance.includes(contentNormalized)
        || producteur.includes(contentNormalized) || appellation.includes(contentNormalized)
        || cepage.includes(contentNormalized) || type.includes(contentNormalized)) {
        filteredList.push(v);
      }
    });
    this.vs.pushNextVinArray(filteredList);
  }

  searchRestaurants(res: Array<Restaurant>){
    const filteredList = new Array<Restaurant>();
    this.restaurants = res;
    this.restaurants.forEach(r => {
      const nom = r.res_name.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const type = r.res_type.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const country = r.res_country.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const zip_code = r.res_zip_code.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const address = r.res_address_1.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const contentNormalized = this.searched.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if(nom.includes(contentNormalized) || type.includes(contentNormalized)
        || country.includes(contentNormalized) || zip_code.includes(contentNormalized)
        || address.includes(contentNormalized)) {
        filteredList.push(r);
      }
    });
    this.rs.pushNextArrayRestaurants(filteredList);
  }

  onChange(event) {
    this.searched = event.detail.value.toLocaleLowerCase();
    console.log(this.searched);
    if(this.router.url === '/list-wine'){
      this.vs.getWines().subscribe(vins => {
        this.searchWines(vins);
      });
    } else if(this.router.url === '/historical') {
      this.ratingService.getUserRatesDistinct(this.user_id).subscribe(vins => {
        this.searchWines(vins);
      });
    } else if(this.router.url.includes('/restaurant-card/')){
      this.rs.getRestaurantDetail().subscribe(restaurant => {
        this.restaurant = restaurant;
        this.vs.getRestaurantWines(this.restaurant.res_id).subscribe(vins => {
          this.searchWines(vins);
        });
      });
    } else if(this.router.url === '/find-restaurant'){
      this.rs.getRestaurants().subscribe(restaurants => {
        this.searchRestaurants(restaurants);
      });
    }

  }
}
