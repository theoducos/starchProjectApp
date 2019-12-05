import {Component, Input, OnInit} from '@angular/core';
import {InscriptionEntrepriseHttpService} from './inscription-entreprise-http.service';
import {Entreprise} from '../model/entreprise';
import {Adresse} from '../model/adresse';
import {Utilisateur} from '../model/utilisateur';

@Component({
  selector: 'app-inscription-entreprise',
  templateUrl: './inscription-entreprise.component.html',
  styleUrls: ['./inscription-entreprise.component.css']
})
export class InscriptionEntrepriseComponent implements OnInit {


  constructor(private inscriptionEntrepriseHttpService: InscriptionEntrepriseHttpService) { }

  @Input("current")
  adresse : Adresse = new Adresse();
  entreprise: Entreprise = new Entreprise();
  utilisateur: Utilisateur = new Utilisateur();

  save(){
    this.inscriptionEntrepriseHttpService.save(this.utilisateur);
    this.cancel();
  }

  cancel(){
    this.entreprise = null;
  }

  ngOnInit() {
    this.entreprise.adresse=this.adresse;
    this.utilisateur.entreprise = this.entreprise
    this.utilisateur.admin =true
  }

}

