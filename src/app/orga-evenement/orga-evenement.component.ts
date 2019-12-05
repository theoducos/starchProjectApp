import { Component, OnInit } from '@angular/core';
import {Evenement} from '../model/evenement';
import {LieuxEvenement} from '../model/lieuxEvenement';
import {LieuxEvenementHttpService} from '../lieux-evenement/lieux-evenement-http.service';
import {EvenementHttpService} from '../evenement/evenement-http.service';

@Component({
  selector: 'app-orga-evenement',
  templateUrl: './orga-evenement.component.html',
  styleUrls: ['./orga-evenement.component.css']
})
export class OrgaEvenementComponent implements OnInit {


  evenement: Evenement = new Evenement();

  lieuxEvenements: any;

  lieuxEvenement : LieuxEvenement = new LieuxEvenement();

  constructor(private evenementService: EvenementHttpService, private lieuxEvenementService: LieuxEvenementHttpService) { }

  save() {
    this.evenementService.save(this.evenement);

  }

  ngOnInit() {
    this.evenement.lieuxEvenement = this.lieuxEvenements;
    this.lieuxEvenementService.findAll().subscribe(resp => this.lieuxEvenements = resp);
  }

}
