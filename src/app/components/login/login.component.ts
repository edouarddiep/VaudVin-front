import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  private username: string;
  private password: string;

  constructor(private router : Router) { }

  ngOnInit() {}

  login(event: any) {
    console.log(event.keyCode);
    if (event.keyCode === 13 || event.keyCode == null) {
      if(this.username === 'admin' && this.password === 'admin') {
        this.router.navigate(['home']);
      } else {
        alert('Le nom d\'utilisateur ou le mot de passe est invalide !');
      }
    }
  }

}
