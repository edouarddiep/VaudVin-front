// tslint:disable: max-line-length
/**
 * 
 * 
 * @author Edouard Diep
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { SnotifyModule } from 'ng-snotify';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  resetPasswordForm: FormGroup;
  isReady = false;
  submitted = false;
  email: string;


  constructor(private alert: AlertController, private auth: AuthenticationService, private formBuilder: FormBuilder, private router: Router, private notify: SnotifyModule) { }

  ngOnInit() {
    this.isReady = true;
    this.setValidators();
  }

    /** Fonction qui set les validators sur le formGroup */
    private setValidators() {
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
    });
  }

  /** Fonction qui affiche une fenêtre alerte */
  private async alertEmailUnknown() {
    const alert = await this.alert.create({
      header: 'Cet e-mail n\'existe pas !',
      subHeader: 'Veuillez corriger le champ correspondant.',
      buttons: ['OK']
    });

    await alert.present();
  }

  /** Fonction qui affiche une fenêtre alerte */
  private async alertEmailSent() {
    const alert = await this.alert.create({
      header: 'Un e-mail vient de vous être envoyé !',
      subHeader: 'Veuillez vérifier votre boîte de réception.',
      buttons: ['OK']
    });

    await alert.present();
  }

  /** Fonction qui navigue vers la page login */
  private goToLogin() {
    this.router.navigateByUrl('/login');
  }

  /** Fonction qui envoie un e-mail de réinitialisation de mot de passe à l'utilisateur */
  private resetPassword() {
    this.submitted = true;

    if (this.resetPasswordForm.invalid) {
      return;
    }
    this.auth.sendPasswordResetLink(this.email).subscribe(() => {
      this.alertEmailSent();
      return;
    }, err => {
      if (err.status === 404) {
        this.alertEmailUnknown();
        return;
      }
    });
  }

}
