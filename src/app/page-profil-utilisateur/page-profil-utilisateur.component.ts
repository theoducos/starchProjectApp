import {Utilisateur} from "../model/utilisateur";
import {UtilisateurHttpService} from "../utilisateur/utilisateur.http.service";
import {ActivatedRoute, Router} from '@angular/router';
import {Component, Input, OnInit} from "@angular/core";
import {LieuxEvenement} from '../model/lieuxEvenement';
import {Favoris} from '../model/favoris';
import {LieuxEvenementHttpService} from '../lieux-evenement/lieux-evenement-http.service';
import {FavorisHttpService} from '../favoris/favoris-http.service';
import {AuthService} from "../login/auth.service";

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

  favori: Favoris;

  lieuxEvenement: LieuxEvenement;


  constructor(private utilisateurService: UtilisateurHttpService, private route: ActivatedRoute, private router: Router, private lieuxEvenementService: LieuxEvenementHttpService, private favorisHttpService: FavorisHttpService,private authService: AuthService) {

    this.utilisateur.id = localStorage.getItem('id') as unknown as number;
    this.utilisateurService.findById(this.utilisateur.id).subscribe(resp => {
        this.utilisateur = resp;
        this.utilisateurService.findGroupeByUtilisateurId(this.utilisateur.id).subscribe(resp => this.groupes = resp);
        this.utilisateurService.findEvenementByUtilisateurId(this.utilisateur.id).subscribe(resp => this.evenements = resp);
        // this.utilisateurService.findFavorisByUtilisateurId(this.utilisateur.id).subscribe(resp => this.favoris = resp);
        this.lieuxEvenementService.findAll().subscribe(resp => this.lieux = resp);
        this.img = resp;

      }
    );


  }

  disconnect() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  //
  // save() {
  //   // this.utilisateur.id = localStorage.getItem('id') as unknown as number;
  //   // this.favori.utilisateur.id = this.utilisateur.id;
  //   this.favorisHttpService.save(this.favori);
  //
  // }

  ngOnInit() {
  }

}


