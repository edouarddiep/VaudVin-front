import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-test-map',
  templateUrl: './test-map.page.html',
  styleUrls: ['./test-map.page.scss'],
})
export class TestMapPage implements OnInit {


  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  height = 0;
  
  constructor(public platform: Platform) {
    console.log(platform.height());
    this.height = platform.height() - 56;
  }

  ngOnInit(): void {
  }

}
