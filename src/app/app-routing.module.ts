import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from "./components/user/registration/registration.component";
import { UserComponent } from "./components/user/user.component";

const routes: Routes = [
  { path: '', redirectTo: 'user/login', pathMatch: 'full'},



  { path:'user',component:UserComponent,
    children: [
      {path:'registration',component: RegistrationComponent },

    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
