import {Utilisateur} from "../model/utilisateur";
import {UtilisateurHttpService} from "../utilisateur/utilisateur.http.service";
import {ActivatedRoute, Router} from '@angular/router';
import {Component, Input, OnInit} from "@angular/core";
import {LieuxEvenement} from '../model/lieuxEvenement';
import {Favoris} from '../model/favoris';

@Component({
  selector: 'app-page-profil-utilisateur',
  templateUrl: './page-profil-utilisateur.component.html',
  styleUrls: ['./page-profil-utilisateur.component.css']
})
export class PageProfilUtilisateurComponent implements OnInit {

  utilisateur: Utilisateur = new Utilisateur();
  groupes: any;
  evenements: any;
  favoris: Array<Favoris>;
  typeFavoris: TypeFavoris;
  img: any;
  types: TypeEvenement;
  lieux = Array<LieuxEvenement>();


  constructor(private utilisateurService: UtilisateurHttpService, private route: ActivatedRoute, private router: Router) {

    this.utilisateur.id = localStorage.getItem('id') as unknown as number;
    this.utilisateurService.findById(this.utilisateur.id).subscribe(resp => {
        this.utilisateur = resp;
        this.utilisateurService.findGroupeByUtilisateurId(this.utilisateur.id).subscribe(resp => this.groupes = resp);
        this.utilisateurService.findEvenementByUtilisateurId(this.utilisateur.id).subscribe(resp => this.evenements = resp);
        this.utilisateurService.findFavorisByUtilisateurId(this.utilisateur.id).subscribe(resp => this.favoris = resp);
        this.img = resp;

      }
    );


  }

  save() {
    this.utilisateurService.save(this.utilisateur);
    this.router.navigate(['/utilisateur', this.utilisateur.id]);

  }

  ngOnInit() {
  }

}


