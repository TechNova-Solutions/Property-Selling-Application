import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdvertisementComponent } from './advertisement.component';
import { PropertyCardModule } from './property-card/property-card.module';
import { PropertyListModule } from './property-list/property-list.module';



@NgModule({
  declarations: [
    AdvertisementComponent
  ],
  imports: [
    CommonModule,RouterModule,PropertyCardModule,PropertyListModule
  ],
  exports: [AdvertisementComponent]
})
export class AdvertisementModule { }
