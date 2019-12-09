import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Evenement} from '../model/evenement';
import {EvenementHttpService} from '../evenement/evenement-http.service';
import {ActivatedRoute} from '@angular/router';
import {CommentaireHttpService} from '../commentaires/commentaire-http.service';
import {Commentaire} from '../model/commentaire';
import {Observable} from 'rxjs';
import {UtilisateurHttpService} from '../utilisateur/utilisateur.http.service';
import {Utilisateur} from '../model/utilisateur';
import {Participation} from '../model/participation';
import {ParticipationHttpService} from '../participation/participation-http.service';
import {LieuxEvenement} from "../model/lieuxEvenement";

@Component({
  selector: 'evenement-detail',
  templateUrl: './evenement-detail.component.html',
  styleUrls: ['./evenement-detail.component.css']
})
export class EvenementDetailComponent implements OnInit {

  evenement: Evenement = new Evenement();

  commentaire: Commentaire = new Commentaire();

  participation: Participation = new Participation();
  lieuxEvenement: LieuxEvenement = new LieuxEvenement();

  utilisateursInteresses: any;

  utilisateursParticipants: any;

  utilisateur: Utilisateur;

  commentaires: any;

  commentaireBool: boolean;

  nbparticipants: number = 0;

  participationparutilisateur: any;
  allparticipationofcurentevenet: any;


  groupesUtilisateurParticipants: any;
  groupesUtilisateurInteresses: any;
  groupesUtilisateurInteressesListe: any;
  groupesUtilisateurParticipantsListe: any;
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


