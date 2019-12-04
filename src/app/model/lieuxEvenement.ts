import {Adresse} from './adresse';

export class LieuxEvenement {
  id: number;
  version: number;
  description: string;
  nomLieu: string;
  adresse: Adresse;


  constructor(id?: number, version?: number, description?: string, adresse?: Adresse, nomLieu?: string) {
    this.id = id;
    this.version = version;
    this.description = description;
    this.adresse = adresse;
    this.nomLieu = nomLieu;
  }
}
