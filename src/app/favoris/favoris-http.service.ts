import { Injectable } from '@angular/core';
import {Favoris} from '../model/favoris';
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from '../app-config.service';

@Injectable({
  providedIn: 'root'
})
export class FavorisHttpService {

  private favoris: any;

  constructor(private http: HttpClient, private appConfigService: AppConfigService) { }

  save(favoris: Favoris) {
    this.http.post(this.appConfigService.backend + '/favoris', favoris).subscribe(resp => this.load());
  }

  load(){
    this.http.get(this.appConfigService.backend + '/favoris').subscribe(resp => this.favoris);
  }
}
