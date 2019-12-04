import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from '../app-config.service';
import {Evenement} from '../model/evenement';

@Injectable({
  providedIn: 'root'
})
export class EvenementHttpService {

  constructor(private http: HttpClient, private appConfigService: AppConfigService) { }

  save(evenement: Evenement) {
    this.http.post(this.appConfigService.backend + '/evenement', evenement);
  }
}
