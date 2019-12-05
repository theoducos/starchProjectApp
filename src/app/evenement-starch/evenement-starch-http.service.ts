import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from '../app-config.service';

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
}
