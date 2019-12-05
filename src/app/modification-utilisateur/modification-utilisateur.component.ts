import { Component, OnInit } from '@angular/core';
import {Entreprise} from '../model/entreprise';
import {Adresse} from '../model/adresse';
import {ModificationEntrepriseHttpService} from '../modification-entreprise/modification-entreprise-http.service';
import {ActivatedRoute} from '@angular/router';
import {Utilisateur} from '../model/utilisateur';
import {UtilisateurHttpService} from '../utilisateur/utilisateur.http.service';

@Component({
  selector: 'app-modification-utilisateur',
  templateUrl: './modification-utilisateur.component.html',
  styleUrls: ['./modification-utilisateur.component.css']
})
export class ModificationUtilisateurComponent implements OnInit {


  utilisateur : Utilisateur = new Utilisateur();

  constructor( private utilisateurhttpservice : UtilisateurHttpService, private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      this.utilisateurhttpservice.findById(params.id).subscribe(resp => {
          this.utilisateur = resp;
        }
      );
    });
  }

  save(){
    this.utilisateurhttpservice.save(this.utilisateur);
    // this.cancel();
  }

  // cancel(){
  //   this.entreprise = null;
  // }


  ngOnInit() {
  }

}
