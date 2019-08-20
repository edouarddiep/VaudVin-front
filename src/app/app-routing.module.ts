// tslint:disable: max-line-length
/**
 * 
 * 
 * @author Edouard Diep
 */
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
    path: 'wines/:id/vintages/:id/detail',
    loadChildren: './pages/wine-detail/wine-detail.module#WineDetailPageModule'
  },
  {
    path: 'find-restaurant',
    loadChildren: './pages/find-restaurant/find-restaurant.module#FindRestaurantPageModule'
  },
  {
    path: 'wines/:id/choose-vintage',
    loadChildren: './pages/choose-vintage/choose-vintage.module#ChooseVintagePageModule'
  },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'reset-password', loadChildren: './pages/reset-password/reset-password.module#ResetPasswordPageModule' },
  { path: 'logout', loadChildren: './pages/logout/logout.module#LogoutPageModule' },
  { path: 'restaurant-card/:id', loadChildren: './pages/restaurant-card/restaurant-card.module#RestaurantCardPageModule' },
  { path: 'reset-password-form', loadChildren: './pages/reset-password-form/reset-password-form.module#ResetPasswordFormPageModule' },  { path: 'help', loadChildren: './pages/help/help.module#HelpPageModule' },







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
