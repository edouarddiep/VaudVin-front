import { Component, OnInit } from '@angular/core';
import { Vin } from 'src/app/models/Vin.model';
import { VinService } from 'src/app/services/vin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wine-detail',
  templateUrl: './wine-detail.page.html',
  styleUrls: ['./wine-detail.page.scss'],
})
export class WineDetailPage implements OnInit {
  vin: Vin;
  base64 = 'data:image/png;base64,';
  vinPhoto: string;
  isBio: string;
  isWoody: string;

  constructor(private vs: VinService, private router: Router) { }

  ngOnInit() {
    this.vs.getVinDetail().subscribe(vin => {
      this.vin = vin;
      this.vinPhoto = this.base64 + this.vin.photo;
      if(this.vin.is_bio){
        this.isBio = 'oui';
      } else {
        this.isBio = 'non';
      }
      if(this.vin.is_woody_character){
        this.isWoody = 'oui';
      } else {
        this.isWoody = 'non';
      }
    });
  }

  changeIcon(event) {
    console.log("L'ID = " + event.target.id);
    switch (event.target.id) {
      case "heart1": {
        this.fillHeart(1);
        break;
      }
      case "heart2": {
        this.fillHeart(2);
        break;
      }
      case "heart3": {
        this.fillHeart(3);
        break;
      }
      case "heart4": {
        this.fillHeart(4);
        break;
      }
      case "heart5": {
        this.fillHeart(5);
        break;
      }
    }
  }

  fillHeart(id: number) {
    for (let i = 1; i <= id; i++) {
      console.log("CA FILL");
      let currentHeart = document.getElementById('heart' + i);
      currentHeart.setAttribute('name', 'heart');
    }
    for (let k = 5; k > id; k--) {
      console.log("CA DEFILL");
      let currentHeart = document.getElementById('heart' + k);
      currentHeart.setAttribute('name', 'heart-empty');
    }
  }

  navigatePage() {
    this.router.navigateByUrl('/list-wine');

  }

  rate() {
    alert("Merci d'avoir évalué ce vin !");
  }

}
