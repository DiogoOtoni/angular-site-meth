import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersComponent } from './pages/members/members.component';
import { PartiesComponent } from './pages/parties/parties.component';
import { CardMembersComponent } from './components/card-members/card-members.component';
import { CardPartiesComponent } from './components/card-parties/card-parties.component';
import { MemberCardComponent } from './components/member-card/member-card.component';
import { CardYearComponent } from './components/card-year/card-year.component';



@NgModule({
  declarations: [
		MembersComponent,
		PartiesComponent,
		CardMembersComponent,
		CardPartiesComponent,
		MemberCardComponent,
		CardYearComponent
	],
  imports: [
    CommonModule
  ],
	exports: [
		MemberCardComponent,
		PartiesComponent,
		CardMembersComponent,
		CardPartiesComponent,
		CardYearComponent
	]
})
export class MainWebsiteModule { }
