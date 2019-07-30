import { Component, OnInit, Input } from '@angular/core';
import { Vin } from 'src/app/models/Vin.model';
import { VinService } from 'src/app/services/vin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Rate } from 'src/app/models/Rate.model';
import { RatingService } from 'src/app/services/rating.service';
import { Vintage } from 'src/app/models/Vintage.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-wine-card',
  templateUrl: './wine-card.component.html',
  styleUrls: ['./wine-card.component.scss'],
})
export class WineCardComponent implements OnInit {

  @Input() vin: Vin;
  uri: string;
  rates: Rate[];
  vintages: Vintage[];
  vintageYear: number;
  isRated = false;
  rateValue: number;
  percent = 60; // pourcentage test
  user_id: number;

  constructor(private vs: VinService, private rs: RatingService, private router: Router, private auth: AuthenticationService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.user_id = this.auth.getUserId();
    this.getRatesByWine();
  }

  getRatesByWine() {
    this.rs.getUserRatesByWine(this.user_id, this.vin.id).subscribe(rates => {
      this.rates = rates;
      if (rates[0] === undefined) {
        this.isRated = false;
        return;
      } else {
        this.isRated = true;
      }
      if (rates.length === 1) {
        this.rateValue = rates[0].value; // dans le cas où l'utilisateur a noté un seul millésime, on prend la note du plus récent
      } else {
        this.getAverageRate(rates); // dans le cas où l'utilisateur a noté plusieurs millésimes, on fait la moyenne de toutes les notes
      }
    });
  }

  /** FONCTION QUI CALCULE LA NOTE MOYENNE BASÉE SUR LES MILLÉSIMES (arrondie à 0.5) */
  getAverageRate(rates: Rate[]) {
    let ratesAverage = 0;
    rates.forEach(r => {
      ratesAverage += r.value;
    });
    this.rateValue = Math.round(ratesAverage / rates.length * 2) / 2; // arrondie à 0.5
    console.log('la moyenne des notes = ' + ratesAverage / rates.length);
    console.log('la moyenne arrondie = ' + this.rateValue);
    console.log('la note récente pour le vin ' + this.vin.id + ' = ' + this.rateValue);

  }

  goToDetails() {
    this.vs.pushNextVin(this.vin);
    this.router.navigateByUrl('/choose-vintage');
  }

}
