import { Component, OnInit, Input } from '@angular/core';
import { Vin } from 'src/app/model/Vin.model';
import { VinService } from 'src/app/services/vin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  
  vin : Vin;

  constructor(private vs : VinService, private router : Router) { }

  ngOnInit() {
    this.vs.getVinDetail().subscribe(vin => this.vin = vin);
    console.log(this.vin.nom);
  }

  changeIcon(event){
    console.log("L'ID = "+event.target.id);
    switch(event.target.id){
      case "heart1":{
        this.fillHeart(1);
        break;
      }
      case "heart2":{
        this.fillHeart(2);
        break;
      }
      case "heart3":{
        this.fillHeart(3);
        break;
      }
      case "heart4":{
        this.fillHeart(4);
        break;
      }
      case "heart5":{
        this.fillHeart(5);
        break;
      }
    }
  }

  fillHeart(id : number){
    for(let i=1;i<=id;i++){
      console.log("CA FILL");
      let currentHeart = document.getElementById('heart'+i);
      currentHeart.setAttribute('name', 'heart');
    }
    for(let k=5;k>id;k--){
      console.log("CA DEFILL");
      let currentHeart = document.getElementById('heart'+k);
      currentHeart.setAttribute('name', 'heart-empty');
    }
  }

  navigatePage(){
    this.router.navigate(['list-wine']);
    
  }

  robin(event){
    alert(event.value);
  }
}
