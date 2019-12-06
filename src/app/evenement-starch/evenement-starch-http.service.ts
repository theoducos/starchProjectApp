import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from '../app-config.service';
import {Observable} from 'rxjs';
import {Evenement} from '../model/evenement';
import {EvenementStarch} from '../model/evenementStarch';

@Injectable({
  providedIn: 'root'
})
export class EvenementStarchHttpService {

  private evenementStarch: any;

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  load() {
    this.http.get(this.appConfigService.backend + 'evenementStarch')
      .subscribe(resp => this.evenementStarch = resp);
  }

  findAll(): any{
    return this.evenementStarch;
  }
  findById(id: number): Observable<any> {
    return this.http.get(this.appConfigService.backend + 'evenementStarch/' + id);

  }

  save(evenementStarch: EvenementStarch) {
    this.http.post(this.appConfigService.backend + 'evenementStarch/', evenementStarch).subscribe(resp => this.load());

  }

  deleteBydId(id: number) {
    this.http.delete(this.appConfigService.backend + 'evenementStarch/' + id).subscribe(resp => this.load());
  }
}
