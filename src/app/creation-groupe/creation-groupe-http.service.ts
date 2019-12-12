import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {Utilisateur} from "../model/utilisateur";
import {Groupe} from "../model/groupe";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreationGroupeHttpService {

  private groupe: any;

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  load() {
    this.http.get(this.appConfigService.backend + 'groupe')
      .subscribe(resp => this.groupe = resp);
  }

  save(groupe: Groupe) {
    if (this.groupe.id) {
      this.http.put(this.appConfigService.backend + 'groupe/' + groupe.id, groupe).subscribe(resp => this.load());
    } else {
      this.http.post(this.appConfigService.backend + '/groupe', groupe).subscribe(resp => this.load());
    }
  }

  create(group: Groupe): Observable<any>{
    return this.http.post(this.appConfigService.backend + 'groupe', group);
  }
}
