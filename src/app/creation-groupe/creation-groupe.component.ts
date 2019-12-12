import {Component, OnInit} from '@angular/core';
import {CreationGroupeHttpService} from "./creation-groupe-http.service";
import {Groupe} from "../model/groupe";
import {GroupeHttpService} from '../groupe/groupe-http.service';
import {Router} from '@angular/router';
import {UtilisateurHttpService} from '../utilisateur/utilisateur.http.service';
import {Utilisateur} from '../model/utilisateur';
import {Entreprise} from '../model/entreprise';
import {GestionHttpHttpService} from '../gestion/gestion-http.service';
import {Gestion} from '../model/gestion';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-creation-groupe',
  templateUrl: './creation-groupe.component.html',
  styleUrls: ['./creation-groupe.component.css']
})
export class CreationGroupeComponent implements OnInit {

  groupe: Groupe = new Groupe();
  utilisateur: Utilisateur = new Utilisateur();

  entreprise: Entreprise;

  groupes: Array<Groupe>;

  gestion: Gestion = new Gestion();

  isExist: boolean;

  photo: File;

  save() {
    this.isExist = false;
    this.groupeHttpService.findAll().subscribe(resp => {
      this.groupes = resp;
      for (let group of this.groupes) {
        if (this.groupe.codeGroupe == group.codeGroupe) {
          this.isExist = true;
          break;
        }
      }
      ;

      if (this.isExist == false) {
        this.utilisateurHttpService.findEntrepriseByUtilisateurId(this.utilisateur.id).subscribe(resp => {
          this.entreprise = resp;
          this.groupe.entreprise = this.entreprise;

          this.creationGroupeHttpService.create(this.groupe).subscribe(resp => {
            this.groupe = resp;
            if (this.photo != null) {
              let formData: FormData = new FormData();
              formData.append('file', this.photo, this.groupe.codeGroupe + ".jpg");
              let headers = new HttpHeaders();
              /** In Angular 5, including the header Content-Type can invalidate your request */
              headers.append('Content-Type', 'multipart/form-data');
              headers.append('Accept', 'application/json');
              this.http.post('http://localhost:8080/uploadFile', formData, {headers: headers})
                .subscribe(resp => {
                    console.log('success');
                  },
                  error => console.log(error)
                );
            } else {
              let formData: FormData = new FormData();
              formData.append('file', "default.jpg");
              let headers = new HttpHeaders();
              /** In Angular 5, including the header Content-Type can invalidate your request */
              headers.append('Content-Type', 'multipart/form-data');
              headers.append('Accept', 'application/json');
              this.http.post('http://localhost:8080/uploadFile', formData, {headers: headers})
                .subscribe(resp => {
                    console.log('success');
                  },
                  error => console.log(error)
                );
            }


            this.utilisateurHttpService.findById(this.utilisateur.id).subscribe(resp => {
              this.utilisateur = resp;
              this.gestion.groupe = this.groupe;
              this.gestion.utilisateur = this.utilisateur;
              this.gestion.typeGestion = "Gestionnaire";
              this.gestionHttpHttpService.create(this.gestion).subscribe(resp => {
                this.gestion = resp;
                this.router.navigate(['groupe', this.groupe.id]);
              });
            });
          });

        });

      }
    });

  }

  constructor(private creationGroupeHttpService: CreationGroupeHttpService, private groupeHttpService: GroupeHttpService, private router: Router, private utilisateurHttpService: UtilisateurHttpService, private gestionHttpHttpService: GestionHttpHttpService, private http: HttpClient) {
    this.utilisateur.id = localStorage.getItem('id') as unknown as number;
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.photo = fileList[0];

    }
  }

  ngOnInit() {
  }

}
