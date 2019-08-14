// tslint:disable: max-line-length
/**
 * 
 * 
 * @author Edouard Diep
 */
import { Component, OnInit, Input } from '@angular/core';
import { Vin } from 'src/app/models/Vin.model';
import { VinService } from 'src/app/services/vin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Rate } from 'src/app/models/Rate.model';
import { RatingService } from 'src/app/services/rating.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
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
  percent = 0;


  /** VARIABLES DE CALCUL COEFF CORRESPONDANCE */
  allUsersRates: Array<Rate>;
  rates: Array<Rate>;
  setRates = new Set<Rate>();
  correspondanceVin = 0; // Si une des deux personnes n'a pas noté le vin, j'ai attribué une valeur -100 à la correspondance
  nbNotesSim = localStorage.getItem('nbNotesSimilaires'); // Notes sur vins communs dont le rapport est de + ou - 1 d'écart
  nbNotes = localStorage.getItem('nbVinsCommuns');  // Nombre de notes utilisées dans la mise en correspondance avec les autres utilisateurs
  lstRatios = localStorage.getItem('lstRatios');  // Total des ratios de correspondance
  lstNotesPonderees = localStorage.getItem('lstNotesPonderees');
  noteUtilisateurPondere = 0; // Note d'un utilisateur proche * coef de correspondance (3 dans notre cas)
  coefMoyenneMill = 0;


  constructor(private vs: VinService, private rs: RatingService, private us: UserService, private router: Router, private auth: AuthenticationService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.vin.win_id);
    this.percent = Math.floor(Math.random() * 90) + 50; // valeur aléatoire en attendant le calcul
    this.user_id = this.auth.getUserId();
    this.getMoyenneMill();
    this.getRatesByAuthenticatedUser();
    this.getRecommendedRate();

  }

  /** FONCTION QUI RÉCUPÈRE LES NOTES DE L'UTILISATEUR CONNECTÉ DEPUIS LA BASE DE DONNÉES */
  getRatesByAuthenticatedUser() {
    this.rs.getUserRatesByWine(this.user_id, this.vin.win_id).subscribe(rates => {
      this.authenticatedUserRates = rates;
      localStorage.setItem('authenticatedUserRates', JSON.stringify(this.authenticatedUserRates)); // on stocke le tableau de notes
      this.rs.pushNextArrayRates(this.authenticatedUserRates);
      if (rates[0] === undefined) { // l'utilisateur n'a noté aucun vin, on procède alors au calcul de correspondance
        this.isRated = false;
        return;
      } else {
        this.isRated = true;
      }
      if (rates.length === 1) { // l'utilisateur a noté exactement un seul vin / millésime
        this.moyenneMill = rates[0].rat_value; // dans le cas où l'utilisateur a noté un seul millésime, on prend la note du plus récent
      } else {
        // tslint:disable-next-line: max-line-length
        this.moyenneMill = parseFloat(localStorage.getItem('moyenneMill')); // dans le cas où l'utilisateur a noté plusieurs millésimes, on fait la moyenne de toutes les notes
      }
    });
  }

  /** FONCTION QUI RÉCUPÈRE ET STOCKE LA MOYENNE DES NOTES BASÉ CE SUR LES MILLÉSIMES (arrondie à 0.5) */
  getMoyenneMill(){
    this.rs.getWineRatesAverage(this.user_id, this.vin.win_id).subscribe(avg => {
      this.moyenneMill = Math.round(avg[0].avg * 2) / 2;  // arrondie à 0.5
      localStorage.setItem('moyenneMill', this.moyenneMill.toString());
    });
  }

  goToVintages() {
    this.vs.pushNextVin(this.vin);
    this.router.navigateByUrl('wines/' + this.vin.win_id + '/choose-vintage');
  }

  // problème au niveau du nombre de vins communs et du nombre de notes similaires...
  getRecommendedRate(){
    
  }

}
