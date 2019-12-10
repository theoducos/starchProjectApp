import {Component, OnInit} from '@angular/core';
import {Evenement} from '../model/evenement';
import {EvenementHttpService} from './evenement-http.service';
import {ActivatedRoute} from '@angular/router';
import {GroupeHttpService} from '../groupe/groupe-http.service';
import {Groupe} from '../model/groupe';
import {Entreprise} from '../model/entreprise';
import {EntrepriseHttpService} from '../entreprise/entreprise-http.service';
import {UtilisateurHttpService} from '../utilisateur/utilisateur.http.service';
import {Utilisateur} from '../model/utilisateur';
import {log} from 'util';
import {SearchCriteria} from '../model/searchCriteria';
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from '../app-config.service';

@Component({
  selector: 'evenement',
  templateUrl: '../evenement/evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {

  evenements: any;
  entreprise: Entreprise = new Entreprise();
  evenement: Evenement = new Evenement();
  utilisateur: Utilisateur = new Utilisateur();

  searchCriteria: SearchCriteria = new SearchCriteria();

  groupes: Array<Groupe>;

  nomEvenement: NomEvenement;
  typeEvenement: TypeEvenement;

  constructor(private evenementHttpService: EvenementHttpService, private route: ActivatedRoute, private entrepriseHttpService: EntrepriseHttpService, private utilisateurHttpService: UtilisateurHttpService, private http: HttpClient, private appConfigService: AppConfigService) {

    this.findWithFilter();

  }



  ngOnInit() {

  }

  list(): any {
    return this.evenementHttpService.findAll();

  }

  add() {
    this.evenement = new Evenement();
  }

  edit(id: number) {
    this.evenementHttpService.findById(id).subscribe(resp => this.evenement = resp);
  }

  delete(id: number) {
    this.evenementHttpService.deleteBydId(id);
  }

  cancel() {
    this.evenement = null;
  }

  findWithFilter() {
    // this.utilisateur.id = localStorage.getItem('id') as unknown as number;

    this.route.params.subscribe(params => this.utilisateurHttpService.findEntrepriseByUtilisateurId(params.id).subscribe(resp => {
      this.entreprise = resp;
      this.searchCriteria.idEntreprise = this.entreprise.id;
      this.utilisateurHttpService.findGroupeByUtilisateurId(params.id).subscribe(resp => {
        this.groupes = resp;
      })
      this.http.post(this.appConfigService.backend + 'evenement/search', this.searchCriteria).subscribe(resp => this.evenements = resp);

    }));

  }

  listGroupes(){
    this.route.params.subscribe(params => this.utilisateurHttpService.findGroupeByUtilisateurId(params.id).subscribe(resp => {
      this.groupes = resp;
    }));
  }

}
