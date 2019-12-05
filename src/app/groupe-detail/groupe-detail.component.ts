import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Evenement} from '../model/evenement';
import {EvenementHttpService} from '../evenement/evenement-http.service';
import {ActivatedRoute} from '@angular/router';
import {Groupe} from '../model/groupe';
import {GroupeHttpService} from '../groupe/groupe-http.service';

@Component({
  selector: 'groupe-detail',
  templateUrl: './groupe-detail.component.html',
  styleUrls: ['./groupe-detail.component.css']
})
export class GroupeDetailComponent implements OnInit {

  groupe: Groupe = new Groupe();
  utilisateurs: any;

  id: number;

  @Output()
  childEvent = new EventEmitter();

  save() {
    this.groupeService.save(this.groupe);
    this.cancel();
  }

  cancel() {
    this.childEvent.emit();
  }

  constructor(private groupeService: GroupeHttpService, private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      this.groupeService.findById(params.id).subscribe(resp => {
        this.groupe = resp;
        this.groupeService.findUtilisateursByGroupeId(this.groupe.id).subscribe(resp => this.utilisateurs = resp);

      });
    });
  };

  ngOnInit() {
      }

}
