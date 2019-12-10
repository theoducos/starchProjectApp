import {Adresse} from './adresse';
import {Evenement} from './evenement';

export class EvenementStarch {
  id: number;
  version: number;
  titre: string;
  nbParticipantMax: number;
  prixStarch: number;
  description: string;
  typeEvenement: TypeEvenement;
  nomEvenement: NomEvenement;
  adresse: Adresse;
  evenement : Array<Evenement>


  constructor(id?: number, version?: number, titre?: string, nbParticipantMax?: number, prixStarch?: number, description?: string, typeEvenement?: TypeEvenement, nomEvenement?: NomEvenement, adresse?: Adresse, evenement?: Array<Evenement>) {
    this.id = id;
    this.version = version;
    this.titre = titre;
    this.nbParticipantMax = nbParticipantMax;
    this.prixStarch = prixStarch;
    this.description = description;
    this.typeEvenement = typeEvenement;
    this.nomEvenement = nomEvenement;
    this.adresse = adresse;
    this.evenement = evenement
  }
}
