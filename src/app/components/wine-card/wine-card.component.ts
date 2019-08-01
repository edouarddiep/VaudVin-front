import { Component, OnInit, Input } from '@angular/core';
import { Vin } from 'src/app/models/Vin.model';
import { VinService } from 'src/app/services/vin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Rate } from 'src/app/models/Rate.model';
import { RatingService } from 'src/app/services/rating.service';
import { Vintage } from 'src/app/models/Vintage.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/User.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-wine-card',
  templateUrl: './wine-card.component.html',
  styleUrls: ['./wine-card.component.scss'],
})
export class WineCardComponent implements OnInit {

  @Input() vin: Vin;
  uri: string;
  authenticatedUserRates: Array<Rate>;
  isRated = false;
  user_id: number;
  moyenneMill: number; // note affichée pour le vin (calculée sur la moyenne des millésimes grâce à la fonction getAverageRate())
  percent = 80;


  /** VARIABLES DE CALCUL COEFF CORRESPONDANCE */
  allUsersRates: Array<Rate>;
  rates: Array<Rate>;
  setRates = new Set<Rate>();
  correspondanceVin = 0; // Si une des deux personnes n'a pas noté le vin, j'ai attribué une valeur -100 à la correspondance
  nbNotesSim = 0; // Notes sur vins communs dont le rapport est de + ou - 1 d'écart
  nbNotes = 0;  // Nombre de notes utilisées dans la mise en correspondance avec les autres utilisateurs
  ratio = 0;  // Total des ratios de correspondance
  noteUtilisateurPondere = 0; // Note d'un utilisateur proche * coef de correspondance (3 dans notre cas)
  coefMoyenneMill = 0;


  constructor(private vs: VinService, private rs: RatingService, private us: UserService, private router: Router, private auth: AuthenticationService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.user_id = this.auth.getUserId();
    this.getRatesByAuthenticatedUser();
    this.getRatesByUsers();

  }

  /** FONCTION QUI RÉCUPÈRE LES NOTES DE L'UTILISATEUR CONNECTÉ DEPUIS LA BASE DE DONNÉES */
  getRatesByAuthenticatedUser() {
    this.rs.getUserRatesByWine(this.user_id, this.vin.id).subscribe(rates => {
      this.authenticatedUserRates = rates;
      this.rs.pushNextArrayRates(this.authenticatedUserRates);
      if (rates[0] === undefined) { // l'utilisateur n'a noté aucun vin, on procède alors au calcul de correspondance
        this.isRated = false;
        return;
      } else {
        this.isRated = true;
      }
      if (rates.length === 1) { // l'utilisateur a noté exactement un seul vin / millésime
        this.moyenneMill = rates[0].value; // dans le cas où l'utilisateur a noté un seul millésime, on prend la note du plus récent
      } else {
        // tslint:disable-next-line: max-line-length
        this.moyenneMill = this.getAverageRate(rates); // dans le cas où l'utilisateur a noté plusieurs millésimes, on fait la moyenne de toutes les notes
      }
    });
  }

  /** FONCTION QUI CALCULE LA NOTE MOYENNE BASÉE SUR LES MILLÉSIMES (arrondie à 0.5) */
  getAverageRate(rates: Array<Rate>) {
    let ratesAverage = 0;
    rates.forEach(r => {
      ratesAverage += r.value;
    });
    return Math.round(ratesAverage / rates.length * 2) / 2; // arrondie à 0.5
  }

  goToVintages() {
    this.vs.pushNextVin(this.vin);
    this.router.navigateByUrl('/choose-vintage');
  }

  /** FONCTION QUI RÉCUPÈRE LES NOTES DES UTILISATEURS EXCLUANT CELUI CONNECTÉ */
  getRatesByUsers() {

    this.rs.getRatesByWine(this.vin.id).subscribe(rates => {
      this.rates = rates;
      this.rates.sort((r1, r2) => r1.vint_id > r2.vint_id ? 1 : -1);
      for (let i = 0; i < this.rates.length - 1; i++) {
        const pers1 = this.rates[i];
        const pers2 = this.rates[i + 1];
        if (pers1.vint_id === pers2.vint_id) {
          this.correspondanceVin = pers1.value - pers2.value;
          this.nbNotes++; // on incrémente le nombre de vins communs
          console.log(pers1);
          console.log(pers2);
        }
        if (this.correspondanceVin >= -1 && this.correspondanceVin <= 1) {
          this.nbNotesSim++; // on incrémente le nombre de notes similaires
        }
      }
    });
    console.log('Nombre de vins communs = '+this.nbNotes);
    console.log('Nombre de notes avec +- 1 d\'écart = '+this.nbNotesSim);
  }

}
