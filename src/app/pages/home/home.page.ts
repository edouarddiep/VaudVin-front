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

  /** VARIABLES DE CALCUL COEFF CORRESPONDANCE */

  coef = 0;
  correspondanceVin = 0;
  nbVinsCommuns = 0;  // Nombre de notes utilisées dans la mise en correspondance avec les autres utilisateurs
  nbNotesSim = 0; // Notes sur vins communs dont le rapport est de + ou - 1 d'écart
  ratio = 0;  // Total des ratios de correspondance
  lstRatios = new Array<number>();
  noteUtilisateurPondere = 0; // Note d'un utilisateur proche * coef de correspondance (3 dans notre cas)
  lstNotesPonderees = new Array<number>();
  coefMoyenneMill = 3; // coefficient fixe de 3 - décidé par Christophe

  constructor(private alert: AlertController, private router: Router, private us: UserService, private rs: RatingService, private auth: AuthenticationService) { }

  ngOnInit() {
    this.user_id = this.auth.getUserId();
    this.us.getAuthenticatedUser(this.user_id).subscribe(user => {
      this.user = user;
      localStorage.setItem('authenticatedUser', JSON.stringify(this.user));
      this.name = this.user[0].name.split(' ')[0]; // ne récupère que le prénom de l'utilisateur connecté
    });
    this.getRatesByUsers();
    this.getRatesOfAuthenticatedUser();
  }



  /** FONCTION QUI RÉCUPÈRE ET STOCKE LES NOTES DE L'UTILISATEUR CONNECTÉ */
  getRatesOfAuthenticatedUser() {
    this.rs.getUserRates(this.user_id).subscribe(rates => {
      localStorage.setItem('authenticatedUserRates', JSON.stringify(rates));
    });
  }

  /** FONCTION QUI RÉCUPÈRE LES NOTES DES UTILISATEURS EXCLUANT CELUI CONNECTÉ */
  // tslint:disable: max-line-length
  getRatesByUsers() {
    const authenticatedUserRates = JSON.parse(localStorage.getItem('authenticatedUserRates'));
    console.log('===============les notes du user logged in===============');
    console.log(authenticatedUserRates);
    this.us.getUsers().subscribe(users => {
      const filteredUsers = users.filter(u => u.id !== this.user_id); // je crée une nouvelle structure avec tous les users sauf celui connecté
      filteredUsers.forEach(user => {
        this.rs.getUserRates(user.id).subscribe(rates => {
          console.log('===============les notes des autres users===============');
          authenticatedUserRates.forEach(currentUserRate => {
            rates.forEach(otherRate => {
              if (currentUserRate.fk_rat_vin_id === otherRate.fk_rat_vin_id) {
                this.correspondanceVin = currentUserRate.rat_value - otherRate.rat_value; // on calcule la différence des notes pour connaître le nombre de notes "similaire" (soit + ou - 1 d'écart)
                this.nbVinsCommuns++; // le nombre de millésimes notés en communs entre l'utilisateur connecté et les autres
                this.currentCorresp.push(currentUserRate);
                this.otherCorresp.push(otherRate);
                if (this.correspondanceVin >= -1 && this.correspondanceVin <= 1) {
                  this.nbNotesSim++; // on incrémente le nombre de notes avec + ou - 1 d'écart
                }
                this.coef = this.nbNotesSim / this.nbVinsCommuns; // Nb de vin évalué avec + ou - 1 point d'écart / Nb de vin évalué en commun
                this.ratio += this.coef;
                this.noteUtilisateurPondere = this.coef * otherRate.rat_value;
                console.log(currentUserRate);
                console.log(otherRate);
                console.log('la correspondance = ' + this.correspondanceVin);
                console.log('notes similaires = '+this.nbNotesSim);
                console.log('notes vins communs = '+this.nbVinsCommuns);
                console.log('Le coef = '+this.coef);
                console.log('Le ratio = '+this.ratio);
                this.lstRatios.push(this.ratio); // on remplit la liste des ratios
                console.log('La note = ' + otherRate.rat_value.toString());
                console.log('Note utilisateur pondérée = '+this.noteUtilisateurPondere);
                this.lstNotesPonderees.push(this.noteUtilisateurPondere); // on remplit la liste des notes pondérées
              } else {
                this.correspondanceVin = 0; // afin d'éviter de diviser par 0, s'il n'y a pas de vin en commun alors renvoyer 0 dans la table
                this.nbNotesSim = 0;
                this.otherRates.push(otherRate); // les notes des autres users qui ne sont pas en commun avec celles du user courant
              }
            });
          });
        });
      });
    });
    setTimeout(() => {      
      console.log(this.lstRatios);
      console.log(this.lstNotesPonderees);
      console.log('le nb de notes communes = ' + this.nbVinsCommuns);
      console.log('le nb de notes similaires = ' + this.nbNotesSim);
      localStorage.setItem('lstRatios', JSON.stringify(this.lstRatios));
      localStorage.setItem('lstNotesPonderees', JSON.stringify(this.lstNotesPonderees));
      localStorage.setItem('nbVinsCommuns', this.nbVinsCommuns.toString());
      localStorage.setItem('nbNotesSimilaires', this.nbNotesSim.toString());
    }, 1000);
    /** STADE ACTUEL DES CHOSES :
     *  - J'AI LES MOYENNES DES MILLÉSIMES POUR NOTES ET CONCOURS (méthodes à mettre en place dans le service pour récupérer du back)
     *  - J'AI LE NOMBRE DE NOTES COMMUNES (les mêmes vins notés) ET LE NOMBRE DE NOTES SIMILAIRES (+ ou - 1 d'écart)
     *  - J'AI LE RATIO TOTAL
     *  - J'AI TROIS TABLEAUX : CELUI POUR LES NOTES DU USER CONNECTÉ (COMMUNES A CELLES DES AUTRES), CELUI POUR LES NOTES DES AUTRES USERS (COMMUNES A CELLE DU USER CONNECTÉ) ET CELUI POUR TOUTES LES AUTRES NOTES NON COMMUNES
     */
  }
}
