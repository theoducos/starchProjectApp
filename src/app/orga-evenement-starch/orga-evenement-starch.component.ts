import { Component, OnInit } from '@angular/core';
import {Evenement} from '../model/evenement';
import {LieuxEvenement} from '../model/lieuxEvenement';
import {Groupe} from '../model/groupe';
import {EvenementHttpService} from '../evenement/evenement-http.service';
import {LieuxEvenementHttpService} from '../lieux-evenement/lieux-evenement-http.service';
import {GroupeHttpService} from '../groupe/groupe-http.service';
import {EvenementStarch} from '../model/evenementStarch';
import {EvenementStarchHttpService} from '../evenement-starch/evenement-starch-http.service';

@Component({
  selector: 'orga-evenement-starch',
  templateUrl: './orga-evenement-starch.component.html',
  styleUrls: ['./orga-evenement-starch.component.css']
})
export class OrgaEvenementStarchComponent implements OnInit {
  evenementStarch: EvenementStarch = new EvenementStarch();

  lieuxEvenements: any;

  lieuxEvenement : LieuxEvenement = new LieuxEvenement();

  groupes: any;

  groupeNull: Groupe = new Groupe();

  evenement: Evenement = new Evenement();


  constructor(private evenementStarchService: EvenementStarchHttpService, private lieuxEvenementService: LieuxEvenementHttpService, private groupeService: GroupeHttpService, private evenementHttpService: EvenementHttpService) {

  }

  save() {
    this.evenementStarchService.save(this.evenementStarch);

  }


  ngOnInit() {
    this.evenement.lieuxEvenement = this.lieuxEvenement;
    this.evenement.groupe = this.groupeNull;
    this.groupeService.findAll().subscribe(resp => this.groupes = resp);
    this.lieuxEvenementService.findAll().subscribe(resp => this.lieuxEvenements = resp);
  }


}
