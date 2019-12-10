import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./login/auth.service";
import {UtilisateurHttpService} from "./utilisateur/utilisateur.http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'starchProjectApp';

  constructor(private authService: AuthService) {
  }

  disconnect() {
    this.authService.logout();

  }
}
