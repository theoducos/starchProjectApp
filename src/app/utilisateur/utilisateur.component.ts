import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../model/utilisateur";
import {UtilisateurHttpService} from "./utilisateur.http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  utilisateur: Utilisateur = null;


  ngOnInit() {
  }


}
