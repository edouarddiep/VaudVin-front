import { NgModule } from '@angular/core';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { IonicModule } from '@ionic/angular';
import { WineCardComponent } from './wine-card/wine-card.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        SearchbarComponent,
        WineCardComponent,
    ],
    imports: [
        IonicModule,
        CommonModule,
    ],
    exports: [
        SearchbarComponent,
        WineCardComponent,
    ]
})
export class ComponentsModule { }
