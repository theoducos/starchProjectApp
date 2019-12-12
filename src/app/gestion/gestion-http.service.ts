import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Utilisateur} from "../model/utilisateur";
import {AppConfigService} from "../app-config.service";
import {Observable} from "rxjs";
import {Participation} from '../model/participation';
import {Gestion} from '../model/gestion';

@Injectable({
  providedIn: 'root'
})


export class GestionHttpHttpService {


  private gestion : any;

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  load() {
    this.http.get(this.appConfigService.backend + 'gestion')
      .subscribe(resp => this.gestion = resp);
  }

  findAll(): Observable<any>{
    return this.http.get(this.appConfigService.backend + 'gestion');
  }

  save(gestion: Gestion) : Observable<any> {
    if (gestion.id != null) {
       return this.http.put(this.appConfigService.backend + 'gestion/' + gestion.id, gestion)
    } else {
      return this.http.post(this.appConfigService.backend + '/gestion', gestion)
    }
  }

  create(gest: Gestion): Observable<any>{
    return this.http.post(this.appConfigService.backend + 'gestion', gest);
  }

  findById(id: number): Observable<any> {
    return this.http.get(this.appConfigService.backend + 'gestion/' + id);
  }



}
