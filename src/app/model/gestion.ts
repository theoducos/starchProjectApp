export class Gestion {
  id: number;
  version: number;
  gestion: TypeGestion;


  constructor(id?: number, version?: number, gestion?: TypeGestion) {
    this.id = id;
    this.version = version;
    this.gestion = gestion;
  }
}
