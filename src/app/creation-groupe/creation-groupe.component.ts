import {Component, OnInit} from '@angular/core';
import {CreationGroupeHttpService} from "./creation-groupe-http.service";
import {Groupe} from "../model/groupe";
import {Entreprise} from "../model/entreprise";
import {UtilisateurHttpService} from "../utilisateur/utilisateur.http.service";
import {Utilisateur} from "../model/utilisateur";
import {Router} from "@angular/router";

@Component({
  selector: 'app-creation-groupe',
  templateUrl: './creation-groupe.component.html',
  styleUrls: ['./creation-groupe.component.css']
})
export class CreationGroupeComponent implements OnInit {

  groupe: Groupe = new Groupe;
  entreprise: Entreprise = new Entreprise();
  utilisateur: Utilisateur = new Utilisateur();

  save() {

    this.creationGroupeHttpService.save(this.groupe);
    this.utilisateurHttpService.findById(this.utilisateur.id).subscribe(resp => {
      this.utilisateur = resp;
      this.utilisateurHttpService.findEntrepriseByUtilisateurId(this.utilisateur.id).subscribe(resp => {
        this.entreprise = resp;
        this.groupe.entreprise = this.entreprise;
        this.creationGroupeHttpService.create(this.groupe).subscribe(resp => {
          this.groupe = resp;
          this.router.navigate(['groupe', this.groupe.id]);
        });
      });
    });
  }

  constructor(private creationGroupeHttpService: CreationGroupeHttpService, private utilisateurHttpService: UtilisateurHttpService, private router: Router) {
    this.utilisateur.id = localStorage.getItem('id') as unknown as number;
  }

  ngOnInit() {
  }

}
