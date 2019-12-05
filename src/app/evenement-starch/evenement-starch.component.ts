import { Component, OnInit } from '@angular/core';
import {EvenementStarchHttpService} from './evenement-starch-http.service';
import {EvenementStarch} from '../model/evenementStarch';

@Component({
  selector: 'app-evenement-starch',
  templateUrl: './evenement-starch.component.html',
  styleUrls: ['./evenement-starch.component.css']
})
export class EvenementStarchComponent implements OnInit {

  evenementsStarch: any;

  constructor(private evenementStarchService: EvenementStarchHttpService) {

  }


  list(): Array<EvenementStarch> {
    return this.evenementStarchService.findAll();
  }

  ngOnInit() {

  }

}
