import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppConfigService} from "../app-config.service";
import {LieuxEvenement} from "../model/lieuxEvenement";

@Injectable({
  providedIn: 'root'
})
export class LieuxEvenementHttpService {

  private lieuxEvenements: any;

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  load() {
    this.http.get(this.appConfigService.backend + 'lieuxevenement')
      .subscribe(resp => this.lieuxEvenements = resp);
  }

  findAll(): any{
    return this.http.get(this.appConfigService.backend + 'lieuxevenement/');
  }

  save(lieuxEvenement: LieuxEvenement) {

    this.http.post(this.appConfigService.backend + 'lieuxevenement/', lieuxEvenement).subscribe(resp => this.load())
  }

}
