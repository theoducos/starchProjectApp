import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from '../app-config.service';
import {Observable} from 'rxjs';
import {Entreprise} from '../model/entreprise';

@Injectable({
  providedIn: 'root'
})
export class ModificationEntrepriseHttpService {


  private entreprises: any;

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  load() {
    this.http.get(this.appConfigService.backend + 'entreprise')
      .subscribe(resp => this.entreprises = resp);
  }
  public findAll(): any {
    return this.entreprises;
  }

  findById(id: number): Observable<any> {
    return this.http.get(this.appConfigService.backend + 'entreprise/' + id);
  }

  save(entreprise: Entreprise) {
    if (this.entreprises.id) {
      this.http.put(this.appConfigService.backend + 'entreprise/' + entreprise.id, entreprise).subscribe(resp => {
        this.entreprises = resp ;
        this.load()
      });

    } else {
      this.http.post(this.appConfigService.backend + 'entreprise/', entreprise).subscribe(resp => this.load());
    }
  }

  deleteBydId(id: number) {
    this.http.delete(this.appConfigService.backend + 'entreprise/' + id).subscribe(resp => this.load());
  }
}
