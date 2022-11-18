export default abstract class Race {
  /* private name: string;
  private dexterity: number; */

  constructor(private _name: string, private _dexterity: number) {}

  get name(): string {
    return this._name;
  }

  get dexterity() {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}
