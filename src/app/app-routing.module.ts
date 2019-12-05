import {OrgaEvenementComponent} from './orga-evenement/orga-evenement.component';
import {IncriptionFormComponent} from "./incription-form/incription-form.component";
import {NouveauLieuFormComponent} from "./nouveau-lieu-form/nouveau-lieu-form.component";
import {InscriptionEntrepriseComponent} from './inscription-entreprise/inscription-entreprise.component';
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";


const routes: Routes = [{path: 'orgaEvenement', component: OrgaEvenementComponent},
  {path: 'inscription', component: IncriptionFormComponent},
  {path: 'nouveauLieu', component: NouveauLieuFormComponent},
  {path: 'creationEntreprise', component: InscriptionEntrepriseComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
