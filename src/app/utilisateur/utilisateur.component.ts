import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../model/utilisateur";
import {UtilisateurHttpService} from "./utilisateur.http.service";

@Component({
  selector: 'utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  utilisateur: Utilisateur = null;

  constructor(private utilisateurService: UtilisateurHttpService) {
  }

  ngOnInit() {
  }



}
