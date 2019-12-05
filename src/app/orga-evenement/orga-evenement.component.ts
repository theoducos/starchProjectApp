import { Component, OnInit } from '@angular/core';
import {Evenement} from '../model/evenement';
import {EvenementHttpService} from './evenement.http.service';
import {LieuxEvenementService} from '../lieux-evenement/lieux-evenement.service';

@Component({
  selector: 'app-orga-evenement',
  templateUrl: './orga-evenement.component.html',
  styleUrls: ['./orga-evenement.component.css']
})
export class OrgaEvenementComponent implements OnInit {


  evenement: Evenement = new Evenement();

  lieux: any;

  constructor(private evenementService: EvenementHttpService, private lieuxEvenementService: LieuxEvenementService) { }

  save() {
    this.evenementService.save(this.evenement);

  }

  ngOnInit() {
    this.lieuxEvenementService.findAll().subscribe(resp => this.lieux = resp);
  }

}
