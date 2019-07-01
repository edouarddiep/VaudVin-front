import { NgModule } from '@angular/core';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { IonicModule } from '@ionic/angular';
import { WineCardComponent } from './wine-card/wine-card.component';

@NgModule({
    declarations: [
        SearchbarComponent,
        WineCardComponent,
    ],
    imports: [
        IonicModule,
    ],
    exports: [
        SearchbarComponent,
        WineCardComponent,
    ]
})
export class ComponentsModule { }
