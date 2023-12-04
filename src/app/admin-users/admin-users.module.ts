import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminUsersRoutingModule } from './admin-users-routing.module';



@NgModule({
  declarations: [
		LoginComponent,
		RegisterComponent
	],
  imports: [
    CommonModule,
		AdminUsersRoutingModule,
		ProfileComponent
  ]
})
export class AdminUsersModule { }
