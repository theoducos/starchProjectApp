import {LieuxEvenement} from './lieuxEvenement';
import {Utilisateur} from './utilisateur';

export class Favoris {
  id: number;
  version: number;
  nomActivite: NomEvenement;
  lieuxFavoris: LieuxEvenement;
  typeFavoris: TypeFavoris;
  utilisateur: Utilisateur;


  constructor(id?: number, version?: number, nomActivite?: NomEvenement, lieuxFavoris?: LieuxEvenement, typeFavoris?: TypeFavoris, utilisateur?: Utilisateur) {
    this.id = id;
    this.version = version;
    this.nomActivite = nomActivite;
    this.lieuxFavoris = lieuxFavoris;
    this.typeFavoris = typeFavoris;
    this.utilisateur = utilisateur;
  }
}
