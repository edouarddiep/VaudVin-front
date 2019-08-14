import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WineDetailPage } from './wine-detail.page';
import { AlertController } from 'ionic-angular';

const routes: Routes = [
  {
    path: '',
    component: WineDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WineDetailPage],
  providers: [AlertController],
})
export class WineDetailPageModule {}
