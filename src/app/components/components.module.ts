// tslint:disable: max-line-length
/**
 * 
 * 
 * @author Edouard Diep
 */
import { NgModule } from '@angular/core';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { IonicModule } from '@ionic/angular';
import { WineCardComponent } from './wine-card/wine-card.component';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
    declarations: [
        SearchbarComponent,
        WineCardComponent,
        ToolbarComponent,
    ],
    imports: [
        IonicModule,
        CommonModule,
    ],
    exports: [
        SearchbarComponent,
        WineCardComponent,
        ToolbarComponent,
    ]
})
export class ComponentsModule { }
