import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentairesComponent } from './commentaires/commentaires.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { EvenementComponent } from './evenement/evenement.component';
import { EvenementStarchComponent } from './evenement-starch/evenement-starch.component';
import { FavorisComponent } from './favoris/favoris.component';
import { GroupeComponent } from './groupe/groupe.component';
import { LieuxEvenementComponent } from './lieux-evenement/lieux-evenement.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { IncriptionFormComponent } from './incription-form/incription-form.component';
import { NouveauLieuFormComponent } from './nouveau-lieu-form/nouveau-lieu-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentairesComponent,
    EntrepriseComponent,
    EvenementComponent,
    EvenementStarchComponent,
    FavorisComponent,
    GroupeComponent,
    LieuxEvenementComponent,
    UtilisateurComponent,
    IncriptionFormComponent,
    NouveauLieuFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
