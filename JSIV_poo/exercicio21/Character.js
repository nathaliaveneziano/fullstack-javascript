module.exports = class Character {
  constructor(name, lifePoints, atackPoints, defensePoints) {
    this.name = name;
    this.lifePoints = lifePoints;
    this.atackPoints = atackPoints;
    this.defensePoints = defensePoints;
  }

  attack(opponent) {
    opponent.lifePoints -= this.atackPoints - opponent.defensePoints;
  }
};
