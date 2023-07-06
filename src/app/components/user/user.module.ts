import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RegistrationModule } from './registration/registration.module';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [UserComponent ],
    exports: [UserComponent],
    imports: [CommonModule,
        RouterModule,
        RegistrationModule,
        ]
})
export class UserModule {}

