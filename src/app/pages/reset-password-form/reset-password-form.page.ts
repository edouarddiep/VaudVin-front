import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.page.html',
  styleUrls: ['./reset-password-form.page.scss'],
})
export class ResetPasswordFormPage implements OnInit {

  resetPasswordForm: FormGroup;
  isReady = false;

  form = {
    email: null,
    password: null,
    password_confirm: null,
    resetToken: null
  }

  submitted = false;

  constructor(private route: ActivatedRoute, private auth: AuthenticationService, private alert: AlertController, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getCurrentUserToken();
    this.setValidators();
    this.isReady = true;
  }

  /** Fonction qui set les validators sur le formGroup */
  private setValidators() {
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirm: ['', Validators.required],
    }, {
        validator: this.MustMatch('password', 'password_confirm')
      });
  }

  /** Fonction qui récupère le token de l'utilisateur connecté */
  private getCurrentUserToken() {
    this.route.queryParams.subscribe(params => {
      this.form.resetToken = params['\ntoken'];
      localStorage.setItem('resetUserToken', this.form.resetToken);
    });
  }

  /** Fonction qui envoie une alerte de confirmation */
  private async alertPasswordReset() {
    const alert = await this.alert.create({
      subHeader: 'Votre mot de passe a bien été changé',
      buttons: ['OK']
    });

    await alert.present();

  }


  /** Fonction qui envoie une alerte d'erreur */
  private async alertEmailUnknown() {
    const alert = await this.alert.create({
      header: 'Cette e-mail n\'existe pas !',
      subHeader: 'Veuillez corriger le champ correspondant.',
      buttons: ['OK']
    });

    await alert.present();

  }


  /** Fonction qui compare la correspondance entre password et password_confirm */
  private MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  /** METHODE QUI RESET LE MOT DE PASSE */
  private resetPassword() {

    this.submitted = true;

    if (this.resetPasswordForm.invalid) {
      return;
    }

    this.auth.changePassword(this.form).subscribe(data => {
      this.alertPasswordReset();
      setTimeout(() => {
        this.router.navigateByUrl('/login');
      }, 1000);
      return;
    }, err => {
      if (err.status === 422) {
        this.alertEmailUnknown();
        return;
      }
    });


  }
}
