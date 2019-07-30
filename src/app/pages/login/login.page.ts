import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/User.model';
import { ToastComponent } from 'ng-snotify';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  credentials: User = {
    id: 0,
    name: '',
    email: '',
    password: ''
  }
  loginReady = false;

  constructor(private auth: AuthenticationService, private router: Router, private snackBar: MatSnackBar) { }

  login(event){
    if(event){
      if(event.keyCode === 13){
        this.loginReady = true;
      } else {
        this.loginReady = false;
      }
    } else {
      this.loginReady = true;
    }
    if(this.loginReady){
      this.auth.login(this.credentials).subscribe(() => {
        this.router.navigateByUrl('/home');
      },
      err => {
        if(err.status === 400){
          alert('L\'e-mail ou le mot de passe est incorrect !');
        }
        console.error(err);
      });
    }
  }

  goToRegister(){
    this.router.navigateByUrl('/register');
  }
}
