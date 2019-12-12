import {Component, OnInit} from '@angular/core';
import {CreationGroupeHttpService} from "./creation-groupe-http.service";
import {Groupe} from "../model/groupe";
import {GroupeHttpService} from '../groupe/groupe-http.service';
import {Router} from '@angular/router';
import {UtilisateurHttpService} from '../utilisateur/utilisateur.http.service';
import {Utilisateur} from '../model/utilisateur';
import {Entreprise} from '../model/entreprise';
import {GestionHttpHttpService} from '../gestion/gestion-http.service';
import {Gestion} from '../model/gestion';

@Component({
  selector: 'app-creation-groupe',
  templateUrl: './creation-groupe.component.html',
  styleUrls: ['./creation-groupe.component.css']
})
export class CreationGroupeComponent implements OnInit {

  groupe: Groupe = new Groupe();
  entreprise: Entreprise = new Entreprise();
  utilisateur: Utilisateur = new Utilisateur();
  
  groupes: Array<Groupe>;

  gestion: Gestion = new Gestion();

  isExist: boolean;

  save() {
    this.isExist = false;
    this.groupeHttpService.findAll().subscribe(resp => {
      this.groupes = resp;
      for(let group of this.groupes){
        if(this.groupe.codeGroupe == group.codeGroupe){
          this.isExist = true;
          break;
        }
      };

      if(this.isExist == false){
        this.utilisateurHttpService.findEntrepriseByUtilisateurId(this.utilisateur.id).subscribe(resp => {
          this.entreprise = resp;
          this.groupe.entreprise = this.entreprise;

          this.creationGroupeHttpService.create(this.groupe).subscribe(resp => {
            this.groupe = resp;


            this.utilisateurHttpService.findById(this.utilisateur.id).subscribe(resp => {
              this.utilisateur = resp;
              this.gestion.groupe = this.groupe;
              this.gestion.utilisateur = this.utilisateur;
              this.gestion.typeGestion = "Gestionnaire";
              this.gestionHttpHttpService.create(this.gestion).subscribe(resp => {
                this.gestion = resp;
                this.router.navigate(['groupe', this.groupe.id]);
              });
            });
          });

        });

      }
    });

  }

  constructor(private creationGroupeHttpService: CreationGroupeHttpService, private groupeHttpService: GroupeHttpService, private router: Router, private utilisateurHttpService: UtilisateurHttpService, private gestionHttpHttpService: GestionHttpHttpService) {
    this.utilisateur.id = localStorage.getItem('id') as unknown as number;
  }

  ngOnInit() {
  }

}
