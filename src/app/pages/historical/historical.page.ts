// tslint:disable: max-line-length
/**
 * 
 * 
 * @author Edouard Diep
 */
import { Component, OnInit, Renderer } from '@angular/core';
import { VinService } from 'src/app/services/vin.service';
import { Vin } from 'src/app/models/Vin.model';
import { Router } from '@angular/router';
import { RatingService } from 'src/app/services/rating.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.page.html',
  styleUrls: ['./historical.page.scss'],
})
export class HistoricalPage implements OnInit {

  wines: Array<Vin>;
  redWines: Array<Vin>;
  whiteWines: Array<Vin>;
  roseWines: Array<Vin>;
  mousseuxWines: Array<Vin>;
  isLoading = false;
  isRated = false;

  searched: string;
  accordionExpanded = false;
  accordionId: any;
  cpt = 0;
  user_id: number;

  constructor(private vs: VinService, private auth: AuthenticationService, private rs: RatingService, private router: Router, public renderer: Renderer) { }

  ngOnInit() {
    this.user_id = this.auth.getUserId();
    console.log("L'ID DU USER CONNECTÉ = " + this.user_id);
    this.isLoading = true;
    this.getUserWines();
    this.getFilterResults();
    setTimeout(() => {
      this.isLoading = false;
      this.cpt = 1;
    }, 1000);
  }

  /** Fonction qui récupère tous les vins notés par l'utilisateur courant */
  private getUserWines() {
    this.rs.getUserRatesDistinct(this.user_id).subscribe(wines => {
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
  }

  /** Fonction qui actualise les résultats de la recherche (app-searchbar) */
  private getFilterResults() {
    this.vs.getFilterResults().subscribe(wines => {
      this.wines = wines;
      this.redWines = this.wines.filter(w => w.win_category.toLocaleLowerCase().includes('rouge'));
      this.whiteWines = this.wines.filter(w => w.win_category.toLocaleLowerCase().includes('blanc'));
      this.roseWines = this.wines.filter(w => w.win_category.toLocaleLowerCase().includes('rosé'));
      this.mousseuxWines = this.wines.filter(w => w.win_category.toLocaleLowerCase().includes('champagne') || w.win_category.toLocaleLowerCase().includes('mousseux'));
    });
  }
  
  /** Fonction qui étend l'accordion lors du clic sur l'en-tête de la ion-card */
  private toggleAccordion(event) {
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
