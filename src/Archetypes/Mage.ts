import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private _damage: string;
  private _energyType: EnergyType;

  private static _countInstancesArchetypes = 0;

  constructor(name: string) {
    super(name);
    this._damage = '';
    this._energyType = 'mana';
    Mage._countInstancesArchetypes += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage._countInstancesArchetypes;
  }
}