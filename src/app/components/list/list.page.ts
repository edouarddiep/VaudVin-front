import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Restaurant } from 'src/app/model/Restaurant.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;

  title = "Trouver un restaurant";
  restaurants = new Array<Restaurant>();


  constructor(private rs : RestaurantService, private router : Router) { }

  ngOnInit() {
    this.rs.getRestaurants().subscribe(restaurants => this.restaurants = restaurants);
    console.log(this.restaurants.length);
  }

  onChange(event){
    this.rs.getRestaurantsByName(event.detail.value).subscribe(restaurants => this.restaurants = restaurants);
    this.rs.pushNextArrayRestaurants(this.restaurants);
  }

  getDetails(r : Restaurant){
    this.rs.setRestaurant(r);
    this.router.navigate(['restaurant']);
  }
}
