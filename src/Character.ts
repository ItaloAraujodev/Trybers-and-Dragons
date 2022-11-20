import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';

const randola = getRandomInt(1, 10);
export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _lifePoints: number;
  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = randola;
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = randola;
    this._defense = randola;
    this._energy = { 
      type_: 'mana',
      amount: randola };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  // Não pode ser alterada
  get energy(): Energy {
    const energia = {
      type_: this._energy.type_,
      amount: this._energy.amount,

    };

    return energia;
  }

  receiveDamage(attackPoints: number): number {
    const dano = attackPoints - this.defense;

    if (dano > 0) {
      this._lifePoints -= dano;
    }

    if (this._lifePoints <= 0) {
      this._lifePoints = -1; 
    }

    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  special(): void {
    this._defense *= 2;
  }

  levelUp(): void {
    this._energy.amount = 10;
    this._maxLifePoints += randola;
    this._strength += randola;
    this._dexterity += randola;
    this._defense += randola;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }
}