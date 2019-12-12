import {Entreprise} from "./entreprise";

export class Groupe {
  id: number;
  version: number;
  codeGroupe: string;
  nom: string;
  entreprise:Entreprise;

  constructor(id?: number, version?: number, codeGroupe?: string, nom?: string, entreprise?:Entreprise) {
    this.id = id;
    this.version = version;
    this.codeGroupe = codeGroupe;
    this.nom = nom;
    this.entreprise = entreprise;
  }
}
