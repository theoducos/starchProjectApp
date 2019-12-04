import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  backend: string = "http://localhost:8080/";
  constructor() { }
}
