import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../model/utilisateur";
import {UtilisateurHttpService} from "../utilisateur/utilisateur.http.service";
import {Entreprise} from "../model/entreprise";
import {FormGroup} from '@angular/forms';
import {InscriptionEntrepriseHttpService} from '../inscription-entreprise/inscription-entreprise-http.service';
import {FormValidatorService} from "../form-validator.service";
import {Router} from '@angular/router';
import {EntrepriseHttpService} from '../entreprise/entreprise-http.service';


@Component({
  selector: 'incription-form',
  templateUrl: './incription-form.component.html',
  styleUrls: ['./incription-form.component.css']
})
export class IncriptionFormComponent implements OnInit {


  utilisateur: Utilisateur = new Utilisateur();
  entreprise: Entreprise = new Entreprise();

  utilisateurs: Array<Utilisateur>;

  entreprises: Array<Entreprise>;

  isExist: boolean;

  entrepriseExist: boolean;


  save() {
    this.isExist = false;
    this.utilisateurService.findAll().subscribe(resp => {
      this.utilisateurs = resp;
      for(let util of this.utilisateurs){
        if(util.identifiant == this.utilisateur.identifiant){
          this.isExist = true;
          break;
        }
      };

      this.entrepriseHttpService.findAll().subscribe(resp => {
        this.entreprises = resp;
        for(let ent of this.entreprises){
          if(ent.codeEntreprise == this.entreprise.codeEntreprise){
            this.entrepriseExist = true;
            break;
          }
        };
        if(this.isExist == false && this.entrepriseExist == true){
          this.utilisateurService.createUser(this.utilisateur).subscribe(resp => {
            this.utilisateur = resp;
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('isAdmin', 'false');
            localStorage.setItem('id', String(this.utilisateur.id));
            this.router.navigate(['utilisateur']);
          })
        } else if (this.entrepriseExist != true){
          this.entrepriseExist = false;
        };
      });


      // if(this.isExist == false) {
      //   this.utilisateurService.save(this.utilisateur);
      // } else {
      //   this.router.navigate(['/inscription']);
      // }
    });

  }


  constructor(private utilisateurService: UtilisateurHttpService, formValidatorService: FormValidatorService, private router: Router, private entrepriseHttpService: EntrepriseHttpService) {
  }

  ngOnInit() {
  }

}



