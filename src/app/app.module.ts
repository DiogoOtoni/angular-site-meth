import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MainWebsiteModule } from './main-website/main-website.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { DataJsonServiceService } from './services/data-json-service.service';
import { MembersServService } from './main-website/services/members-serv.service';
import { PartiesServService } from './main-website/services/parties-serv.service';
import { YearsServService } from './main-website/services/years-serv.service';

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
		MainWebsiteModule
  ],
  providers: [DataJsonServiceService, MembersServService, PartiesServService, YearsServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
