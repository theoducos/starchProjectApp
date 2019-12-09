import {Utilisateur} from './utilisateur';
import {Evenement} from './evenement';

export class Participation {
  id: number;
  version: number;
  type: TypeParticipation;
  utilisateur : Utilisateur;
  evenement : Evenement;



  constructor(id?: number, version?: number, type?: TypeParticipation, evenement?: Evenement, utilisateur?: Utilisateur) {
    this.id = id;
    this.version = version;
    this.type = type;
    this.utilisateur = utilisateur;
    this.evenement= evenement
  }
}
