import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenPayload, AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  credentials: TokenPayload = {
    id: 0,
    name: '',
    email: '',
    password: ''
  }

  constructor(private auth: AuthenticationService, private router: Router) { }

  login(event){
    if(event.keyCode === 13 || event.keyCode === null){
      this.auth.login(this.credentials).subscribe(() => {
        console.log("Les credentials name"+this.credentials.name);
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
