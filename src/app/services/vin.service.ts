import { Injectable } from '@angular/core';
import { Vin } from '../models/Vin.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URL } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VinService {

  /*
  public vins: Array<Vin> = [
    {id: 1, nom: 'Château d\'Auvergnier AOC', provenance: 'Communes d\'Auvernier' , producteur: 'Thierry GrosJean & Cie', cepage: 'Chardonnay', type: 'blanc', style: 'grand sec', degre_alcool: '14.50%', millesime: 2015, temperature_service: '2 - 4°C', taux_de_sucre: '80° Oe', medaille : 'Argent à la Sélection Vaudoise', photo: '../../assets/images/chateau_auvernier_2017.png', rate: 4},
    {id: 2, nom: 'Château d\'Auvergnier AOC', provenance: 'Communes d\'Auvernier' , producteur: 'Thierry GrosJean & Cie', cepage: 'Chardonnay', type: 'blanc', style: 'grand sec', degre_alcool: '14.50%', millesime: 2016, temperature_service: '2 - 4°C', taux_de_sucre: '80° Oe', medaille : 'Argent à la Sélection Vaudoise', photo: '../../assets/images/chateau_auvernier_2017.png', rate: 4},
    {id: 3, nom: 'Château d\'Auvergnier AOC', provenance: 'Communes d\'Auvernier' , producteur: 'Thierry GrosJean & Cie', cepage: 'Chardonnay', type: 'blanc', style: 'grand sec', degre_alcool: '14.50%', millesime: 2017, temperature_service: '2 - 4°C', taux_de_sucre: '80° Oe', medaille : 'Argent à la Sélection Vaudoise', photo: '../../assets/images/chateau_auvernier_2017.png', rate: 4},
    {id: 4, nom: 'Château de Châtagneréaz', provenance: 'Mont-sur-Rolle La Côte' , producteur: 'Château de Châtagneréaz', cepage: 'Chasselas', type: 'blanc', style: 'grand sec', degre_alcool: '16.50%', millesime: 2016, temperature_service: '12 - 14°C', taux_de_sucre: '65° OE', medaille : 'Bronze au mondial du Chasselas', photo: '../../assets/images/chateau_de_chatagnereaz_2018.jpg', rate: 3},
    {id: 5, nom: 'Château de Châtagneréaz', provenance: 'Mont-sur-Rolle La Côte' , producteur: 'Château de Châtagneréaz', cepage: 'Chasselas', type: 'blanc', style: 'grand sec', degre_alcool: '16.50%', millesime: 2017, temperature_service: '12 - 14°C', taux_de_sucre: '65° OE', medaille : 'Bronze au mondial du Chasselas', photo: '../../assets/images/chateau_de_chatagnereaz_2018.jpg', rate: 3},
    {id: 6, nom: 'Château de Châtagneréaz', provenance: 'Mont-sur-Rolle La Côte' , producteur: 'Château de Châtagneréaz', cepage: 'Chasselas', type: 'blanc', style: 'grand sec', degre_alcool: '16.50%', millesime: 2018, temperature_service: '12 - 14°C', taux_de_sucre: '65° OE', medaille : 'Bronze au mondial du Chasselas', photo: '../../assets/images/chateau_de_chatagnereaz_2018.jpg', rate: 3},
    {id: 7, nom: 'Château d\'Hauteville AOC', provenance: 'Vevey, Lavaux' , producteur: 'Jean & Pierre Testuz', cepage: 'Gamay, Garanoir', type: 'rouge', style: 'fruité et gouleyant', degre_alcool: '12.50%', millesime: 2015, temperature_service: '14 - 16°C', taux_de_sucre: '85° OE', medaille : 'Argent à la Sélection Vaudoise', photo: '../../assets/images/chateau_hauteville_2017.png', rate: 3},
    {id: 8, nom: 'Château d\'Hauteville AOC', provenance: 'Vevey, Lavaux' , producteur: 'Jean & Pierre Testuz', cepage: 'Gamay, Garanoir', type: 'rouge', style: 'fruité et gouleyant', degre_alcool: '12.50%', millesime: 2016, temperature_service: '14 - 16°C', taux_de_sucre: '85° OE', medaille : 'Argent à la Sélection Vaudoise', photo: '../../assets/images/chateau_hauteville_2017.png', rate: 3},
    {id: 9, nom: 'Château d\'Hauteville AOC', provenance: 'Vevey, Lavaux' , producteur: 'Jean & Pierre Testuz', cepage: 'Gamay, Garanoir', type: 'rouge', style: 'fruité et gouleyant', degre_alcool: '12.50%', millesime: 2017, temperature_service: '14 - 16°C', taux_de_sucre: '85° OE', medaille : 'Argent à la Sélection Vaudoise', photo: '../../assets/images/chateau_hauteville_2017.png', rate: 3},
    {id: 10, nom: 'Domaine Mercouri Letrini', provenance: 'Morges' , producteur: 'Mercouri', cepage: 'Refosco 85% et Mavrodafni 15%', type: 'rouge', style: 'sec', degre_alcool: '13.50%', millesime: 2014, temperature_service: '14 - 16°C', taux_de_sucre: '85° OE', medaille : 'Argent à Biovino', photo: '../../assets/images/domaine_mercouri_2016.png', rate: 4},
    {id: 11, nom: 'Domaine Mercouri Letrini', provenance: 'Morges' , producteur: 'Mercouri', cepage: 'Refosco 85% et Mavrodafni 15%', type: 'rouge', style: 'sec', degre_alcool: '13.50%', millesime: 2015, temperature_service: '14 - 16°C', taux_de_sucre: '85° OE', medaille : 'Argent à Biovino', photo: '../../assets/images/domaine_mercouri_2016.png', rate: 4},
    {id: 12, nom: 'Domaine Mercouri Letrini', provenance: 'Morges' , producteur: 'Mercouri', cepage: 'Refosco 85% et Mavrodafni 15%', type: 'rouge', style: 'sec', degre_alcool: '13.50%', millesime: 2016, temperature_service: '14 - 16°C', taux_de_sucre: '85° OE', medaille : 'Argent à Biovino', photo: '../../assets/images/domaine_mercouri_2016.png', rate: 4},
    {id: 13, nom: 'Domaine de La Doges', provenance: 'Vevey, Lavaux' , producteur: 'Jean & Pierre Testuz', cepage: 'Chasselas', type: 'blanc', style: 'sec et fruité', degre_alcool: '12.10%', millesime: 2015, temperature_service: '9 - 11°C', taux_de_sucre: '85° OE', medaille : 'Or à la Sélection Vaudoise', photo: '../../assets/images/Domaine_de_la_doges.png', rate: 5},
    {id: 14, nom: 'Domaine de La Doges', provenance: 'Vevey, Lavaux' , producteur: 'Jean & Pierre Testuz', cepage: 'Chasselas', type: 'blanc', style: 'sec et fruité', degre_alcool: '12.10%', millesime: 2016, temperature_service: '9 - 11°C', taux_de_sucre: '85° OE', medaille : 'Or à la Sélection Vaudoise', photo: '../../assets/images/Domaine_de_la_doges.png', rate: 5},
    {id: 15, nom: 'Domaine de La Doges', provenance: 'Vevey, Lavaux' , producteur: 'Jean & Pierre Testuz', cepage: 'Chasselas', type: 'blanc', style: 'sec et fruité', degre_alcool: '12.10%', millesime: 2017, temperature_service: '9 - 11°C', taux_de_sucre: '85° OE', medaille : 'Or à la Sélection Vaudoise', photo: '../../assets/images/Domaine_de_la_doges.png', rate: 5},
    {id: 16, nom: 'Domaine de La Doges', provenance: 'Vevey, Lavaux' , producteur: 'Jean & Pierre Testuz', cepage: 'Chasselas', type: 'blanc', style: 'sec et fruité', degre_alcool: '12.10%', millesime: 2018, temperature_service: '9 - 11°C', taux_de_sucre: '85° OE', medaille : 'Or à la Sélection Vaudoise', photo: '../../assets/images/Domaine_de_la_doges.png', rate: 5},
  ];

  */
  vin: Vin;
  vin$ = new BehaviorSubject<Vin>(this.vin);
  vins$ = new BehaviorSubject<Array<Vin>>(new Array<Vin>());
  millesime: Array<number>;
  millesime$ = new BehaviorSubject<Array<number>>(new Array<number>());

  listeVinsFiltree = new Array<Vin>();

  constructor(private http: HttpClient) { }

  getWines(): Observable<Array<Vin>> {
    return this.http.get<Array<Vin>>(URL.domaine + URL.wine.verb);
  }

  /*
  getVinsFilteredByName(content: string): Observable<Array<Vin>> {
    this.listeVinsFiltree = new Array<Vin>();
    this.vins.forEach(v => {
      const nom = v.nom.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const provenance = v.provenance.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const producteur = v.producteur.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const cepage = v.cepage.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const type = v.type.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const style = v.style.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const millesime = v.millesime;
      const medaille = v.medaille.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      const contentNormalized = content.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if (nom.toLocaleUpperCase().includes(contentNormalized.toLocaleUpperCase())
      || provenance.toLocaleUpperCase().includes(contentNormalized.toLocaleUpperCase())
      || provenance.toLocaleUpperCase().includes(contentNormalized.toLocaleUpperCase())
      || producteur.toLocaleUpperCase().includes(contentNormalized.toLocaleUpperCase())
      || cepage.toLocaleUpperCase().includes(contentNormalized.toLocaleUpperCase())
      || type.toLocaleUpperCase().includes(contentNormalized.toLocaleUpperCase())
      || style.toLocaleUpperCase().includes(contentNormalized.toLocaleUpperCase())
      || millesime.toString().includes(contentNormalized.toLocaleUpperCase())
      || medaille.toLocaleUpperCase().includes(contentNormalized.toLocaleUpperCase())) {
        this.listeVinsFiltree.push(v);
      }
    });
    return of(this.listeVinsFiltree);
  }

  */
  pushNextVinArray(vins : Array<Vin>) {
    this.vins$.next(vins);
  }

  getMillesime(nomVin : string){

  }

  /*
  getSelectedVin(vin: Vin): Observable<Vin> {
    var index = this.vins.indexOf(vin);
    this.vin = this.vins[index];
    return of(this.vin);
  }

  */
  pushNextVin() {
    this.vin$.next(this.vin);
  }

  getVinDetail() {
    return this.vin$.asObservable();
  }
}
