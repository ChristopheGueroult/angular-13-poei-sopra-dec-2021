import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FormSignInComponent } from './components/form-sign-in/form-sign-in.component';
import { LoginRoutingModule } from './login-routing.module';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';

@NgModule({
  declarations: [PageSignInComponent, PageSignUpComponent, FormSignInComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class LoginModule {}
