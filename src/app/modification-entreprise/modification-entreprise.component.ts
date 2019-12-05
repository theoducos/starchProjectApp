import {Component, Input, OnInit} from '@angular/core';
import {InscriptionEntrepriseHttpService} from '../inscription-entreprise/inscription-entreprise-http.service';
import {Adresse} from '../model/adresse';
import {Entreprise} from '../model/entreprise';
import {Utilisateur} from '../model/utilisateur';
import {ModificationEntrepriseHttpService} from './modification-entreprise-http.service';
import {UtilisateurHttpService} from '../utilisateur/utilisateur.http.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-modification-entreprise',
  templateUrl: './modification-entreprise.component.html',
  styleUrls: ['./modification-entreprise.component.css']
})
export class ModificationEntrepriseComponent implements OnInit {


  entreprise : Entreprise = new Entreprise();
  adresse : Adresse = new Adresse();

  constructor( private modificationEntrepriseHttpService: ModificationEntrepriseHttpService, private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      this.modificationEntrepriseHttpService.findById(params.id).subscribe(resp => {
          this.entreprise = resp;
        }
      );
    });
  }
  save(){
    this.modificationEntrepriseHttpService.save(this.entreprise);
    // this.cancel();
  }

  // cancel(){
  //   this.entreprise = null;
  // }

  ngOnInit() {
    this.entreprise.adresse=this.adresse;
  }
}
