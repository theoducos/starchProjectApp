import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from '../app-config.service';
import {Participation} from '../model/participation';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipationService {



  constructor(private http: HttpClient, private appConfigService: AppConfigService) { }

  create(participation: Participation): Observable<any>{
    return this.http.post(this.appConfigService.backend + 'participation', participation);
  }

  update(participation: Participation): Observable<any>{
    return this.http.put(this.appConfigService.backend + 'participation' + participation.id, participation);
  }

  delete(id: number): Observable<any>{
    return this.http.delete(this.appConfigService.backend + 'participation/' + id);
  }

  findAll(): Observable<any>{
    return this.http.get(this.appConfigService.backend + 'participation');
  }

}
