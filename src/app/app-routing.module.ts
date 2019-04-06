import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './components/home/home.module#HomePageModule'
  },
  {
    path: 'list-wine',
    loadChildren: './components/list-wine/list-wine.module#ListWineComponentModule'
  },
  {
    path: 'list',
    loadChildren: './components/list/list.module#ListPageModule'
  },
  {
    path: 'historic',
    loadChildren: './components/historic/historic.module#HistoricComponentModule'
  },
  {
    path: 'rating',
    loadChildren: './components/rating/rating.module#RatingComponentModule'
  },
  {
    path: 'restaurant',
    loadChildren: './components/restaurant/restaurant.module#RestaurantComponentModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
