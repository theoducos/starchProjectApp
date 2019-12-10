import {Component, OnInit} from '@angular/core';
import {ILogin} from './ILogin';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {UtilisateurHttpService} from '../utilisateur/utilisateur.http.service';
import {Utilisateur} from '../model/utilisateur';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: ILogin = new ILogin();

  private utilisateur: any;

  private utilisateurs: Array<Utilisateur> = new Array<Utilisateur>();

  erreur: boolean = false;


  constructor(private router: Router, private authService: AuthService, private utilisateurService: UtilisateurHttpService) {
  }

  ngOnInit() {

  }

  validate() {
    this.utilisateurService.findAll().subscribe(resp => {
      this.utilisateurs = resp;

      for (let util of this.utilisateurs) {
        if (util.identifiant == this.model.userid) {
          this.utilisateurService.findUtilisateurByIdentifiant(this.model.userid).subscribe(resp => {
            this.utilisateur = resp;
            console.log(this.utilisateur);
            if (this.utilisateur.mdp == this.model.password && this.utilisateur) {
              localStorage.setItem('isLoggedin', 'true');
              localStorage.setItem('identifiant', this.model.userid);
              localStorage.setItem('id', this.utilisateur.id);
              this.router.navigate(['/utilisateur']);
            } else {
              this.router.navigate(['/login']);
              this.erreur = true;
            }
          });
        } else {
          this.router.navigate(['/login']);
          this.erreur = true;
        }
      }
    });
  }

  disconnect() {
    this.authService.logout();
  }

  session() {
    console.log(localStorage.getItem('identifiant'));
    console.log(localStorage.getItem('id'));
    console.log(localStorage.getItem('isLoggedin'));
  }

  login() {

  }

}
