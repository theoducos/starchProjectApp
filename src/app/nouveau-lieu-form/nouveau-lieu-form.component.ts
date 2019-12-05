import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Utilisateur} from "../model/utilisateur";
import {UtilisateurHttpService} from "../utilisateur/utilisateur.http.service";

@Component({
  selector: 'app-nouveau-lieu-form',
  templateUrl: './nouveau-lieu-form.component.html',
  styleUrls: ['./nouveau-lieu-form.component.css']
})
export class NouveauLieuFormComponent implements OnInit {





  ngOnInit() {
  }

}
