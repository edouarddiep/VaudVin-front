import { Component, OnInit, NgModule, CUSTOM_ELEMENTS_SCHEMA, ViewChild, Renderer } from '@angular/core';
import { VinService } from 'src/app/services/vin.service';
import { Router } from '@angular/router';
import { Vin } from 'src/app/models/Vin.model';

@Component({
  selector: 'app-list-wine',
  templateUrl: './list-wine.page.html',
  styleUrls: ['./list-wine.page.scss'],
})

export class ListWinePage implements OnInit {
  
  vins: Array<Vin>;

  searched: string;
  base64 = 'data:image/jpeg;base64,';
  accordionExpanded = false;
  accordionId:number;

  constructor(private vs: VinService, private router: Router, public renderer: Renderer) {}

  ngOnInit() {
    this.vs.getWines().subscribe(vins => {
      this.vins = vins;
    });
  }

  toggleAccordion(event){
    console.log(event);
    if(event.target.id === ''){
      this.accordionId = event.target.parentNode.id;
    } else {
      this.accordionId = event.target.id;
    }
    console.log(this.accordionId);
    const content = document.getElementById('content' + this.accordionId);
    const icon = document.getElementById('icon' + this.accordionId);
    if(this.accordionExpanded){
      icon.setAttribute('name', 'md-add');
      content.style.setProperty('max-height', '0px');
      content.style.setProperty('padding', '0px 16px');
    } else{
      icon.setAttribute('name', 'md-close');
      content.style.setProperty('max-height', '100vh');
      content.style.setProperty('padding', '13px 16px');
    }
    this.accordionExpanded = !this.accordionExpanded;
    console.log(this.accordionExpanded);
  }

  /*
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
    this.router.navigate(['wine-detail']);
  }
  */
}
