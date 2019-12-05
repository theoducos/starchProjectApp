import {Component, OnInit} from '@angular/core';
import {LieuxEvenement} from "../model/lieuxEvenement";

@Component({
  selector: 'app-lieux-evenement',
  templateUrl: './lieux-evenement.component.html',
  styleUrls: ['./lieux-evenement.component.css']
})
export class LieuxEvenementComponent implements OnInit {

  lieuxEvenement: LieuxEvenement = null;

  constructor() {
  }

  ngOnInit() {
  }

}
