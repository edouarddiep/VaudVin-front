import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  isLoading = false;
  cpt = 0;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.isLoading = true;
    this.auth.logout();
    setTimeout(() => {
      this.isLoading = false;
      this.cpt = 1;
    }, 5000);
  }

}
