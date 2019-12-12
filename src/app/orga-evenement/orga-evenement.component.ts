import {Component, OnInit} from '@angular/core';
import {Evenement} from '../model/evenement';
import {LieuxEvenement} from '../model/lieuxEvenement';
import {LieuxEvenementHttpService} from '../lieux-evenement/lieux-evenement-http.service';
import {EvenementHttpService} from '../evenement/evenement-http.service';
import {GroupeHttpService} from '../groupe/groupe-http.service';
import {Groupe} from '../model/groupe';
import {AuthService} from '../login/auth.service';
import {Router} from '@angular/router';
import {UtilisateurHttpService} from '../utilisateur/utilisateur.http.service';
import {FormValidatorService} from '../form-validator.service';
import {Utilisateur} from '../model/utilisateur';
import {Entreprise} from '../model/entreprise';
import {Adresse} from '../model/adresse';

@Component({
  selector: 'orga-evenement',
  templateUrl: './orga-evenement.component.html',
  styleUrls: ['./orga-evenement.component.css']
})
export class OrgaEvenementComponent implements OnInit {

  utilisateur: Utilisateur = new Utilisateur();
  evenement: Evenement = new Evenement();
  entreprise: Entreprise = new Entreprise();

  lieuxEvenements: Array<LieuxEvenement>;

  adresse: Adresse = new Adresse();

  lieuxEvenement: LieuxEvenement = new LieuxEvenement();

  groupes: Array<Groupe>;

  groupe: Groupe = new Groupe();



  constructor(private evenementService: EvenementHttpService, private lieuxEvenementService: LieuxEvenementHttpService,
              private groupeService: GroupeHttpService, private authService: AuthService, private router: Router, formValidatorService: FormValidatorService,
              private utilisateurHttpService: UtilisateurHttpService) {

    this.utilisateur.id = localStorage.getItem('id') as unknown as number;
    // this.evenement.lieuxEvenement = this.lieuxEvenement;
    // this.evenement.groupe = this.groupe;
    this.utilisateurHttpService.findGroupeByUtilisateurId(this.utilisateur.id).subscribe(resp => this.groupes = resp);
    this.lieuxEvenementService.findAll().subscribe(resp => this.lieuxEvenements = resp);

  }

  save() {
    this.evenement.lieuxEvenement = this.lieuxEvenement;

    if (this.groupe.id != null) {
      this.groupeService.findById(this.groupe.id).subscribe(resp => {
        this.groupe = resp;
        this.evenement.groupe = this.groupe;
      });
    }

    this.utilisateurHttpService.findById(this.utilisateur.id).subscribe(resp => {
      this.utilisateur = resp;
      this.utilisateurHttpService.findEntrepriseByUtilisateurId(this.utilisateur.id).subscribe(resp => {
        this.entreprise = resp;
        this.evenement.entreprise = this.entreprise;
        this.evenementService.save(this.evenement);
        this.router.navigate(['/utilisateur']);
      });
    });
  }

  ngOnInit() {
    this.lieuxEvenement.adresse = this.adresse;
  }

  saveLieux() {
    this.lieuxEvenementService.save(this.lieuxEvenement);
  }


}
