import {LieuxEvenement} from './lieuxEvenement';
import {Groupe} from './groupe';
import {Commentaire} from './commentaire';
import {EvenementStarch} from './evenementStarch';
import {Entreprise} from './entreprise';
import {Time} from '@angular/common';

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
  evenementStarch : EvenementStarch;
  entreprise: Entreprise;
  heure: Time;


  constructor(id?: number, version?: number, titre?: string, date?: Date, prix?: number, nbParticipantMax?: number, deadline?: Date, recurrence?: Recurrence, typeEvenement?: TypeEvenement, nomEvenement?: NomEvenement, statutOf?: boolean, lieuxEvenement?: LieuxEvenement, description?: string, evenementStarch?: EvenementStarch, entreprise?: Entreprise, heure?: Time) {
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
    this.evenementStarch = evenementStarch;
    this.entreprise = entreprise;
    this.heure = heure;
  }
}
