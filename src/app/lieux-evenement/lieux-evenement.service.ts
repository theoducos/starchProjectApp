import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from '../app-config.service';

@Injectable({
  providedIn: 'root'
})
export class LieuxEvenementService {

  constructor(private http: HttpClient, private appConfigService: AppConfigService) { }

  findAll(): any{
    return this.http.get(this.appConfigService.backend + 'lieuxEvenement/');
  }
}