  constructor(private evenementService: EvenementHttpService, private route: ActivatedRoute, private commentaireService: CommentaireHttpService, private utilisateurService: UtilisateurHttpService, private participantService: ParticipationHttpService) {
    // this.utilisateur.id = localStorage.getItem('id') as unknown as number;
    this.route.params.subscribe(params => {
      this.evenementService.findById(params.id).subscribe(resp => {
        this.evenement = resp;
        this.evenementService.findUtilisateursParticipants(params.id).subscribe(resp => {
          this.utilisateursParticipants = resp;
          this.utilisateurService.findGroupeByUtilisateurId(params.id).subscribe(resp => {
            this.groupesUtilisateurParticipants = resp;
          })
        })
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
        })
      });

    });

    this.route.params.subscribe(params => {
      this.evenementService.findById(params.id).subscribe(resp => {
        this.evenement = resp;
        this.utilisateurService.findById(83).subscribe(resp => {  //TODO remettre l'ID de l'utilisateur dans findbyid (params.id)
          this.utilisateur = resp;
          this.utilisateurService.findParticipationByUtilisateurAndEvent(83, this.evenement.id).subscribe(resp => { //TODO remettre l'ID de l'utilisateur dans findParticipationByUtilisateur (params.id)
            this.participationparutilisateur = resp;
          })
        })
      });
    });

    this.route.params.subscribe(params => {
      this.evenementService.findById(params.id).subscribe(resp => {
        this.evenement = resp;
        this.evenementService.findAllPartcipationbyEvenement(this.evenement.id).subscribe(resp => {
          this.allparticipationofcurentevenet = resp;
          for( let oneparticipation of this.allparticipationofcurentevenet) {
            if (oneparticipation.type == "Participant") {
              this.nbparticipants = this.nbparticipants + 1
            }
          }
          // if(this.nbparticipants <= this.evenement.nbParticipantMax) {
          //   this.evenement.statutOf = true;
          //   // this.evenementService.save(this.evenement)
          // }
          // else if(this.nbparticipants == this.evenement.nbParticipantMax){
          //   this.evenement.statutOf = false;
          //   // this.evenementService.save(this.evenement)
          // }
        })
      })
    })
}

  ngOnInit() {

  }

  listInteresse() {
    this.participantBool = false;
    this.interessesBool = true;
    this.evenementService.findUtilisateursInteresses(this.evenement.id).subscribe(resp => this.utilisateursInteresses = resp);

    for (let lesutilisateurs of this.utilisateursInteresses) {
      this.utilisateurService.findGroupeByUtilisateurId(lesutilisateurs.id).subscribe(resp => this.groupesUtilisateurInteressesListe = resp);
    }
  }

  listParticipant() {
    this.interessesBool = false;
    this.participantBool = true;
    this.evenementService.findUtilisateursParticipants(this.evenement.id).subscribe(resp => this.utilisateursParticipants = resp);

    for (let lesutilisateurs of this.utilisateursParticipants) {

      this.utilisateurService.findGroupeByUtilisateurId(lesutilisateurs.id).subscribe(resp => this.groupesUtilisateurParticipantsListe = resp);
    }
  }


  listCommentaires() {
    this.commentaireBool = true;
    this.evenementService.findCommentairesByEvenement(this.evenement.id).subscribe(resp => this.commentaires = resp);
  }

  saveCommentaire() {
    this.commentaire.evenement = this.evenement;
    this.commentaireService.save(this.commentaire);
  }

  saveParticipation(iduser = 83) {

    if (this.participationparutilisateur.type == "Participant") {
      this.utilisateurService.findParticipationByUtilisateurAndEvent(iduser, this.evenement.id).subscribe(resp => this.participationparutilisateur = resp)
      console.log(this.participationparutilisateur)
      this.participationparutilisateur.type = null;
      console.log(this.participationparutilisateur)
       this.participantService.save(this.participationparutilisateur).subscribe(resp => this.participantService.findById(this.participationparutilisateur.id).subscribe(next => this.participationparutilisateur = resp))
      console.log(this.participationparutilisateur)
      // this.participantService.findById(this.participationparutilisateur.id).subscribe(resp =>this.participationparutilisateur)
      this.nbparticipants = this.nbparticipants - 1
      if (this.evenement.statutOf == false) {
        this.evenement.statutOf = true;
        this.evenementService.save(this.evenement)

      }
    } else if(this.participationparutilisateur.type == null) {
      if (this.evenement.statutOf = true) {
         this.utilisateurService.findParticipationByUtilisateurAndEvent(iduser, this.evenement.id).subscribe(resp => this.participationparutilisateur = resp)
        console.log(this.participationparutilisateur)
        this.participationparutilisateur.type = "Participant";
        console.log(this.participationparutilisateur)
     //  this.participantService.save(this.participationparutilisateur)
       this.participantService.save(this.participationparutilisateur).subscribe(resp => this.participantService.findById(this.participationparutilisateur.id).subscribe(next => this.participationparutilisateur = resp))
     //this.participantService.save(this.participationparutilisateur).subscribe(resp => this.participationparutilisateur)
    //     this.participantService.findById(this.participationparutilisateur.id).subscribe(resp =>this.participationparutilisateur)
        console.log(this.participationparutilisateur.type)
        this.nbparticipants = this.nbparticipants + 1
        if (this.nbparticipants == this.evenement.nbParticipantMax) {
          this.evenement.statutOf = false;
          this.evenementService.save(this.evenement)
        }
      }

    }
    else if(this.participationparutilisateur.type == "Interesse") {
      if (this.evenement.statutOf = true) {
        this.utilisateurService.findParticipationByUtilisateurAndEvent(iduser, this.evenement.id).subscribe(resp => this.participationparutilisateur = resp)
        console.log(this.participationparutilisateur)
        this.participationparutilisateur.type = "Participant";
      //  this.participantService.save(this.participationparutilisateur)
        this.participantService.save(this.participationparutilisateur).subscribe(resp => this.participationparutilisateur)
     //   this.participantService.findById(this.participationparutilisateur.id).subscribe(resp =>this.participationparutilisateur)
        console.log(this.participationparutilisateur.type)
        this.nbparticipants = this.nbparticipants + 1
        if (this.nbparticipants == this.evenement.nbParticipantMax) {
          this.evenement.statutOf = false;
          this.evenementService.save(this.evenement)
        }
      }

    }
  }

  saveInteret(iduser = 83) {
    if (this.participationparutilisateur.type == "Interesse") {
      this.utilisateurService.findParticipationByUtilisateurAndEvent(iduser, this.evenement.id).subscribe(resp => this.participationparutilisateur = resp)
      // console.log(this.participationparutilisateur)
      this.participationparutilisateur.type = null;
      // console.log(this.participationparutilisateur.type)
      this.participantService.save(this.participationparutilisateur)
    }
    else if(this.participationparutilisateur.type == null) {
      this.utilisateurService.findParticipationByUtilisateurAndEvent(iduser, this.evenement.id).subscribe(resp => this.participationparutilisateur = resp)
      // console.log(this.participationparutilisateur)
      this.participationparutilisateur.type = "Interesse";
      // console.log(this.participationparutilisateur.type)
      this.participantService.save(this.participationparutilisateur)

    }
    else if(this.participationparutilisateur.type == "Participant") {
      this.utilisateurService.findParticipationByUtilisateurAndEvent(iduser, this.evenement.id).subscribe(resp => this.participationparutilisateur = resp)
      // console.log(this.participationparutilisateur)
      this.participationparutilisateur.type = "Interesse";
      // console.log(this.participationparutilisateur.type)
      this.participantService.save(this.participationparutilisateur)
      this.nbparticipants = this.nbparticipants - 1
      if (this.evenement.statutOf == false) {
        this.evenement.statutOf = true;
        this.evenementService.save(this.evenement)
      }

    }

  }


}
