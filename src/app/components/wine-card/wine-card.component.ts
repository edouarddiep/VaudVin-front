import { Component, OnInit, Input } from '@angular/core';
import { Vin } from 'src/app/models/Vin.model';

@Component({
  selector: 'app-wine-card',
  templateUrl: './wine-card.component.html',
  styleUrls: ['./wine-card.component.scss'],
})
export class WineCardComponent implements OnInit {

  @Input() vin: Vin;
  constructor() { }

  ngOnInit() {}

}
