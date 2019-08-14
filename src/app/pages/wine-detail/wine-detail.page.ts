// tslint:disable: max-line-length
/**
 * 
 * 
 * @author Edouard Diep
 */
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
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.page.html',
  styleUrls: ['./wine-detail.page.scss'],
})
export class WineDetailPage implements OnInit {
  vin: Vin;
  isBio: string;
  isWoody: string;
  rates: Array<Rate>;
  existingRates: number;
  vintage: Vintage; // le millésime du vin sélectionné
  user_id: number;
  rateValue: number;
  isRated = false;
  isCommented = false;
  submitted = false;
  commentValue: string;
  textCount = 100;
  commentForm: FormGroup;


  constructor(private alert: AlertController, private vs: VinService, private auth: AuthenticationService, private formBuilder: FormBuilder, private rs: RatingService, private router: Router) { }

  ngOnInit() {
    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.pattern('^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$')],
    });
    this.user_id = this.auth.getUserId();
    this.vintage = JSON.parse(localStorage.getItem('selectedVintage'));
    this.vs.getVinDetail().subscribe(vin => {
      this.vin = vin;
      console.log("Ce vin = " + JSON.stringify(this.vin));
      if (this.vin.win_is_bio) {
        this.isBio = 'oui';
      } else {
        this.isBio = 'non';
      }
      if (this.vin.win_is_woody_character) {
        this.isWoody = 'oui';
      } else {
        this.isWoody = 'non';
      }
    });
    this.setExistingRateAndComment();
  }

  setExistingRateAndComment(){
    this.rs.getUserRatesByVintage(this.user_id, this.vintage.vin_id).subscribe(rates => {
      this.rates = rates;
      this.existingRates = rates.length;
      if (this.existingRates > 0) {
        this.isRated = true;
        this.rateValue = this.rates[0].rat_value;
        if (this.rates[0].rat_comment.length > 0) {
          this.isCommented = true;
          this.commentValue = this.rates[0].rat_comment;
        } else {
          this.isCommented = false;
          this.commentValue = null;
        }
      } else {
        this.isRated = false;
      }
    });
  }

  changeIcon(event) {
    switch (event.target.id) {
      case 'heart1': {
        this.fillHeart(1);
        break;
      }
      case 'heart2': {
        this.fillHeart(2);
        break;
      }
      case 'heart3': {
        this.fillHeart(3);
        break;
      }
      case 'heart4': {
        this.fillHeart(4);
        break;
      }
      case 'heart5': {
        this.fillHeart(5);
        break;
      }
    }
  }

  fillHeart(id: number) {
    for (let i = 1; i <= id; i++) {
      const currentHeart = document.getElementById('heart' + i);
      currentHeart.setAttribute('name', 'heart');
      this.rateValue = i;
    }
    for (let k = 5; k > id; k--) {
      const currentHeart = document.getElementById('heart' + k);
      currentHeart.setAttribute('name', 'heart-empty');
    }
  }

  async alertRateNull(){
    const alert = await this.alert.create({
      header: 'Veuillez saisir une note !',
      buttons: ['OK']
    });

    await alert.present();
  }

  async alertRateUpdatedOk(){
    const alert = await this.alert.create({
      header: 'L\'avis a bien été mise à jour !',
      buttons: [{
        text: 'Retour à mon historique',
        handler: () => {
          this.router.navigate(['/historical'])
          .then(() => {
            window.location.reload();
          });
        }
      }]
    });

    await alert.present();
  }

  async alertRateSavedOk(){
    const alert = await this.alert.create({
      header: 'Merci d\'avoir évalué ce millésime !',
      buttons: [{
        text: 'Continuer à noter',
        cssClass: 'alert-saved',
        handler: () => {
          this.router.navigate(['/list-wine'])
          .then(() => {
            window.location.reload();
          });
        }
      }, {
        text: 'Voir mon historique',
        handler: () => {
          this.router.navigate(['/historical'])
          .then(() => {
            window.location.reload();
          });
        }
      }
    ]
    });

    await alert.present();
  }


  cancel() {
    this.router.navigate(['/list-wine'])
      .then(() => {
        window.location.reload();
      });
  }

  textChange() {
    console.log(this.commentValue);
    this.textCount = 100 - this.commentValue.length;
  }

  saveRate() {
    this.submitted = true;
    console.log('la note = ' + this.rateValue);
    if (this.rateValue === undefined) {
      this.alertRateNull();
      return;
    }
    if(this.commentValue === undefined){
      this.isCommented = false;
    } else {
      this.isCommented = true;
    }
    if (this.existingRates > 0) { // dans le cas où l'utilisateur a déjà noté le vin sur lequel il se trouve
      this.rates[0].rat_value = this.rateValue; // on update la note existante avec la nouvelle
      this.rates[0].rat_comment = this.commentValue; // on update le commentaire avec le nouveau
      this.rs.updateRate(this.rates[0]).subscribe();
      this.alertRateUpdatedOk();
      return;
    } else { // dans le cas où l'utilisateur note pour la 1ère fois le vin sur lequel il se trouve
      const rate = Rate.createRate(this.rateValue, this.commentValue, this.vintage.vin_id, this.user_id);
      this.rs.postRate(rate).subscribe(() => {
        this.alertRateSavedOk();
        return;
      });
    }
  }
}
