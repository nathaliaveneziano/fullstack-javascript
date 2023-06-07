const Character = require('./Character');

module.exports = class Thief extends Character {
  attack(opponent) {
    opponent.lifePoints -= (this.atackPoints - opponent.defensePoints) * 2;
  }
};
