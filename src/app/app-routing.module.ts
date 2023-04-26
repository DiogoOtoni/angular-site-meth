import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MembersComponent } from './pages/members/members.component';
import { PartiesComponent } from './pages/parties/parties.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
	{
		path:'',
		component:HomeComponent
	},
	{
		path:'membros',
		component:MembersComponent
	},
	{
		path:'festas',
		component:PartiesComponent
	},
	// {
	// 	path:'loja',
	// 	component: LOJA COMPONENTE
	// }
	{
		path:'login',
		component:LoginComponent
	},
	{
		path:'register',
		component:RegisterComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
