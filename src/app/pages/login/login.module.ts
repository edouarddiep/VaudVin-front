import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';


const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatSnackBarModule,
    RouterModule.forChild(routes)
  ],
  providers: [AuthenticationService],
  declarations: [LoginPage]
})
export class LoginPageModule { }
