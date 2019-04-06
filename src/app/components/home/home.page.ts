import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private username: string;
  private password: string;

  constructor(private router: Router) { }

  login(username: string, password: string, event: any) {
    if (event.keyCode === 13 || event.keyCode == null) {
      if(this.username === 'admin' && this.password === 'admin') {
        this.router.navigate(['list-wine']);
      } else {
        alert('Le nom d\'utilisateur ou le mot de passe est invalide !');
      }
    }
  }
}
