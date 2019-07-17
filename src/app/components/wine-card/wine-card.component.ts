import { Component, OnInit, Input } from '@angular/core';
import { Vin } from 'src/app/models/Vin.model';
import { VinService } from 'src/app/services/vin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wine-card',
  templateUrl: './wine-card.component.html',
  styleUrls: ['./wine-card.component.scss'],
})
export class WineCardComponent implements OnInit {

  @Input() vin: Vin;
  constructor(private vs: VinService, private router: Router) { }

  ngOnInit() { }

  goToDetails() {
    this.vs.pushNextVin(this.vin);
    this.router.navigateByUrl('/choose-vintage');
  }
}
