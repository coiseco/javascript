export class Robot {
  constructor() {
    this.reset();
  }
  
  reset() {
    this._name = Robot.generateName();
  }

  static generateName() {
    // function randomLetter() {
    //   const randNum = Math.trunc(Math.random() * 100);
    // if(randNum <= 65 || randNum >= 90) {
    //   return randomLetter()
    // } else {
    //   return String.fromCharCode(randNum)
    // }
    // }
    let res =``
    for(let i = 0; i <= 2; i++){
      if(i <= 1) {
        res += String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65)
      } else {
        res += Math.trunc(Math.random() * 1000)
      }
    }
    return res;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    throw new Error("Robot name cannot be modified");
  }

  static releaseNames() {
    
  }
}

let robot = new Robot()
console.log(robot.name)
// const random = (min, max) => {
//   return String.fromCharCode(Math.floor(Math.random() * (max - min + 1)) + min);
// }

// console.log(random(65,90))
