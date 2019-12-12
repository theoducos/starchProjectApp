import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfigService} from '../app-config.service';
import {Commentaire} from '../model/commentaire';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentaireHttpService {

  commentaires: any;

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
    this.load();
  }

  save(commentaire: Commentaire): Observable<any>{
    return this.http.post(this.appConfigService.backend + 'commentaire/', commentaire);
  }

  load() {
    this.http.get(this.appConfigService.backend + 'commentaire')
      .subscribe(resp => this.commentaires = resp);
  }
}
