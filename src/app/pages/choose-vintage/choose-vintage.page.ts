import { Component, OnInit } from '@angular/core';
import { Vin } from 'src/app/models/Vin.model';
import { VinService } from 'src/app/services/vin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-vintage',
  templateUrl: './choose-vintage.page.html',
  styleUrls: ['./choose-vintage.page.scss'],
})
export class ChooseVintagePage implements OnInit {

  vin: Vin;
  millesimes = new Array<string>();

  constructor(private vs: VinService, private router: Router) { }

  ngOnInit() {
    this.getMillesime();
  }

  getMillesime(){
    this.vs.getVinDetail().subscribe(vin => {
      this.vin = vin;
      console.log(this.vin.vintage);
      this.millesimes.push(this.vin.vintage);
    });
  }

  goToDetail(){
    this.router.navigateByUrl('/wine-detail');
  }

}
