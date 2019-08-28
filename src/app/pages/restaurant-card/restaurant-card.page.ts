// tslint:disable: max-line-length
/**
 * 
 * 
 * @author Edouard Diep
 */
import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from 'src/app/models/Restaurant.model';
import { Vin } from 'src/app/models/Vin.model';
import { VinService } from 'src/app/services/vin.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.page.html',
  styleUrls: ['./restaurant-card.page.scss'],
})
export class RestaurantCardPage implements OnInit {

  restaurant: Restaurant;
  accordionExpanded = false;
  accordionId: any;
  wines: Array<Vin>;
  redWines: Array<Vin>;
  whiteWines: Array<Vin>;
  roseWines: Array<Vin>;
  mousseuxWines: Array<Vin>;
  isLoading = false;
  isRated = false;
  cpt = 0;

  constructor(private vs: VinService, private rs: RestaurantService) { }

  ngOnInit() {
    this.isLoading = true;
    this.getRestaurantWines();
    this.getFilterResults();
    setTimeout(() => {
      this.isLoading = false;
      this.cpt = 1;
    }, 1000);
  }

  /** Fonction qui récupère tous les vins en fonction du restaurant sélectionné (=carte des vins du restaurant) */
  getRestaurantWines() {
    this.rs.getRestaurantDetail().subscribe(restaurant => {
      this.restaurant = restaurant;
      this.vs.getRestaurantWines(this.restaurant.res_id).subscribe(wines => {
        if (this.wines.length === 0) {
          this.isLoading = true;
        }
        this.wines = wines;
        this.redWines = this.wines.filter(w => w.win_category.toLocaleLowerCase().includes('rouge'));
        this.whiteWines = this.wines.filter(w => w.win_category.toLocaleLowerCase().includes('blanc'));
        this.roseWines = this.wines.filter(w => w.win_category.toLocaleLowerCase().includes('rosé'));
        this.mousseuxWines = this.wines.filter(w => w.win_category.toLocaleLowerCase().includes('champagne') || w.win_category.toLocaleLowerCase().includes('mousseux'));
        this.isLoading = false;
      });
    });
  }

  /** Fonction qui actualise les résultats de la recherche (app-searchbar) */
  getFilterResults() {
    this.vs.getFilterResults().subscribe(wines => {
      this.wines = wines;
      this.redWines = this.wines.filter(w => w.win_category.toLocaleLowerCase().includes('rouge'));
      this.whiteWines = this.wines.filter(w => w.win_category.toLocaleLowerCase().includes('blanc'));
      this.roseWines = this.wines.filter(w => w.win_category.toLocaleLowerCase().includes('rosé'));
      this.mousseuxWines = this.wines.filter(w => w.win_category.toLocaleLowerCase().includes('champagne') || w.win_category.toLocaleLowerCase().includes('mousseux'));
    });
  }

  /** Fonction qui étend l'accordion lors du clic sur l'en-tête de la ion-card */
  toggleAccordion(event) {
    if (event.target.id === '') {
      this.accordionId = event.target.parentNode.id;
    } else {
      this.accordionId = event.target.id;
    }
    this.accordionId = this.accordionId.toString().match(/\d/g);
    const content = document.getElementById('content' + this.accordionId);
    const icon = document.getElementById('icon' + this.accordionId);
    if (this.accordionExpanded) {
      if (icon !== null) {
        icon.setAttribute('name', 'md-add');
      } else {
        return;
      }
      content.style.setProperty('max-height', '0px');
      content.style.setProperty('padding', '0px 16px');
    } else {
      if (icon !== null) {
        icon.setAttribute('name', 'md-remove');
      } else {
        return;
      }
      content.style.setProperty('max-height', '200vh');
      content.style.setProperty('padding', '13px 16px');
    }
    this.accordionExpanded = !this.accordionExpanded;
  }


}
