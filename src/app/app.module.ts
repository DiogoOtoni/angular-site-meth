import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MembersComponent } from './pages/members/members.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PartiesComponent } from './pages/parties/parties.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardYearComponent } from './components/card-year/card-year.component';
import { CardMembersComponent } from './components/card-members/card-members.component';
import { MemberCardComponent } from './components/member-card/member-card.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CardPartiesComponent } from './components/card-parties/card-parties.component';
import { DataJsonServiceService } from './services/data-json-service.service';
import { PageWrapperComponent } from './components/page-wrapper/page-wrapper.component';
import { MembersServService } from './services/members-serv.service';
import { PartiesServService } from './services/parties-serv.service';
import { YearsServService } from './services/years-serv.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MembersComponent,
    HeaderComponent,
    FooterComponent,
    PartiesComponent,
    MenuBarComponent,
    CardYearComponent,
    CardMembersComponent,
    MemberCardComponent,
    LoginComponent,
    RegisterComponent,
    CardPartiesComponent,
    PageWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		HttpClientModule,
  BrowserAnimationsModule
  ],
  providers: [DataJsonServiceService, MembersServService, PartiesServService, YearsServService],
  bootstrap: [AppComponent]
})
export class AppModule { }
