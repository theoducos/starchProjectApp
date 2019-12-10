import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Utilisateur} from "../model/utilisateur";
import {AppConfigService} from "../app-config.service";
import {Observable} from "rxjs";
import {Participation} from '../model/participation';

@Injectable({
  providedIn: 'root'
})


export class ParticipationHttpService {


  private participation : any;

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }


  load() {
    this.http.get(this.appConfigService.backend + 'participation')
      .subscribe(resp => this.participation = resp);
  }

  findAll(): Observable<any>{
    return this.http.get(this.appConfigService.backend + 'participation');
  }

  save(participation: Participation): Observable<any> {
    if (participation.id != null) {
      return this.http.put(this.appConfigService.backend + 'participation/' + participation.id, participation);
    } else {
      return this.http.post(this.appConfigService.backend + '/participation', participation);
    }
    // console.log(this.http.put(this.appConfigService.backend + 'utilisateur/' + utilisateur.id, utilisateur).subscribe(resp => this.load()));
  }

  findById(id: number): Observable<any> {
    return this.http.get(this.appConfigService.backend + 'participation/' + id);
  }




}
