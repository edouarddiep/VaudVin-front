import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/models/Restaurant.model';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Platform } from '@ionic/angular';
import { AgmMap, GoogleMapsAPIWrapper, MapsAPILoader } from '@agm/core';

declare var google: any;

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable?: boolean;
}

interface Location {
  lat: number;
  lng: number;
  viewport?: Object;
  zoom: number;
  addresse?: string;
  no_rue?: string;
  pays?: string;
  code_postal?: string;
  ville?: string;
  marker?: Marker;
}

class LocalisationMarqueur {
  restaurant: Restaurant;
  lat: number;
  lng: number;
  constructor(restaurant: Restaurant, lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
    this.restaurant = restaurant;
  }
}


@Component({
  selector: 'app-find-restaurant',
  templateUrl: './find-restaurant.page.html',
  styleUrls: ['./find-restaurant.page.scss'],
})
export class FindRestaurantPage implements OnInit {
  private selectedItem: any;

  restaurants = new Array<Restaurant>();

  geocoder: any;
  lat: number;
  lng: number;
  zoom: number;
  isLoading = false;
  cpt = 0;
  lstLocalisations = new Array<LocalisationMarqueur>();
  icon = {
    url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    scaledSize: {
      width: 40,
      height: 40
    }
  }

  @ViewChild(AgmMap, {read: true, static: false}) map: AgmMap;
  public location: Location = {
    lat: this.lat,
    lng: this.lng,
    marker: {
      lat: this.lat,
      lng: this.lng,
    },
    zoom: 5
  };

  constructor(public mapsApiLoader: MapsAPILoader,
    private zone: NgZone,
    private wrapper: GoogleMapsAPIWrapper, private rs : RestaurantService, private router : Router, public platform: Platform) {
    this.mapsApiLoader = mapsApiLoader;
    this.zone = zone;
    this.wrapper = wrapper;
    this.mapsApiLoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
    });
  }

  ngOnInit() {
    this.rs.getRestaurants().subscribe(restaurants => this.restaurants = restaurants);
    console.log(this.restaurants.length);
    setTimeout(() => {
      this.location.marker.draggable = false;
      this.geoLocation();
      this.getRestaurants();
      this.cpt = 1;
      this.isLoading = false;
    }, 0);
  }

  getRestaurants() {
    this.rs.getRestaurants().subscribe(restaurants => this.restaurants = restaurants);
  }

  geoLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        if (position) {
          this.zoom = 16;
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
        }
      },
        (error: PositionError) => console.log(error));
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  navigateToRestaurant(restaurant: Restaurant) {
    //this.router.navigate(['vendor-profil/' + restaurant.id]);
    console.log("route pour restaurant");
  }

/*
  onChange(event){
    this.rs.getRestaurantsByName(event.detail.value).subscribe(restaurants => this.restaurants = restaurants);
    this.rs.pushNextArrayRestaurants(this.restaurants);
  }
*/
  getDetails(r: Restaurant){
    this.rs.setRestaurant(r);
    this.router.navigate(['restaurant-detail']);
  }
}
