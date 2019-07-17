import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChooseVintagePage } from './choose-vintage.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseVintagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChooseVintagePage]
})
export class ChooseVintagePageModule {}
