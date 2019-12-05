import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Evenement} from '../model/evenement';
import {EvenementHttpService} from '../evenement/evenement-http.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'evenement-detail',
  templateUrl: './evenement-detail.component.html',
  styleUrls: ['./evenement-detail.component.css']
})
export class EvenementDetailComponent implements OnInit {

  evenement: Evenement = new Evenement();

  id: number;

  @Output()
  childEvent = new EventEmitter();

  save() {
    this.evenementService.save(this.evenement);
    this.cancel();
  }

  cancel() {
    this.childEvent.emit();
  }

  constructor(private evenementService: EvenementHttpService, private route: ActivatedRoute) {

  this.route.params.subscribe(params => {this.evenementService.findById(params.id).subscribe(resp => this.evenement = resp)});
  }

  ngOnInit() {


  }

}
