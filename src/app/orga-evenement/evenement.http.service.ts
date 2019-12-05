import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from '../app-config.service';
import {Evenement} from '../model/evenement';

@Injectable({
  providedIn: 'root'
})
export class EvenementHttpService {

  evenements: any;

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load()
  }

  save(evenement: Evenement) {
    this.http.post(this.appConfigService.backend + 'evenement/', evenement).subscribe(resp => this.load());
  }

  load(){
    this.http.get(this.appConfigService.backend + 'evenement/').subscribe(resp => this.evenements = resp);
  }
}
