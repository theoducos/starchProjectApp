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

@Component({
  selector: 'orga-evenement-starch',
  templateUrl: './orga-evenement-starch.component.html',
  styleUrls: ['./orga-evenement-starch.component.css']
})


export class OrgaEvenementStarchComponent implements OnInit {
  evenementStarch: EvenementStarch ;

  lieuxEvenements: any;

  lieuxEvenement : LieuxEvenement = new LieuxEvenement();

  groupes: any;

  groupeNull: Groupe = new Groupe();

  evenement: Evenement = new Evenement();

  adresse : Adresse = new Adresse();



  constructor(private route: ActivatedRoute, private evenementStarchService: EvenementStarchHttpService, private lieuxEvenementService: LieuxEvenementHttpService, private groupeService: GroupeHttpService, private evenementHttpService: EvenementHttpService) {
    this.route.params.subscribe(params => {
      this.evenementStarchService.findById(params.id).subscribe(resp => {
        this.evenementStarch =resp

        this.evenement.evenementStarch = this.evenementStarch;
      } )
  })
}

  save() {
    this.evenementHttpService.save(this.evenement);
    this.evenement = null;
  }

  ngOnInit() {

    // this.evenement.groupe = this.groupeNull;
    // this.groupeService.findAll().subscribe(resp => this.groupes = resp);

  }


}
