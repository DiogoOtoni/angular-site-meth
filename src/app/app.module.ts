import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { MainWebsiteModule } from './main-website/main-website.module';
import { SharedModule } from './shared/shared.module';
import { AdminUsersModule } from './admin-users/admin-users.module';
import { ShopModule } from './shop/shop.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		HttpClientModule,
  	BrowserAnimationsModule,
		SharedModule,
		MainWebsiteModule,
		AdminUsersModule,
		ShopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
