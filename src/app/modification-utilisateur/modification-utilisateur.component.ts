import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Entreprise} from '../model/entreprise';
import {Adresse} from '../model/adresse';
import {ModificationEntrepriseHttpService} from '../modification-entreprise/modification-entreprise-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Utilisateur} from '../model/utilisateur';
import {UtilisateurHttpService} from '../utilisateur/utilisateur.http.service';
import {EntrepriseHttpService} from '../entreprise/entreprise-http.service';

@Component({
  selector: 'app-modification-utilisateur',
  templateUrl: './modification-utilisateur.component.html',
  styleUrls: ['./modification-utilisateur.component.css']
})
export class ModificationUtilisateurComponent implements OnInit {

entreprise: Entreprise =new Entreprise();
 utilisateur: Utilisateur = new Utilisateur();

  constructor(private utilisateurhttpservice: UtilisateurHttpService, private route: ActivatedRoute, private router: Router) {
  this.utilisateur.id = localStorage.getItem('id') as unknown as number;

    // this.route.params.subscribe(params => {
      this.utilisateurhttpservice.findById(this.utilisateur.id).subscribe(resp => {
          this.utilisateur = resp;
        console.log(this.utilisateur);
        this.utilisateurhttpservice.findEntrepriseByUtilisateurId(this.utilisateur.id).subscribe(resp => {this.entreprise =resp; console.log(this.entreprise);

        }

      );
   });
  }

  save() {
    this.utilisateur.entreprise =this.entreprise;
    this.utilisateurhttpservice.save(this.utilisateur).subscribe(resp=> {
      this.utilisateur=resp;
      this.router.navigate(['utilisateur']);
    });

  }


  ngOnInit() {
  }

}
