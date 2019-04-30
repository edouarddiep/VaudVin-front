import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/model/Restaurant.model';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {

  restaurant : Restaurant;

  constructor(private rs : RestaurantService, private router : Router) { }

  ngOnInit() {
    this.rs.getRestaurant().subscribe(restaurant => this.restaurant = restaurant);
  }

  goToWineList(){
    this.router.navigate(['list-wine']);
  }

}
