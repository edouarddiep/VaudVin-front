import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  title: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.setTitle();
  }

  /** Fonction qui set le titre de l'en-tête en fonction de la page courante */
  private setTitle(){
    switch (this.router.url) {
      case '/home':
        this.title = 'Accueil';
        break;
      case '/list-wine':
        this.title = 'Noter / Evaluer un vin';
        break;
      case '/find-restaurant':
        this.title = 'Trouver un restaurant';
        break;
      case '/historical':
        this.title = 'Mon historique';
        break;
      case '/help':
        this.title = 'Page d\'aide';
        break;
      default:
        break;
    }
  }

}
