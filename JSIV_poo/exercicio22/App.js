const User = require('./User');
const Deposit = require('./Deposit');
const Transfer = require('./Transfer');
const Loan = require('./Loan');

module.exports = class App {
  static #users = [];

  static findUserByEmail(email) {
    const user = this.#users.find((user) => user.email === email);
    return user ?? null;
  }

  static createUser(email, fullname) {
    const userExists = App.findUserByEmail(email);

    if (!userExists) {
      this.#users.push(new User(fullname, email));
    }
  }

  static deposit(email, value) {
    const user = App.findUserByEmail(email);

    if (user) {
      const newDeposit = new Deposit(value);
      user.account.newDeposit(newDeposit);
    }
  }

  static transfer(emailSentTransfer, emailReceivedTransfer, value) {
    const sentTransfer = App.findUserByEmail(emailSentTransfer);
    const receivedTransfer = App.findUserByEmail(emailReceivedTransfer);

    if (sentTransfer && receivedTransfer) {
      const newTransfer = new Transfer(
        emailSentTransfer,
        emailReceivedTransfer,
        value
      );
      sentTransfer.account.newTransfer(newTransfer);
      receivedTransfer.account.newTransfer(newTransfer);
    }
  }

  static loan(email, value, number) {
    const user = App.findUserByEmail(email);
    if (user) {
      const newLoan = new Loan(value, number);
      user.account.newLoan(newLoan);
    }
  }

  static changeFee(percentage) {
    Loan.fee = percentage;
  }
};
