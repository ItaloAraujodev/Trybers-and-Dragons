import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    private _player1: Fighter, 
    private _monster: (Fighter | SimpleFighter)[],
  ) {
    super(_player1);
  }

  fight(): number {
    this._monster.forEach((item) => {
      while (item.lifePoints > 0 && this._player1.lifePoints > 0) {
        item.attack(this._player1);
        this._player1.attack(item);
      }
    });

    if (this._player1.lifePoints === -1) {
      return -1;
    }

    return 1;
  }
}