// tslint:disable: max-line-length
/**
 * 
 * 
 * @author Edouard Diep
 */
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  isLoading = false;
  cpt = 0;

  constructor(private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
    this.logout();
  }

  /** Fonction qui logout l'utilisateur et supprime le token actuel */
  private logout() {
    this.isLoading = true;
    this.auth.logout();
    setTimeout(() => {
      this.isLoading = false;
      this.cpt = 1;
    }, 5000);
  }

}
