import Monster from './Monster';

export default class Dragon extends Monster {
  // private _lifePoints: number;

  constructor() {
    super();
    this._lifePoints = 999;
  }
}