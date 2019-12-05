import {LieuxEvenement} from './lieuxEvenement';

export class Evenement {
  id: number;
  version: number;
  titre: string;
  date: Date;
  prix: number;
  nbParticipantMax: number;
  deadline: Date;
  recurrence: Recurrence;
  typeEvenement: TypeEvenement;
  nomEvenement: NomEvenement;
  statutOF: boolean;
  lieuxEvenement: LieuxEvenement;


  constructor(id?: number, version?: number, titre?: string, date?: Date, prix?: number, nbParticipantMax?: number, deadline?: Date, recurrence?: Recurrence, typeEvenement?: TypeEvenement, nomEvenement?: NomEvenement, statutOF?: boolean, lieuxEvenement?: LieuxEvenement) {
    this.id = id;
    this.version = version;
    this.titre = titre;
    this.date = date;
    this.prix = prix;
    this.nbParticipantMax = nbParticipantMax;
    this.deadline = deadline;
    this.recurrence = recurrence;
    this.typeEvenement = typeEvenement;
    this.nomEvenement = nomEvenement;
    this.statutOF = statutOF;
    this.lieuxEvenement = lieuxEvenement;
  }
}
