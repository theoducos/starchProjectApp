import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logout() :void {
    localStorage.setItem('isLoggedin','false');
    localStorage.removeItem('identifiant');
    localStorage.removeItem('id');
    localStorage.removeItem('isAdmin');
  }
}
