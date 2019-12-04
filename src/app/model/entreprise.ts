import {Adresse} from './adresse';

export class Entreprise {
  id: number;
  version: number;
  nom: string;
codeEntreprise: string;
siret: string;
tva: string;
adresse: Adresse;


  constructor(id?: number, version?: number, nom?: string, codeEntreprise?: string, siret?: string, tva?: string, adresse?: Adresse) {
    this.id = id;
    this.version = version;
    this.nom = nom;
    this.codeEntreprise = codeEntreprise;
    this.siret = siret;
    this.tva = tva;
    this.adresse = adresse;
  }
}

