import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {MitarbeiterComponent} from './mitarbeiter/mitarbeiter.component';
import {MitarbeiterAnlegenComponent} from './mitarbeiter/mitarbeiter-anlegen/mitarbeiter-anlegen.component';
import {UrlaubsplanungComponent} from './urlaubsplanung/urlaubsplanung.component';
import {MitarbeiterDetailsComponent} from './mitarbeiter/mitarbeiter-details/mitarbeiter-details.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MitarbeiterStartComponent} from './mitarbeiter/mitarbeiter-start/mitarbeiter-start.component';

const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {
    path: 'mitarbeiter', component: MitarbeiterComponent,
    children: [
      {path: '', component: MitarbeiterStartComponent },
      {path: ':id', component: MitarbeiterDetailsComponent }
    ]
  },
  {path: 'mitarbeiter-anlegen', component: MitarbeiterAnlegenComponent},
  {path: 'urlaubsplanung', component: UrlaubsplanungComponent},
  {path: 'mitarbeiter-details', component: MitarbeiterDetailsComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: 'page-not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
