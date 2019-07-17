import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule'
  },
  {
    path: 'register',
    loadChildren: './pages/register/register.module#RegisterPageModule'
  },
  {
    path: 'list-wine',
    loadChildren: './pages/list-wine/list-wine.module#ListWinePageModule'
  },
  {
    path: 'historical',
    loadChildren: './pages/historical/historical.module#HistoricalPageModule'
  },
  {
    path: 'wine-detail',
    loadChildren: './pages/wine-detail/wine-detail.module#WineDetailPageModule'
  },
  {
    path: 'find-restaurant',
    loadChildren: './pages/find-restaurant/find-restaurant.module#FindRestaurantPageModule'
  },
  { 
    path: 'choose-vintage',
    loadChildren: './pages/choose-vintage/choose-vintage.module#ChooseVintagePageModule'
  },
  { 
    path: 'test-map',
    loadChildren: './pages/test-map/test-map.module#TestMapPageModule'
  },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
