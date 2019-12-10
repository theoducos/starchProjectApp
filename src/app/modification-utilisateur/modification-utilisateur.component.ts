import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Entreprise} from '../model/entreprise';
import {Adresse} from '../model/adresse';
import {ModificationEntrepriseHttpService} from '../modification-entreprise/modification-entreprise-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Utilisateur} from '../model/utilisateur';
import {UtilisateurHttpService} from '../utilisateur/utilisateur.http.service';

@Component({
  selector: 'app-modification-utilisateur',
  templateUrl: './modification-utilisateur.component.html',
  styleUrls: ['./modification-utilisateur.component.css']
})
export class ModificationUtilisateurComponent implements OnInit {


  utilisateur: Utilisateur = new Utilisateur();

  constructor(private utilisateurhttpservice: UtilisateurHttpService, private route: ActivatedRoute, private router: Router) {
  this.utilisateur.id = localStorage.getItem('id') as unknown as number;

    // this.route.params.subscribe(params => {
      this.utilisateurhttpservice.findById(this.utilisateur.id).subscribe(resp => {
          this.utilisateur = resp;
        }
      );
    // });
  }

  save() {
    this.utilisateurhttpservice.save(this.utilisateur);
    this.router.navigate(['/utilisateur', this.utilisateur.id]);

  }


  ngOnInit() {
  }

}
