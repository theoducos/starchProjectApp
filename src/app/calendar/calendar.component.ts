import {Component, OnInit} from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import {Entreprise} from '../model/entreprise';
import {Evenement} from '../model/evenement';
import {Utilisateur} from '../model/utilisateur';
import {EvenementHttpService} from '../evenement/evenement-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EntrepriseHttpService} from '../entreprise/entreprise-http.service';
import {UtilisateurHttpService} from '../utilisateur/utilisateur.http.service';
import {EventInput} from '@fullcalendar/core';
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from '../app-config.service';
import {SearchCriteria} from '../model/searchCriteria';
import {Groupe} from '../model/groupe';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarPlugins = [dayGridPlugin];

  evenements: any;
  entreprise: Entreprise = new Entreprise();
  evenement: Evenement = new Evenement();
  utilisateur: Utilisateur = new Utilisateur();

  groupes: Array<Groupe>;

  searchCriteria: SearchCriteria = new SearchCriteria();

  calendarEvents = [
    {title: '', start: '', url: ''}
  ];

  constructor(private evenementHttpService: EvenementHttpService, private route: ActivatedRoute, private entrepriseHttpService: EntrepriseHttpService, private utilisateurHttpService: UtilisateurHttpService, private router: Router, private http: HttpClient, private appConfigService: AppConfigService) {


    this.findWithFilter();
    this.listGroupes();

  }

  findWithFilter(){
    this.calendarEvents = [];

    this.utilisateur.id = localStorage.getItem('id') as unknown as number;

    this.utilisateurHttpService.findEntrepriseByUtilisateurId(this.utilisateur.id).subscribe(resp => {
      this.entreprise = resp;
      this.searchCriteria.idEntreprise = this.entreprise.id;
      this.http.post(this.appConfigService.backend + 'evenement/search', this.searchCriteria).subscribe(resp => {
        this.evenements = resp;

        for (let calEvent of this.evenements) {
          this.calendarEvents = this.calendarEvents.concat({
            title: calEvent.titre,
            start: calEvent.date,
            url: 'http://localhost:4200/evenement/' + calEvent.id
          });
        };
      });
    });
  }

  ngOnInit() {
  }

  resetFilter(){
    this.searchCriteria = new SearchCriteria();

    this.findWithFilter();
  }

  listGroupes(){
    this.utilisateurHttpService.findGroupeByUtilisateurId(this.utilisateur.id).subscribe(resp => {
      this.groupes = resp;
    });
  }

}
