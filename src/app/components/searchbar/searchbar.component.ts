import { Component, OnInit } from '@angular/core';
import { VinService } from 'src/app/services/vin.service';
import { Vin } from 'src/app/models/Vin.model';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})

export class SearchbarComponent implements OnInit {

  searched: string;
  vins: Array<Vin>;

  constructor(private vs: VinService) { }

  ngOnInit() { }

  onChange(event) {
    const filteredList = new Array<Vin>();
    this.searched = event.detail.value.toLocaleLowerCase();
    console.log(this.searched);
    this.vs.getWines().subscribe(vins => {
      this.vins = vins;
      this.vins.forEach(v => {
        const nom = v.name.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const provenance = v.region.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const producteur = v.producer.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const appellation = v.appellation.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const cepage = v.grape_variety.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const type = v.category.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const style = v.style.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const contentNormalized = this.searched.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        if (nom.includes(contentNormalized) || provenance.includes(contentNormalized)
          || producteur.includes(contentNormalized) || appellation.includes(contentNormalized)
          || cepage.includes(contentNormalized) || type.includes(contentNormalized)
          || style.includes(contentNormalized)) {
          filteredList.push(v);
        }
      });
      this.vs.pushNextVinArray(filteredList);
    });
  }
}
