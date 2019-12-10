export class SearchCriteria {
  idEntreprise: number;
  idGroupe: number;
  typeEvenement: TypeEvenement;
  nomEvenement: NomEvenement;


  constructor(idEntreprise?: number, idGroupe?: number, typeEvenement?: TypeEvenement, nomEvenement?: NomEvenement) {
    this.idEntreprise = idEntreprise;
    this.idGroupe = idGroupe;
    this.typeEvenement = typeEvenement;
    this.nomEvenement = nomEvenement;
  }
}
