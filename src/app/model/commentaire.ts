import {Utilisateur} from './utilisateur';

export class Commentaire{
  id: number;
  version: number;
  commentaire: string;
  utilisateur: Utilisateur;


  constructor(id?: number, version?: number, commentaire?: string, utilisateur?: Utilisateur) {
    this.id = id;
    this.version = version;
    this.commentaire = commentaire;
    this.utilisateur = utilisateur;
  }
}
