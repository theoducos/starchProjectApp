export class Groupe {
  id: number;
  version: number;
  codeGroupe: string;
  nom: string;

  constructor(id?: number, version?: number, codeGroupe?: string, nom?: string) {
    this.id = id;
    this.version = version;
    this.codeGroupe = codeGroupe;
    this.nom = nom;
  }
}
