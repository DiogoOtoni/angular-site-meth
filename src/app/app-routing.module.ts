import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { MembersComponent } from './main-website/pages/members/members.component';
import { PartiesComponent } from './main-website/pages/parties/parties.component';


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
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
