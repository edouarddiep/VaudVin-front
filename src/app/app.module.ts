import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Config, Platform, DomController, App, Keyboard } from 'ionic-angular';
import { ComponentsModule } from './components/components.module';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { AuthGuardService } from './services/auth-guard.service';
import { RegisterPage } from './pages/register/register.page';
import { AgmCoreModule } from '@agm/core';
import { AuthenticationService } from './services/authentication.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { RatingService } from './services/rating.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';


library.add(fas, far, fab);

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage},
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
    FontAwesomeModule,
    ComponentsModule,
    ReactiveFormsModule,
    SnotifyModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCeRuufysM9JnUKkN5FXkd4vxDBIwHCV2Q'
    }),
  ],
  providers: [
    StatusBar,
    Config,
    Platform,
    App,
    DomController,
    Keyboard,
    SplashScreen,
    HttpClientModule,
    AuthenticationService,
    RatingService,
    SnotifyService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy, useValue: ToastDefaults }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
