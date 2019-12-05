import { Component, OnInit } from '@angular/core';
import {Evenement} from '../model/evenement';
import {LieuxEvenement} from '../model/lieuxEvenement';
import {LieuxEvenementHttpService} from '../lieux-evenement/lieux-evenement-http.service';
import {EvenementHttpService} from '../evenement/evenement-http.service';
import {GroupeHttpService} from '../groupe/groupe-http.service';
import {Groupe} from '../model/groupe';

@Component({
  selector: 'app-orga-evenement',
  templateUrl: './orga-evenement.component.html',
  styleUrls: ['./orga-evenement.component.css']
})
export class OrgaEvenementComponent implements OnInit {


  evenement: Evenement = new Evenement();

  lieuxEvenements: any;

  lieuxEvenement : LieuxEvenement = new LieuxEvenement();

  groupes: any;

  groupeNull: Groupe = new Groupe();

  constructor(private evenementService: EvenementHttpService, private lieuxEvenementService: LieuxEvenementHttpService, private groupeService: GroupeHttpService) { }

  save() {
    this.evenementService.save(this.evenement);

  }

  ngOnInit() {
    this.evenement.lieuxEvenement = this.lieuxEvenement;
    this.evenement.groupe = this.groupeNull;
    this.groupeService.findAll().subscribe(resp => this.groupes = resp);
    this.lieuxEvenementService.findAll().subscribe(resp => this.lieuxEvenements = resp);
  }

}
