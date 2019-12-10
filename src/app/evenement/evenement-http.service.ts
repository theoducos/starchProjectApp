import {Injectable} from '@angular/core';
import {AppConfigService} from '../app-config.service';
import {Observable} from 'rxjs';
import {Evenement} from '../model/evenement';
import {HttpClient} from '@angular/common/http';
import {SearchCriteria} from '../model/searchCriteria';


@Injectable({
  providedIn: 'root'
})
export class EvenementHttpService {
  private evenements: any;

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  load() {
    this.http.get(this.appConfigService.backend + 'evenement/').subscribe(resp => this.evenements = resp);
  }

  findAll(): any {
    return this.http.get(this.appConfigService.backend + 'evenement/');
  }

  findById(id: number): Observable<any> {
    return this.http.get(this.appConfigService.backend + 'evenement/' + id);

  }

  save(evenement: Evenement) {
    if (evenement.id) {
      this.http.put(this.appConfigService.backend + 'evenement/' + evenement.id, evenement).subscribe(resp => this.load());
    }
    else{
      this.http.post(this.appConfigService.backend + 'evenement/', evenement).subscribe(resp => this.load());
    }
  }


  deleteBydId(id: number) {
    this.http.delete(this.appConfigService.backend + 'evenement/' + id).subscribe(resp => this.load());
  }

  findUtilisateursInteresses(id: number): Observable<any> {
    return this.http.get(this.appConfigService.backend + 'evenement/' + id + '/interesse');
  }

  findUtilisateursParticipants(id: number): Observable<any>{
    return this.http.get(this.appConfigService.backend + 'evenement/' + id + '/participe');
  }

  findCommentairesByEvenement(id: number): Observable<any>{
    return this.http.get(this.appConfigService.backend + 'evenement/' + id + '/commentaires');
  }

  findAllPartcipationbyEvenement(id : number): Observable<any> {
    return this.http.get(this.appConfigService.backend + 'evenement/' + id + '/participation');
  }


}
