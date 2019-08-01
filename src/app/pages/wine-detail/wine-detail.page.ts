import { Component, OnInit } from '@angular/core';
import { Vin } from 'src/app/models/Vin.model';
import { VinService } from 'src/app/services/vin.service';
import { Router } from '@angular/router';
import { Vintage } from 'src/app/models/Vintage.model';
import { User } from 'src/app/models/User.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';
import { RatingService } from 'src/app/services/rating.service';
import { Rate } from 'src/app/models/Rate.model';

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.page.html',
  styleUrls: ['./wine-detail.page.scss'],
})
export class WineDetailPage implements OnInit {
  vin: Vin;
  base64 = 'data:image/png;base64,';
  isBio: string;
  isWoody: string;
  rates:  Array<Rate>;
  existingRates: number;
  vintage: Vintage; // le millésime du vin sélectionné
  user_id: number;
  rateValue: number;
  isRated = false;

  constructor(private vs: VinService, private auth: AuthenticationService, private rs: RatingService, private router: Router) { }

  ngOnInit() {
    this.user_id = this.auth.getUserId();
    this.vintage = JSON.parse(localStorage.getItem('selectedVintage'));
    this.vs.getVinDetail().subscribe(vin => {
      this.vin = vin;
      if (this.vin.is_bio) {
        this.isBio = 'oui';
      } else {
        this.isBio = 'non';
      }
      if (this.vin.is_woody_character) {
        this.isWoody = 'oui';
      } else {
        this.isWoody = 'non';
      }
    });
    this.rs.getUserRatesByVintage(this.user_id, this.vintage.id).subscribe(rates => {
      this.rates = rates;
      this.existingRates = rates.length;
      if (this.existingRates > 0) {
        this.isRated = true;
        this.rateValue = this.rates[0].value;
      } else {
        this.isRated = false;
      }
    });
  }

  changeIcon(event) {
    switch (event.target.id) {
      case "heart1": {
        this.fillHeart(1);
        break;
      }
      case "heart2": {
        this.fillHeart(2);
        break;
      }
      case "heart3": {
        this.fillHeart(3);
        break;
      }
      case "heart4": {
        this.fillHeart(4);
        break;
      }
      case "heart5": {
        this.fillHeart(5);
        break;
      }
    }
  }

  fillHeart(id: number) {
    for (let i = 1; i <= id; i++) {
      let currentHeart = document.getElementById('heart' + i);
      currentHeart.setAttribute('name', 'heart');
      this.rateValue = i;
    }
    for (let k = 5; k > id; k--) {
      let currentHeart = document.getElementById('heart' + k);
      currentHeart.setAttribute('name', 'heart-empty');
    }
  }

  navigatePage() {
    this.router.navigate(['/list-wine'])
    .then(() => {
      window.location.reload();
    });
  }

  saveRate() {
    console.log('Le user = ' + this.user_id);
    console.log('Le vin = ' + this.vin.id);
    console.log('Le vintage = ' + this.vintage.id);

    if (this.existingRates > 0) { // dans le cas où l'utilisateur a déjà noté le vin sur lequel il se trouve
      this.rates[0].value = this.rateValue; // on update la note existante avec la nouvelle
      this.rs.updateRate(this.rates[0]).subscribe();
      alert('La note a bien été mise à jour');
      this.router.navigate(['/historical'])
        .then(() => {
          window.location.reload();
        });
      return;
    } else { // dans le cas où l'utilisateur note pour la 1ère fois le vin sur lequel il se trouve
      const rate = Rate.createRate(this.rateValue, this.vintage.id, this.user_id);
      this.rs.postRate(rate).subscribe(() => {
        alert('Merci d\'avoir évalué ce millésime !')
        this.router.navigate(['/historical'])
          .then(() => {
            window.location.reload();
          });
      });
    }
  }
}
