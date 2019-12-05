import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../model/utilisateur";
import {UtilisateurHttpService} from "../utilisateur/utilisateur.http.service";
import {Entreprise} from "../model/entreprise";

@Component({
  selector: 'app-incription-form',
  templateUrl: './incription-form.component.html',
  styleUrls: ['./incription-form.component.css']
})
export class IncriptionFormComponent implements OnInit {

  utilisateur: Utilisateur;
  entreprise: Entreprise;


  save() {

    this.utilisateurService.save(this.utilisateur);
  }


  constructor(private utilisateurService: UtilisateurHttpService) {
  }

  ngOnInit() {
  }

}
