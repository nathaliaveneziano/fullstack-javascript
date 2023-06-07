const Character = require('./Character');

module.exports = class Warrior extends Character {
  constructor(name, lifePoints, atackPoints, defensePoints, shieldPoints) {
    super(name, lifePoints, atackPoints, defensePoints);
    this.shieldPoints = shieldPoints;
    this.position = 'attack';
  }

  attack(opponent) {
    if (this.position === 'attack') {
      super.attack(opponent);
    }
  }

  switchPosition() {
    if (this.position === 'attack') {
      this.position = 'defense';
      this.defensePoints += this.shieldPoints;
    } else {
      this.position = 'attack';
      this.defensePoints -= this.shieldPoints;
    }
  }
};
