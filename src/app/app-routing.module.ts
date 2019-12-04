import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrgaEvenementComponent} from './orga-evenement/orga-evenement.component';
import {IncriptionFormComponent} from './incription-form/incription-form.component';
import {NouveauLieuFormComponent} from './nouveau-lieu-form/nouveau-lieu-form.component';


const routes: Routes = [{path: 'orgaEvenement', component: OrgaEvenementComponent},
  {path: 'inscription', component: IncriptionFormComponent},
  {path: 'nouveauLieu', component: NouveauLieuFormComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
