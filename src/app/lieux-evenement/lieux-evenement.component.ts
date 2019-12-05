import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from '../app-config.service';
import {LieuxEvenement} from "../model/lieuxEvenement";

@Component({
  selector: 'app-lieux-evenement',
  templateUrl: './lieux-evenement.component.html',
  styleUrls: ['./lieux-evenement.component.css']
})
export class LieuxEvenementComponent implements OnInit {

  lieuxEvenement: LieuxEvenement = null;

  ngOnInit() {
  }

}
