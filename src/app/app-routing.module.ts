import {OrgaEvenementComponent} from './orga-evenement/orga-evenement.component';
import {IncriptionFormComponent} from "./incription-form/incription-form.component";
import {NouveauLieuFormComponent} from "./nouveau-lieu-form/nouveau-lieu-form.component";
import {InscriptionEntrepriseComponent} from './inscription-entreprise/inscription-entreprise.component';
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {EvenementComponent} from "./evenement/evenement.component";
import {PageProfilUtilisateurComponent} from "./page-profil-utilisateur/page-profil-utilisateur.component";
import {EvenementDetailComponent} from './evenement-detail/evenement-detail.component';
import {GroupeDetailComponent} from "./groupe-detail/groupe-detail.component";
import {GroupeComponent} from "./groupe/groupe.component";
import {ModificationEntrepriseComponent} from './modification-entreprise/modification-entreprise.component';
import {EvenementStarchComponent} from './evenement-starch/evenement-starch.component';
import {ModificationUtilisateurComponent} from './modification-utilisateur/modification-utilisateur.component';
import {OrgaEvenementStarchComponent} from './orga-evenement-starch/orga-evenement-starch.component';
import {IncriptionFormValidatorComponent} from './incription-form/incription-form-validator.component';


const routes: Routes = [{path: 'orgaEvenement', component: OrgaEvenementComponent},
  {path: 'inscription', component: IncriptionFormComponent},
  {path: 'inscription-validator', component: IncriptionFormValidatorComponent},
  {path: 'nouveauLieu', component: NouveauLieuFormComponent},
  {path: 'inscriptionEntreprise', component: InscriptionEntrepriseComponent},
  {path: 'orgaEvenement', component: OrgaEvenementComponent},
  {path: 'orgaEvenementStarch', component: OrgaEvenementStarchComponent},
  {path: 'evenement', component: EvenementComponent},
  {path: 'groupe', component: GroupeComponent},
  {path: 'groupe/:id', component: GroupeDetailComponent},
  {path: 'utilisateur/:id', component: PageProfilUtilisateurComponent},
  {path: 'evenement', component: EvenementComponent},
  {path: 'modificationEntreprise/:id', component: ModificationEntrepriseComponent},
  {path: 'evenement/:id', component: EvenementDetailComponent},
  {path: 'evenementstarch', component: EvenementStarchComponent},
  {path: 'modificationUtilisateur/:id', component: ModificationUtilisateurComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
