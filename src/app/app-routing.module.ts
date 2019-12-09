import {OrgaEvenementComponent} from './orga-evenement/orga-evenement.component';
import {IncriptionFormComponent} from './incription-form/incription-form.component';
import {NouveauLieuFormComponent} from './nouveau-lieu-form/nouveau-lieu-form.component';
import {InscriptionEntrepriseComponent} from './inscription-entreprise/inscription-entreprise.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {EvenementComponent} from './evenement/evenement.component';
import {PageProfilUtilisateurComponent} from './page-profil-utilisateur/page-profil-utilisateur.component';
import {EvenementDetailComponent} from './evenement-detail/evenement-detail.component';
import {GroupeDetailComponent} from './groupe-detail/groupe-detail.component';
import {GroupeComponent} from './groupe/groupe.component';
import {ModificationEntrepriseComponent} from './modification-entreprise/modification-entreprise.component';
import {EvenementStarchComponent} from './evenement-starch/evenement-starch.component';
import {ModificationUtilisateurComponent} from './modification-utilisateur/modification-utilisateur.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './login/auth.guard';
import {CreationGroupeComponent} from './creation-groupe/creation-groupe.component';
import {OrgaEvenementStarchComponent} from './orga-evenement-starch/orga-evenement-starch.component';
import {CalendarComponent} from './calendar/calendar.component';


const routes: Routes = [
  {path: 'inscription', component: IncriptionFormComponent, },
  {path: 'nouveauLieu', component: NouveauLieuFormComponent},
  {path: 'inscriptionEntreprise', component: InscriptionEntrepriseComponent},
  {path: 'orgaEvenement', component: OrgaEvenementComponent, canActivate: [AuthGuard]},
  {path: 'orgaEvenementStarch', component: OrgaEvenementStarchComponent},
  {path: 'evenement/list/:id', component: EvenementComponent},
  {path: 'groupe', component: GroupeComponent},
  {path: 'groupe/:id', component: GroupeDetailComponent},
  {path: 'utilisateur/:id', component: PageProfilUtilisateurComponent},
  {path: 'modificationEntreprise/:id', component: ModificationEntrepriseComponent},
  {path: 'evenement/:id', component: EvenementDetailComponent},
  {path: 'evenementstarch', component: EvenementStarchComponent},
  {path: 'modificationUtilisateur/:id', component: ModificationUtilisateurComponent},
  {path: 'creationGroupe', component: CreationGroupeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'calendar/:id', component: CalendarComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
