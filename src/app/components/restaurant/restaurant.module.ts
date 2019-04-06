import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { RestaurantComponent } from './restaurant.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: RestaurantComponent
      }
    ])
  ],
  declarations: [RestaurantComponent],
  exports: [RestaurantComponent]
})
export class RestaurantComponentModule { }
