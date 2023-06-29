import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [
    ComponentsComponent,

  ],
  exports: [ComponentsComponent],
  imports: [
    CommonModule,RouterModule, UserModule
  ]
})
export class ComponentsModule { }
