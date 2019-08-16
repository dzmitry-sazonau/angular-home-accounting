import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AuthComponent,
        LoginComponent,
        RegistrationComponent,
    ]
})
export class AuthModule { }
