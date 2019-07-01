import { Component, OnInit } from '@angular/core';
import { VinService } from 'src/app/services/vin.service';
import { Vin } from 'src/app/models/Vin.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.page.html',
  styleUrls: ['./historical.page.scss'],
})
export class HistoricalPage implements OnInit {

  vins = new Array<Vin>();

  searched : string;

  constructor(private vs : VinService, private router : Router) { }

  ngOnInit() {
    this.vs.getWines().subscribe(vins => this.vins = vins);
  }
/*
  onChange(event){
    this.searched = event.detail.value;
    this.vs.getVinsFilteredByName(event.detail.value).subscribe(vins => this.vins = vins);
    this.vs.pushNextVinArray();
  }
*/
}
