// tslint:disable: max-line-length
/**
 * 
 * 
 * @author Edouard Diep
 */
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/models/Restaurant.model';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Platform, LoadingController } from '@ionic/angular';
import { AgmMap, MapsAPILoader } from '@agm/core';

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

/** MARQUEUR PERMETTANT DE LOCALISER LES RESTAURANTS SUR L'API GOOGLE MAPS */
class GeoLocationMarqueur {
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
  height = 0;
  infoWindow: any;
  requestRestaurants: any;
  requestCafes: any;
  requestBars: any;
  service: any;

  markers = new Array<any>();
  lstLocalisations = new Array<GeoLocationMarqueur>();
  icon = {
    url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
    scaledSize: {
      width: 40,
      height: 40
    }
  }

  @ViewChild(AgmMap, { read: true, static: false }) map: AgmMap;
  public location: Location = {
    lat: this.lat,
    lng: this.lng,
    marker: {
      lat: this.lat,
      lng: this.lng,
    },
    zoom: 14
  };


  constructor(public mapsApiLoader: MapsAPILoader, private loadingCtrl: LoadingController, private rs: RestaurantService, private router: Router, public platform: Platform) {
    this.mapsApiLoader = mapsApiLoader;
    this.mapsApiLoader.load().then(() => {
      this.geocoder = new google.maps.Geocoder();
    });
  }

  ngOnInit() {
    const infoWindow = document.getElementById('infoWindow');
    this.isLoading = true;
    this.getRestaurants();
    setTimeout(() => {
      this.location.marker.draggable = false;
      this.setCurrentPosition();
      this.cpt = 1;
      this.isLoading = false;
    }, 500);
  }

  /** Fonction qui récupère tous les restaurants de la bdd */
  private getRestaurants() {
    this.rs.getRestaurants().subscribe(restaurants => {
      this.restaurants = restaurants;
      this.updateOnMap();
    });
  }

  /** FONCTION PERMETTANT DE PLACER LE MARQUEUR DE GEOLOCATION SUR L'API GOOGLE MAPS */
  private setCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: Position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        if (position) {
          this.zoom = 14;
          this.lat = lat;
          this.lng = lng;
        }
      },
        (error: PositionError) => console.log(error));
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }

  /** FONCTION PERMETTANT DE PLACER LES MARQUEURS DES RESTAURANTS SUR L'API GOOGLE MAPS */
  private updateOnMap() {
    this.restaurants.forEach(r => {
      this.location.addresse = r.res_address_1;
      this.location.ville = r.res_city;
      this.location.pays = r.res_country;
      let full_address: string = this.location.addresse || ""
      if (this.location.ville) full_address = full_address + " " + this.location.ville
      if (this.location.pays) full_address = full_address + " " + this.location.pays
      this.findLocation(full_address, r);
    });
  }

  /** FONCTION PERMETTANT DE RETROUVER LES RESTAURANTS DE LA BDD SUR L'API GOOGLE MAPS */
  private findLocation(address, r: Restaurant) {
    if (!this.geocoder) { this.geocoder = new google.maps.Geocoder(); }
    this.geocoder.geocode({
      'address': address
    }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        for (let i = 0; i < results[0].address_components.length; i++) {
          const types = results[0].address_components[i].types;

          if (types.indexOf('locality') !== -1) {
            this.location.addresse = results[0].address_components[i].long_name;
          }
          if (types.indexOf('pays') !== -1) {
            this.location.pays = results[0].address_components[i].long_name;
          }
          if (types.indexOf('postal_code') !== -1) {
            this.location.code_postal = results[0].address_components[i].long_name;
          }
          if (types.indexOf('administrative_area_level_1') !== -1) {
            this.location.ville = results[0].address_components[i].long_name;
          }
        }

        if (results[0].geometry.location) {
          this.location.lat = results[0].geometry.location.lat();
          this.location.lng = results[0].geometry.location.lng();
          this.lstLocalisations.push(new GeoLocationMarqueur(r, this.location.lat, this.location.lng));
          this.location.marker.lat = results[0].geometry.location.lat();
          this.location.marker.lng = results[0].geometry.location.lng();
          this.location.marker.draggable = true;
          this.location.viewport = results[0].geometry.viewport;
        }
      } else {
        console.log("Sorry, this search produced no results.");
      }
    });
  }

  /** Fonction qui navigue vers la carte des vins du restaurant sélectionné */
  goToWineCard(r: Restaurant) {
    this.rs.pushNextRestaurant(r);
    this.router.navigateByUrl('restaurant-card/' + r.res_id);
  }


}
