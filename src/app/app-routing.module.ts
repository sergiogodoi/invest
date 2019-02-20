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
  { path: 'calc', loadChildren: './calc/calc.module#CalcPageModule' },
  { path: 'tesouro', loadChildren: './tesouro/tesouro.module#TesouroPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
