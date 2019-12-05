import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Utilisateur} from "../model/utilisateur";
import {AppConfigService} from "../app-config.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})


export class UtilisateurHttpService {

  private utilisateur: any;

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  load() {
    this.http.get(this.appConfigService.backend + 'utilisateur')
      .subscribe(resp => this.utilisateur = resp);
  }

  save(utilisateur: Utilisateur) {
    this.http.post(this.appConfigService.backend + 'utilisateur/', utilisateur).subscribe(resp => this.load());

    console.log(this.http.put(this.appConfigService.backend + 'utilisateur/' + utilisateur.id, utilisateur).subscribe(resp => this.load()));
  }

  findById(id: number): Observable<any> {
    return this.http.get(this.appConfigService.backend + 'utilisateur/' + id);
  }

  findGroupeByUtilisateurId(id: number): Observable<any> {
    return this.http.get(this.appConfigService.backend + 'utilisateur/' + id + '/groupes');
  }

  findEvenementByUtilisateurId(id: number): Observable<any> {
    return this.http.get(this.appConfigService.backend + 'utilisateur/' + id + '/evenements');
  }
  findFavorisByUtilisateurId(id: number): Observable<any> {
    return this.http.get(this.appConfigService.backend + 'utilisateur/' + id + '/favoris');
  }

  findEntrepriseByUtilisateurId(id:number): Observable<any>{
    return this.http.get(this.appConfigService.backend + 'utilisateur/' + id + '/entreprise');

  }
}
