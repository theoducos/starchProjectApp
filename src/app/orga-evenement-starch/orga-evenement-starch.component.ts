import { Component, OnInit } from '@angular/core';
import {Evenement} from '../model/evenement';
import {LieuxEvenement} from '../model/lieuxEvenement';
import {Groupe} from '../model/groupe';
import {EvenementHttpService} from '../evenement/evenement-http.service';
import {LieuxEvenementHttpService} from '../lieux-evenement/lieux-evenement-http.service';
import {GroupeHttpService} from '../groupe/groupe-http.service';
import {EvenementStarch} from '../model/evenementStarch';
import {EvenementStarchHttpService} from '../evenement-starch/evenement-starch-http.service';
import {Adresse} from '../model/adresse';
import {ActivatedRoute} from '@angular/router';
import {Utilisateur} from '../model/utilisateur';
import {UtilisateurHttpService} from '../utilisateur/utilisateur.http.service';
import {EntrepriseHttpService} from '../entreprise/entreprise-http.service';
import {Entreprise} from '../model/entreprise';

@Component({
  selector: 'orga-evenement-starch',
  templateUrl: './orga-evenement-starch.component.html',
  styleUrls: ['./orga-evenement-starch.component.css']
})


export class OrgaEvenementStarchComponent implements OnInit {
  evenementStarch: EvenementStarch = new EvenementStarch();

  lieuxEvenements: any;

  lieuxEvenement : LieuxEvenement = new LieuxEvenement();

  entreprise: Entreprise = new Entreprise();

  groupes: any;

  groupeNull: Groupe = new Groupe();

  evenement: Evenement = new Evenement();

  adresse : Adresse = new Adresse();

  utilisateur: Utilisateur = new Utilisateur();



  constructor(private route: ActivatedRoute, private evenementStarchService: EvenementStarchHttpService, private lieuxEvenementService: LieuxEvenementHttpService, private groupeService: GroupeHttpService, private evenementHttpService: EvenementHttpService, private utilisateurHttpService: UtilisateurHttpService) {
    this.utilisateur.id = localStorage.getItem('id') as unknown as number;
    this.route.params.subscribe(params => {
      this.evenementStarchService.findById(params.id).subscribe(resp => {
        this.evenementStarch =resp;

      } );
  });
}

  save() {
    this.evenement.titre = this.evenementStarch.titre;
    this.evenement.nomEvenement = this.evenementStarch.nomEvenement;
    this.evenement.typeEvenement = this.evenementStarch.typeEvenement;
    this.evenement.prix = this.evenementStarch.prixStarch;
    this.evenement.nbParticipantMax = this.evenementStarch.nbParticipantMax;
    this.evenement.description = this.evenementStarch.description;
    this.evenement.evenementStarch = this.evenementStarch;
    this.utilisateurHttpService.findById(this.utilisateur.id).subscribe(resp => {
      this.utilisateur = resp;
      console.log(this.utilisateur);
      this.utilisateurHttpService.findEntrepriseByUtilisateurId(this.utilisateur.id).subscribe(resp => {
        this.entreprise = resp;
        this.evenement.entreprise = this.entreprise;
        this.evenementHttpService.save(this.evenement);
      });
    });

  }

  ngOnInit() {

    // this.evenement.groupe = this.groupeNull;
    // this.groupeService.findAll().subscribe(resp => this.groupes = resp);

  }


}
