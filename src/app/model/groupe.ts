import {Gestion} from './gestion';
import {Entreprise} from './entreprise';

export class Groupe {
  id: number;
  version: number;
  codeGroupe: string;
  nom: string;
  gestion : Array<Gestion>;
  entreprise: Entreprise;

  constructor(id?: number, version?: number, codeGroupe?: string, nom?: string, gestion?: Array<Gestion>, entreprise?: Entreprise) {
    this.id = id;
    this.version = version;
    this.codeGroupe = codeGroupe;
    this.nom = nom;
    this.gestion = gestion;
    this.entreprise = entreprise;
  }
}
