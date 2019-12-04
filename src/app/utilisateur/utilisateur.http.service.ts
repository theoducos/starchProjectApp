import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Utilisateur} from "../model/utilisateur";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurHttpService {

  private utilisateur: any;

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  load() {
    this.http.get(this.appConfigService.backEnd + 'utilisateur')
      .subscribe(resp => this.utilisateur = resp);
  }

  save(utilisateur: Utilisateur) {
    if (utilisateur.id) {
      this.http.put(this.appConfigService.backEnd + 'utilisateur/' + utilisateur.id, utilisateur).subscribe(resp => this.load());
    } else {
      this.http.post(this.appConfigService.backEnd + 'utilisateur/', utilisateur).subscribe(resp => this.load());
    }
  }
}
