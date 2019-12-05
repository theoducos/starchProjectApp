import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from '../app-config.service';
import {Observable} from 'rxjs';
import {Evenement} from '../model/evenement';
import {Groupe} from '../model/groupe';

@Injectable({
  providedIn: 'root'
})
export class GroupeHttpService {

  groupes: any;

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  load() {
    this.http.get(this.appConfigService.backend + 'groupe')
      .subscribe(resp => this.groupes = resp);
  }

  findAll(): any{
    return this.http.get(this.appConfigService.backend + 'groupe/');
  }


  findById(id: number): Observable<any> {
    return this.http.get(this.appConfigService.backend + 'groupe/' + id);

  }
  save(groupe: Groupe) {
    this.http.post(this.appConfigService.backend + 'groupe/', groupe).subscribe(resp => this.load());

  }
  findUtilisateursByGroupeId(id: number): Observable<any> {
    return this.http.get(this.appConfigService.backend + 'groupe/' + id + '/utilisateurs');
  }

  findEvenementsByGroupeId(id: number): Observable<any> {
    return this.http.get(this.appConfigService.backend + 'groupe/' + id + '/evenements');
  }


}
