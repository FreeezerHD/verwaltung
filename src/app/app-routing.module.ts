import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { MitarbeiterComponent } from "./mitarbeiter/mitarbeiter.component";
import { MitarbeiterAnlegenComponent } from "./mitarbeiter/mitarbeiter-anlegen/mitarbeiter-anlegen.component";
import { UrlaubsplanungComponent} from "./urlaubsplanung/urlaubsplanung.component";
import { MitarbeiterDetailsComponent } from "./mitarbeiter/mitarbeiter-details/mitarbeiter-details.component";

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'mitarbeiter', component: MitarbeiterComponent },
  { path: 'mitarbeiter-anlegen', component: MitarbeiterAnlegenComponent },
  { path: 'urlaubsplanung', component: UrlaubsplanungComponent },
  { path: 'mitarbeiter-details', component: MitarbeiterDetailsComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
