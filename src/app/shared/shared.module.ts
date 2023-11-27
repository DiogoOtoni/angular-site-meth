import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from './app-material/app-material.module';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
		HeaderComponent,
		FooterComponent,
	],
  imports: [
    CommonModule,
		AppMaterialModule,
		RouterModule
  ],
	exports: [
		AppMaterialModule,
		HeaderComponent,
		FooterComponent,
	]
})
export class SharedModule { }
