// tslint:disable: max-line-length
/**
 * 
 * 
 * @author Edouard Diep
 */
import { Component, OnInit } from '@angular/core';
import { Vin } from 'src/app/models/Vin.model';
import { VinService } from 'src/app/services/vin.service';
import { Router } from '@angular/router';
import { Vintage } from 'src/app/models/Vintage.model';
import { VintageService } from 'src/app/services/vintage.service';
import { RatingService } from 'src/app/services/rating.service';
import { Rate } from 'src/app/models/Rate.model';

@Component({
  selector: 'app-choose-vintage',
  templateUrl: './choose-vintage.page.html',
  styleUrls: ['./choose-vintage.page.scss'],
})
export class ChooseVintagePage implements OnInit {

  vin: Vin;
  vintages: Array<Vintage>;
  rates: Array<Rate>;
  listYear = new Array<string>();

  constructor(private vs: VinService, private rs: RatingService, private vintageService: VintageService, private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.fillListYears();
    }, 100);
  }

  /** Fonction qui remplit la liste des années */
  private fillListYears() {
    for (let i = 2019; i >= 1990; i--) {
      this.listYear.push(i.toString());
    }
  }

    /** Fonction qui permet à l'utilisateur de naviguer vers le détail
     * Elle s'assure que le millésime existe ou non
     * Si le millésime existe, on récupère l'existant depuis la bdd
     * Si le millésime n'existe pas, on l'instancie et on le crée pour le stocker dans la bdd
    */
  private goToDetail(event) {
    let selectedYear = parseInt(event);
    this.vs.getVinDetail().subscribe(vin => {
      this.vin = vin;
      const newVintage = Vintage.createVintage(selectedYear, this.vin.win_id);
      this.vs.getWineVintages(this.vin.win_id).subscribe(vintages => {
        this.vintages = vintages;
        const filtered = this.vintages.filter(v => v.vin_year === selectedYear);
        if (filtered.length > 0) { // si le millésime de ce vin existe déjà dans la base de données
          const v = this.vintages.find(v => v.vin_year === selectedYear);
          localStorage.setItem('selectedVintage', JSON.stringify(v));
          selectedYear = null;
          this.router.navigateByUrl('wines/' + vin.win_id + '/vintages/' + v.vin_id + '/detail');
          return;
        } else { // le millésime n'existe pas dans la base de données du coup on crée
          if (selectedYear === null) {
            return;
          } else {
            this.vintageService.postVintage(newVintage).subscribe(data => {
              localStorage.setItem('selectedVintage', JSON.stringify(data));
              selectedYear = null;
              this.router.navigateByUrl('wines/' + vin.win_id + '/vintages/' + data.vin_id + '/detail');
              return;
            });
          }
        }
      });
    });
  }

}
