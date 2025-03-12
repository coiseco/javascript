export class Robot {
  constructor() {
    this.reset();
  }
  
  reset() {
    this._name = Robot.generateName();
  }

  static namesArr = []
  static generateName() {
    function randomLetter() {
      const randNum = Math.trunc(Math.random() * 100);
    if(randNum <= 65 || randNum >= 90) {
      return randomLetter()
    } else {
      return String.fromCharCode(randNum)
    }
    }
    let res =``
    for(let i = 0; i <= 4; i++){
      if(i <= 1) {
        res += randomLetter()
      } else {
        res += Math.trunc(Math.random() * 10)
      }
    }
    if(this.namesArr.includes(res)) return this.generateName()
    this.namesArr.push(res)
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
