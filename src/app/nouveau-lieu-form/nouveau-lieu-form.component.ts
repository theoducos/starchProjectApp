import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Utilisateur} from "../model/utilisateur";
import {UtilisateurHttpService} from "../utilisateur/utilisateur.http.service";
import {LieuxEvenement} from "../model/lieuxEvenement";
import {LieuxEvenementHttpService} from "../lieux-evenement/lieux-evenement-http.service";
import {Adresse} from "../model/adresse";
import {Router} from '@angular/router';

@Component({
  selector: 'app-nouveau-lieu-form',
  templateUrl: './nouveau-lieu-form.component.html',
  styleUrls: ['./nouveau-lieu-form.component.css']
})
export class NouveauLieuFormComponent implements OnInit {

  lieuxEvenement: LieuxEvenement = new LieuxEvenement();
  adresse: Adresse = new Adresse();


  save() {
    this.lieuxEvenementService.save(this.lieuxEvenement);
    this.router.navigate(['orgaEvenement']);
  }

  constructor(private lieuxEvenementService: LieuxEvenementHttpService, private router: Router) {
  }

  ngOnInit() {
    this.lieuxEvenement.adresse = this.adresse;
  }

}
