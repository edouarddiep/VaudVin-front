import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private username: string;
  private password: string;

  private lstUsers = new Array<string>();
  private lstPasswords = new Array<string>();

  constructor(private router : Router) { }


  ngOnInit() {
    /* A CORRIGER DANS UNE FUTURE VERSION*/
    this.lstUsers.push('admin');
    this.lstUsers.push('papa');
    this.lstUsers.push('eric');
    this.lstUsers.push('eddy');
    this.lstUsers.push('maman');
    this.lstUsers.push('test');
    this.lstUsers.push('user');
    this.lstPasswords.push('admin');
    this.lstPasswords.push('papa');
    this.lstPasswords.push('eric');
    this.lstPasswords.push('eddy');
    this.lstPasswords.push('maman');
    this.lstPasswords.push('test');
    this.lstPasswords.push('user');
  }

  login(event: any) {
    console.log(event.keyCode);
    if (event.keyCode === 13 || event.keyCode == null) {
      if(this.lstUsers.indexOf(this.username) !== -1 && this.lstPasswords.indexOf(this.password) !== -1) {
        this.router.navigate(['home']);
      } else {
        alert('Le nom d\'utilisateur ou le mot de passe est invalide !');
      }
    }
  }

}
