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


  calendarEvents = [
    {title: '', start: '', url: ''}
  ];

  constructor(private evenementHttpService: EvenementHttpService, private route: ActivatedRoute, private entrepriseHttpService: EntrepriseHttpService, private utilisateurHttpService: UtilisateurHttpService, private router: Router) {
    this.utilisateur.id = localStorage.getItem('id') as unknown as number;


    this.utilisateurHttpService.findById(this.utilisateur.id).subscribe(resp => {
      this.utilisateur = resp;
      this.utilisateurHttpService.findEntrepriseByUtilisateurId(this.utilisateur.id).subscribe(resp => {
        this.entreprise = resp;
        this.entrepriseHttpService.findEvenementsByEntreprises(this.entreprise.id).subscribe(resp => {
          this.evenements = resp;
          for (let calEvent of this.evenements) {
            this.calendarEvents = this.calendarEvents.concat({
              title: calEvent.titre,
              start: calEvent.date,
              url: 'http://localhost:4200/evenement/' + calEvent.id
            })
          }
          ;
        });
      });
    });


  }

  ngOnInit() {
  }

}
