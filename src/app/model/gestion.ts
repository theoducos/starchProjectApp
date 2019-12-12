import {Groupe} from './groupe';
import {Utilisateur} from './utilisateur';

export class Gestion {
  id: number;
  version: number;
  typeGestion: string;
  groupe : Groupe;
  utilisateur : Utilisateur;


  constructor(id?: number, version?: number, typeGestion?: string, groupe?: Groupe, utilisateur?: Utilisateur) {
    this.id = id;
    this.version = version;
    this.typeGestion = typeGestion;
    this.utilisateur = utilisateur;
    this.groupe = groupe;

  }
}
