import { Component, OnInit } from '@angular/core';
import { Vin } from 'src/app/models/Vin.model';
import { VinService } from 'src/app/services/vin.service';
import { Router } from '@angular/router';
import { Vintage } from 'src/app/models/Vintage.model';

@Component({
  selector: 'app-choose-vintage',
  templateUrl: './choose-vintage.page.html',
  styleUrls: ['./choose-vintage.page.scss'],
})
export class ChooseVintagePage implements OnInit {

  vin: Vin;
  vintages: Array<Vintage>;

  constructor(private vs: VinService, private router: Router) { }

  ngOnInit() {
    this.getWineVintages();
  }

  getWineVintages() {
    this.vs.getVinDetail().subscribe(vin => {
      this.vin = vin;
      this.vs.getWineVintages(this.vin.id).subscribe(vintages => this.vintages = vintages);
    });
  }

  goToDetail(event) {
    this.vintages.forEach(v => {
      if(v.year.toString() === event.target.innerText){
        localStorage.setItem('selectedVintage', JSON.stringify(v));
      }
    });
    this.router.navigateByUrl('/wine-detail');
  }

}
