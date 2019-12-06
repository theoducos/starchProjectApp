import {Utilisateur} from "../model/utilisateur";
import {UtilisateurHttpService} from "../utilisateur/utilisateur.http.service";
import {ActivatedRoute} from "@angular/router";
import {Component, Input, OnInit} from "@angular/core";
import {Groupe} from "../model/groupe";
import {Evenement} from "../model/evenement";

@Component({
  selector: 'app-page-profil-utilisateur',
  templateUrl: './page-profil-utilisateur.component.html',
  styleUrls: ['./page-profil-utilisateur.component.css']
})
export class PageProfilUtilisateurComponent implements OnInit {

  utilisateur: Utilisateur = new Utilisateur();
  groupes: any;
  evenements: any;
  favoris: any;
  img: any;


  constructor(private utilisateurService: UtilisateurHttpService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.utilisateurService.findById(params.id).subscribe(resp => {
          this.utilisateur = resp;
          this.utilisateurService.findGroupeByUtilisateurId(this.utilisateur.id).subscribe(resp => this.groupes = resp);
          this.utilisateurService.findEvenementByUtilisateurId(this.utilisateur.id).subscribe(resp => this.evenements = resp);
          this.utilisateurService.findFavorisByUtilisateurId(this.utilisateur.id).subscribe(resp => this.favoris = resp);
          this.img = resp;
        }
      );
    });
  }


  ngOnInit() {
  }

}


