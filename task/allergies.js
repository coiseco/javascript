//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  constructor(digit) {
    this.allergies = this.allergiesList(digit)
  }

  allergiesList(number){
    const allergics = {
      1: 'eggs',
      2: 'peanuts',
      4: 'shellfish',
      8: 'strawberries',
      16: 'tomatoes',
      32: 'chocolate',
      64: 'pollen',
      128: 'cats',
    };
    if (number in allergics){
        return [allergics[number]]
    }
    let res = []
    let digsArr = [1, 2, 4, 8, 16, 32, 64, 128];
    if (number > 256) {
      let midNumber = number
      while(midNumber > 256) {
        midNumber -= 256
      }
      let sortedDig = digsArr.filter((el) => el <= midNumber)
      for (let i = midNumber; i > 0; i -=sortedDig[sortedDig.length -1]){
        sortedDig = sortedDig.filter(el => el <= i) 
        res.push(sortedDig[sortedDig.length -1])
      }

      
    } else if (number < 256){

        let sortedDig = digsArr.filter((el) => el <= number)
      for (let i = number; i > 0; i -=sortedDig[sortedDig.length -1]){
        sortedDig = sortedDig.filter(el => el <= i) 
        res.push(sortedDig[sortedDig.length -1])
      }
      
 
    }
    res = res.reverse()
    for(let key in allergics) {
      for ( let i = 0; i < res.length; i++){
        if (res[i] === Number(key)){
            res[i] = allergics[key]
        }
      }
    }
    return res
  }

  list() {
    return this.allergies
  }

  allergicTo(allergen) {
    if(this.allergies.includes(allergen)){
      return true
    } else {
      return false
    }
  }
}
