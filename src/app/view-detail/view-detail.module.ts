import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewDetailPage } from './view-detail.page';

import { IonicModule } from '@ionic/angular';

import { ViewDetailPageRoutingModule } from './view-detail-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewDetailPageRoutingModule
  ],
  declarations: [ViewDetailPage]
})
export class ViewDetailPageModule {}
