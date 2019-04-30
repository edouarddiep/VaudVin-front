import { Component, OnInit } from '@angular/core';
import { VinService } from 'src/app/services/vin.service';
import { Router } from '@angular/router';
import { Vin } from 'src/app/model/Vin.model';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss'],
})
export class HistoricComponent implements OnInit {

  vins = new Array<Vin>();

  searched : string;

  constructor(private vs : VinService, private router : Router) { }

  ngOnInit() {
    this.vs.getVins().subscribe(vins => this.vins = vins);
  }

  onChange(event){
    this.searched = event.detail.value;
    this.vs.getVinsFilteredByName(event.detail.value).subscribe(vins => this.vins = vins);
    this.vs.pushNextVinArray();
  }

}
