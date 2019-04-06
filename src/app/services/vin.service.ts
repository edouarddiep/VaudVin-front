import { Injectable } from '@angular/core';
import { Vin } from '../model/Vin.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VinService {

  public vins: Array<Vin> = [
    {id: 1,nom: 'Château d\'Auvergnier AOC', provenance:'Communes d\'Auvernier' , producteur: 'Thierry GrosJean & Cie', cepage: 'Chardonnay', type: 'blanc', style: 'grand sec', degre_alcool: '14.50%', millesime: 2017, temperature_service: '2 - 4°C', taux_de_sucre: '80° Oe', medaille : 'Argent à la Sélection Vaudoise', photo: '../../assets/images/chateau_auvernier_2017.png'},
    {id: 2,nom: 'Château de Châtagneréaz', provenance:'Mont-sur-Rolle La Côte' , producteur: 'Château de Châtagneréaz', cepage: 'Chasselas', type: 'blanc', style: 'grand sec', degre_alcool: '16.50%', millesime: 2018, temperature_service: '12 - 14°C', taux_de_sucre: '65° OE', medaille : 'Bronze au mondial du Chasselas', photo: '../../assets/images/chateau_de_chatagnereaz_2018.jpg'},
    {id: 3,nom: 'Château d\'Hauteville AOC', provenance:'Vevey, Lavaux' , producteur: 'Jean & Pierre Testuz', cepage: 'Gamay, Garanoir', type: 'rouge', style: 'fruité et gouleyant', degre_alcool: '12.50%', millesime: 2017, temperature_service: '14 - 16°C', taux_de_sucre: '85° OE', medaille : 'Argent à la Sélection Vaudoise', photo: '../../assets/images/chateau_hauteville_2017.png'},
    {id: 4,nom: 'Domaine Mercouri Letrini', provenance:'Morges' , producteur: 'Mercouri', cepage: 'Refosco 85% et Mavrodafni 15%', type: 'rouge', style: 'sec', degre_alcool: '13.50%', millesime: 2016, temperature_service: '14 - 16°C', taux_de_sucre: '85° OE', medaille : 'Argent à Biovino', photo: '../../assets/images/domaine_mercouri_2016.png'},
  ];

  vin : Vin;

  vin$ = new BehaviorSubject<Vin>(this.vin);

  vins$ = new BehaviorSubject<Array<Vin>>(new Array<Vin>());

  listeVinsFiltree = new Array<Vin>();

  constructor() { }

  getVins() : Observable<Array<Vin>>{
    return of(this.vins);
  }

  getVinsFilteredByName(name : string) : Observable<Array<Vin>>{
    this.listeVinsFiltree = new Array<Vin>();
    this.vins.forEach(v => {
      var vinNorm = v.nom.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      var nameNorm = name.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      if(vinNorm.toLocaleUpperCase().includes(nameNorm.toLocaleUpperCase())){
        this.listeVinsFiltree.push(v);
      }
    });
    return of(this.listeVinsFiltree);
  }

  pushNextVinArray(){
    this.vins$.next(this.vins);
  }

  getSelectedVin(vin : Vin) : Observable<Vin>{
    var index = this.vins.indexOf(vin);
    this.vin = this.vins[index];
    return of(this.vin);
  }

  pushNextVin(){
    this.vin$.next(this.vin);
  }

  getVinDetail(){
    return this.vin$.asObservable();
  }
}
