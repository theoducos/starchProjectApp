import {LieuxEvenement} from './lieuxEvenement';
import {Groupe} from './groupe';
import {Commentaire} from './commentaire';

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
  statutOf: boolean;
  lieuxEvenement: LieuxEvenement;
  groupe: Groupe;
  commentaires: Array<Commentaire>;
  description: string;


  constructor(id?: number, version?: number, titre?: string, date?: Date, prix?: number, nbParticipantMax?: number, deadline?: Date, recurrence?: Recurrence, typeEvenement?: TypeEvenement, nomEvenement?: NomEvenement, statutOF?: boolean, lieuxEvenement?: LieuxEvenement, description?: string) {
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
    this.statutOf = statutOf;
    this.lieuxEvenement = lieuxEvenement;
    this.description = description;
  }
}
