//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.accOpen = false;
    this._balance = 0;
  }

  open() {
    if (!this.accOpen) {
      this.accOpen = true;
      this._balance = 0;
    } else {
      throw new ValueError();
    }
  }

  close() {
    if (this.accOpen) {
      this._balance = 0;
      this.accOpen = false;
    } else {
      throw new ValueError();
    }
  }

  deposit(dig) {
    if (this.accOpen) {
      if (dig < 0) {
        throw new ValueError();
      } else {
        this._balance += dig;
      }
    } else {
      throw new ValueError();
    }
  }

  withdraw(dig) {
    if (this.accOpen) {
      if (this._balance - dig < 0) {
        throw new ValueError();
      } else if (dig < 0) {
        throw new ValueError();
      } else {
        this._balance -= dig;
      }
    } else {
      throw new ValueError();
    }
  }

  get balance() {
    if (!this.accOpen) {
      throw new ValueError();
    } else {
      return this._balance;
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
