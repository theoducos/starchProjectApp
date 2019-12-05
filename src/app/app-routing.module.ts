import {OrgaEvenementComponent} from './orga-evenement/orga-evenement.component';
import {IncriptionFormComponent} from "./incription-form/incription-form.component";
import {NouveauLieuFormComponent} from "./nouveau-lieu-form/nouveau-lieu-form.component";
import {InscriptionEntrepriseComponent} from './inscription-entreprise/inscription-entreprise.component';
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {EvenementComponent} from "./evenement/evenement.component";
import {PageProfilUtilisateurComponent} from "./page-profil-utilisateur/page-profil-utilisateur.component";
import {EvenementDetailComponent} from './evenement-detail/evenement-detail.component';
import {GroupeComponent} from './groupe/groupe.component';
import {GroupeDetailComponent} from './groupe-detail/goupe-detail.component';


const routes: Routes = [{path: 'orgaEvenement', component: OrgaEvenementComponent},
  {path: 'inscription', component: IncriptionFormComponent},
  {path: 'nouveauLieu', component: NouveauLieuFormComponent},
  {path: 'inscriptionEntreprise', component: InscriptionEntrepriseComponent},
  {path: 'nouveauLieu', component: NouveauLieuFormComponent},
  {path: 'orgaEvenement', component: OrgaEvenementComponent},
  {path: 'inscriptionEntreprise', component: InscriptionEntrepriseComponent},
  {path: 'evenement', component: EvenementComponent},
  {path: 'groupe', component: GroupeComponent},
  {path: 'groupe/:id', component: GroupeDetailComponent},
  {path: 'utilisateur/:id', component: PageProfilUtilisateurComponent}
  {path: 'evenement', component: EvenementComponent},
  {path: 'evenement/:id', component: EvenementDetailComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}


