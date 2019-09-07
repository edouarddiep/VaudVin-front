// tslint:disable: max-line-length
/**
 * 
 * 
 * @author Edouard Diep
 */
import { Component, OnInit, NgModule, CUSTOM_ELEMENTS_SCHEMA, ViewChild, Renderer } from '@angular/core';
import { VinService } from 'src/app/services/vin.service';
import { Router } from '@angular/router';
import { Vin } from 'src/app/models/Vin.model';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-list-wine',
  templateUrl: './list-wine.page.html',
  styleUrls: ['./list-wine.page.scss'],
})

export class ListWinePage implements OnInit {

  wines: Array<Vin>;
  isLoading = false;

  searched: string;
  cpt = 0;

  constructor(private vs: VinService, private rs: RatingService, private router: Router, public renderer: Renderer, private us: UserService, private auth: AuthenticationService) { }

  ngOnInit() {
    this.isLoading = true;
    this.getWines();
    this.getFilterResults();
    setTimeout(() => {
      this.isLoading = false;
      this.cpt = 1;
    }, 1000);
  }

  /** Fonction qui récupère tous les vins de la bdd */
  private getWines() {
    this.vs.getWines().subscribe(wines => {
      if (this.wines.length === 0) {
        this.isLoading = true;
      }
      this.wines = wines;
      this.isLoading = false;
    });
  }

  /** Fonction qui actualise les résultats de la recherche (app-searchbar) */
  private getFilterResults() {
    this.vs.getFilterResults().subscribe(wines => {
      this.wines = wines;
    });
  }

}
