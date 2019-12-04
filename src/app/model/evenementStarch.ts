import {Adresse} from './adresse';

export class EvenementStarch {
  id: number;
  version: number;
  titre: string;
  nbParticipant: number;
  prixStarch: number;
  description: string;
  typeEvenement: TypeEvenement;
  nomEvenement: NomEvenement;
  adresse: Adresse;


  constructor(id?: number, version?: number, titre?: string, nbParticipant?: number, prixStarch?: number, description?: string, typeEvenement?: TypeEvenement, nomEvenement?: NomEvenement, adresse?: Adresse) {
    this.id = id;
    this.version = version;
    this.titre = titre;
    this.nbParticipant = nbParticipant;
    this.prixStarch = prixStarch;
    this.description = description;
    this.typeEvenement = typeEvenement;
    this.nomEvenement = nomEvenement;
    this.adresse = adresse;
  }
}
