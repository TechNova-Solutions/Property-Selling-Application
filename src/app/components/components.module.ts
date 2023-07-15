import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';
import { AdvertisementModule } from './advertisement/advertisement.module';
import { NavBarModule } from './nav-bar/nav-bar.module';



@NgModule({
  declarations: [ComponentsComponent],

  exports: [ComponentsComponent],
  imports: [
    CommonModule,RouterModule, UserModule,AdvertisementModule,NavBarModule
  ]
})
export class ComponentsModule { }
