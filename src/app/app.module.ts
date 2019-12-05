import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommentairesComponent} from './commentaires/commentaires.component';
import {EntrepriseComponent} from './entreprise/entreprise.component';
import {EvenementComponent} from './evenement/evenement.component';
import {EvenementStarchComponent} from './evenement-starch/evenement-starch.component';
import {FavorisComponent} from './favoris/favoris.component';
import {GroupeComponent} from './groupe/groupe.component';
import {LieuxEvenementComponent} from './lieux-evenement/lieux-evenement.component';
import {UtilisateurComponent} from './utilisateur/utilisateur.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {IncriptionFormComponent} from './incription-form/incription-form.component';
import {NouveauLieuFormComponent} from './nouveau-lieu-form/nouveau-lieu-form.component';
import {OrgaEvenementComponent} from './orga-evenement/orga-evenement.component';
import {InscriptionEntrepriseComponent} from './inscription-entreprise/inscription-entreprise.component';
import {AppConfigService} from './app-config.service';
import {EvenementHttpService} from './evenement/evenement-http.service';
import {GroupeHttpService} from './groupe/groupe-http.service';
import {LieuxEvenementHttpService} from './lieux-evenement/lieux-evenement-http.service';
import { EvenementDetailComponent } from './evenement-detail/evenement-detail.component';
import { PageProfilUtilisateurComponent } from './page-profil-utilisateur/page-profil-utilisateur.component';
import { ModificationEntrepriseComponent } from './modification-entreprise/modification-entreprise.component';
import {GroupeDetailComponent} from './groupe-detail/groupe-detail.component';
import { ModificationUtilisateurComponent } from './modification-utilisateur/modification-utilisateur.component';



@NgModule({
  declarations: [
    AppComponent,
    CommentairesComponent,
    EntrepriseComponent,
    EvenementComponent,
    EvenementStarchComponent,
    FavorisComponent,
    GroupeComponent,
    GroupeDetailComponent,
    LieuxEvenementComponent,
    UtilisateurComponent,
    OrgaEvenementComponent,
    IncriptionFormComponent,
    NouveauLieuFormComponent,
    InscriptionEntrepriseComponent,
    EvenementDetailComponent,
    PageProfilUtilisateurComponent,
    ModificationEntrepriseComponent,
    ModificationUtilisateurComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EvenementHttpService, AppConfigService, GroupeHttpService, LieuxEvenementHttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
