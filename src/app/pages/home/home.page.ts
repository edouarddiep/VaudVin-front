import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  name: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.name = localStorage.getItem('currentUserName');
  }

}
