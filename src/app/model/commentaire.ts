import {Utilisateur} from './utilisateur';
import {Evenement} from './evenement';

export class Commentaire{
  id: number;
  version: number;
  commentaire: string;
  utilisateur: Utilisateur;
  evenement: Evenement;


  constructor(id?: number, version?: number, commentaire?: string, utilisateur?: Utilisateur) {
    this.id = id;
    this.version = version;
    this.commentaire = commentaire;
    this.utilisateur = utilisateur;
  }
}
