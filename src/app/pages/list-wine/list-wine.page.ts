import { Component, OnInit, NgModule, CUSTOM_ELEMENTS_SCHEMA, ViewChild, Renderer } from '@angular/core';
import { VinService } from 'src/app/services/vin.service';
import { Router } from '@angular/router';
import { Vin } from 'src/app/models/Vin.model';
import { Rate } from 'src/app/models/Rate.model';
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
  redWines: Array<Vin>;
  whiteWines: Array<Vin>;
  roseWines: Array<Vin>;
  mousseuxWines: Array<Vin>;
  isLoading = false;

  searched: string;
  accordionExpanded = false;
  accordionId: any;
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

  getWines() {
    this.vs.getWines().subscribe(wines => {
      if (this.wines.length === 0) {
        this.isLoading = true;
      }
      this.wines = wines;
      this.redWines = this.wines.filter(w => w.category.toLocaleLowerCase().includes('rouge'));
      this.whiteWines = this.wines.filter(w => w.category.toLocaleLowerCase().includes('blanc'));
      this.roseWines = this.wines.filter(w => w.category.toLocaleLowerCase().includes('rosé'));
      this.mousseuxWines = this.wines.filter(w => w.is_assembled);
      this.isLoading = false;
    });
  }

  getFilterResults() {
    this.vs.getFilterResults().subscribe(wines => {
      this.wines = wines;
      this.redWines = this.wines.filter(w => w.category.toLocaleLowerCase().includes('rouge'));
      this.whiteWines = this.wines.filter(w => w.category.toLocaleLowerCase().includes('blanc'));
      this.roseWines = this.wines.filter(w => w.category.toLocaleLowerCase().includes('rosé'));
      this.mousseuxWines = this.wines.filter(w => w.is_assembled);
    });
  }

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

  setTransition() {
    const list = document.getElementById('list');
    setTimeout(() => {
      list.style.setProperty('opacity', '1');
    }, 300);
  }



}
