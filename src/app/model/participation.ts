export class Participation {
  id: number;
  version: number;
  type: TypeParticipation;


  constructor(id?: number, version?: number, type?: TypeParticipation) {
    this.id = id;
    this.version = version;
    this.type = type;
  }
}
