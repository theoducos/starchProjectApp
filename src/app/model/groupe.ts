import {Gestion} from './gestion';

export class Groupe {
  id: number;
  version: number;
  codeGroupe: string;
  nom: string;
  gestion : Array<Gestion>;

  constructor(id?: number, version?: number, codeGroupe?: string, nom?: string, gestion?: Array<Gestion>) {
    this.id = id;
    this.version = version;
    this.codeGroupe = codeGroupe;
    this.nom = nom;
    this.gestion = gestion
  }
}
