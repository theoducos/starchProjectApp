import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Evenement} from '../model/evenement';
import {EvenementHttpService} from '../evenement/evenement-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentaireHttpService} from '../commentaires/commentaire-http.service';
import {Commentaire} from '../model/commentaire';
import {Observable} from 'rxjs';
import {UtilisateurHttpService} from '../utilisateur/utilisateur.http.service';
import {Utilisateur} from '../model/utilisateur';
import {Participation} from '../model/participation';
import {ParticipationHttpService} from '../participation/participation-http.service';
import {LieuxEvenement} from "../model/lieuxEvenement";
import {AuthService} from "../login/auth.service";
import {ParticipationService} from './participation.service';

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

  typeParticipation : TypeParticipation.participant;

  utilisateursParticipants: Array<Utilisateur>;

  utilisateur: Utilisateur = new Utilisateur();

  commentaires: Array<Commentaire>;

  commentaireBool: boolean;

  nbparticipants: number;

  participationparutilisateur: any;
  allparticipationofcurentevenet: any;

  participations: Array<Participation>;


  groupesUtilisateurParticipants: any;
  groupesUtilisateurInteresses: any;
  groupesUtilisateurInteressesListe: any;
  groupesUtilisateurParticipantsListe: any;
  id: number;

  participantBool: boolean = false;
  interessesBool: boolean = false;

  isParticipant: boolean;
  isInteresse: boolean;

  @Output()
  childEvent = new EventEmitter();

  save() {
    this.evenementService.save(this.evenement);
    this.cancel();
  }

  cancel() {
    this.childEvent.emit();
  }


  constructor(private evenementService: EvenementHttpService, private route: ActivatedRoute, private commentaireService: CommentaireHttpService, private utilisateurService: UtilisateurHttpService, private participantService: ParticipationHttpService, private router: Router, private authService: AuthService, private participationService: ParticipationService) {
    this.utilisateur.id = localStorage.getItem('id') as unknown as number;

    this.route.params.subscribe(params => {
      this.evenementService.findById(params.id).subscribe(resp => {
        this.evenement = resp;

      // this.utilisateurService.findById(this.utilisateur.id).subscribe(resp => {
      //   this.utilisateur = resp;
      //   this.utilisateurService.findParticipationByUtilisateurAndEvent(this.utilisateur.id, this.evenement.id).subscribe(resp => {
      //     this.participation = resp;});
      //   });


        this.evenementService.findUtilisateursParticipants(params.id).subscribe(resp => {
          this.utilisateursParticipants = resp;
          this.nbparticipants = this.utilisateursParticipants.length;



          // this.utilisateurService.findGroupeByUtilisateurId(this.utilisateur.id).subscribe(resp => {
          //   this.groupesUtilisateurParticipants = resp;
          // })
        })
      });
    });

    this.route.params.subscribe(params => {
      this.evenementService.findById(params.id).subscribe(resp => {
        this.evenement = resp;
        this.evenementService.findUtilisateursInteresses(params.id).subscribe(resp => {
          this.utilisateursInteresses = resp;
          // this.utilisateurService.findGroupeByUtilisateurId(params.id).subscribe(resp => {
          //   this.groupesUtilisateurInteresses = resp;
          // })
        })
      });

    });


    this.route.params.subscribe(params => {
      this.evenementService.findById(params.id).subscribe(resp => {
        this.evenement = resp;
        console.log(this.evenement);

        this.utilisateurService.findById(this.utilisateur.id).subscribe(resp => {
          this.utilisateur = resp;
          console.log(this.utilisateur)
          this.utilisateurService.findParticipationByUtilisateurAndEvent(this.utilisateur.id, this.evenement.id).subscribe(resp => {
            if(resp != null){
              this.participation = resp;
            }
            console.log(this.participation);
          });
        });


      });

    });

    // this.route.params.subscribe(params => {
    //   this.evenementService.findById(params.id).subscribe(resp => {
    //     this.evenement = resp;
    //     this.utilisateurService.findById(this.utilisateur.id).subscribe(resp => {  //TODO remettre l'ID de l'utilisateur dans findbyid (params.id)
    //       this.utilisateur = resp;
    //       this.utilisateurService.findParticipationByUtilisateurAndEvent(this.utilisateur.id, this.evenement.id).subscribe(resp => { //TODO remettre l'ID de l'utilisateur dans findParticipationByUtilisateur (params.id)
    //         this.participationparutilisateur = resp;
    //       })
    //     })
    //   });
    // });
    //
    // this.route.params.subscribe(params => {
    //   this.evenementService.findById(params.id).subscribe(resp => {
    //     this.evenement = resp;
    //     this.evenementService.findAllPartcipationbyEvenement(this.evenement.id).subscribe(resp => {
    //       this.allparticipationofcurentevenet = resp;
    //       // for (let oneparticipation of this.allparticipationofcurentevenet) {
    //       //   if (oneparticipation.type == "Participant") {
    //       //     this.nbparticipants = this.nbparticipants + 1
    //       //   }
    //       // }
    //     })
    //   })
    // })
  }

  disconnect() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {

  }

  listInteresse() {
    this.participantBool = false;
    this.interessesBool = true;
    this.evenementService.findUtilisateursInteresses(this.evenement.id).subscribe(resp => this.utilisateursInteresses = resp);
    // console.log(this.utilisateursInteresses)
    // for (let lesutilisateurs of this.utilisateursInteresses) {
    //   this.utilisateurService.findGroupeByUtilisateurId(lesutilisateurs.id).subscribe(resp => this.groupesUtilisateurInteressesListe = resp);
    // }
  }

  listParticipant() {
    this.interessesBool = false;
    this.participantBool = true;
    this.evenementService.findUtilisateursParticipants(this.evenement.id).subscribe(resp => {
      this.utilisateursParticipants = resp;
      this.nbparticipants = this.utilisateursParticipants.length;
    });
    // console.log(this.utilisateursParticipants)
    // for (let lesutilisateurs of this.utilisateursParticipants) {
    //   this.utilisateurService.findGroupeByUtilisateurId(lesutilisateurs.id).subscribe(resp => this.groupesUtilisateurParticipantsListe = resp);
    // }
  }

  listAll() {
    this.participantBool = true;
    this.interessesBool = true;
    this.evenementService.findUtilisateursInteresses(this.evenement.id).subscribe(resp => this.utilisateursInteresses = resp);
    this.evenementService.findUtilisateursParticipants(this.evenement.id).subscribe(resp => {
      this.utilisateursParticipants = resp;
      this.nbparticipants = this.utilisateursParticipants.length;
    });

  }


  listCommentaires() {
    this.commentaireBool = true;
    this.evenementService.findCommentairesByEvenement(this.evenement.id).subscribe(resp => this.commentaires = resp);
  }

  saveCommentaire() {
    this.utilisateurService.findById(this.utilisateur.id).subscribe(resp => {
      this.utilisateur = resp;
      this.commentaire.utilisateur = this.utilisateur;
      this.commentaire.evenement = this.evenement;
      this.commentaireService.save(this.commentaire).subscribe(resp => {
        this.listCommentaires();
        this.commentaire.commentaire = "";
      });

    })

  }

  // saveParticipation(iduser = this.utilisateur.id) {
  //
  //   if (this.participationparutilisateur.type == "Participant") {
  //     this.utilisateurService.findParticipationByUtilisateurAndEvent(iduser, this.evenement.id).subscribe(resp => this.participationparutilisateur = resp);
  //     console.log(this.participationparutilisateur);
  //     this.participationparutilisateur.type = null;
  //     console.log(this.participationparutilisateur);
  //     this.participantService.save(this.participationparutilisateur).subscribe(resp => this.participantService.findById(this.participationparutilisateur.id).subscribe(next => this.participationparutilisateur = resp))
  //     console.log(this.participationparutilisateur);
  //     // this.participantService.findById(this.participationparutilisateur.id).subscribe(resp =>this.participationparutilisateur)
  //     this.nbparticipants = this.nbparticipants - 1;
  //     if (this.evenement.statutOf == false) {
  //       this.evenement.statutOf = true;
  //       this.evenementService.save(this.evenement)
  //
  //     }
  //   } else if (this.participationparutilisateur.type == null) {
  //     if (this.evenement.statutOf = true) {
  //       this.utilisateurService.findParticipationByUtilisateurAndEvent(iduser, this.evenement.id).subscribe(resp => this.participationparutilisateur = resp);
  //       console.log(this.participationparutilisateur)
  //       this.participationparutilisateur.type = "Participant";
  //       console.log(this.participationparutilisateur)
  //       //  this.participantService.save(this.participationparutilisateur)
  //       this.participantService.save(this.participationparutilisateur).subscribe(resp => this.participantService.findById(this.participationparutilisateur.id).subscribe(next => this.participationparutilisateur = resp))
  //       //this.participantService.save(this.participationparutilisateur).subscribe(resp => this.participationparutilisateur)
  //       //     this.participantService.findById(this.participationparutilisateur.id).subscribe(resp =>this.participationparutilisateur)
  //       console.log(this.participationparutilisateur.type)
  //       this.nbparticipants = this.nbparticipants + 1
  //       if (this.nbparticipants == this.evenement.nbParticipantMax) {
  //         this.evenement.statutOf = false;
  //         this.evenementService.save(this.evenement)
  //       }
  //     }
  //
  //   } else if (this.participationparutilisateur.type == "Interesse") {
  //     if (this.evenement.statutOf = true) {
  //       this.utilisateurService.findParticipationByUtilisateurAndEvent(iduser, this.evenement.id).subscribe(resp => this.participationparutilisateur = resp);
  //       console.log(this.participationparutilisateur)
  //       this.participationparutilisateur.type = "Participant";
  //       //  this.participantService.save(this.participationparutilisateur)
  //       this.participantService.save(this.participationparutilisateur).subscribe(resp => this.participationparutilisateur)
  //       //   this.participantService.findById(this.participationparutilisateur.id).subscribe(resp =>this.participationparutilisateur)
  //       console.log(this.participationparutilisateur.type)
  //       this.nbparticipants = this.nbparticipants + 1
  //       if (this.nbparticipants == this.evenement.nbParticipantMax) {
  //         this.evenement.statutOf = false;
  //         this.evenementService.save(this.evenement)
  //       }
  //     }
  //
  //   }
  // }
  //
  // saveInteret(iduser = this.utilisateur.id) {
  //   if (this.participationparutilisateur.type == "Interesse") {
  //     this.utilisateurService.findParticipationByUtilisateurAndEvent(iduser, this.evenement.id).subscribe(resp => this.participationparutilisateur = resp)
  //     this.participationparutilisateur.type = null;
  //     // console.log(this.participationparutilisateur.type)
  //     this.participantService.save(this.participationparutilisateur)
  //   } else if (this.participationparutilisateur.type == null) {
  //     this.utilisateurService.findParticipationByUtilisateurAndEvent(iduser, this.evenement.id).subscribe(resp => this.participationparutilisateur = resp)
  //     this.participationparutilisateur.type = "Interesse";
  //     this.participantService.save(this.participationparutilisateur).subscribe(resp => this.participantService.findById(this.participationparutilisateur.id).subscribe(next => this.participationparutilisateur = resp))
  //
  //   } else if (this.participationparutilisateur.type == "Participant") {
  //     this.utilisateurService.findParticipationByUtilisateurAndEvent(iduser, this.evenement.id).subscribe(resp => this.participationparutilisateur = resp)
  //     this.participationparutilisateur.type = "Interesse";
  //     this.participantService.save(this.participationparutilisateur).subscribe(resp => this.participantService.findById(this.participationparutilisateur.id).subscribe(next => this.participationparutilisateur = resp))
  //     this.nbparticipants = this.nbparticipants - 1
  //     if (this.evenement.statutOf == false) {
  //       this.evenement.statutOf = true;
  //       this.participantService.save(this.participationparutilisateur).subscribe(resp => this.participantService.findById(this.participationparutilisateur.id).subscribe(next => this.participationparutilisateur = resp))
  //     }
  //
  //   }
  //
  // }

  jeParticipe() {
    if(this.evenement.nbParticipantMax-this.nbparticipants > 0){
      this.isParticipant = false;
      this.evenementService.findUtilisateursParticipants(this.evenement.id).subscribe(resp => {
        this.utilisateursParticipants = resp;

        for (let util of this.utilisateursParticipants) {
          if (util.id == this.utilisateur.id) {
            this.isParticipant = true;
            break;
          }
        }

        if (this.isParticipant == true) {
          this.utilisateurService.findParticipationByUtilisateurAndEvent(this.utilisateur.id, this.evenement.id).subscribe(resp => {
            this.participation = resp;
            this.participationService.delete(this.participation.id).subscribe(resp => this.listParticipant());

            // this.evenementService.findUtilisateursParticipants(this.evenement.id).subscribe(resp => {
            //   this.utilisateursParticipants = resp;
            //   this.nbparticipants = this.utilisateursParticipants.length;
            // });

          });
        } else {

          this.participation.utilisateur = this.utilisateur;
          this.participation.evenement = this.evenement;
          this.participation.type = "Participant";

          this.participationService.create(this.participation).subscribe(resp => {
            this.participation = resp;

            this.listParticipant();
          });
        }

      });
    } else {
      this.isParticipant = false;
      this.evenementService.findUtilisateursParticipants(this.evenement.id).subscribe(resp => {
        this.utilisateursParticipants = resp;

        for (let util of this.utilisateursParticipants) {
          if (util.id == this.utilisateur.id) {
            this.isParticipant = true;
            break;
          }
        }

        if (this.isParticipant == true) {
          this.utilisateurService.findParticipationByUtilisateurAndEvent(this.utilisateur.id, this.evenement.id).subscribe(resp => {
            this.participation = resp;
            this.participationService.delete(this.participation.id).subscribe(resp => this.listParticipant());

            // this.evenementService.findUtilisateursParticipants(this.evenement.id).subscribe(resp => {
            //   this.utilisateursParticipants = resp;
            //   this.nbparticipants = this.utilisateursParticipants.length;
            // });

          });
        }
      });
    }
  }

  jeSuisInteresse(){
    this.isInteresse = false;
    this.evenementService.findUtilisateursInteresses(this.evenement.id).subscribe(resp => {
      this.utilisateursInteresses = resp;


      for (let util of this.utilisateursInteresses) {
        if (util.id == this.utilisateur.id) {
          this.isInteresse = true;
          break;
        }
      }

      if (this.isInteresse == true) {
        this.utilisateurService.findParticipationByUtilisateurAndEvent(this.utilisateur.id, this.evenement.id).subscribe(resp => {
          this.participation = resp;

          this.participationService.delete(this.participation.id).subscribe(resp => this.listInteresse());

          // this.evenementService.findUtilisateursParticipants(this.evenement.id).subscribe(resp => {
          //   this.utilisateursParticipants = resp;
          //   this.nbparticipants = this.utilisateursParticipants.length;
          // });

        });
      } else {

        console.log(this.participation);

        this.participation.utilisateur = this.utilisateur;
        this.participation.evenement = this.evenement;
        this.participation.type = "Interesse";

        this.participationService.create(this.participation).subscribe(resp => {
          this.participation = resp;

          this.listInteresse();
        });
      }

    });


  }
}
