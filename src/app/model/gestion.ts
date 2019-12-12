import {Groupe} from './groupe';
import {Utilisateur} from './utilisateur';

export class Gestion {
  id: number;
  version: number;
  gestion: string;
  groupe : Groupe;
  utilisateur : Utilisateur


  constructor(id?: number, version?: number, gestion?: TypeGestion, groupe?: Groupe, utilisateur?: Utilisateur) {
    this.id = id;
    this.version = version;
    this.gestion = gestion;
    this.utilisateur = utilisateur;

  }
}
