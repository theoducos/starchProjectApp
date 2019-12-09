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
import {EvenementDetailComponent} from './evenement-detail/evenement-detail.component';
import {PageProfilUtilisateurComponent} from './page-profil-utilisateur/page-profil-utilisateur.component';
import {ModificationEntrepriseComponent} from './modification-entreprise/modification-entreprise.component';
import {GroupeDetailComponent} from './groupe-detail/groupe-detail.component';
import {ModificationUtilisateurComponent} from './modification-utilisateur/modification-utilisateur.component';
import {AuthGuard} from './login/auth.guard';
import {LoginComponent} from './login/login.component';
import {AuthService} from './login/auth.service';
import {OrgaEvenementStarchComponent} from './orga-evenement-starch/orga-evenement-starch.component';
import {MustMatchDirective} from './must-match.directive';
import {CreationGroupeComponent} from './creation-groupe/creation-groupe.component';
import {ParticipationComponent} from './participation/participation.component';
import {CommentaireHttpService} from './commentaires/commentaire-http.service';
import {CreationGroupeHttpService} from './creation-groupe/creation-groupe-http.service';
import {EntrepriseHttpService} from './entreprise/entreprise-http.service';
import {EvenementStarchHttpService} from './evenement-starch/evenement-starch-http.service';
import {FavorisHttpService} from './favoris/favoris-http.service';
import {InscriptionEntrepriseHttpService} from './inscription-entreprise/inscription-entreprise-http.service';
import {ModificationEntrepriseHttpService} from './modification-entreprise/modification-entreprise-http.service';
import {ParticipationHttpService} from './participation/participation-http.service';
import {UtilisateurHttpService} from './utilisateur/utilisateur.http.service';
import { CalendarComponent } from './calendar/calendar.component';
import {FullCalendarModule} from '@fullcalendar/angular';


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
    LoginComponent,
    OrgaEvenementStarchComponent,
    CreationGroupeComponent,
    MustMatchDirective,
    ParticipationComponent,
    CalendarComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FullCalendarModule

  ],
  providers: [EvenementHttpService, AppConfigService, GroupeHttpService, LieuxEvenementHttpService,
    AuthGuard, AuthService, CommentaireHttpService, CreationGroupeHttpService, EntrepriseHttpService,
    EvenementStarchHttpService, FavorisHttpService, InscriptionEntrepriseHttpService, ModificationEntrepriseHttpService,
    ParticipationHttpService, UtilisateurHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
