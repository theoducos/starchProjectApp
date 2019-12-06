import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Evenement} from '../model/evenement';
import {EvenementHttpService} from '../evenement/evenement-http.service';
import {ActivatedRoute} from '@angular/router';
import {CommentaireHttpService} from '../commentaires/commentaire-http.service';
import {Commentaire} from '../model/commentaire';

@Component({
  selector: 'evenement-detail',
  templateUrl: './evenement-detail.component.html',
  styleUrls: ['./evenement-detail.component.css']
})
export class EvenementDetailComponent implements OnInit {

  evenement: Evenement = new Evenement();

  commentaire: Commentaire = new Commentaire();

  utilisateursInteresses: any;

  utilisateursParticipants: any;

  commentaires: any;

  commentaireBool: boolean;

  id: number;

  participantBool: boolean = false;
  interessesBool: boolean = false;

  @Output()
  childEvent = new EventEmitter();

  save() {
    this.evenementService.save(this.evenement);
    this.cancel();
  }

  cancel() {
    this.childEvent.emit();
  }

  constructor(private evenementService: EvenementHttpService, private route: ActivatedRoute, private commentaireService: CommentaireHttpService) {

    this.route.params.subscribe(params => {
      this.evenementService.findById(params.id).subscribe(resp => this.evenement = resp);
    });
  }

  ngOnInit() {
  }

  listInteresse() {
    this.participantBool = false;
    this.interessesBool = true;
    this.evenementService.findUtilisateursInteresses(this.evenement.id).subscribe(resp => this.utilisateursInteresses = resp);
  }

  listParticipant() {
    this.interessesBool = false;
    this.participantBool = true;
    this.evenementService.findUtilisateursParticipants(this.evenement.id).subscribe(resp => this.utilisateursParticipants = resp);
  }

  listCommentaires() {
    this.commentaireBool = true;
    this.evenementService.findCommentairesByEvenement(this.evenement.id).subscribe(resp => this.commentaires = resp);
  }

  saveCommentaire() {
    this.commentaire.evenement = this.evenement;
    this.commentaireService.save(this.commentaire);
  }

  saveParticipation(){

  }

}
