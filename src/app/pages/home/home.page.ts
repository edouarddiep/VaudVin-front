// tslint:disable: max-line-length
/**
 * 
 * 
 * @author Edouard Diep
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User.model';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RatingService } from 'src/app/services/rating.service';
import { Rate } from 'src/app/models/Rate.model';
import { Vin } from 'src/app/models/Vin.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user: User;
  user_id: number;
  name: string;
  rates: Array<Rate>;
  vin: Vin;
  currentCorresp = new Array<Rate>();
  otherCorresp = new Array<Rate>();
  otherRates = new Array<any>();

  constructor(private alert: AlertController, private router: Router, private us: UserService, private rs: RatingService, private auth: AuthenticationService) { }

  ngOnInit() {
    this.getAuthenticatedUser();
    this.getRatesOfAuthenticatedUser();
  }

  /** FONCTION QUI RÉCUPÈRE L'UTILISATEUR COURANT ET AFFICHE SON NOM SUR L'ACCUEIL */
  private getAuthenticatedUser() {
    this.user_id = this.auth.getUserId();
    this.us.getUser(this.user_id).subscribe(user => {
      this.user = user;
      localStorage.setItem('authenticatedUser', JSON.stringify(this.user));
      this.name = this.user[0].name.split(' ')[0]; // ne récupère que le prénom de l'utilisateur connecté
    });
  }



  /** FONCTION QUI RÉCUPÈRE ET STOCKE LOCALEMENT LES NOTES DE L'UTILISATEUR CONNECTÉ */
  private getRatesOfAuthenticatedUser() {
    this.rs.getUserRates(this.user_id).subscribe(rates => {
      localStorage.setItem('authenticatedUserRates', JSON.stringify(rates));
    });
  }

}
