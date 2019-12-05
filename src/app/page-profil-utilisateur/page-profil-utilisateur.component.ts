import {Component, Input, OnInit} from '@angular/core';
import {Utilisateur} from "../model/utilisateur";
import {UtilisateurHttpService} from "../utilisateur/utilisateur.http.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-page-profil-utilisateur',
  templateUrl: './page-profil-utilisateur.component.html',
  styleUrls: ['./page-profil-utilisateur.component.css']
})
export class PageProfilUtilisateurComponent implements OnInit {


  utilisateur: Utilisateur = new Utilisateur();

  constructor(private utilisateurService: UtilisateurHttpService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.utilisateurService.findById(params.id).subscribe(resp => {
          this.utilisateur = resp;
          console.log(this.utilisateur.id);
        }
      );
    });
  }


  // findProfil(id: number) {
  //   if (this.utilisateur.id) {
  //     this.utilisateurService.findById(id).subscribe(resp => {
  //       this.utilisateur = resp;
  //     })
  //   }
  //
  //
  // }

  ngOnInit() {

  }

}
