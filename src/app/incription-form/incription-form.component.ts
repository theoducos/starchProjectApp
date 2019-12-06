import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../model/utilisateur";
import {UtilisateurHttpService} from "../utilisateur/utilisateur.http.service";
import {Entreprise} from "../model/entreprise";
import {FormGroup} from '@angular/forms';
import {InscriptionEntrepriseHttpService} from '../inscription-entreprise/inscription-entreprise-http.service';
import {FormValidatorService} from '../form-validator.service';

@Component({
  selector: 'incription-form',
  templateUrl: './incription-form.component.html',
  styleUrls: ['./incription-form.component.css']
})
export class IncriptionFormComponent implements OnInit {


  utilisateur: Utilisateur = new Utilisateur();
  entreprise: Entreprise = new Entreprise();


  save() {
    this.utilisateurService.save(this.utilisateur);
  }


  constructor(private utilisateurService: UtilisateurHttpService, formValidatorService: FormValidatorService) {
  }

  ngOnInit() {
  }

}



