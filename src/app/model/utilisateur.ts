import {Groupe} from "./groupe";

import {Entreprise} from './entreprise';

export class Utilisateur {
  id: number;
  version: number;
  nom: string;
  prenom: string;
  email: string;
  identifiant: string;
  telephone: string;
  mdp: string;
  admin: boolean;
  entreprise : Entreprise
  groupes: Array<Groupe>;

  constructor(id?: number, version?: number, nom?: string, prenom?: string, email?: string, identifiant?: string, telephone?: string, mdp?: string, admin?: boolean, entreprise?: Entreprise,groupes?: Array<Groupe>) {
    this.id = id;
    this.version = version;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.identifiant = identifiant;
    this.telephone = telephone;
    this.mdp = mdp;
    this.admin = admin;
    this.entreprise = entreprise
    this.groupes = groupes;


  }
}
