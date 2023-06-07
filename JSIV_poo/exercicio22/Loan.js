const Installment = require('./Installment');

module.exports = class Loan {
  static #fee = 1.05;

  constructor(value, installments) {
    this.value = value;
    this.installments = [];
    this.createdAt = new Date();

    for (let i = 1; i < installments; i++) {
      this.installments.push(
        new Installment((value * Loan.#fee) / installments, i)
      );
    }
  }

  static get fee() {
    return Loan.#fee;
  }

  static set fee(percentage) {
    Loan.#fee = percentage / 100 + 1;
  }
};
