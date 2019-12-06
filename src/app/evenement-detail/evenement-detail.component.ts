import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Evenement} from '../model/evenement';
import {EvenementHttpService} from '../evenement/evenement-http.service';
import {ActivatedRoute} from '@angular/router';
import {CommentaireHttpService} from '../commentaires/commentaire-http.service';
import {Commentaire} from '../model/commentaire';
import {Observable} from 'rxjs';
import {UtilisateurHttpService} from '../utilisateur/utilisateur.http.service';
import {Utilisateur} from '../model/utilisateur';

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

  utilisateur : Utilisateur;

  commentaires: any;

  commentaireBool: boolean;

 nbparticipants : number = 0;



  groupesUtilisateurParticipants : any;
  groupesUtilisateurInteresses : any;
  groupesUtilisateurInteressesListe : any;
  groupesUtilisateurParticipantsListe :any;
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

  constructor(private evenementService: EvenementHttpService, private route: ActivatedRoute, private commentaireService: CommentaireHttpService, private utilisateurService : UtilisateurHttpService) {
  this.utilisateur.id = localStorage.getItem('id') as unknown as number;
    this.route.params.subscribe(params => {
      this.evenementService.findById(params.id).subscribe(resp => {
        this.evenement = resp;
        this.evenementService.findUtilisateursParticipants(params.id).subscribe(resp => {
          this.utilisateursParticipants = resp;
          this.utilisateurService.findGroupeByUtilisateurId(params.id).subscribe(resp => {
            this.groupesUtilisateurParticipants = resp;
          })
        } )
      });
    });

    this.route.params.subscribe(params => {
      this.evenementService.findById(params.id).subscribe(resp => {
        this.evenement = resp;
        this.evenementService.findUtilisateursInteresses(params.id).subscribe(resp => {
          this.utilisateursInteresses = resp;
          this.utilisateurService.findGroupeByUtilisateurId(params.id).subscribe(resp => {
            this.groupesUtilisateurInteresses = resp;
          })
        } )
      });
    });
  }


  ngOnInit() {
  }

  listInteresse() {
    this.participantBool = false;
    this.interessesBool = true;
    this.evenementService.findUtilisateursInteresses(this.evenement.id).subscribe(resp => this.utilisateursInteresses = resp);

    for (let lesutilisateurs of this.utilisateursInteresses) {
      this.utilisateurService.findGroupeByUtilisateurId(lesutilisateurs.id).subscribe(resp => this.groupesUtilisateurInteressesListe = resp); }

  }

  listParticipant() {
    this.interessesBool = false;
    this.participantBool = true;
    this.evenementService.findUtilisateursParticipants(this.evenement.id).subscribe(resp => this.utilisateursParticipants = resp);

    for (let lesutilisateurs of this.utilisateursParticipants) {

      this.utilisateurService.findGroupeByUtilisateurId(lesutilisateurs.id).subscribe(resp => this.groupesUtilisateurParticipantsListe = resp);

    }
  }

  AjouterParticipant() {
    this.nbparticipants = this.nbparticipants +1
  }

  AjouterInteresse() {
    this.nbparticipants = this.nbparticipants -1
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

  // findGroupeByUtilisateurId(id: number): Observable<any> {
  //   return this.http.get(this.appConfigService.backend + 'utilisateur/' + id + '/groupes');
  // }

}
