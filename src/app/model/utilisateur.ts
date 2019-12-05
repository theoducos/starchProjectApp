import {Groupe} from "./groupe";

import {Entreprise} from './entreprise';
import {Evenement} from "./evenement";
import {Favoris} from "./favoris";

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
  entreprise: Entreprise
  groupes: Array<Groupe>;
  evenements: Array<Evenement>;
  favoris: Array<Favoris>;

  constructor(id?: number, version?: number, nom?: string, prenom?: string, email?: string, identifiant?: string, telephone?: string, mdp?: string, admin?: boolean, entreprise?: Entreprise, groupes?: Array<Groupe>, evenements?: Array<Evenement>, favoris?: Array<Favoris>) {
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
    this.evenements = evenements;
    this.favoris = favoris;


  }
}
