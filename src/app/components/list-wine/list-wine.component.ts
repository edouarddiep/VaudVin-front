import { Component, OnInit } from '@angular/core';
import { VinService } from 'src/app/services/vin.service';
import { Vin } from 'src/app/model/Vin.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-wine',
  templateUrl: './list-wine.component.html',
  styleUrls: ['./list-wine.component.scss'],
})
export class ListWineComponent implements OnInit {

  vins = new Array<Vin>();

  searched : string;

  constructor(private vs : VinService, private router : Router) { }

  ngOnInit() {
    this.vs.getVins().subscribe(vins => this.vins = vins);
    console.log(this.vins.length);
  }

  onChange(event){
    this.searched = event.detail.value;
    this.vs.getVinsFilteredByName(event.detail.value).subscribe(vins => this.vins = vins);
    this.vs.pushNextVinArray();
  }

  goToDetails(selectedVin : Vin){
    this.vs.getSelectedVin(selectedVin).subscribe(vin => {
      selectedVin = vin;
      this.vs.pushNextVin();
    });
    this.router.navigate(['rating']);
  }
}
