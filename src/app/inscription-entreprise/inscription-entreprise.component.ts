import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../model/utilisateur";
import {UtilisateurHttpService} from "../utilisateur/utilisateur.http.service";

@Component({
  selector: 'app-inscription-entreprise',
  templateUrl: './inscription-entreprise.component.html',
  styleUrls: ['./inscription-entreprise.component.css']
})
export class InscriptionEntrepriseComponent implements OnInit {


  ngOnInit() {
  }

}

