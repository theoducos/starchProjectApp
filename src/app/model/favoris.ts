import {LieuxEvenement} from './lieuxEvenement';

export class Favoris {
  id: number;
  version: number;
  nomActivite: NomEvenement;
  nomLieu: LieuxEvenement;
  typeFavoris: TypeFavoris;


  constructor(id?: number, version?: number, nomActivite?: NomEvenement, nomLieu?: LieuxEvenement, typeFavoris?: TypeFavoris) {
    this.id = id;
    this.version = version;
    this.nomActivite = nomActivite;
    this.nomLieu = nomLieu;
    this.typeFavoris = typeFavoris;
  }
}
