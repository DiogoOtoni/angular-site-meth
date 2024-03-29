import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';

const adminUsersRoutes: Routes = [
	{
		path:'login',
		component:LoginComponent
	},
	{
		path:'register',
		component:RegisterComponent
	},
	{
		path:'profile',
		component:ProfileComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(adminUsersRoutes)],
  exports: [RouterModule]
})
export class AdminUsersRoutingModule { }
