import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  /*{
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },*/
  {
    path: 'calc',
    loadChildren: './calc/calc.module#CalcPageModule'
  },
  {
    path: 'tesouro',
    loadChildren: './tesouro/tesouro.module#TesouroPageModule'
  },
  {
    path: 'cdb',
    loadChildren: './cdb/cdb.module#CdbPageModule'
  },
  {
    path: 'letra-credito',
    loadChildren: './letra-credito/letra-credito.module#LetraCreditoPageModule'
  },
  {
    path: 'fixa',
    loadChildren: './fixa/fixa.module#FixaPageModule'
  },
  {
    path: 'variavel',
    loadChildren: './variavel/variavel.module#VariavelPageModule'
  },
  { path: 'calc', loadChildren: './calc/calc.module#CalcPageModule' },
  { path: 'tesouro', loadChildren: './tesouro/tesouro.module#TesouroPageModule' },
  { path: 'cdb', loadChildren: './cdb/cdb.module#CdbPageModule' },
  { path: 'letra-credito', loadChildren: './letra-credito/letra-credito.module#LetraCreditoPageModule' },
  { path: 'fixa', loadChildren: './fixa/fixa.module#FixaPageModule' },
  { path: 'variavel', loadChildren: './variavel/variavel.module#VariavelPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
