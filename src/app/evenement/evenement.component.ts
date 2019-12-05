import { Component, OnInit } from '@angular/core';
import {Evenement} from '../model/evenement';
import {EvenementHttpService} from './evenement-http.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'evenement',
  templateUrl: '../evenement/evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

evenement: Evenement =null;

  constructor(private evenementService: EvenementHttpService) {
  }

  ngOnInit() {

  }

  list(): any{
    return this.evenementService.findAll();

  }

  add() {
    this.evenement = new Evenement();
  }

  edit(id:number) {
    this.evenementService.findById(id).subscribe(resp => this.evenement = resp);
  }
  delete(id: number) {
    this.evenementService.deleteBydId(id);
  }

  cancel() {
    this.evenement = null;
  }

}
