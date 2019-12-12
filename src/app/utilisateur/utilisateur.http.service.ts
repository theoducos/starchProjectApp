import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Utilisateur} from "../model/utilisateur";
import {AppConfigService} from "../app-config.service";
import {Observable} from "rxjs";
import {Participation} from '../model/participation';

@Injectable({
  providedIn: 'root'
})


export class UtilisateurHttpService {

  private utilisateur: any;
  private participation : any;

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  load() {
    this.http.get(this.appConfigService.backend + 'utilisateur')
      .subscribe(resp => this.utilisateur = resp);
  }


  findAll(): Observable<any>{
    return this.http.get(this.appConfigService.backend + 'utilisateur');
  }

  save(utilisateur: Utilisateur): Observable<any>{
    if (utilisateur.id) {
      return this.http.put(this.appConfigService.backend + 'utilisateur/' + utilisateur.id, utilisateur);

    } else {
      return this.http.post(this.appConfigService.backend + '/utilisateur', utilisateur);
    }
  }

  createUser(utilisateur: Utilisateur): Observable<any>{
    return this.http.post(this.appConfigService.backend + '/utilisateur', utilisateur);
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

  findUtilisateurByIdentifiant(identifiant: string) {
    return this.http.get(this.appConfigService.backend + 'utilisateur/login/' + identifiant);
  }

  findParticipationByUtilisateur(id: number) {
    return this.http.get(this.appConfigService.backend + 'utilisateur/'+ id + '/participation');
  }

  findParticipationByUtilisateurAndEvent(iduser: number, idevent : number): Observable<any> {
    return this.http.get(this.appConfigService.backend + 'utilisateur/'+ iduser +  '/evenement/'+ idevent+ '/participation');
  }
// sendFile(file:File){
//
//   const url = 'http://localhost:4200/utilisateur';
//   const formData: FormData = new FormData();
//   formData.append('file', file, file.name);
//   return this.httpClient
//     .post(url, formData, { headers:  })
//     .map(() => { return true; })
//     .catch((e) => this.handleError(e));
// }

}
