import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from '../app-config.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EntrepriseHttpService {

  private utilisateur: any;

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  load() {
    this.http.get(this.appConfigService.backend + 'utilisateur').subscribe(resp => this.utilisateur = resp);
  }

  findAll(): Observable<any> {
    return this.http.get(this.appConfigService.backend + 'entreprise');
  }

  save(utilisateur: any) {
    if (this.utilisateur.id) {
      this.http.put(this.appConfigService.backend + 'utilisateur/' + utilisateur.id, utilisateur).subscribe(resp => this.load());
    } else {
      this.http.post(this.appConfigService.backend + '/utilisateur', utilisateur).subscribe(resp => this.load());
    }
  }

  deleteBydId(id: number) {
    this.http.delete(this.appConfigService.backend + 'utilisateur/' + id).subscribe(resp => this.load());
  }

  findEvenementsByEntreprises(id: number): Observable<any> {
    return this.http.get(this.appConfigService.backend + 'entreprise/' + id + '/evenements');
  }



}




