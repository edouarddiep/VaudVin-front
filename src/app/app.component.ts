// tslint:disable: max-line-length
/**
 * 
 * 
 * @author Edouard Diep
 */
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Accueil',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Noter / évaluer un vin',
      url: '/list-wine',
      icon: 'heart-half'
    },
    {
      title: 'Trouver un restaurant',
      url: '/find-restaurant',
      icon: 'restaurant'
    },
    {
      title: 'Consulter son historique',
      url: '/historical',
      icon: 'list'
    },
    {
      title: 'Aide',
      url: '/help',
      icon: 'help-circle-outline'
    },
    {
      title: 'Se déconnecter',
      url: '/logout',
      icon: 'exit'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
