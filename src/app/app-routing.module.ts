import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrgaEvenementComponent} from './orga-evenement/orga-evenement.component';


const routes: Routes = [{path: 'orgaEvenement', component: OrgaEvenementComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
