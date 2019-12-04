import { Component, OnInit } from '@angular/core';
import {Evenement} from '../model/evenement';
import {EvenementHttpService} from './evenement.http.service';

@Component({
  selector: 'app-orga-evenement',
  templateUrl: './orga-evenement.component.html',
  styleUrls: ['./orga-evenement.component.css']
})
export class OrgaEvenementComponent implements OnInit {


  evenement: Evenement;

  constructor(private evenementService: EvenementHttpService) { }

  save() {
    this.evenementService.save(this.evenement);
  }

  ngOnInit() {
  }

}
