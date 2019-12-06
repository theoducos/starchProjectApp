import {Component, OnInit} from '@angular/core';
import {EvenementStarchHttpService} from './evenement-starch-http.service';
import {EvenementStarch} from '../model/evenementStarch';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-evenement-starch',
  templateUrl: './evenement-starch.component.html',
  styleUrls: ['./evenement-starch.component.css']
})
export class EvenementStarchComponent implements OnInit {

  img: any;

  constructor(private evenementStarchService: EvenementStarchHttpService, private route: ActivatedRoute) {
    this.route.params.subscribe(resp => {
      this.img = resp;

    });
  }


  list(): Array<EvenementStarch> {
    return this.evenementStarchService.findAll();
  }

  ngOnInit() {

  }

}
