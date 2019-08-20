// tslint:disable: max-line-length
/**
 * 
 * 
 * @author Edouard Diep
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/User.model';
import { ToastComponent } from 'ng-snotify';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertController } from '@ionic/angular';
import { Animation } from '@ionic/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials: User = {
    id: 0,
    name: '',
    email: '',
    password: ''
  }
  loginReady = false;

  constructor(private alert: AlertController, private auth: AuthenticationService, private router: Router, private snackBar: MatSnackBar) { }


  ngOnInit() { }

  /** Fonction qui affiche une fenêtre alerte */
  private async alertLogin() {
    const alert = await this.alert.create({
      header: 'L\'e-mail ou le mot de passe est incorrect !',
      subHeader: 'Veuillez corriger les champs correspondants.',
      buttons: ['OK'],
    });

    await alert.present();
  }

  /** Fonction qui login l'utilisateur
   * l'event reçu en paramètre permet de gérer le clic sur "Enter" pour le form -> plus pratique
   * redirige l'utilisateur sur la page d'accueil après s'être loggé correctement
   * sinon affiche une fenêtre d'alerte pour erreur de login
  */
  private login(event) {
    if (event) {
      if (event.keyCode === 13) {
        this.loginReady = true;
      } else {
        this.loginReady = false;
      }
    } else {
      this.loginReady = true;
    }
    if (this.loginReady) {
      this.auth.login(this.credentials).subscribe(() => {
        this.router.navigateByUrl('/home');
      },
        err => {
          if (err.status === 400) {
            this.alertLogin();
          }
          console.error(err);
        });
    }
  }

  /** Fonction qui redirige l'utilisateur vers la page register */
  private goToRegister() {
    this.router.navigateByUrl('/register');
  }
}
