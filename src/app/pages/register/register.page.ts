// tslint:disable: max-line-length
/**
 * 
 * 
 * @author Edouard Diep
 */
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/User.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  isReady = false;
  submitted = false;
  confirm_password: string;

  credentials: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
  }

  constructor(private alert: AlertController, private auth: AuthenticationService, private formBuilder: FormBuilder, private router: Router,  private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+(([\',. -][a-zA-Z ])?[a-zA-Z]*)*$')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirm: ['', Validators.required],
    }, {
        validator: this.MustMatch('password', 'password_confirm')
      });
      this.isReady = true;
  }

  async alertEmail(){
    const email = document.getElementById('email');
    email.style.setProperty('color', 'red')
    const alert = await this.alert.create({
      header: 'Cet e-mail est déjà utilisé !',
      message: 'Veuillez corriger le champ correspondant.',
      buttons: ['OK']
    });

    await alert.present();
  }

  MustMatch(controlName: string, matchingControlName: string) {
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
    }
  }

  setDefault(event){
   console.log(event);
  }

  register(){
      this.submitted = true;
      const email = document.getElementById('email');
      // stop here if form is invalid
      if (this.registerForm.invalid) {
        return;
      }

      this.auth.register(this.credentials).subscribe(() => {
        this.router.navigateByUrl('/login');
        this.snackBar.open('Votre compte a bien été créé !', 'Fermer', {
          duration: 3000,
          // here specify the position
          verticalPosition: 'bottom',
          horizontalPosition: 'center'
        });
      },
      err => {
        console.log('L\'ERREUR = '+JSON.stringify(err));
        if(err.status === 400){
          this.alertEmail();
          return;
        }
      }
    );
  }

  goToLogin(){
    this.router.navigateByUrl('/login');
  }
}
