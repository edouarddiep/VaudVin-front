import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { FindRestaurantPage } from './find-restaurant.page';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';

const routes: Routes = [
  {
    path: '',
    component: FindRestaurantPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCNCcZrK2XKLv3wxpi7gnCRF1ElHbeHQj8'
    })
  ],
  declarations: [FindRestaurantPage],
  providers: [GoogleMapsAPIWrapper],
})
export class FindRestaurantPageModule {}
