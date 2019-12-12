import {Utilisateur} from "../model/utilisateur";
import {UtilisateurHttpService} from "../utilisateur/utilisateur.http.service";
import {ActivatedRoute, Router} from '@angular/router';
import {Component, Input, OnInit} from "@angular/core";
import {LieuxEvenement} from '../model/lieuxEvenement';
import {Favoris} from '../model/favoris';
import {LieuxEvenementHttpService} from '../lieux-evenement/lieux-evenement-http.service';
import {FavorisHttpService} from '../favoris/favoris-http.service';
import {AuthService} from "../login/auth.service";
import {GroupeHttpService} from '../groupe/groupe-http.service';
import {Groupe} from '../model/groupe';
import {Gestion} from '../model/gestion';
import {GestionHttpHttpService} from '../gestion/gestion-http.service';

@Component({
  selector: 'app-page-profil-utilisateur',
  templateUrl: './page-profil-utilisateur.component.html',
  styleUrls: ['./page-profil-utilisateur.component.css']
})
export class PageProfilUtilisateurComponent implements OnInit {

  utilisateur: Utilisateur = new Utilisateur();
  gestion : Gestion = new Gestion();
  groupe : Groupe = new Groupe() ;
  groupes: any;
  allgroupes : any;
  evenements: any;
  favoris: Array<Favoris>;
  typeFavoris: TypeFavoris;
  img: any;
  types: TypeEvenement;
  lieux = Array<LieuxEvenement>();
  afficherinput : boolean = false;
  groupinexist : boolean = false;


  favori: Favoris;

  lieuxEvenement: LieuxEvenement;


  constructor(private utilisateurService: UtilisateurHttpService, private route: ActivatedRoute, private router: Router, private lieuxEvenementService: LieuxEvenementHttpService, private favorisHttpService: FavorisHttpService,private authService: AuthService, private groupeservice : GroupeHttpService, private gestionservice : GestionHttpHttpService) {

    this.utilisateur.id = localStorage.getItem('id') as unknown as number;
    this.utilisateurService.findById(this.utilisateur.id).subscribe(resp => {
        this.utilisateur = resp;
        this.utilisateurService.findGroupeByUtilisateurId(this.utilisateur.id).subscribe(resp => this.groupes = resp);
        this.utilisateurService.findEvenementByUtilisateurId(this.utilisateur.id).subscribe(resp => this.evenements = resp);
        // this.utilisateurService.findFavorisByUtilisateurId(this.utilisateur.id).subscribe(resp => this.favoris = resp);
        // this.lieuxEvenementService.findAll().subscribe(resp => this.lieux = resp);

    })
  }

  affichergroupe() {

    this.groupeservice.findAll().subscribe( resp => this.allgroupes = resp)

    for(let group of this.allgroupes) {
      if(group.codeGroupe== this.groupe.codeGroupe) {

        this.gestion.groupe = group;
        this.gestion.utilisateur = this.utilisateur;
        this.gestion.typeGestion="Membre";
        this.gestionservice.save(this.gestion).subscribe(resp =>{
          this.gestion = resp;
          this.utilisateurService.findGroupeByUtilisateurId(this.utilisateur.id).subscribe(resp => this.groupes = resp);
          this.afficherinput = false;
          this.groupinexist = false;
          this.groupe.codeGroupe=""
    //      this.gestionservice.findById(this.gestion.id).subscribe(resp => this.gestion = resp)
        })
      }
      else if(group.codeGroupe != this.groupe.codeGroupe) {
          this.groupinexist = true;
      }
    }

  }

  afficherzonedetexte() {
    if(this.afficherinput== false) {
      this.afficherinput = true
    }
    else {
      this.afficherinput = false
    }
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


