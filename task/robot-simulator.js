//
// This is only a SKELETON file for the 'Robot Simulator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Invalid Input';
  }
}

export class Robot {
  constructor(){
    this._x = 0;
    this._y = 0;
    this._direction = 'north'
  }

  get bearing() {
    return this._direction
  }

  get coordinates() {
    return [this._x, this._y]
  }

  place({ x = 0, y = 0, direction = 'north' } = {}) {
    if (direction === 'north' || direction === 'south' || direction === 'west' || direction === 'east') {
      this._x = x;
      this._y = y;
      this._direction = direction
    } else {
      throw new InvalidInputError()
    }
  }

  evaluate(instructions) {
    for (let i = 0; i < instructions.length; i++) {
      switch (instructions[i]) {
        case ('R'):
          switch (this._direction) {
            case ('north'):
              this._direction = 'east';
              break;
            case ('east'):
              this._direction = 'south';
              break;
            case ('south'):
              this._direction = 'west';
              break;
            case ('west'):
              this._direction = 'north';
              break;
          }
          break;
        case ('L'):
          switch (this._direction) {
            case ('north'):
              this._direction = 'west';
              break;
            case ('west'):
              this._direction = 'south';
              break;
            case ('south'):
              this._direction = 'east';
              break;
            case ('east'):
              this._direction = 'north';
              break;
          }
          break;
        case ('A'):
          switch (this._direction) {
            case ('north'):
              this._y += 1;
              break;
            case ('west'):
              this._x -= 1;
              break;
            case ('south'):
              this._y -= 1;
              break;
            case ('east'):
              this._x += 1;
              break;
          }
          break;
      }
    }
  }
  
}
