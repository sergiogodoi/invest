import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LetraCreditoPage } from './letra-credito.page';

const routes: Routes = [
  {
    path: '',
    component: LetraCreditoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LetraCreditoPage]
})
export class LetraCreditoPageModule {}
