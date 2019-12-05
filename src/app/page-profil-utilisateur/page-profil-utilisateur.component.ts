import {Utilisateur} from "../model/utilisateur";
import {UtilisateurHttpService} from "../utilisateur/utilisateur.http.service";
import {ActivatedRoute} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {Groupe} from "../model/groupe";

@Component({
  selector: 'app-page-profil-utilisateur',
  templateUrl: './page-profil-utilisateur.component.html',
  styleUrls: ['./page-profil-utilisateur.component.css']
})
export class PageProfilUtilisateurComponent implements OnInit {


  utilisateur: Utilisateur = new Utilisateur();
  groupes: any;

  constructor(private utilisateurService: UtilisateurHttpService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.utilisateurService.findById(params.id).subscribe(resp => {
          this.utilisateur = resp;
          console.log(this.utilisateur.id);
        }
      );
    });
  }

  listGroupe(): Array<Groupe> {
    return this.utilisateurService.findGroupeByUtilisateurId(this.utilisateur.id);
  }

  ngOnInit() {
  }

}


