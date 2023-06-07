module.exports = class Transfer {
  constructor(userSentTransfer, userReceivedTransfer, value) {
    this.userSentTransfer = userSentTransfer;
    this.userReceivedTransfer = userReceivedTransfer;
    this.value = value;
    this.createdAt = new Date();
  }
};
