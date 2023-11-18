import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    SignUpRoutingModule,
    // shared module
    SharedModule
  ]
})
export class SignUpModule { }
