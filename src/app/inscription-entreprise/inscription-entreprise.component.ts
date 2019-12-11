import {Component, Input, OnInit} from '@angular/core';
import {InscriptionEntrepriseHttpService} from './inscription-entreprise-http.service';
import {Entreprise} from '../model/entreprise';
import {Adresse} from '../model/adresse';
import {Utilisateur} from '../model/utilisateur';
import {UtilisateurHttpService} from '../utilisateur/utilisateur.http.service';
import {EntrepriseHttpService} from '../entreprise/entreprise-http.service';
import {Router} from '@angular/router';
// import {FormValidatorService} from '../form-validator.service';

@Component({
  selector: 'inscription-entreprise',
  templateUrl: './inscription-entreprise.component.html',
  styleUrls: ['./inscription-entreprise.component.css']
})
export class InscriptionEntrepriseComponent implements OnInit {


  constructor(private entrepriseHttpService: EntrepriseHttpService, private utilisateurService: UtilisateurHttpService, private router: Router) { }

  @Input("current")
  adresse : Adresse = new Adresse();
  entreprise: Entreprise = new Entreprise();
  utilisateur: Utilisateur = new Utilisateur();

  utilisateurs: Array<Utilisateur>;

  entreprises: Array<Entreprise>;

  isExist: boolean;
  entrepriseExist: boolean;

  save(){
    this.isExist = false;
    this.entrepriseExist = false;
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
          if(ent.codeEntreprise == this.utilisateur.entreprise.codeEntreprise){
            this.entrepriseExist = true;
            break;
          }
        };
        if(this.isExist == false && this.entrepriseExist == false){
          this.utilisateurService.createUser(this.utilisateur).subscribe(resp => {
            this.utilisateur = resp;
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('isAdmin', 'true');
            localStorage.setItem('id', String(this.utilisateur.id));
            this.router.navigate(['utilisateur']);
          })
        }
      });


      // if(this.isExist == false) {
      //   this.utilisateurService.save(this.utilisateur);
      // } else {
      //   this.router.navigate(['/inscription']);
      // }
    });

    // this.inscriptionEntrepriseHttpService.save(this.utilisateur);
  }


  ngOnInit() {
    this.entreprise.adresse=this.adresse;
    this.utilisateur.entreprise = this.entreprise;
    this.utilisateur.admin =true;
  }

}

