const Character = require('./Character');

module.exports = class Mage extends Character {
  constructor(name, lifePoints, atackPoints, defensePoints, magicPoints) {
    super(name, lifePoints, atackPoints, defensePoints);
    this.magicPoints = magicPoints;
  }

  attack(opponent) {
    opponent.lifePoints -=
      this.atackPoints + this.magicPoints - opponent.defensePoints;
  }

  addMagicPoints(person) {
    person.lifePoints += this.magicPoints * 2;
  }
};
