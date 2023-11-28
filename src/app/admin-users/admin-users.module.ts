import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';



@NgModule({
  declarations: [
		LoginComponent,
		RegisterComponent
	],
  imports: [
    CommonModule,
		ProfileComponent
  ]
})
export class AdminUsersModule { }
