import {Component, OnInit} from '@angular/core';
import {CreationGroupeHttpService} from "./creation-groupe-http.service";
import {Groupe} from "../model/groupe";

@Component({
  selector: 'app-creation-groupe',
  templateUrl: './creation-groupe.component.html',
  styleUrls: ['./creation-groupe.component.css']
})
export class CreationGroupeComponent implements OnInit {

  groupe: Groupe = new Groupe;

  save() {
    this.creationGroupeHttpService.save(this.groupe);
  }

  constructor(private creationGroupeHttpService: CreationGroupeHttpService) {
  }

  ngOnInit() {
  }

}
