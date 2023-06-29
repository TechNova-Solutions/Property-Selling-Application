import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [CommonModule,RouterModule, ReactiveFormsModule,HttpClientModule],
  providers: [],
  exports: [RegistrationComponent],
})
export class RegistrationModule {}

