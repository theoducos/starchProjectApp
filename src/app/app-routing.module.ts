import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrgaEvenementComponent} from './orga-evenement/orga-evenement.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IncriptionFormComponent} from "./incription-form/incription-form.component";
import {NouveauLieuFormComponent} from "./nouveau-lieu-form/nouveau-lieu-form.component";
import {InscriptionEntrepriseComponent} from './inscription-entreprise/inscription-entreprise.component';


const routes: Routes = [{path: 'orgaEvenement', component: OrgaEvenementComponent}];
const routes: Routes = [
  {path: 'inscription', component: IncriptionFormComponent},
  {path: 'nouveauLieu', component: NouveauLieuFormComponent}
];
const routes: Routes = [ {path: 'inscriptionEntreprise', component: InscriptionEntrepriseComponent}

                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
