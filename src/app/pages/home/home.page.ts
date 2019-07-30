import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User.model';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user: User;
  name: string;

  constructor(private router: Router, private us: UserService, private auth: AuthenticationService) { }

  ngOnInit() {
    const id = this.auth.getUserId();
    this.us.getAuthenticatedUser(id).subscribe(user => {
      this.user = user;
      localStorage.setItem('authenticatedUser', JSON.stringify(this.user));
      this.name = this.user[0].name.split(' ')[0];
    });
  }

}
