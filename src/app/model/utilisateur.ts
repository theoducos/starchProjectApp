import {Groupe} from "./groupe";

import {Entreprise} from './entreprise';
import {Evenement} from "./evenement";
import {Favoris} from "./favoris";
import {Participation} from './participation';
import {Gestion} from './gestion';

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
  entreprise: Entreprise;
  groupes: Array<Groupe>;
  groupe : Groupe
  evenements: Array<Evenement>;
  favoris: Array<Favoris>;
  confirmation: string =null;
  participation : Array<Participation>;
  gestion : Array<Gestion>;


  constructor(id?: number, version?: number, nom?: string, prenom?: string, email?: string, identifiant?: string, telephone?: string, mdp?: string, admin?: boolean, entreprise?: Entreprise, groupes?: Array<Groupe>, evenements?: Array<Evenement>, favoris?: Array<Favoris>, participation?: Array<Participation>, groupe?: Groupe, gestion?:Array<Gestion>){
    this.id = id;
    this.version = version;
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.identifiant = identifiant;
    this.telephone = telephone;
    this.mdp = mdp;
    this.admin = admin;
    this.entreprise = entreprise;
    this.groupes = groupes;
    this.evenements = evenements;
    this.favoris = favoris;
    this.participation = participation;
    this.groupe = groupe
    this.gestion = gestion

  }
}
