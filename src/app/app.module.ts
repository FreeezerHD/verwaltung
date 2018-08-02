import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
// import { HttpModule } from "@angular/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent} from "./header/header.component";
import { LoginComponent } from './login/login.component';
import { MitarbeiterComponent } from './mitarbeiter/mitarbeiter.component';
import { MitarbeiterListeComponent } from './mitarbeiter/mitarbeiter-liste/mitarbeiter-liste.component';
import { MitarbeiterItemsComponent } from './mitarbeiter/mitarbeiter-liste/mitarbeiter-items/mitarbeiter-items.component';
import { MitarbeiterAnlegenComponent } from './mitarbeiter/mitarbeiter-anlegen/mitarbeiter-anlegen.component';
import { UrlaubsplanungComponent } from './urlaubsplanung/urlaubsplanung.component';
import { MitarbeiterDetailsComponent } from './mitarbeiter/mitarbeiter-details/mitarbeiter-details.component';
import {Ng2FlatpickrModule} from "ng2-flatpickr";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    LoginComponent,
    MitarbeiterComponent,
    MitarbeiterListeComponent,
    MitarbeiterItemsComponent,
    MitarbeiterAnlegenComponent,
    UrlaubsplanungComponent,
    MitarbeiterDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    Ng2FlatpickrModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
