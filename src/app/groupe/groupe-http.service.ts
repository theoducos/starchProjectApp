import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from '../app-config.service';

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

}
